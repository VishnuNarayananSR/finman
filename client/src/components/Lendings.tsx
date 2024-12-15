import { useQuery } from "react-query";
import { getBorrowers } from "../services/borrowerService";

const Lendings = () => {
  const { isLoading, error, data } = useQuery({
    queryFn: getBorrowers,
    queryKey: ["borrowers"],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error instanceof Error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-full">
      {data?.borrowers.map((borrower: any) => {
        const { _id, name, amountOwed } = borrower;
        return <></>;
        // list the
      })}
    </div>
  );
};

export default Lendings;
