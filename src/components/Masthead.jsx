/* eslint-disable react/prop-types */
import styled from 'styled-components';

const StyledMasthead = styled.header`
  height: 60vh;
  min-height: 500px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${(props) => props.type && `linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)),url(${props.type})`};
  background-color: ${(props) => props.bgcolor && props.bgcolor};

  @media screen and (max-width: 1200px) {
    background-position: right;
  }

  @media screen and (max-width: 800px) {
    background-position: center;
  }
`;

const Header = styled.h1`
  font-weight: bold;
  font-size: 2em;
`;

const CarouselTexts = ({ headImg, headerText, headerColor, pText, li, to }) => {
  return (
    <div className="col-lg-6 col-md-12 ms-5-lg mt-5">
      <Header style={{ color: headerColor }} type={pText} className="text-white text-center">
        <img src={headImg} width="250px" />
        <br />
        {headerText}
      </Header>
      <div className="text-center text-white">
        {pText}
        {li && li.length && li.map((_li, i) => <li key={i}>{_li}</li>)}
        <a style={{ color: '#fff' }} href={to}>
          Learn More
        </a>
      </div>
    </div>
  );
};

const Masthead = ({ headerText, headerColor, pText, li, headImg, img, bgcolor, to }) => {
  return (
    <>
      <StyledMasthead type={img} bgcolor={bgcolor}>
        <div className="container h-100">
          <div className="row h-100 align-items-center text-md-center">
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
