import jwt from "jsonwebtoken";

const createTokenAndSavCookie = (userId, res) => {
  const secretKey = process.env.JWT_TOKEN || "defaultSecretKey"; // Use a fallback
  const token = jwt.sign({ userId }, secretKey, { expiresIn: "10d" });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
};

export default createTokenAndSavCookie;
