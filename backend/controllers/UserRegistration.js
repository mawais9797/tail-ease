import Users from "../models/usersModel.js";
import generateToken from "../utils/generateToken.js";

export const RegisterUser = async (req, res) => {
  try {
    const { name, email, phoneNo, password } = req.body;
    const userExist = await Users.findOne({ email });
    if (userExist) {
      res.status(400).json({
        message: "user Already Exist",
      });
      throw new Error("User already Exist...");
    }
    const newUser = await Users.create({
      name,
      email,
      phoneNo,
      password,
    });
    if (newUser) {
      console.log("NewUser= ", newUser);
      res.status(201).json({
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        phoneNo: newUser.phoneNo,

        token: generateToken(newUser._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
    console.log("MY New User= ", newUser);
    res.json(newUser);
  } catch (error) {
    console.log("Registration Error: ", error);
  }
};

export const userLogin = async (req, res) => {
  console.log("i am UserLogin");
  try {
    const { phoneNo, password } = req.body;
    const user = await Users.findOne({ phoneNo });
    if (user && user.matchPassword(password)) {
      res.status(200).json({
        id: user._id,
        name: user.name,
        phoneNo: user.phoneNo,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    console.log("LoginError= ", error);
  }
};
