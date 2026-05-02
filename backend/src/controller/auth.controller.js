const userModel = require("../models/user.model.js")
const jwt = require("jsonwebtoken") // for creating jwt token
const bcrypt = require("bcryptjs") // for hashing password
async function registerUser (req, res){
    
    const {username, email, password, role = "user"} = req.body; // Destructuring the request body

    const isUserAlreadyExists = await userModel.findOne({
        $or: [ // $or operator in mongodb used to match documents where at least one condition is true
            {username},
            {email}
        ] 
    })

    if (isUserAlreadyExists){
        return res.status(400).json({
            message: "User already exists"
        })
    }

    const hash = await bcrypt.hash(password, 10) // 10 is the salt value and this line convert password into hash(random string)

    const user = await userModel.create({
        username,
        email,
        password: hash,  // storing hash in database
        role
    })

    const token = jwt.sign({ // creating jwt token
        id: user._id
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message: "User registered successfully",
        user : {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
        }

    })
}

module.exports = {registerUser}