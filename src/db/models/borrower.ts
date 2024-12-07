import { model, Schema } from "mongoose";
import { Borrower } from "../../types";

const BorrowerSchema = new Schema<Borrower>({
  name: {
    type: String,
    required: true,
  },
  amountOwed: {
    type: Number,
    default: 0,
  },
  avatar: {
    type: String,
    default: null,
  },
  borrowHistory: {
    type: [{ type: Schema.Types.ObjectId, ref: "Borrow" }],
  },
});

export default model<Borrower>("Borrower", BorrowerSchema);
