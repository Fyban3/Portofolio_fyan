function isLoggedIn(req, res, next) {
    if (req.session && req.session.username) {
      return next();
    }
    res.status(401).json({ error: "Unauthorized, please login first" });
  }
  
  module.exports = { isLoggedIn };