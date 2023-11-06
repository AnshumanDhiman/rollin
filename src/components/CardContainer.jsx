import ACard from "./Cards/Ads/ACards.jsx";
import FCard from "./Cards/Films/FCards.jsx";
import BCard from "./Cards/Music/BCards.jsx";

export default function Container() {
  return (
    <>
      <div className="">
        <div className="mx-auto">
           <h2 className="text-xl text-center lg:text-left lg:text-2xl font-semibold lg:ml-4 py-4 mb-[-35px] lg:mb-[-25px] lg:py-0 bg-gradient-to-r text-transparent bg-clip-text from-theme_3 to-theme_4">
            Experience Cinematic Brilliance
          </h2>
          <FCard />
         

         
          <h2 className="text-xl text-center lg:text-left lg:text-2xl font-semibold lg:ml-4 py-4 mb-[-35px] lg:mb-[-35px] lg:py-0 bg-gradient-to-r text-transparent bg-clip-text from-theme_3 to-theme_4">
            Branding your digital Presence
          </h2>
          <ACard />
          <h2 className="text-xl text-center lg:text-left lg:text-2xl font-semibold lg:ml-4 py-4 mb-[-35px] lg:mb-[-55px] lg:py-0 bg-gradient-to-r text-transparent bg-clip-text from-theme_3 to-theme_4">
            Best of Youtube
          </h2>
          <BCard />

          <br/>
          <p className="text-theme_3 opacity-75 text-center lg:mb-0 mb-8">The content on this website reflects our services and required assistance for the completion of these projects. However, we do not claim ownership.</p>
         
        </div>
      </div>
    </>
  );
}

{
  /* <hr className="w-20 border-t-2 border-theme_2 mt-4" />  */
}
