export type BorrowerResponse = {
  _id: string;
  name: string;
  amountOwed: number;
};

export type BorrowerGetResponse = {
  borrowers: BorrowerResponse[];
  summary: number;
};
