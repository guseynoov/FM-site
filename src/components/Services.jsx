import fm1 from '../img/FM1.jpg'
import fm2 from '../img/FM2.jpg'
import fm3 from '../img/FM3.jpg'
import './services.css'
const Services = () => {
  return (
<>
      <div id="carouselExampleCaptions" className="carousel slide container services" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-4">
                <img src={fm1} className="d-block w-100 carusel-img" alt="Slide 1" />
              </div>
              <div className="col-4">
                <img src={fm2} className="d-block w-100 carusel-img" alt="Slide 2" />
              </div>
              <div className="col-4">
                <img src={fm3} className="d-block w-100 carusel-img" alt="Slide 3" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-4">
                <img src={fm1} className="d-block w-100 carusel-img" alt="Slide 4" />
              </div>
              <div className="col-4">
                <img src={fm2} className="d-block w-100 carusel-img" alt="Slide 5" />
              </div>
              <div className="col-4">
                <img src={fm3} className="d-block w-100 carusel-img" alt="Slide 6" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-4">
                <img src={fm1} className="d-block w-100 carusel-img" alt="Slide 7" />
              </div>
              <div className="col-4">
                <img src={fm2} className="d-block w-100 carusel-img" alt="Slide 8" />
              </div>
              <div className="col-4">
                <img src={fm3} className="d-block w-100 carusel-img" alt="Slide 9" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-4">
                <img src={fm1} className="d-block w-100 carusel-img" alt="Slide 10" />
              </div>
              <div className="col-4">
                <img src={fm2} className="d-block w-100 carusel-img" alt="Slide 11" />
              </div>
              <div className="col-4">
                <img src={fm3} className="d-block w-100 carusel-img" alt="Slide 12" />
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>  )
}

export default Services