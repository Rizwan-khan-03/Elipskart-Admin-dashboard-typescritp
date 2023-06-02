const jwtToken = require("jsonwebtoken");

const getToken = async ({ id, isAdmin }) => {
  try {
    const token = await new Promise((resolve, reject) => {
      jwtToken.sign(
        {
          id: id,
          isAdmin: isAdmin,
        },
        process.env.JWT_SEC,
        { expiresIn: "365d" },
        (err, token) => {
          if (err) {
            reject(err);
          } else {
            resolve(token); 
          }
        }
      );
    });
    return token;
  } catch (error) {
    console.error("Error creating token:", error);
    return null;
  }
};

module.exports = getToken;
