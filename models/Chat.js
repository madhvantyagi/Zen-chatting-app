import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Chat = new Schema({
    messages: {
        type: Array
    }
});