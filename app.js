import mongoose from "mongoose"
import express from 'express'
import UsersController from "./users/users-controller.js";
import cors from 'cors'
import SessionController from "./session-controller.js";
import session from 'express-session';
import {ReviewsController} from "./reviews/reviews-controller.js";
import {FavoritesController} from "./favorites/favorites-controller.js";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}

mongoose.connect('mongodb://localhost:27017/anidb', options);

const app = express();
app.use(cors(
    {
        credentials: true,
        origin: 'http://localhost:3000'
    }
))

app.use(session({
    secret: 'colud be anything',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.use(express.json())
UsersController(app)
ReviewsController(app)
FavoritesController(app)
SessionController(app)
app.listen(4000)