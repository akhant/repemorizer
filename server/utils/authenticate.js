import jwt from 'jsonwebtoken'
import User from '../models/user'

export default function (req, res, next){
const header = req.headers.authorization
const token = header.split(" ")[1];

if (token) {
    
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            
            res.status(401).send({ error: "invalid token"})
        } else {
           
            User.findOne({ email: decoded.email }).then(user => {
                req.body.user = user
            }).then((u) => {
                
                next()
            })
            
        }
    })
} else {
    
    res.status(401).send({ error: "No token"})
}

}