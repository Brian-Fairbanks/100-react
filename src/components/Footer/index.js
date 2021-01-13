

function Footer(){
  return(
    <footer className="mastfoot container mt-auto pt-3">
      {/* <!-- Link Section --> */}
      <div className="container-lg mt-1 p-0">
        <div className="d-flex justify-content-center justify-content-md-around p-0">
          {/* <!-- Linked In --> */}
          <figure className="">
            <a target="_blank" href="https://www.linkedin.com/in/bkfairbanks/">
              <i className="imglink fab fa-linkedin fa-3x fa-icon-only p-1"></i>
            </a>
          </figure>
          {/* <!-- GitHub --> */}
          <figure className="">
            <a target="_blank" href="https://github.com/Brian-Fairbanks">
              <i className="imglink fab fa-github fa-3x fa-icon-only p-1"></i>
            </a>
          </figure>
          {/* <!-- FaceBook --> */}
          <figure className="">
            <a target="_blank" href="https://www.facebook.com/BKFairbanks">
              <i className="imglink fab fa-facebook-square fa-3x fa-icon-only p-1"></i>
            </a>
          </figure>
        </div>
      </div>

      <section className="inner text-center brown text-light">
        <h6>&copy; Copyright 2020</h6>
      </section>
    </footer>
  )
}

export default Footer;