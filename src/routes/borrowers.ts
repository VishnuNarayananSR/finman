import { Router } from "express";
import Borrower from "../db/models/borrower";

const borrowersRouter = Router();

borrowersRouter.get("/", async (req, res) => {
  try {
    const borrowers = await Borrower.find();
    res.status(200).json({ borrowers });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

borrowersRouter.post("/", async (req, res) => {
  try {
    const { name, amountOwed } = req.body;
    const newBorrower = await Borrower.create({ name, amountOwed });
    res.status(201).json({ borrower: newBorrower });
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
});

borrowersRouter.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, amountOwed } = req.body;
    const updatedBorrower = await Borrower.findByIdAndUpdate(
      id,
      { name, amountOwed },
      { runValidators: true }
    );
    res.status(200).json({ borrower: updatedBorrower });
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
});

export default borrowersRouter;
