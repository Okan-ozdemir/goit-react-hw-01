// import React from "react";
// import "./TransactionHistory.module.css"; // Stiller için CSS dosyası

// const TransactionHistory = () => {
//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>Type</th>
//             <th>Amount</th>
//             <th>Currency</th>
//           </tr>
//         </thead>

//         <tbody>
//           <tr>
//             <td>Invoice</td>
//             <td>125</td>
//             <td>USD</td>
//           </tr>
//           <tr>
//             <td>Withdrawal</td>
//             <td>85</td>
//             <td>USD</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TransactionHistory;
import React from "react";
import transactionCss from "./Transaction.module.css";

const TransactionHistory = ({ items }) => {
  console.log(items);
  return (
    <table className={transactionCss.deneme}>
      <thead>
        <tr className={transactionCss.title}>
          <th>type</th>
          <th>amount</th>
          <th>currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id.toUpperCase()}>
            <td>{item.type.toUpperCase()}</td>
            <td>{item.amount.toUpperCase()}</td>
            <td>{item.currency.toUpperCase()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
