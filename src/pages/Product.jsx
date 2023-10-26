import Masthead from '../components/Masthead';
import { useLocation } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';

const ForeignToursPage = () => {
  const { pathname } = useLocation();
  useScrollToTop(pathname, 'Product');

  return (
    <>
      <Masthead headerText="Product" img="/yurtdisi_header.jpg" />
    </>
  );
};

export default ForeignToursPage;
