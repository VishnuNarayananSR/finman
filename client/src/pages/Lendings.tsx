import { useQuery } from "react-query";
import { getBorrowers } from "../services/borrowerService";
import CurrencyItem from "../components/CurrencyItem";
import { EllipsisVeritcal } from "../assets/Icons";

const Lendings = () => {
  const { isLoading, error, data } = useQuery({
    queryFn: getBorrowers,
    queryKey: ["borrowers"],
  });

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error instanceof Error) {
    return <div className="text-center">{error.message}</div>;
  }

  return (
    <div className="flex flex-col h-full mx-4">
      <h1 className="m-4 text-3xl font-bold py-4">Lendings</h1>
      <div className="flex m-4 gap-4">
        <div className="flex flex-col w-1/2 gap-4 p-4">
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center rounded-lg p-4 shadow-medium gap-2 w-2/5 min-w-fit bg-primary text-foreground-50">
              <h2 className="text-lg font-bold">Total Receivable:</h2>
              <CurrencyItem amount={data?.summary || 0} />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="rounded-lg p-4 shadow-medium"
            />
          </div>
          {data?.borrowers?.map((borrower) => {
            const { _id, name, amountOwed } = borrower;
            return (
              <div
                key={_id}
                className="flex justify-between items-center rounded-lg p-6 shadow-medium"
              >
                {/* handle click to be implemented later. Mechanism to call  getBorrowHistory(_id) and show history component*/}
                <h2>{name}</h2>
                <div className="flex gap-2 items-center">
                  <span className="text-2xl font-bold">
                    <CurrencyItem amount={amountOwed} />
                  </span>
                  {/* <button className="rounded-lg bg-primary px-4 py-2 shadow text-foreground-50">
                    Edit
                  </button> */}
                  <EllipsisVeritcal />
                </div>
              </div>
            );
          })}
          {/* button to add new borrower */}
          <div className="flex justify-center">
            <button
              type="button"
              className="w-1/3 rounded-lg bg-primary p-4 shadow-medium text-foreground-50"
            >
              Add Borrower
            </button>
          </div>
        </div>

        <div className="w-1/2 border rounded-xl">
          {/* Placeholder - Select a borrower to view their history */}
        </div>
      </div>
    </div>
  );
};

export default Lendings;
