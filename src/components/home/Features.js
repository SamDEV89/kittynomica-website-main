import { ReactComponent as Gallery } from "assets/images/gallery.svg";
import { ReactComponent as TokenUtility } from "assets/images/token-utility.svg";
import { ReactComponent as Die } from "assets/images/die.svg";
import { ReactComponent as Search } from "assets/images/search.svg";
import { ReactComponent as LeftBlur } from "assets/images/left-blur.svg";
import { ReactComponent as RightBlur } from "assets/images/right-blur.svg";

const Features = () => {
  return (
    <div
      className="mt-[122px] mb-[56px] px-4 relative overflow-hidden"
      id="features"
    >
      <div className="absolute overflow-hidden top-[-20%] left-[-200px]">
        <LeftBlur />
      </div>
      <div className="absolute overflow-hidden bottom-[-20%] right-[-200px]">
        <RightBlur />
      </div>
      <div className="px-4 max-w-[1168px] mx-auto">
        <h3 className="text-center text-white text-lg mini:text-[36px]">
          Features
        </h3>
        <div className="mt-5 mini:mt-[80px] flex flex-col mini:space-y-[85px]">
          <div className="flex flex-col space-y-[30px] items-center mini:items-start mini:flex-row mini:space-y-0 mini:justify-between">
            <div className="flex flex-col justify-center items-center mini:items-start">
              <Gallery />
              <div className="flex flex-col space-y-[10px]">
                <h4 className="text-lg mini:text-[32px] text-white text-center mini:text-start">
                  NFT Marketplace
                </h4>
                <p className="font-primary text-sm mini:text-base text-white text-center mini:text-start max-w-[486px]">
                  For the generation of NFTs, the purchase and sale of digital
                  arts, and in-game skins, we are building our NFT Marketplace
                  for these items. As a result of our partnership with some of
                  the world's most outstanding digital artists, Kittynomica
                  tokens can be used to purchase and sell their items. NFT
                  marketplace will be linked to our games so that in-game items
                  can be traded.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mini:items-start">
              <TokenUtility />
              <div className="flex flex-col space-y-[10px]">
                <h4 className="text-lg mini:text-[32px] text-white text-center mini:text-start">
                  Token Utility
                </h4>
                <p className="font-primary text-sm mini:text-base text-center mini:text-start text-white max-w-[486px]">
                  $Kittynomica TOKEN is the native currency of the Kittynomica
                  token ecosystem and the in-game currency. Also, the token is
                  used to get lives through incentives and rewards.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-[30px] items-center mini:items-start mini:flex-row mini:space-y-0 mini:justify-between">
            <div className="flex flex-col justify-center mt-[30px] mini:mt-0 items-center mini:items-start">
              <Die />
              <div className="flex flex-col space-y-[10px]">
                <h4 className="text-lg mini:text-[32px]  text-white text-center mini:text-start">
                  Generative NFTs
                </h4>
                <p className="font-primary text-sm mini:text-base text-center mini:text-start text-white max-w-[486px]">
                  The capacity of generative NFTs to captivate the interest and
                  imagination of a worldwide audience has surpassed that of the
                  traditional art industry. That is why, at Kittynomica, we are
                  providing our users with a once-in-a-lifetime opportunity to
                  be part of this revolution.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mini:items-start">
              <Search />
              <div className="flex flex-col space-y-[10px]">
                <h4 className="text-lg mini:text-[32px] text-white text-center mini:text-start">
                  Partnerships
                </h4>
                <p className="font-primary text-sm mini:text-base text-center mini:text-start text-white max-w-[486px]">
                  In addition, we will be partnering with Decentraland, BSC, and
                  other similar projects to bring metaverse experience with NFT
                  gaming to achieve our long-term goal. Kittynomica Token
                  provides utility through; NFTs, Gaming, Metaverse and
                  Community
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
