import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controller/restaurant.controller";

/*RESTAURANT */
routerAdmin.get("/", restaurantController.goHome);
routerAdmin
  .get("/Login", restaurantController.getLogin)
  .post("/Login", restaurantController.processLogin);

//brouser post methodlarni qabul qila olmaydi ,post => mutation method

routerAdmin
  .get("/signup", restaurantController.getSignup)
  .post("/signup", restaurantController.processSignup);

/*PRODUCT */
/*USER */
export default routerAdmin;
