import { useState } from "react";
import { colleges } from "../data";
import CollegeCard from "../components/CollegeCard";

function Home() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [course, setCourse] = useState("");

  const filtered = colleges.filter((college) => {
    const matchesSearch = college.name.toLowerCase().includes(search.toLowerCase());
    const matchesLocation = location ? college.location === location : true;
    const matchesCourse = course ? college.courses.includes(course) : true;

    return matchesSearch && matchesLocation && matchesCourse;
  });

  return (
    <main className="container">
      <section className="hero">
        <h1>Discover Your Ideal College</h1>
        <p>Search, compare and predict colleges based on your profile and preferences.</p>

        <div className="filters">
          <input
            placeholder="Search college"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="">All Locations</option>
            <option value="Delhi">Delhi</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Chennai">Chennai</option>
            <option value="Noida">Noida</option>
            <option value="Karnataka">Karnataka</option>
          </select>

          <select value={course} onChange={(e) => setCourse(e.target.value)}>
            <option value="">All Courses</option>
            <option value="B.Tech CSE">B.Tech CSE</option>
            <option value="BCA">BCA</option>
            <option value="MBA">MBA</option>
          </select>
        </div>
      </section>

      <section className="grid">
        {filtered.map((college) => (
          <CollegeCard key={college.id} college={college} />
        ))}
      </section>
    </main>
  );
}

export default Home;