export enum TransferType {
  Borrow,
  Settle,
}

export type Borrow = {
  date: Date;
  amount: number;
  type: TransferType;
};

export type Borrower = {
  name: string;
  amountOwed: number;
  avatar: string | null;
  borrowHistory?: Borrow[];
};
