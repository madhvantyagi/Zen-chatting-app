const mongoose = require("mongoose");
const DB = process.env.DB;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connection succesful`);
  })
  .catch((err) => {
    console.log(`this is err ${err}`);
  });
