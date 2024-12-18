const CurrencyItem = ({
  amount,
  currencyType = "₹",
}: {
  amount: number;
  currencyType?: string;
}) => {
  return (
    <span className="text-2xl font-bold">
      <text>
        {amount.toFixed(2)} {currencyType}
      </text>
    </span>
  );
};

export default CurrencyItem;
