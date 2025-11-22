const { loginMock, registerMock } = require("../api/authApi");

exports.login = (req, res) => {
  const { email, password } = req.body;
  const response = loginMock(email, password);
  res.json(response);
};

exports.register = (req, res) => {
  const { email, password } = req.body;
  const response = registerMock(email, password);
  res.json(response);
};
