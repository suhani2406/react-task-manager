import { useEffect, useState } from "react";

function Compare() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("compareColleges")) || []);
  }, []);

  const clearCompare = () => {
    localStorage.removeItem("compareColleges");
    setItems([]);
  };

  return (
    <main className="container">
      <h1>Compare Colleges</h1>

      {items.length < 2 && <p>Add at least 2 colleges from the listing page.</p>}

      {items.length >= 2 && (
        <>
          <table>
            <thead>
              <tr>
                <th>Factor</th>
                {items.map((college) => (
                  <th key={college.id}>{college.name}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Location</td>
                {items.map((c) => <td key={c.id}>{c.location}</td>)}
              </tr>
              <tr>
                <td>Fees</td>
                {items.map((c) => <td key={c.id}>₹{c.fees.toLocaleString()}</td>)}
              </tr>
              <tr>
                <td>Rating</td>
                {items.map((c) => <td key={c.id}>{c.rating}</td>)}
              </tr>
              <tr>
                <td>Placement %</td>
                {items.map((c) => <td key={c.id}>{c.placementRate}%</td>)}
              </tr>
              <tr>
                <td>Average Package</td>
                {items.map((c) => <td key={c.id}>{c.averagePackage} LPA</td>)}
              </tr>
            </tbody>
          </table>

          <button onClick={clearCompare}>Clear Compare</button>
        </>
      )}
    </main>
  );
}

export default Compare;