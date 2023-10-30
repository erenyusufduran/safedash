import { FaAngleRight } from 'react-icons/fa';
import { StyledImg } from '../ui/StyledImg';

const DdosTesting = () => {
  return (
    <div id="cast-ddos" className="my-5 text-center">
      <h3>
        <img src="/cast-ddos.png" width="500px" />
      </h3>
      <h4 className="fw-bold">Gain Peace of Mind Knowing Your Digital Assets Can Withstand Even the Toughest DDoS Attacks</h4>
      <p>
        Are you prepared to defend your business against DDoS attacks? We offer comprehensive DDoS testing services to ensure your digital assets are well-protected. Our team of experts specializes in
        simulating real-life DDoS attacks, challenging your defense mechanisms, and identifying vulnerabilities.
      </p>
      <div className="row">
        <div className="col-6 my-auto">
          <StyledImg src="/ddos-attack.jpg" alt="" />
        </div>

        <div className="col-6" style={{ fontSize: '.9em' }}>
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
      </div>
    </div>
  );
};

export default DdosTesting;
