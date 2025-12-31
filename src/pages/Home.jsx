import "./Home.css";
import heroImg from "../assets/hero.png";

function Home() {
  return (
    <section id="home" className="home-section">
  <div className="container">
    <div className="row align-items-center min-vh-100">
      
      {/* LEFT TEXT */}
      <div className="col-md-6 text-center text-md-start">
        <h1 className="home-title">Hi, I'm Iqra</h1>
        <p className="home-subtitle">
          Artificial Intelligence Student | Frontend Developer
        </p>
      </div>

      {/* RIGHT ILLUSTRATION */}
      <div className="col-md-6 text-center">
        <img
          src="/hero.png"
          alt="AI Illustration"
          className="img-fluid home-image"
        />
      </div>

    </div>
  </div>
</section>

  );
}

export default Home;
