import { useLocation } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';
import Masthead from '../components/Masthead';

const CommunicationPage = () => {
  const { pathname } = useLocation();
  useScrollToTop(pathname, 'Contact');

  return (
    <>
      <Masthead headerText="Contact" headerColor="#fff" bgcolor="#333" />
      <div className="container"></div>
    </>
  );
};

export default CommunicationPage;
