import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-3 col-sm6">
              <h4>Contact Us</h4>
              <ul className="list-unstyled">
                <li>Dallas, TX</li>
                <li>239 Main Street</li>
                <li>phone: 112-333-4444</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="col-md-3 col-sm6">
              <h4>Lorem Ipsum</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Lorem Ipsum </a>{" "}
                </li>
                <li>
                  <a href="/">Lorem Ipsum </a>{" "}
                </li>
                <li>
                  <a href="/">Lorem Ipsum </a>{" "}
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="col-md-3 col-sm6">
              <h4>Lorem Ipsum</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Lorem Ipsum </a>{" "}
                </li>
                <li>
                  <a href="/">Lorem Ipsum </a>{" "}
                </li>
                <li>
                  <a href="/">Lorem Ipsum </a>{" "}
                </li>
              </ul>
            </div>
            {/* Column 4 */}
            <div className="col-md-3 col-sm6">
              <h4>Lorem Ipsum</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Lorem Ipsum </a>{" "}
                </li>
                <li>
                  <a href="/">Lorem Ipsum </a>{" "}
                </li>
                <li>
                  <a href="/">Lorem Ipsum </a>{" "}
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;Copyright {new Date().getFullYear()} The Fit - All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  ul li a {
    color: var(--mainGray);
  }

  ul li a:hover {
    color: var(--mainLightGray);
  }
`;
