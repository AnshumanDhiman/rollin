/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    // <footer className="bg-theme_1 text-white py-12 border-t-[1px]">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    //       {/* Section 1: Logo and About Us */}
    //       <div>
    //         <div className="text-2xl font-bold mb-4 text-white">
    //           <img src={logo} alt="logo" className="w-24" />
    //         </div>
    //       </div>

    //       {/* Section 2: Our Services */}
    //       <div>
    //         <h2 className="text-2xl font-bold mb-4 text-white">
    //           Services
    //         </h2>
    //         <ul>
    //           <li>
    //             <Link
    //               to="/services/web-development"
    //               className="hover:text-theme_3 transition-colors"
    //             >
    //               TV Commercials
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="/services/automation"
    //               className="hover:text-theme_3 transition-colors"
    //             >
    //              Music Production
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="/services/ui-ux-design"
    //               className="hover:text-theme_3 transition-colors"
    //             >
    //               Film Making
    //             </Link>
    //           </li>
           
    //         </ul>
    //       </div>

    //       {/* Section 3: Quick Links */}
    //       <div>
    //         <h2 className="text-2xl font-bold mb-4 text-white">
    //           Quick Links
    //         </h2>
    //         <ul>
              
    //           <li>
    //             <Link
    //               to="/about"
    //               className="hover:text-theme_3 transition-colors"
    //             >
    //               About Us
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="/contact"
    //               className="hover:text-theme_3 transition-colors"
    //             >
    //               Contact Us
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>

    //       {/* Section 4: Our Location */}
    //       <div>
    //         <h2 className="text-2xl font-bold mb- text-white">
    //           Our Location
    //         </h2>
    //         <p>New Delhi, India</p>

    //         {/* Social media links */}
    //         <div className="flex mt-4">
    //           <a href="https://www.facebook.com">
    //             <FaFacebook
    //               className="text-white hover:hover:text-theme_3 transition-colors mr-4"
    //               style={{ transition: "transform 0.3s" }}
    //               fontSize={24}
    //             />
    //           </a>
    //           <a href="https://www.twitter.com">
    //             <FaTwitter
    //               className="text-white hover:text-theme_3 transition-colors  mr-4"
    //               style={{ transition: "transform 0.3s" }}
    //               fontSize={24}
    //             />
    //           </a>
    //           <a href="https://www.instagram.com">
    //             <FaInstagram
    //               className="text-white hover:text-theme_3 transition-colors  mr-4"
    //               style={{ transition: "transform 0.3s" }}
    //               fontSize={24}
    //             />
    //           </a>
    //           <a href="https://www.linkedin.com">
    //             <FaLinkedin
    //               className="text-white hover:text-theme_3 transition-colors "
    //               style={{ transition: "transform 0.3s" }}
    //               fontSize={24}
    //             />
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>

    
<footer className="bg-theme_1 shadow ">
    <div className="w-full px-8 mx-auto py-8 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between ">
            <a href="https://rollinstudios.in" className="flex items-center mb-4 sm:mb-0">
                <img src={logo} className="w-24" alt="Flowbite Logo" />
                
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="/about" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="/policy" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="/licensing" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="/contact" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Rollin™</a>. All Rights Reserved.</span>
    </div>
</footer>


  );
};

export default Footer;