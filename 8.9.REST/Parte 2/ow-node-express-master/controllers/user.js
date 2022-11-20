const bcryptjs = require('bcryptjs');
const { JsonWebTokenError } = require('jsonwebtoken');
const User =require("../models/user");
async function register(req,res){
    const user=new User(rec.body);
    const {email, password} = req.body;

    try {
        if(!email) throw {msg: "Please enter email"};
        if(!password) throw {msg: "Please enter password"};

        const salt=bcryptjs.genSaltSync(10);
        user.password = await bcryptjs.hash(password,salt);
        user.save();
        res.status(200).send(user);
        const foundEmail = await User.findOne({email})
        if(foundEmail) throw {msg:"El email ya esta en uso"};
    } catch (error) {
        
    }
}

async function login(req, res) {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user) throw {msg:"Error"};

        const passwordSuccess = await bcrypt.compare(password, user.password);
        if(!passwordSuccess) throw {msg:"Error"};
        res.status(200).send({token:jwt.createToken(user,"12h")});
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
        register,
        login,
}
