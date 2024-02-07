import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
export const footerLogo = "https://liftonyx.com/cdn/shop/files/Untitled_design_20_100x.png?v=1687599930"
export const footerData = [
  {
    title: "About",
    list: [
      {
        name: "Our Story",
        link:""
      },
      {
        name: "FAQs",
        link:""
      },
      {
        name: "Affiliates",
        link:""
      },
      {
        name: "Instalment Plan",
        link:""
      },
      {
        name: "Blog",
        link:""
      },
    ],
  },
  {
    title: "Shop",
    list: [
      {
        name: "Bottle",
        link:"/bottle"
      },
      {
        name: "Flask",
        link:"/flask"
      },
      {
        name: "Accessories",
        link:"/accessories"
      },
    ],
  },
  {
    title: "Help",
    list: [
      {
        name: "Contact Us",
        link:""
      },
      {
        name: "Shipping Policy",
        link:""
      },
      {
        name: "Return Policy",
        link:""
      },
      {
        name: "Tax & Duties",
        link:""
      },
      {
        name: "Terms of Service",
        link:""
      },
      {
        name: "Privacy Policy",
        link:""
      },
    ],
  },
  {
    title: "Follow Us",
    list: [
      {
        name: (
          <div className="flex gap-5 items-center">
            <div><FacebookIcon /></div>
            <div><InstagramIcon /></div>
            <div><TwitterIcon /></div>
          </div>
        ),
        link:""
      },
    ],
  },
];
