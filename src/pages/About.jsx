import Masthead from '../components/Masthead';
import { useLocation } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';

const CultureToursPage = () => {
  const { pathname } = useLocation();
  useScrollToTop(pathname, 'About');

  return (
    <>
      <Masthead headerText="Kültür Turları" pText="A great starter layout for a landing page" img="/kulture_header.jpg" />
    </>
  );
};

export default CultureToursPage;
