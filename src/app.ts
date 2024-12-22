import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";


import session from '.express-session';
import ConnectMongoDB from 'connect-mongodb-session';

const MongoDBStore = connectMongoDB(session){
    const store = new MongoDBStore({
        url: String(process.env,MONGO_URL),
        collection: "sessions",    //mongo collection
    })
}



// console.log("_dirname:", __dirname);

/** 1-entrance */
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));
/** 2-sessions */
app.use(session({
    secret: String(process.env.SESSION_SECRET),
    cookie: {
        maxAge:1000 *3600 * 3, //3hours
    },
    store:store,
    resave:true,
    saveUninitialized: true,  //save uninitialized sessions to the store
}))

/** 3-views */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/** 4-routers */

app.use("/admin", routerAdmin); //SSR: EJS
app.use("/", router); //SPA, REACT

export default app;
