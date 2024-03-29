const handleProfile = (req, res, db , bcrypt) => {
    const { id } = req.params;
    // let found = false;
    db.select("*")
      .from("users")
      // in ES6 id :id   is  id because property as the same
      .where({ id })
      .then(user => {
        // grap array of the current user
        if (user.length) {
          res.json(user[0]);
        } else {
          res.status(400).json("Not found");
        }
      })
      .catch(err => res.status(400).json("error getting user"));
  }




module.exports = {
    handleProfile : handleProfile
  };