const mongoose = require("mongoose");
const DB =
  "mongodb+srv://Nishant:Madhav@cluster0.phda5fr.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex:true,
    useUnifiedTopology: true,
    // useFindAndModify:false
  })
  .then(() => {
    console.log(`connection succesful`);
  })
  .catch((err) => {
    console.log(`this is err ${err}`);
  });
