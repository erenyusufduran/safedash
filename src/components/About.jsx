import { HeadImg } from '../ui/StyledImg';

const About = () => {
  return (
    <div id="about" className="my-5 text-center">
      <h2 className="fw-bold">About US</h2>
      <div className="mt-4">
        <p>
          At <b>Safedash</b>, we are committed to empowering businesses with the tools and resources they need to navigate the ever-changing landscape of cyber threats confidently.
        </p>
        <p>
          Our mission is clear - to simplify your security journey by providing cutting-edge testing tools and easy access to valuable data, allowing you to focus on what matters most: your
          business&apos;s growth and success.
        </p>
        <p>Our core values reflect our commitment to excellence, innovation, and customer-centricity. We believe in:</p>
      </div>
      <div style={{ width: '70%', margin: '0 auto' }} className='text-start'>
        <ol>
          <li style={{lineHeight: "1.4em", marginBottom: ".6em"}}>
            <b>Security First:</b> Security is our top priority, and we take proactive steps to find and fix any weaknesses or vulnerabilities. We are fully committed to making sure our testing tools
            are as secure as possible in all aspects of our work.
          </li>
          <li style={{lineHeight: "1.4em", marginBottom: ".6em"}}>
            <b> Customer Success:</b> Our success lies in the success of our customers. We are committed to understanding their unique needs and challenges, providing personalized solutions that align
            with their goals.
          </li>
          <li style={{lineHeight: "1.4em", marginBottom: ".6em"}}>
            <b>Continuous Innovation:</b> The cyber threat landscape is ever evolving, and so are we. We embrace innovation and stay ahead of the curve, constantly refining our tools and services to
            address emerging threats.
          </li>
          <li style={{lineHeight: "1.4em", marginBottom: ".6em"}}>
            <b> Collaboration and Partnership:</b> We view our clients as partners in their security journey. Collaboration is at the heart of our approach, as we work together to achieve shared
            objectives.
          </li>
          <li style={{lineHeight: "1.4em", marginBottom: ".6em"}}>
            <b> Empowering Security Knowledge:</b> We believe that knowledge is power. Alongside our services, we are dedicated to educating our clients about the latest security trends and best
            practices.
          </li>
        </ol>
      </div>
      <h4>
        <HeadImg src="/circle-logo.png" />
      </h4>
    </div>
  );
};

export default About;
