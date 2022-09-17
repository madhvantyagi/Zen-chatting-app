const mongoose = require("mongoose");
const DB =
  "mongodb+srv://zenHotDamn:feng-shui@cluster0.pzvvlgw.mongodb.net/?retryWrites=true&w=majority";
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
