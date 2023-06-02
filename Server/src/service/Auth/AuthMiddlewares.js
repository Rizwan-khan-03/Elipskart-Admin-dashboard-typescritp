const jwt = require("jsonwebtoken");
const logger = require("../../utils/logger");
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) 
      {
        res.status(403).send("Token is not valid!");
      }else{
        req.user = user;
        next();
      }
    });
  } else {
    return res.status(401).send("You are not authenticated!");
  }
};
const verifyTokenAndAuthorization = (req, res, next) => {

  verifyToken(req, res, () => {
    const userIdFromBody = req.body.id;
    if (req.user && req.user.id === userIdFromBody) {
      next();
    } else {
      res.status(403).send("You are not allowed to do that!");
    }
  });
};
const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).send("You are not alowed to do that!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};