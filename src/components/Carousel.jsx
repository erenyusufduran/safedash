/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import Masthead from './Masthead';

const imageData = [
  {
    headerText: 'CastDDOS: Fortify Against Digital Onslaughts',
    headerColor: '#fff',
    pText: 'Are DDoS attacks a concern? Let CastDDOS be your shield. We simulate real DDoS attacks to test your defenses, helping you:',
    li: [
      'Identify Weaknesses in your network and applications.',
      'Fortify Defenses with real-world attack simulations.',
      "Minimize Downtime and uphold your brand's reputation.",
      'Gain Confidence against looming DDoS threats.',
    ],
    headImg: '/cast-ddos.png',
    bgImg: "ddos1.jpg",
    to: '#cast-ddos',
  },
  {
    headerText: "CastLOAD: Strengthen Your System's Fortitude",
    headerColor: '#000',
    pText: 'Is your platform primed for peak performance? Dive into resilience with CastLOAD. Our premier load testing approach:',
    li: [
      'Detects Bottlenecks hindering your efficiency.',
      'Enhances Capacity for the challenges of escalating traffic.',
      'Maintains a Seamless User Experience throughout high-demand scenarios.',
      'Builds System Resilience against the unpredictability of web surges.',
      'Offers Tailored Solutions for precise system evaluations.',
    ],
    headImg: '/cast-load.png',
    bgImg: "loadhead.jpeg",
    to: '#cast-load',
  },
  {
    headerText: 'CastPEN: Secure Your Cloud Horizon',
    headerColor: '#000',
    pText: 'Concerned about cloud security vulnerabilities? Let CastPEN be your beacon. We dive deep into your cloud setup to:',
    li: [
      'Analyze Holistically from configurations to databases.',
      'Refine Defenses with sophisticated cyber-attack simulations.',
      'Offer Intuitive Reports for prompt and effective action.',
      'Ensure Peak Protection with continuous testing and updates.',
      'Provide Expert Guidance, keeping you ahead in your security journey.',
    ],
    headImg: '/cast-pen.png',
    bgImg: "castpen1.jpg",
    to: '#cast-pen',
  },
];

const SButton = styled.button`
  position: absolute;
  top: 50%;
  margin: 1em;
  border: none;
  background-color: rgb(213, 205, 205, 0.3);
  border-radius: 50%;
  color: #fff;
  font-size: 1em;
  padding: 3px 8px 3px 8px;
  cursor: pointer;

  &:hover {
    background-color: rgb(213, 205, 205, 0.1);
  }
`;

const Carousel = () => {
  const [change, setChange] = useState(0);
  const [mouseEntered, setMouseEntered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      !mouseEntered && setChange((change) => change + 1);
    }, 2500);

    if (change === imageData.length * 2) setChange(0);
    return () => clearInterval(interval);
  }, [change, mouseEntered]);

  const changeToLeft = () => {
    setChange((change) => (change === 0 ? imageData.length * 2 - 1 : change - 1));
  };

  const changeToRight = () => {
    setChange((change) => (change === imageData.length * 2 ? 0 : change + 1));
  };

  return (
    <div className="carousel slide" onMouseEnter={() => setMouseEntered(true)} onMouseLeave={() => setMouseEntered(false)}>
      <div className="carousel-inner">
        {imageData.length &&
          imageData.map((data, i) => (
            <div key={i} className={`carousel-item ${change % imageData.length === i ? 'active' : ''}`}>
              <div>
                <Masthead headImg={data.headImg} li={data.li} headerText={data.headerText} pText={data.pText} img={data.bgImg} to={data.to} />
              </div>
              <SButton onClick={changeToLeft} style={{ left: 0 }}>
                <FaArrowLeft />
              </SButton>
              <SButton onClick={changeToRight} style={{ right: 0 }}>
                <FaArrowRight />
              </SButton>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Carousel;
