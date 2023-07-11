const {
  userRoutes,
  mobileRoutes,
  CartRoutes,
  orderRoutes,
  groceryRoutes,
  fashionRoutes,
   buetyRoutes,
  electronicsRoutes,
  appliancesRoutes,
  paymentRoutes
} = require("../service/routesIndex");
const path = require("path");
const getBasePath = require("../../getBasePath");
const express = require('express');


module.exports = async (app) => {
  app.use("/api/user", userRoutes);
  app.use("/api/cart", CartRoutes);
  app.use("/api/order", orderRoutes);
  app.use("/api/product", mobileRoutes);
  app.use("/api/grocery", groceryRoutes);
  app.use("/api/fashion", fashionRoutes);
  app.use("/api/buety", buetyRoutes);
  app.use("/api/electronics", electronicsRoutes);
  app.use("/api/appliances", appliancesRoutes);
  app.use("/api/payment", paymentRoutes);
  app.use(express.static(path.join(__dirname, "../../Client/build")))
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../Client/build/index.html"));
  });
};
