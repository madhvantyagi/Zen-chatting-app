const mongoose=require('mongoose')
// const dotenv=require('dotenv')
// dotenv.config({path:'../config.env'})
const DB="mongodb+srv://madhvantyagi01:Madhav@cluster0.phda5fr.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(DB,{
    useNewUrlParser:true,
    // useCreateIndex:true,
    useUnifiedTopology:true,
    // useFindAndModify:false
}).then(()=>{
    console.log(`connection succesful`);
}).catch((err)=>{
    console.log(`this is err ${err}`);
})

