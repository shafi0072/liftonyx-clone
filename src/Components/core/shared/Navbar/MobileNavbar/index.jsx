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

  return (
    <div className={`fixed inset-0 bg-black/30 lg:hidden z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`fixed inset-y-0 left-0 w-64 bg-white overflow-y-auto transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-4">
          <div className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>
            <CloseIcon className="text-gray-700" />
          </div>
        </div>
        <div className="">
          {navMenu.map((item, index) => (
            <div key={index} className="mx-4 border-b py-2">
              <Link href={item.url}>
                <p onClick={() => setIsMenuOpen(false)} className="text-gray-700 text-2xl font-semibold">{item.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;



// {navMenu.map((item, index) => (
//   <div key={index}>
//     <Link href={item?.url} className="py-4 px-4 text-lg font-semibold text-white border-b border-white">
//       {item?.title}
//     </Link>
//   </div>
// ))}