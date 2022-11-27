import mongoose, { ObjectId, Schema } from "mongoose";

export interface IAdress {
  city?: string;
  street?: string;
  number?: number;
}

export interface IUser {
  id?: string;
  name?: string;
  phoneNumber1?: string;
  phoneNumber2?: string;
  adress?: ObjectId;
  email?: string;
}
const AdressSchema: Schema<IAdress> = new mongoose.Schema({
  city: { type: String },
  street: { type: String },
  number: { type: Number },
});

const UserSchema: Schema<IUser> = new mongoose.Schema({
  id: { type: String },
  name: { type: String },
  phoneNumber1: { type: String },
  phoneNumber2: { type: String },
  adress: { type: AdressSchema },
  email: { type: String },
});

const Adress = mongoose.model("Adress", AdressSchema);

const User = mongoose.model("User", UserSchema);

export default User;
