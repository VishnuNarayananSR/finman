import express from "express";
import cors from "cors";
import { MONGODB_URI, PORT } from "./constants";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());

main()
  .then(() => console.log(`Server is running on port ${PORT}`))
  .catch((err) => console.error(err));

async function main() {
  await app.listen(PORT);
  await mongoose.connect(MONGODB_URI);
}
