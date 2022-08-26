import { ReactComponent as Kitty } from "assets/images/kitty.svg";
import { ReactComponent as Decentraland } from "assets/images/logos/decentraland.svg";
import { ReactComponent as BinanceLaunchPad } from "assets/images/logos/binance-launchpad-logo.svg";
import { ReactComponent as DogeCoin } from "assets/images/logos/dogecoin.svg";
import { ReactComponent as LeftBlur } from "assets/images/left-blur.svg";
import { ReactComponent as RightBlur } from "assets/images/right-blur.svg";
import TopNav from "components/navigation/TopNav";
import Footer from "components/navigation/Footer";
import HeroContainer from "./styles";
import Progress from "components/Progress/Progress";
import How from "components/buy/How";
import Contract from "components/buy/Contract";
import WalletModal from "components/Modals/WalletModal/Modal";

const Buy = () => {
  return (
    <div>
      <HeroContainer>
        <TopNav />
        <div className="wrapped px-4">
          <div className="mini:mt-[106px] start:mt-[42px] flex flex-col-reverse mini:flex-row items-center mini:space-x-[100px]">
            <div className="hero-text flex flex-col space-y-5 max-w-[541px]">
              <h1 className="hidden mini:block font-primary-bold">
                GET IN EARLY ON THE <span>KITTYNOMICA </span>PRE-SALE
              </h1>
              <p className="font-primary mini:text-base mini:text-start text-center text-white">
                Now is the time to join the Kittynomica presale! Our
                step-by-step guide makes it easier than ever to buy your first
                $KIN tokens. Once you are ready to proceed simply click the
                connect wallet button.
              </p>
              <p className="font-primary mini:text-base mini:text-start text-center text-white">
                1 USDT = 66.67 MWY
              </p>
              <p className="font-primary mini:text-base mini:text-start text-center text-white">
                USDT Raised : $4,072,869.985 / $4,750,000
              </p>
              <Progress done="80" />
            </div>
            <div className="flex flex-col justify-between items-center ">
              <div className="max-w-[254px] md:max-w-[450px] flex flex-col items-center">
                <Kitty className="w-80 -mb-28 kitty" />
                <div className="p-[50px] border-gradient ">
                  <h3 className="text-3xl  small:text-2xl  mb-[1rem] text-center  text-white">
                    45,142,001
                  </h3>
                  <h3 className="text-3xl mb-[1rem] text-center text-white">
                    MWY REMAINING
                  </h3>
                  <h3 className="text-3xl mb-[1rem] text-center text-white">
                    UNTIL 1 USDT=57.14 KIN
                  </h3>
                </div>
              </div>
              <div className="flex mt-[35px]  flex-col mini:flex-row space-y-5 mini:space-y-0 items-center space-x-[33px] justify-center mini:items-start mini:justify-start">
                <WalletModal />
              </div>
            </div>
          </div>
        </div>
      </HeroContainer>
      <How />
      <Contract />
      <div className="px-4 py-[170px] flex items-center justify-center overflow-hidden relative">
        <div className="absolute left-[-100px] top-0">
          <LeftBlur />
        </div>
        <div className="absolute right-[-100px] top-0">
          <RightBlur />
        </div>
        <div
          className="flex flex-col space-y-[42px] items-center justify-center"
          id="partners"
        >
          <h3 className="text-white text-center">Partners </h3>
          <div className="flex-col space-y-5 px-4 flex items-center mini:space-x-[19px] mini:flex-row mini:space-y-0">
            <BinanceLaunchPad className="w-80" />
            <Decentraland className="w-80" />
            <DogeCoin className="w-80" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Buy;
