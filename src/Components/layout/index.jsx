import Footer from "../core/shared/Footer/";
import Navbar from "../core/shared/Navbar/";

const index = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default index;
