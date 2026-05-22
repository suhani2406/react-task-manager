import { useParams } from "react-router-dom";
import { colleges } from "../data";

function CollegeDetail() {
  const { id } = useParams();
  const college = colleges.find((item) => item.id === Number(id));

  if (!college) return <main className="container">College not found</main>;

  return (
    <main className="container">
      <section className="section">
        <h1>{college.name}</h1>
        <p>{college.location}</p>
        <p>⭐ {college.rating}</p>
      </section>

      <section className="section">
        <h2>Overview</h2>
        <p>{college.overview}</p>
        <p><b>Fees:</b> ₹{college.fees.toLocaleString()}</p>
      </section>

      <section className="section">
        <h2>Courses</h2>
        <div className="chips">
          {college.courses.map((course) => (
            <span key={course}>{course}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Placements</h2>
        <p>Placement Rate: {college.placementRate}%</p>
        <p>Average Package: {college.averagePackage} LPA</p>
      </section>

      <section className="section">
        <h2>Reviews</h2>
        <p>Students appreciate campus, faculty support, placements and course variety.</p>
      </section>
    </main>
  );
}

export default CollegeDetail;