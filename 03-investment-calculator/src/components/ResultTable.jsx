import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function ResultTable({ input }) {
  const calculatedData = calculateInvestmentResults(input);
  const initialBalance =
    calculatedData[0].valueEndOfYear -
    calculatedData[0].interest -
    calculatedData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {calculatedData.map((item) => {
          const totalInterest =
            item.valueEndOfYear -
            item.annualInvestment * item.year -
            initialBalance;
          const investedCapital = item.valueEndOfYear - totalInterest;
          return (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
