import { useState } from "react";
import { colleges } from "../data";
import CollegeCard from "../components/CollegeCard";

function Predictor() {
  const [exam, setExam] = useState("JEE");
  const [rank, setRank] = useState("");
  const [results, setResults] = useState([]);

  const predict = () => {
    const output = colleges.filter(
      (college) => college.exam === exam && Number(rank) <= college.maxRank
    );

    setResults(output);
  };

  return (
    <main className="container">
      <h1>College Predictor</h1>
      <p className="subtitle">Enter exam and rank to get possible colleges.</p>

      <div className="filters">
        <select value={exam} onChange={(e) => setExam(e.target.value)}>
          <option value="JEE">JEE</option>
          <option value="VITEEE">VITEEE</option>
          <option value="SRMJEEE">SRMJEEE</option>
          <option value="MET">MET</option>
        </select>

        <input
          type="number"
          placeholder="Enter rank"
          value={rank}
          onChange={(e) => setRank(e.target.value)}
        />

        <button onClick={predict}>Predict</button>
      </div>

      <section className="grid">
        {results.map((college) => (
          <CollegeCard key={college.id} college={college} />
        ))}
      </section>
    </main>
  );
}

export default Predictor;