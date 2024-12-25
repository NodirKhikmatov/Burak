import express from "express";
import restaurantController from "./controller/restaurant.controller";
import productController from "./controller/product.controller";
const routerAdmin = express.Router();
/*RESTAURANT */
routerAdmin.get("/", restaurantController.goHome);
routerAdmin
  .get("/Login", restaurantController.getLogin)
  .post("/Login", restaurantController.processLogin);

//brouser post methodlarni qabul qila olmaydi ,post => mutation method

routerAdmin
  .get("/signup", restaurantController.getSignup)
  .post("/signup", restaurantController.processSignup);

routerAdmin.get("/logout", restaurantController.logout);

routerAdmin.get("/check-me", restaurantController.checkAuthSession);
/*PRODUCT */

routerAdmin.get("/product/all", productController.getAllProducts);
routerAdmin.post("/product/create", productController.createNewProduct);
routerAdmin.post("/product/:id", productController.updateChosenProduct);  
/*USER */
export default routerAdmin;
