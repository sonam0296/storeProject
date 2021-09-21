const { User } = require("../db/models/user")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

exports.isRegister = async (req, res) => {
    try {
        var fields = req.body;
        // check if email already exists
        if (fields.email ) {
            var checkEmail = await User.findOne({
                email: fields.email.toLowerCase(),
            });
            if (checkEmail) {
                res.status(201).json({message:"Email already exists."});
                return;
            }
        }
        // else {
            const user = await new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone,
                storeName: req.body.storeName,
                storeAddress: req.body.storeAddress,
                isAdmin: req.body.isAdmin
            })

            const salt = await bcrypt.genSalt(10)
            user.password = await bcrypt.hash(user.password, salt)

            user.save();
            res.status(200).json({ message: "User Added Successfully", user })
        // }
    } catch (error) {
        res.status(400).json({ message: "Something went wrong", error })
    }
}


exports.isLogin = async(req, res) => {
    try {
        const { email, password } = req.body;
        if (!(email && password)) {
            res.status(400).send("All fields are required");
        }
        const user = await User.findOne({email})
        if(user && (await bcrypt.compare(password, user.password))){
            const token = jwt.sign(
                {user_id: user._id, email},
                process.env.SECRET_TOKEN,
                {
                    expiresIn: '1D'
                }
            );
            user.token = token;
            res.status(200).json(user);
        }
        res.status(400).send("Invalid Credentials");
    } catch (error) {
        console.log(error)
    }
}

exports.getUsers = async(req, res) => {
    const user = await User.find()
    if (!user) {
        res.status(400).json({success: false})
    }
    res.status(200).json(user)

}

exports.getUserById = async(req, res) => {
    const user = await User.findById(req.params.id)
    if (!user) {
        res.status(400)
        .json({success: false,
            message: 'The user with given ID was not found'})
    }
    res.status(200).json(user)
}

// exports.getUserCount = async (req, res) => {
//     const userCount = await User.countDocuments({ count: 'count'})
//     if (!userCount) {
//         res.status(400).json({ success: false, message: "No User found!!" });
//     }
//     res.send({ count: userCount });
// }