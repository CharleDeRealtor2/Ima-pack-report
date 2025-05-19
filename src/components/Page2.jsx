import React from "react";

export default function Page2({ data, onChange }) {
  // Assuming Page 2 contains tables similar to your screenshot 2,
  // here’s a structure based on your descriptions.

  const handleTableChange = (section, idx, field, value) => {
    const updatedSection = [...(data[section] || [])];
    if (!updatedSection[idx]) updatedSection[idx] = {};
    updatedSection[idx][field] = value;
    onChange(section, updatedSection);
  };

  return (
    <div className="container">
      <h2>Page 2: Additional Report Data</h2>

      {/* Example Table 1 */}
      <h3>Production Data</h3>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Output (Kg)</th>
            <th>Rejects (Kg)</th>
            <th>Reason for Reject</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(12)].map((_, idx) => (
            <tr key={idx}>
              <td>{`Hour ${idx + 1}`}</td>
              <td>
                <input
                  type="text"
                  value={data.productionData?.[idx]?.output || ""}
                  onChange={e => handleTableChange("productionData", idx, "output", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.productionData?.[idx]?.rejects || ""}
                  onChange={e => handleTableChange("productionData", idx, "rejects", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={data.productionData?.[idx]?.rejectReason || ""}
                  onChange={e => handleTableChange("productionData", idx, "rejectReason", e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add more tables or sections here based on your screenshot 2 */}
    </div>
  );
}
