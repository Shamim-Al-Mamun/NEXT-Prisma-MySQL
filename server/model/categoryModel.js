import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  _id: {
    type: Number,
    //index: true,
    default: 1001,
    //auto: true,     #auto increment
  },
  name: {
    type: String,
    required: [true, "Category Name is required"],
    maxlength: [100, "Category name must be under 100 charecter long!"],
    // trim: true,          #Remove white spaces
  },
  user: {
    type: mongoose.Schema.ObjectID,
    ref: "User",
    // required:true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Room || mongoose.model("Room", roomSchema);
