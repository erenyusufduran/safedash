/* eslint-disable react/prop-types */
import { TbMail, TbPhone } from 'react-icons/tb';
import styled from 'styled-components';

const Img = styled.img`
  width: 300px;
`;

const StyledA = styled.a`
  text-decoration: none;
  color: #000;

  @media screen and (max-width: 970px) {
    font-size: 0.9em !important;
  }

  @media screen and (max-width: 768px) {
    margin-top: 1em !important;
    font-size: 1.2em !important;
  }
`;

const Address = styled.div`
  @media screen and (max-width: 1200px) {
    margin-top: 1em !important;
    font-size: 1.3em;
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    margin-top: 1em !important;
  }
`;

const Footer = ({ onClick }) => {
  return (
    <footer onClick={onClick} className="text-center text-lg-start mt-5 mb-5" style={{ backgroundColor: '#d7dedc' }}>
      <div className="text-center mx-auto row">
        <Img className="col-md-3 col-sm-12 mx-auto" src="/safedash-logo.png" />
        <StyledA className="col-md-3 col-sm-12 mx-auto my-auto" href="mailto:support@safedash.co.uk">
          <b>
            <TbMail style={{ fontSize: '2em' }} /> support@safedash.co.uk
          </b>
        </StyledA>
        <StyledA className="col-md-3 col-sm-12 mx-auto my-auto" href="tel:+445603075062">
          <b>
            <TbPhone style={{ fontSize: '2em' }} /> +44 560 307 50 62
          </b>
        </StyledA>
        <Address className="col-md-3 col-sm-12 mx-auto my-auto">
          <b>74A HIGH STREET WANSTEAD LONDON</b>
        </Address>
      </div>
    </footer>
  );
};

export default Footer;
