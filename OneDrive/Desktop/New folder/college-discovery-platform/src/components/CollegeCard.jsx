import { Link } from "react-router-dom";

function CollegeCard({ college }) {
  const addToCompare = () => {
    const saved = JSON.parse(localStorage.getItem("compareColleges")) || [];

    if (saved.find((item) => item.id === college.id)) {
      alert("Already added");
      return;
    }

    if (saved.length >= 3) {
      alert("You can compare only 3 colleges");
      return;
    }

    localStorage.setItem("compareColleges", JSON.stringify([...saved, college]));
    alert("Added to compare");
  };

  return (
    <div className="card">
      <h2>{college.name}</h2>
      <p>{college.location}</p>
      <p>Fees: ₹{college.fees.toLocaleString()}</p>
      <p>Rating: ⭐ {college.rating}</p>
      <p>Placement: {college.placementRate}%</p>

      <div className="actions">
        <Link to={`/college/${college.id}`}>View Details</Link>
        <button onClick={addToCompare}>Compare</button>
      </div>
    </div>
  );
}

export default CollegeCard;