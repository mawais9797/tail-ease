import Users from "../models/usersModel.js";

export const RegisterUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await Users.create({
      name,
      email,
      password,
    });
    console.log("MY New User= ", newUser);
    res.json(newUser);
  } catch (error) {
    console.log("Registration Error: ", error);
  }
};
