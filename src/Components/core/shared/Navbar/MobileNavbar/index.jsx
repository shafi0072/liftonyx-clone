import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import Headroom from "react-headroom";
import { navMenu } from "@/src/constant/home/navbar";
import { useRouter } from "next/router";

const MobileNavbar = ({ setIsMenuOpen, isMenuOpen }) => {
    const router = useRouter()

    const handleRouter = (link)=>{
        router.push(link)
        setIsMenuOpen(false)
    }

  return (
    <Headroom>
      <div>
        <div
          className={`fixed h-screen w-screen bg-black/30 lg:hidden top-0 right-0 -translate-x-full duration-500 ${
            isMenuOpen ? "translate-x-0" : ""
          }`}
        >
          <section className="text-white bg-black flex flex-col absolute left-0 top-0 h-screen  gap-8 z-50  overflow-y-auto">
            <div onClick={() => setIsMenuOpen(false)}>
              <CloseIcon className="cursor-pointer" sx={{ fontSize: "50px" }} />
            </div>
            <div>
              {navMenu.map((item, index) => (
                <div  key={index}>
                  <p onClick={()=>handleRouter(item?.url)} className="py-4 pb-5 text-lg font-semibold text-white border-b border-white">
                    {item?.title}
                  </p>
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
