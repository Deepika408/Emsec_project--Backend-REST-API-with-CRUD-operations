
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  task: {
    type: String,
  },
 is_completed:{
type: String,
 },
  end_date: {
    type: Date,
    default: Date.now,
  },
});

export  default  mongoose.model("user", userSchema,"user");