import DdosTesting from './DdosTesting';
import LoadTesting from './LoadTesting';
import PenTesting from './PenTesting';

// const data = [
//   {
//     pText: "DDoS testing is crucial to proactively uncover and address vulnerabilities in your company's defense system. When you partner with us:",
//     bolds: ['Identify Weaknesses', 'Fortify Defenses', 'Minimize Downtime', 'Gain Confidence', 'Tailored Solitions'],
//     liTexts: [
//       'Our detailed assessments reveal vulnerabilities in your network and applications, enabling you to reinforce your defenses.',
//       'Through real-world simulations, we assist in enhancing your DDoS mitigation strategies to ensure peak security.',
//       'Ensure that your online services remain operational during attacks, preserving your reputation and customer trust.',
//       'Stand tall against DDoS threats, equipped with the assurance that your operations remain uninterrupted.',
//       'We offer customized DDoS testing tailored to your specific infrastructure, ensuring precise assessments and actionable enhancement strategies.',
//     ],
//     img: '/ddos.jpg',
//     to: '#cast-ddos',
//   },
//   {
//     pText: "DDoS testing is crucial to proactively uncover and address vulnerabilities in your company's defense system. When you partner with us:",
//     bolds: ['Identify Weaknesses', 'Fortify Defenses', 'Minimize Downtime', 'Gain Confidence', 'Tailored Solitions'],
//     liTexts: [
//       'Our detailed assessments reveal vulnerabilities in your network and applications, enabling you to reinforce your defenses.',
//       'Through real-world simulations, we assist in enhancing your DDoS mitigation strategies to ensure peak security.',
//       'Ensure that your online services remain operational during attacks, preserving your reputation and customer trust.',
//       'Stand tall against DDoS threats, equipped with the assurance that your operations remain uninterrupted.',
//       'We offer customized DDoS testing tailored to your specific infrastructure, ensuring precise assessments and actionable enhancement strategies.',
//     ],
//     img: '/ddos.jpg',
//     imgFirst: true,
//     to: '#cast-load',
//   },
//   {
//     pText: "DDoS testing is crucial to proactively uncover and address vulnerabilities in your company's defense system. When you partner with us:",
//     bolds: ['Identify Weaknesses', 'Fortify Defenses', 'Minimize Downtime', 'Gain Confidence', 'Tailored Solitions'],
//     liTexts: [
//       'Our detailed assessments reveal vulnerabilities in your network and applications, enabling you to reinforce your defenses.',
//       'Through real-world simulations, we assist in enhancing your DDoS mitigation strategies to ensure peak security.',
//       'Ensure that your online services remain operational during attacks, preserving your reputation and customer trust.',
//       'Stand tall against DDoS threats, equipped with the assurance that your operations remain uninterrupted.',
//       'We offer customized DDoS testing tailored to your specific infrastructure, ensuring precise assessments and actionable enhancement strategies.',
//     ],
//     img: '/ddos.jpg',
//     to: '#cast-pen',
//   },
// ];

const TextComponents = () => {
  return (
    <div id="product" style={{ margin: '0 auto', width: '80%', backgroundColor: "#fff", padding: "3px 25px" }}>
      <DdosTesting />
      <hr />
      <LoadTesting />
      <hr />
      <PenTesting />
    </div>
  );
};

export default TextComponents;
