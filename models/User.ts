import mongoose, { Document, Model } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  bio: String,
  avatar: String,
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.models.User || mongoose.model("User", UserSchema);

// export interface IUser extends Document {
//   username: string;
//   email: string;
//   password: string;
// }

// const UserSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: [true, 'Please provide a username'],
//     unique: true,
//   },
//   email: {
//     type: String,
//     required: [true, 'Please provide an email'],
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: [true, 'Please provide a password'],
//   },
// }, { timestamps: true });

// const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

// export default User;
