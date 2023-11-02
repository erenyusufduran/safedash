import { HeadImg, StyledImg } from '../ui/StyledImg';

const DdosTesting = () => {
  return (
    <div id="cast-ddos" className="my-3 text-center">
      <h3>
        <HeadImg src="/cast-ddos.png" />
      </h3>
      <h4 className="fw-bold">Gain Peace of Mind Knowing Your Digital Assets Can Withstand Even the Toughest DDoS Attacks</h4>
      <p>
        Are you prepared to defend your business against DDoS attacks? We offer comprehensive DDoS testing services to ensure your digital assets are well-protected. Our team of experts specializes in
        simulating real-life DDoS attacks, challenging your defense mechanisms, and identifying vulnerabilities.
      </p>
      <div className="row mt-5">
        <div className="col-lg-6 col-md-12 mb-md-3 mb-3 my-auto">
          <StyledImg src="/ddos----.png" alt="" />
        </div>

        <div className="col-lg-6 col-md-12 mt-md-2" style={{ fontSize: '.95em' }}>
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
        </div>
      </div>

      <div className="row mt-5">
        <div>
          <h3 className="fw-bold" style={{ fontSize: '2em' }}>
            Why CastDDOS?
          </h3>
        </div>
        <div className="text-start">
          <i>
            <p className="text-center">
              In an ever-evolving digital landscape, the right defense against DDoS attacks is not just about prevention but also adaptability and comprehensive insights. Enter CastDDOS — your
              advanced shield in the world of cyber threats.
            </p>
          </i>
          <div style={{ width: '90%', margin: '0 auto', fontSize: '.9em' }}>
            <div className="mt-3">
              <h4 style={{ fontWeight: 'bold', fontSize: '1.4em' }}>Expertise and Experience:</h4>
              <li>Unparalleled Know-how: Our team does not just understand advanced attacks; we have been at the forefront of tackling and simulating them.</li>
              <li>Advanced Threat Scenarios: Our capabilities extend to specialized challenges, including VOiP and VPN connection performance tests.</li>
            </div>
            <div className="mt-3">
              <h4 style={{ fontWeight: 'bold', fontSize: '1.4em' }}>Versatility and Customization:</h4>
              <li>Versatile Attack Arsenal: From volumetric to intricate attacks, customize by bandwidth, duration, geography, and bot count.</li>
              <li>Tailored Attack Parameters: Adjust the scale, intensity, and region of the attack. Save custom tests for future use.</li>
            </div>
            <div className="mt-3">
              <h4 style={{ fontWeight: 'bold', fontSize: '1.4em' }}>User Control and Feedback:</h4>
              <li>DIY or Assisted Testing: Launch attacks on-demand or schedule them. Need expert guidance? We are here to help.</li>
              <li>Instant Feedback: See how your assets react in real-time under attack. Discover unexpected responses.</li>
              <li>Emergency Override: Our immediate stop functionality ensures you are in control always.</li>
            </div>
            <div className="mt-3">
              <h4 style={{ fontWeight: 'bold', fontSize: '1.4em' }}>Continuous Protection and Insights:</h4>
              <li>Continuous Vigilance: It is essential to test regularly, especially after code or network changes, to maintain impeccable security.</li>
              <li>Performance Insights: Track the impact of an attack on your digital infrastructure with detailed metrics.</li>
              <li>Comprehensive Reporting: Access both live and archived reports anytime, anywhere.</li>
            </div>
          </div>
        </div>
        <p className="text-center fw-bold mt-4" style={{ fontSize: '1.1em' }}>
          Don&apos;t wait until a DDoS attack disrupts your operations. Reach out to us today to schedule a DDoS test and strengthen your defense against cyber threats. At CastDDOS, your security is
          our utmost priority.
        </p>
      </div>
    </div>
  );
};

export default DdosTesting;
