import apiClient from "./api";
import { Borrower } from "../../../src/types";
import { BorrowerGetResponse } from "../types";
export const getBorrowers = async () => {
  const { data } = await apiClient.get<BorrowerGetResponse>("/borrowers");
  return data;
};

export const createBorrower = async (borrower: Borrower) => {
  const { data } = await apiClient.post<Borrower>("/borrowers", borrower);
  return data;
};

export const updateBorrower = async (id: string, borrower: Borrower) => {
  const { data } = await apiClient.patch<Borrower>(
    `/borrowers/${id}`,
    borrower
  );
  return data;
};
