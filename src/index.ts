import express from "express";
import cors from "cors";
import { MONGODB_URI, PORT } from "./constants";
import mongoose from "mongoose";
import borrowersRouter from "./routes/borrowers";
import borrowRouter from "./routes/borrow";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/borrowers", borrowersRouter);
app.use("/api/borrow", borrowRouter);

main()
  .then(() => console.log(`Server is running on port ${PORT}`))
  .catch((err) => console.error(err));

async function main() {
  await app.listen(PORT);
  await mongoose.connect(MONGODB_URI);
}
