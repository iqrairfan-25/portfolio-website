import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="mb-4 text-center" style={{ color: "#d84a83" }}>Contact Me</h2>
        <p className="text-center" style={{ color: "black" }}>Feel free to reach out to me via email or social media:</p>
        <ul className="list-unstyled text-center" style={{ color: "black" }}>
          <li>Email: <a href="mailto:iqra@example.com">iqra@example.com</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/iqra-irfan-86093a374/" target="_blank" rel="noreferrer">linkedin.com/in/iqra</a></li>
          <li>GitHub: <a href="https://github.com/iqrairfan-25" target="_blank" rel="noreferrer">github.com/iqra</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
