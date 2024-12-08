import { Router } from "express";
import Borrower from "../db/models/borrower";
import { Borrow as BorrowType, TransferType } from "../types";
import mongoose, { Document } from "mongoose";
import Borrow from "../db/models/borrow";

const borrowRouter = Router();

borrowRouter.get("/:borrowerId", async (req, res) => {
  const { borrowerId } = req.params;
  const { page: pageQuery, limit: limitQuery } = req.query;
  const page = Number(pageQuery) || 1;
  const limit = Number(limitQuery) || 10;
  const skip = (page - 1) * limit;
  try {
    const borrowings = await Borrower.findById(borrowerId, {
      borrowHistory: 1,
    })
      .populate({
        path: "borrowHistory",
        options: {
          sort: { date: -1 },
        },
      })
      .skip(skip)
      .limit(limit);
    res.status(200).json({ borrowings });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

borrowRouter.post("/:id", async (req, res) => {
  const { id } = req.params;
  const { amount, type } = req.body;
  const session = await mongoose.startSession();
  try {
    const newBorrow = await session.withTransaction(async () => {
      const borrower = await Borrower.findById(id).session(session);
      if (!borrower) {
        throw new Error("Borrower not found");
      }
      const [newBorrow] = await Borrow.create([{ amount, type }], { session });
      if (type === TransferType.Borrow) {
        borrower.amountOwed += amount;
      } else {
        borrower.amountOwed -= amount;
      }
      borrower.borrowHistory.push(newBorrow._id);
      await borrower.save({ session });
      return newBorrow;
    });
    res.status(201).json({ borrow: newBorrow });
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  } finally {
    await session.endSession();
  }
});

export default borrowRouter;
