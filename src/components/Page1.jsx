import React from "react";

const times = [
  "7:00 - 8:00", "8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00",
  "12:00 - 1:00", "1:00 - 2:00", "2:00 - 3:00", "3:00 - 4:00", "4:00 - 5:00",
  "5:00 - 6:00", "6:00 - 7:00"
];

export default function Page1({ data, onChange }) {
  const handleHourlyChange = (idx, field, value) => {
    const newReadings = [...(data.hourlyReadings || [])];
    if (!newReadings[idx]) newReadings[idx] = {};
    newReadings[idx][field] = value;
    onChange("hourlyReadings", newReadings);
  };

  const handleIssueChange = (idx, field, value) => {
    const newIssues = [...(data.issues || [])];
    if (!newIssues[idx]) newIssues[idx] = {};
    newIssues[idx][field] = value;
    onChange("issues", newIssues);
  };

  return (
    <div className="container">
      <h1 className="text-center text-blue-800 uppercase">Promasidor Nigeria Limited</h1>
      <p className="text-center text-sm text-gray-600">Quality Food Products</p>

      <div style={{ backgroundColor: "#2563eb", color: "white", padding: 8, fontWeight: "bold", textAlign: "center", borderRadius: 4, marginBottom: 20 }}>
        IMA Pack Report <br />
        <small>Document No: PNG-FSMS-ONGAPRD-FRM-02</small>
      </div>

      <form onSubmit={e => e.preventDefault()}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
          <div>
            <label>Date *</label>
            <input
              type="date"
              value={data?.date || ""}
              onChange={e => onChange("date", e.target.value)}
              required
            />
          </div>
          <div>
            <label>Factory *</label>
            <select
              value={data?.factory || ""}
              onChange={e => onChange("factory", e.target.value)}
              required
            >
              <option value="">Please Select</option>
              <option value="Onga 1">Onga 1</option>
              <option value="Onga 2">Onga 2</option>
              <option value="Onga 3">Onga 3</option>
              <option value="Onga 4">Onga 4</option>
              <option value="Onga 5">Onga 5</option>
            </select>
          </div>
          <div>
            <label>Machine Number *</label>
            <input
              type="text"
              value={data.machineNumber || ""}
              onChange={e => onChange("machineNumber", e.target.value)}
              required
            />
          </div>
          <div>
            <label>Product Type</label>
            <select
              value={data.productType || ""}
              onChange={e => onChange("productType", e.target.value)}
            >
              <option value="">Please Select</option>
              <option value="Beef">Beef</option>
              <option value="Chicken">Chicken</option>
            </select>
          </div>
          <div>
            <label>Shift *</label>
            <select
              value={data.shift || ""}
              onChange={e => onChange("shift", e.target.value)}
              required
            >
              <option value="">Please Select</option>
              <option value="Day A">Day A</option>
              <option value="Day B">Day B</option>
              <option value="Night A">Night A</option>
              <option value="Night B">Night B</option>
            </select>
          </div>
        </div>

        <h2>Machine Hourly Reading, Machine Speed And Cube Weight (Hourly) *</h2>
        <div style={{ overflowX: "auto", marginBottom: 20 }}>
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Machine Counter</th>
                <th>Runtime (Minutes)</th>
                <th>Machine Speed</th>
                <th>Average Weight Before Machine Adjustment</th>
                <th>Average Weight After Machine Adjustment</th>
              </tr>
            </thead>
            <tbody>
              {times.map((time, idx) => (
                <tr key={idx}>
                  <td>{time}</td>
                  {["machineCounter", "runtime", "machineSpeed", "weightBefore", "weightAfter"].map((field) => (
                    <td key={field}>
                      <input
                        type="text"
                        value={data.hourlyReadings?.[idx]?.[field] || ""}
                        onChange={e => handleHourlyChange(idx, field, e.target.value)}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Issues</h2>
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Description Of Issues</th>
                <th>What Was Done</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Total Downtime</th>
                <th>Further Repair Required (Yes/No)</th>
                <th>Comment</th>
                <th>Technician Name</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(30)].map((_, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  {[
                    "description", "whatWasDone", "startTime", "endTime",
                    "totalDowntime", "repairRequired", "comment", "technicianName"
                  ].map(field => (
                    <td key={field}>
                      <input
                        type="text"
                        value={data.issues?.[idx]?.[field] || ""}
                        onChange={e => handleIssueChange(idx, field, e.target.value)}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
}
