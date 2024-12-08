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
  borrowHistory: {
    type: [{ type: Schema.Types.ObjectId, ref: "Borrow" }],
    default: [],
  },
});

export default model<Borrower>("Borrower", BorrowerSchema);
