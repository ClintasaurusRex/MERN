const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization.split(" ") && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (err) {
      console.log(err);
      res.status(401);
      throw new Error("You are not authorized");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not aurthorized, NO TOKEN");
  }
});
module.exports = { protect };

// const jwt = require('jsonwebtoken');

// const AuthMiddleware = (req, res, next) => {
//     const token = req.headers['authorization'];

//     if (!token) {
//         return res.status(403).send({ message: 'No token provided!' });
//     }

//     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//         if (err) {
//             return res.status(401).send({ message: 'Unauthorized!' });
//         }
//         req.userId = decoded.id;
//         next();
//     });
// };

// module.exports = AuthMiddleware;
