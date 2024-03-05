import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import Headroom from "react-headroom";
import { navMenu } from "@/src/constant/home/navbar";
import { useRouter } from "next/router";

const MobileNavbar = ({ setIsMenuOpen, isMenuOpen }) => {
  const router = useRouter();

  const handleRouter = (link) => {
    router.push(link);
    setIsMenuOpen(false);
  };

  console.log(isMenuOpen);

  return (
    <Headroom>
      <div className="w-full transition peer">
        <div
          className={`fixed h-screen  w-full peer-focus:left-0 peer:transition bg-black/30  ease-out delay-150 lg:hidden top-0 right-0 -translate-x-full duration-500 ${
            isMenuOpen ? "translate-x-0   " : " -translate-x-full hidden"
          }`}
        >
          <section className=" z-50 bg-white text-black w-[400px] flex flex-col  absolute left-0 top-0 h-screen  gap-8  overflow-y-auto">
            <div onClick={() => setIsMenuOpen(false)}>
              <CloseIcon
                className="cursor-pointer pl-7"
                sx={{ fontSize: "50px" }}
              />
            </div>
            <div className="text-left"> 
              {navMenu.map((item, index) => (
                <div className="px-4 pl-6" key={index}>
                  <p
                    onClick={() => handleRouter(item?.url)}
                    className="py-4 pl-4 pb-5 text-lg font-semibold text-black "
                  >
                    {item?.title}
                  </p>
                  <hr className="ml-4" />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Headroom>
  );
};

export default MobileNavbar;
