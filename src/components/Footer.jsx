const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
  <div className="container text-center">
    <p className="mb-1">&copy; {new Date().getFullYear()}  All Rights Reserved.</p>
    <p className="mb-0">
      Connect with me:
      <a href="https://www.linkedin.com/in/iqra-irfan-86093a374/" target="_blank" rel="noreferrer" className="text-white ms-2 me-2">LinkedIn</a>|
      <a href="https://github.com/iqrairfan-25" target="_blank" rel="noreferrer" className="text-white ms-2 me-2">GitHub</a>
    </p>
  </div>
</footer>

  );
};

export default Footer; 
