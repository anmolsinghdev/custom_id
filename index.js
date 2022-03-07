const express = require("express");
const app = express();
const port = 3000;
require("./dbConnect");
const userModel = require("./UserSchema");
app.use(express.json());

app.post("/user/create", async (req, res, next) => {
  const { name, email } = req.body;

  const data = await userModel.create({
    name: name,
    email: email,
  });

  res.json({
    success: true,
    data: data,
  });
});
app.post("/user/find", async (req, res, next) => {
  const { name, email, id } = req.body;
  const fixid = "5099803df3f4948bd2f92856";
  const data = await userModel.exists({ _id: fixid });

  console.log(data);
  if (data === null) {
    const data2 = await userModel.create({
      _id: id,
      name: name,
      email: email,
    });
    res.json({
      success: true,
      data2: data2,
    });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
