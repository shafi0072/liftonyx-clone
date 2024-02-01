import Footer from "../core/shared/Footer/";
import Navbar from "../core/shared/Navbar/";

const index = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default index;
