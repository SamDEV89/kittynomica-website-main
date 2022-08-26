import { ReactComponent as Decentraland } from "assets/images/logos/decentraland.svg";
import { ReactComponent as BinanceLaunchPad } from "assets/images/logos/binance-launchpad-logo.svg";
import { ReactComponent as DogeCoin } from "assets/images/logos/dogecoin.svg";
import { ReactComponent as LeftBlur } from "assets/images/left-blur.svg";
import { ReactComponent as RightBlur } from "assets/images/right-blur.svg";
import TopNav from "components/navigation/TopNav";
import Footer from "components/navigation/Footer";
import HeroContainer from "./styles";
import How from "components/buy/How";
import Contract from "components/buy/Contract";
import Progress from "components/Progress/Progress";
import EthModal from "components/Modals/EthModal/Modal";
import UsdtModal from "components/Modals/UsdtModal/Modal";
import CardModal from "components/Modals/CardModal/Modal";

const Buy = () => {
  return (
    <div>
      <HeroContainer>
        <TopNav />
        <div className="wrapped px-4 py-12">
          <div className="mini:mt-[106px] start:mt-[42px] flex flex-col mini:flex-row items-center mini:space-x-[100px]">
            <div className="hero-text flex flex-col space-y-5 max-w-[541px]">
              <h1 className=" mini:block font-primary-bold center">
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
            <div className="flex flex-col justify-between gap-10 start:mt-[42px]">
              <EthModal />
              {/* <CardModal/>
                <UsdtModal/> */}
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
