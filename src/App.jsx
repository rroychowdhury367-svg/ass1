import "./App.css";

// Header Component
function Header() {
  return (
    <header className="header">
      <h1>Rahul Roychowdhury</h1>
      <p>BCA Student | Web Developer | Programmer</p>
    </header>
  );
}

// Navigation Component
function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#education">Education</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

// About Component
function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>

      <p>
        Hello! My name is Rahul Roychowdhury. I am a BCA student
        interested in web development, programming and modern
        technologies.
      </p>

      <p>
        I enjoy creating websites and learning new programming
        languages and technologies. My goal is to become a skilled
        software and web developer.
      </p>
    </section>
  );
}

// Education Component
function Education() {
  return (
    <section id="education" className="section">
      <h2>Education</h2>

      <div className="card">
        <h3>Bachelor of Computer Applications (BCA)</h3>
        <p>
          Currently pursuing BCA with an interest in programming,
          web development and computer applications.
        </p>
      </div>

      <div className="card">
        <h3>Higher Secondary Education</h3>
        <p>
          Completed higher secondary education with a focus on
          academic and technical skills.
        </p>
      </div>
    </section>
  );
}

// Skills Component
function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Java",
    "Python",
    "C++",
    "SQL"
  ];

  return (
    <section id="skills" className="section">
      <h2>My Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

// Contact Component
function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>

      <div className="contact-card">
        <p>
          <strong>Email:</strong> rroychowdhury367@gmail.com
        </p>

        <p>
          <strong>Phone:</strong> +91 7439690612
        </p>

        <p>
          <strong>Location:</strong> Kolkata
        </p>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <p>
        © 2026 Rahul Roy Chowdhury. All Rights Reserved.
      </p>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <div>
      <Header />

      <Navbar />

      <main>
        {/* Home Section */}
        <section id="home" className="hero">
          <h2>Welcome to My Portfolio</h2>

          <p>
            I am a BCA student passionate about programming
            and web development.
          </p>

          <a href="#about" className="button">
            Learn More
          </a>
        </section>

        <About />

        <Education />

        <Skills />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;