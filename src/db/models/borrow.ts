import { model, Schema } from "mongoose";
import { Borrow } from "../../types";

const BorrowSchema = new Schema<Borrow>({
  date: {
    type: Date,
    default: Date.now,
  },
  amount: {
    type: Number,
    required: true,
  },
  type: {
    type: Number,
    required: true,
  },
});

export default model<Borrow>("Borrow", BorrowSchema);
