const TransactionHistory = ({ items = [] }) => {
  // Para birimi sembollerini ekleme
  const formatAmount = (amount) => {
    return `${parseFloat(amount).toFixed(2)}`;
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          color: "#2c3e50",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Transaction History
      </h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: "#f8f9fa",
            }}
          >
            <th
              style={{
                padding: "12px",
                textAlign: "left",
                borderBottom: "1px solid #ddd",
              }}
            >
              Type
            </th>
            <th
              style={{
                padding: "12px",
                textAlign: "left",
                borderBottom: "1px solid #ddd",
              }}
            >
              Amount
            </th>
            <th
              style={{
                padding: "12px",
                textAlign: "left",
                borderBottom: "1px solid #ddd",
              }}
            >
              Currency
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr
              key={item.id}
              style={{
                borderBottom: "1px solid #eee",
                ":hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              <td
                style={{
                  padding: "12px",
                  color: getTypeColor(item.type),
                }}
              >
                {item.type}
              </td>
              <td style={{ padding: "12px" }}>
                {formatAmount(item.amount, item.currency)}
              </td>
              <td style={{ padding: "12px" }}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// İşlem türüne göre renk belirleme
const getTypeColor = (type) => {
  const colors = {
    invoice: "#2e7d32", // Yeşil
    payment: "#1565c0", // Mavi
    withdrawal: "#c62828", // Kırmızı
    deposit: "#5e35b1", // Mor
  };
  return colors[type] || "#000";
};

export default TransactionHistory;
