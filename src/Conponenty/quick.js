import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
const Quick = () => {
  return (
    <div className="container-fluid">
      <div
        className="row justify-content-center align-items-center"
        style={{ borderBottom: " 4px solid black" }}
      >
        <div className="col-sm-12 text-center">
          <h1>Investování do nemovitostí</h1>
          <p>
            <a className="btn btn-dark m-5" href="mailto:nevim@example.com">
              Objednejte si konzultaci zdarma! 📞
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quick;
