exports.verifyToken = function (accessToken) {
  // expires In -> in env
  // expirationTime = (new Date().getTime() + expiresIn * 1000)
  // new Date().getTime() > tokenExpirationTime) ? -> expired
  // refreshToken
  // return newAccessToken -> all req go through this verification process -> next
};
