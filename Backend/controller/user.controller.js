import User from "../models/user.model.js";
import createTokenAndSavCookie from "../jwt/generateToken.js"
import bcrypt from "bcryptjs"
export const signup = async (req,res) => {
try {
  const { name, email, password, confirmpassword } = req.body;
  if (password !== confirmpassword) {
    return res.status(400).json({message:"Password do not match",newUser})
  }
  const user = await User.findOne({email})
  if (user) {
    return res.status(400).json({message:"Email already exists ",})
  }
  // Hashing the password
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await new User({
    name,
    email,
    password :hashedPassword,
  });
  await newUser
    .save()
  if (newUser) {
    createTokenAndSavCookie(newUser._id,res)
    res.status(201).json({message:"User registered successfully", user: {
      _id: newUser.id,
      name: newUser.name,
      email:newUser.email,
  }})
    }
   
 
} catch (error) {
  console.log(error)
  res.status(500).json({message:"server error"})
}
}



export const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })
    const isMatch = await bcrypt.compare(password, user.password)
    
    if (!user||!isMatch) {
      return res.status(404).json({ message: "Invalid User or Pssword" })
   
    }
    createTokenAndSavCookie(User._id,res)
    res.status(201).json({
      message: "User logged in successfully", user: {
        _id: user.id,
        name: user.name,
        email:user.email,
    }})

  } catch (error) {
    console.log(error)
  res.status(500).json({message:"server error"})
  }
  
}


export const logout = async(req, res) => {
  try {
    res.clearCookie('jwt');
    res.status(200).json({message:"User logged out successfully"})
  } catch (error) {
    console.log(error)
    res.status(500).json({message:"server error"})
  }
}

export const getUserProfile = async (req, res)=>{
  try {
    const loggedInUser = req.User._id
    const allUsers = await User.find({_id:{$ne :loggedInUser}}).select("-password")
    res.status(201).json({allUsers})
  } catch (error) {
    console.log(error)
    res.status(500).json({message:"Server error"})
  }
}