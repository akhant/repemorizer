import jwt from "jsonwebtoken";
import User from "../models/user";

export default function(req, res, next) {

  const header = req.headers.authorization;
  const token = header.split(" ")[1];

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).send({ error: "invalid token" });
      } else {
        User.findOne({ email: decoded.email })
          .then(user => {
            req.body.user = user;
          })
          .then(u => {
            next();
          });
      }
    });
  } else {
    res.status(401).send({ error: "No token" });
  }
}

/* body:
    { text: 'go',
      user:
       { confirmed: false,
         confirmationToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjZANi5jb20iLCJ1c2VybmFtZSI6IjYiLCJjb25maXJtZWQiOmZhbHNlLCJ1c2VySWQiOiI1YmRhMDBiMTFjZDVmZjBlMGM4YTMwZGUiLCJpYXQiOjE1NDEwMTM2ODF9.ODcKk7By5h4jxd4TmjSl8zUDm1c-jdCRWx5yNpFggQE',
         _id: 5bda00b11cd5ff0e0c8a30de,
         email: '6@6.com',
         username: '6',
         passwordHash:
          '$2b$10$BHnhWTo.GM0toHNZnuD7L.bApS0YIDNt5Fmw9Mte/wei/hv9Z6hKe',
         __v: 0 } } */