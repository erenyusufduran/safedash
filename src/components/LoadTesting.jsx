import { FaAngleRight } from 'react-icons/fa';
import { StyledImg } from '../ui/StyledImg';

const LoadTesting = () => {
  return (
    <div id="cast-load" className="my-5 text-center">
      <h3>
        <img src="/cast-load.png" width="500px" />
      </h3>
      <h4 className="fw-bold">Elevate Your System&apos;s Performance with CASTLOAD</h4>
      <p>
        Is your platform built to handle the pressures of soaring traffic? Dive into advanced load testing solutions with CASTLOAD. Our team of specialists delves deep into simulations, measuring your
        system&apos;s fortitude, ensuring it&apos;s geared up for the challenges of an expanding user community.
      </p>
      <div className="row">
        <div className="col-6" style={{ fontSize: '.9em' }}>
          <div>
            <h3>Why Invest in DDoS Testing?</h3>
          </div>
          <div className="text-start">
            <i>
              <p>DDoS testing is crucial to proactively uncover and address vulnerabilities in your company&apos;s defense system. When you partner with us: </p>
            </i>
            <li>
              <b>Identify Weaknesses:</b> Our detailed assessments reveal vulnerabilities in your network and applications, enabling you to reinforce your defenses.
            </li>
            <li>
              <b>Fortify Defenses:</b> Through real-world simulations, we assist in enhancing your DDoS mitigation strategies to ensure peak security.
            </li>
            <li>
              <b>Minimize Downtime:</b> Ensure that your online services remain operational during attacks, preserving your reputation and customer trust. Gain Confidence: Stand tall against DDoS
              threats, equipped with the assurance that your operations remain uninterrupted.
            </li>
            <li>
              <b>Tailored Solutions:</b> We offer customized DDoS testing tailored to your specific infrastructure, ensuring precise assessments and actionable enhancement strategies.
            </li>
          </div>
          <a href="" className="text-center">
            Learn More <FaAngleRight />
          </a>
        </div>
        <div className="col-6 my-auto">
          <StyledImg src="/load-testingsa.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoadTesting;
