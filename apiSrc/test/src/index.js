async function temp(req, res) {
  return res.send({ message: `Hello, you just parsed the request bodyyy!!!!`});
}

module.exports = temp;