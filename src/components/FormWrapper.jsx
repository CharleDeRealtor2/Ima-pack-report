import React, { useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

export default function FormWrapper() {
  const [formData, setFormData] = useState({
    date: "",
    factory: "",
    machineNumber: "",
    productType: "",
    shift: "",
    hourlyReadings: [],
    issues: [],
    // Add more fields for Page2 and Page3 as needed
  });

  const [page, setPage] = useState(1);

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextPage = () => setPage(p => p + 1);
  const prevPage = () => setPage(p => p - 1);

  return (
    <div>
      {page === 1 && <Page1 data={formData} onChange={handleChange} />}
      {page === 2 && <Page2 data={formData} onChange={handleChange} />}
      {page === 3 && <Page3 data={formData} onChange={handleChange} />}

      <div style={{ marginTop: 20 }}>
        {page > 1 && <button onClick={prevPage}>Previous</button>}
        {page < 3 && <button onClick={nextPage}>Next</button>}
        {page === 3 && <button onClick={() => console.log(formData)}>Submit</button>}
      </div>
    </div>
  );
}
