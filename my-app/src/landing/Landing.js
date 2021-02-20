import logo from '../assets/pizza.svg';
import './Landing.css';

function Landing() {
  return (
    <div className="landing">
      <header className="landing-header">
        <div className="landing-main-section">
          <div className="landing-main-text">
            <p>
              Send Me a Pizza makes it easy to send 'Za to those in need.
            </p>
            <p>
              We believe pizza is a universal human right!
            </p>
            <p>
              Helping individuals back on their feet one slice at a time.
            </p>
            <a href="https://www.reddit.com/r/Random_Acts_Of_Pizza" target="_blank">
              Inspired by Random Acts Of Pizza.
            </a>
          </div>
          
          <div className="landing-img-wrapper">
            <img src={logo} className="landing-logo" alt="logo" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Landing;
