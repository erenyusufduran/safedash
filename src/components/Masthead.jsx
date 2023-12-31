/* eslint-disable react/prop-types */
import { FaAngleRight } from 'react-icons/fa';
import styled from 'styled-components';
import { HeadImg } from '../ui/StyledImg';

const StyledMasthead = styled.header`
  height: 60vh;
  min-height: 500px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${(props) => props.type && `linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)),url(${props.type})`};
  background-color: ${(props) => props.bgcolor && props.bgcolor};

  @media screen and (max-width: 1400px) {
    background-position: right;
  }

  @media screen and (max-width: 800px) {
    background-position: center;
  }
`;

const Header = styled.h1`
  font-weight: bold;
  font-size: 2em;

  @media screen and (max-width: 750px) {
    font-size: 1em !important;
  }

  @media screen and (max-width: 470px) {
    font-size: 0.8em !important;
  }
`;

const StyledPText = styled.div`
  @media screen and (max-width: 750px) {
    font-size: 1em !important;
  }

  @media screen and (max-width: 470px) {
    font-size: 0.8em !important;
  }
`;

const CarouselTexts = ({ headImg, headerText, headerColor, pText, li, to }) => {
  return (
    // <div className="col-lg-7 col-md-12 ms-5-lg my-auto">
    //   <Header style={{ color: headerColor }} type={pText} className="text-white text-center">
    //     <HeadImg src={headImg} />
    //     <br />
    //     {headerText}
    //   </Header>
    //   <StyledPText className="text-center text-white">
    //     {pText}
    //     {li && li.length && li.map((_li, i) => <li key={i}>{_li}</li>)}
    //     <a style={{ color: '#fff' }} href={to}>
    //       Learn More <FaAngleRight />
    //     </a>
    //   </StyledPText>
    // </div>
    <div className="col-lg-7 col-md-12 ms-5-lg ms-3-sm my-auto">
      <Header style={{ color: headerColor }} type={pText} className="text-white">
        <HeadImg src={headImg} />
        <br />
        {headerText}
      </Header>
      <StyledPText className="text-white">
        {pText}
        {li && li.length && li.map((_li, i) => <li style={{listStyle: "none"}} key={i}>{_li}</li>)}
        <a style={{ color: '#fff' }} href={to}>
          Learn More <FaAngleRight />
        </a>
      </StyledPText>
    </div>
  );
};

const Masthead = ({ headerText, headerColor, pText, li, headImg, img, bgcolor, to }) => {
  return (
    <>
      <StyledMasthead type={img} bgcolor={bgcolor}>
        <div className="container h-100">
          <div className="row h-100 align-items-center text-md-center text-lg-start">
            <CarouselTexts headImg={headImg} li={li} headerText={headerText} headerColor={headerColor} pText={pText} to={to} />
          </div>
        </div>
      </StyledMasthead>
      {/* <div className='mx-auto row'>
      <StyledMasthead className='col-6' bgcolor={bgcolor}>
        <div className="container h-100">
          <div className="row h-100 align-items-center text-md-center">
            <CarouselTexts headImg={headImg} li={li} headerText={headerText} headerColor={headerColor} pText={pText} to={to} />
          </div>
        </div>
      </StyledMasthead>
      <img style={{objectFit: "contain"}} className='col-6' src={img} />
      </div> */}
    </>
  );
};

export default Masthead;
