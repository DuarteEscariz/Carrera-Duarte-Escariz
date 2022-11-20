function getHello(req, res) {
    res.status(200).send({
      msg: "Has llegado a controllers",
    });
  }
  
  module.exports = {
    getHello,
  };
  