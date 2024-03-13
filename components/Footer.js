import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mar-top-lg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-3 col-sm-12">
            <Link href="/">
              <a className="logo">STET BEAUTY</a>
            </Link>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="footer-contacts">
              <div className="wrap">
                <div className="address">
                  <p>
                    Атырау
                    <br />
                    <a href="https://go.2gis.com/ygxza">
                      Приезжайте: Мкр. Привокзальный-5, 11
                    </a>
                  </p>
                </div>
                {/* <a className="email" href="mailto:codegrain@gmail.com">
                  fake@gmail.com
                </a> */}
                <br />
                <a className="phone" href="tel:+77057474876">
                  +7(705) 747 4876
                </a>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-4 col-md-5 col-sm-12">
            <div className="social-links">
              <ul>
                <li>
                  <a target="_blank" rel="noreferrer" href="#">
                    ig
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="#">
                    tw
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="#">
                    Bē
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="#">
                    yt
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
