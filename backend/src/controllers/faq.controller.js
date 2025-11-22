const { getFaqMock } = require("../api/faqApi");

exports.obtenerFaq = (req, res) => {
  const faqs = getFaqMock();
  res.json(faqs);
};
