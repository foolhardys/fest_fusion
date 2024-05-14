import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: [true, "Clerk ID is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
  photo: {
    type: String,
    required: [true, "Photo is required"],
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  }
});

const User = models?.User || model("User", UserSchema);

export default User;