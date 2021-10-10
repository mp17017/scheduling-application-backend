"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    autoIndex: false,
    retryWrites: false
};
var MONGO_USERNAME = process.env.MONGO_USERNAME || 'mp17017';
var MONGO_PASSWORD = process.env.MONGO_USERNAME || 'warzone2109';
var MONGO_HOST = process.env.MONGO_URL || "crudapp.gdbyv.mongodb.net/CrudApp";
var MONGO = {
    host: MONGO_HOST,
    password: MONGO_PASSWORD,
    username: MONGO_USERNAME,
    options: MONGO_OPTIONS,
    url: "mongodb+srv://mp17017:warzone2109@crudapp.gdbyv.mongodb.net/CrudApp?retryWrites=true&w=majority"
};
var SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'https://mp17017.github.io/scheduling-application-backend/';
var SERVER_PORT = process.env.SERVER_PORT || 80;
var SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};
var config = {
    mongo: MONGO,
    server: SERVER
};
exports.default = config;
