const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { authenticateToken } = require("./userAuth");

//sign up
router.post("/sign-up", async (req, res) => {
    try {
        const { username, email, password, address } = req.body;

        //check username length is more than 3
        if (username.length < 4) {
            return res
                .status(400)
                .json({ message: "Username length should be greater than 3" });
        }

        //check username already exists ?
        const existingUsername = await User.findOne({ username: username });
        if (existingUsername) {
            return res
                .status(400)
                .json({ message: "Username aldready exists" });
        }

        //check email already exists ?
        const existingEmail = await User.findOne({ email: email });
        if (existingEmail) {
            return res
                .status(400)
                .json({ message: "Email aldready exists" });
        }

        //check password's Length
        if (password.length <= 5) {
            return res
                .status(400)
                .json({ message: "password's length should be greater than 5" });
        }
        const hashPass = await bcrypt.hash(password, 10);

        const newUser = new User({
            username: username,
            email: email,
            password: hashPass,
            address: address,
        });
        await newUser.save();
        return res.status(200).json({ message: "SingUP Successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

// sign-in
router.post("/sign-in", async (req, res) => {
    try {
        const { username, password } = req.body;

        // 1. Find user
        const existingUser = await User.findOne({ username });
        if (!existingUser) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // 2. Compare password (use await, not callback)
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // 3. Generate JWT token
        const token = jwt.sign(
            {
                id: existingUser._id,
                username: existingUser.username,
                role: existingUser.role,
            },
            process.env.JWT_SECRET,
            { expiresIn: "30d" }
        );

        // 4. Send success response
        return res.status(200).json({
            id: existingUser._id,
            role: existingUser.role,
            token: token,
        });

    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});


//get user infromaton
router.get("/get-user-information", authenticateToken, async (req, res) => {
    try {
        const userId = req.user.id;
        const data = await User.findById(userId).select("-password");
        return res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

//update address
router.put("/update-address", authenticateToken, async (req, res) => {
    try {
        const { id } = req.headers;
        const { address } = req.body;
        await User.findByIdAndUpdate(id, { address: address });
        return res.status(200).json({ message: "Address update successfull" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;