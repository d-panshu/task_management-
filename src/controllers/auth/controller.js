import User from "../../models/user/model.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async(req, res) => {
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
        email,
        password: hashedPassword
    });
    res.status(201).json({ message: "User registered successfully" });
}


export const login =async(req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if(!user){
        return  res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return  res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.cookie('token', token, { httpOnly: true });

    res.status(200).json({ message: "Login successful", token });       
};