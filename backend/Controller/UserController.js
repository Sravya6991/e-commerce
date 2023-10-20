const db = require('../database');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config');
const ObjectId = require('mongodb').ObjectId;

const signup = async (req, res) => {
    if(!req.body.userName || !req.body.password || !req.body.email.includes('@') || !req.body.phone || !req.body.address) {
        res.send({auth: false, token: "Not valid credentials"})
    }

    const existingUser = await db.getDb().collection('users').findOne({email: req.body.email});
    if(existingUser) {
        res.send({auth: false, token: "User already exists"})
    }

    const hashPassword = bcrypt.hashSync(req.body.password, 8);

    let user = {
        userName: req.body.userName,
        email: req.body.email,
        password: hashPassword,
        phone: req.body.phone,
        address: req.body.address
    }
    await db.getDb().collection('users').insertOne(user, (err, result) => {
        if(err) throw err.message;
        res.send("registered successfully");
    })
}

const login = async (req, res) => {
    const existingUser = await db.getDb().collection('users').findOne({email: req.body.email});
    if(!existingUser) {
        res.send({auth: false, token: "Invalid credentials"});
    }

    let passwordEqual = await bcrypt.compareSync(req.body.password, existingUser.password);
    if(passwordEqual){
        const tokenId = jwt.sign({id: existingUser._id}, config.secret, {expiresIn: 86400});
        res.send({auth: true, token: tokenId});
    }
}


const userInfo = (req, res) => {
    const token = req.headers["x-access-token"];
    if(!token) {
        res.send({auth: false, token: "Not a valid token"})
    }
    jwt.verify(token, config.secret, async(err, user) => {
        if(err) res.send({auth: false, token: "Invalid credentials"});
        try{
            const response = await db.getDb().collection('users').findOne({_id: new ObjectId(user.id)})
            console.log(response)
            res.send(response)
        } catch(err) {
            res.send(err.message)
        }
       
    })
}



module.exports = {
    signup: signup,
    login: login,
    userInfo: userInfo
}