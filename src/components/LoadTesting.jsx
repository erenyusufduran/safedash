import { HeadImg, StyledImg } from '../ui/StyledImg';

const LoadTesting = () => {
  return (
    <div className="my-5 text-center">
      <h3>
        <HeadImg src="/cast-load.png" />
      </h3>
      <h4 className="fw-bold">Elevate Your System&apos;s Performance with CASTLOAD</h4>
      <p>
        Is your platform built to handle the pressures of soaring traffic? Dive into advanced load testing solutions with CASTLOAD. Our team of specialists delves deep into simulations, measuring your
        system&apos;s fortitude, ensuring it&apos;s geared up for the challenges of an expanding user community.
      </p>
      <div className="row mt-5">
        <div className="col-lg-6 col-md-12 my-auto" style={{ fontSize: '.85em' }}>
          <div>
            <h3>Why Invest in Load Testing?</h3>
          </div>
          <div className="text-start">
            <i>
              <p>The strength of a system lies not just in its functionality but also in its resilience. By partnering with CASTLOAD, you can:</p>
            </i>
            <li>
              <b>Spot Bottlenecks:</b> Pinpoint inefficiencies in your system for strategic optimization.
            </li>
            <li>
              <b>Boost Capacity:</b> Experience real-world traffic simulations for amplifying system prowess.
            </li>
            <li>
              <b>Preserve User Experience:</b> Guarantee a smooth and responsive journey for users.
            </li>
            <li>
              <b>Forge Resilience:</b> Ensure your platform weathers escalating traffic.
            </li>
            <li>
              <b>Personalized Testing Solutions:</b> Receive precise evaluations tailored to your business.
            </li>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 my-auto mt-md-3 mt-3">
          <StyledImg src="/load-img.png" alt="" />
        </div>
      </div>

      <div id="cast-load" className="row flex-lg-row flex-column-reverse mt-5">
        <div className="col-lg-6 col-md-12 my-auto mt-md-4 mt-3">
          <StyledImg src="/loading-test.png" alt="" />
        </div>
        <div className="col-lg-6 col-md-12">
          <div>
            <h3 className="fw-bold" style={{ fontSize: '2em' }}>
              Why CASTLOAD?
            </h3>
          </div>
          <div className="text-start">
            <i>
              <p className="text-center">In today&apos;s digital domain, platform robustness is paramount. Here&apos;s why CASTLOAD stands out:</p>
            </i>
            <div style={{ width: '90%', margin: '0 auto', fontSize: '.9em' }}>
              <li>
                <b>Simplified Complexity:</b> Focus on results while we handle the backend intricacies.
              </li>
              <li>
                <b>Agility:</b> A system designed for swift scalability as per your needs.
              </li>
              <li>
                <b>Global Reach:</b> Distributed load testing from 50+ locations worldwide.
              </li>
              <li>
                <b>Intuitive Insights:</b> Accessing performance metrics made simple and straightforward.
              </li>
              <li>
                <b>In-Depth Analytics:</b> Real-time insights for data-driven decisions and improvements.
              </li>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center fw-bold mt-5" style={{ fontSize: '1.1em' }}>
        Don&apos;t let unexpected traffic surges be your system&apos;s downfall. Engage with us today to schedule a load test with CASTLOAD. Fortify your platform&apos;s performance, ensuring agility
        and dependability always remain in the spotlight.
      </p>
    </div>
  );
};

export default LoadTesting;
