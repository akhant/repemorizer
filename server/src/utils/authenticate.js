import jwt from "jsonwebtoken";
import User from "../models/user";

export default function(req, res, next) {

  const header = req.headers.authorization;
  const token = header.split(" ")[1];

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(500).send({ message: "Invakid token", success: false });
      } else {
        User.findOne({ email: decoded.email })
          .then(user => {
            req.body.user = user;
            next()
          })
          
      }
    });
  } else {
    res.status(500).send({  message: "No token", success: false });
  }
}

