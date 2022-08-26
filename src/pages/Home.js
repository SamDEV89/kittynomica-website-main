import { ReactComponent as Kitty } from "assets/images/kitty.svg";
import { ReactComponent as Ecosystem } from "assets/images/backgrounds/ecosystem.svg";
import { ReactComponent as EcosystemChart } from "assets/images/backgrounds/ecosystem-chart.svg";
import { ReactComponent as Decentraland } from "assets/images/logos/decentraland.svg";
import { ReactComponent as BinanceLaunchPad } from "assets/images/logos/binance-launchpad-logo.svg";
import { ReactComponent as DogeCoin } from "assets/images/logos/dogecoin.svg";
import { ReactComponent as LeftBlur } from "assets/images/left-blur.svg";
import { ReactComponent as RightBlur } from "assets/images/right-blur.svg";
import TopNav from "components/navigation/TopNav";
import PrimaryAnchor from "components/buttons/PrimaryAnchor";
import About from "components/home/About";
import GamePlay from "components/home/GamePlay";
import Features from "components/home/Features";
import RoadMap from "components/home/RoadMap";
import Footer from "components/navigation/Footer";
import { LINKS } from "utils/constants";
import HeroContainer from "./styles";
import CountDown from "components/home/CountDown";
import TokenEcosystem from "components/home/TokenEcosystem";
import Bonuses from "components/home/Bonuses";

const Home = () => {
  return (
    <div>
      <HeroContainer>
        <TopNav />
        <div className="wrapped px-4">
          <div className="mini:mt-[106px] start:mt-[42px] flex flex-col-reverse mini:flex-row items-center mini:space-x-[30px]">
            <div className="hero-text flex flex-col space-y-5 max-w-[541px]">
              <h1 className="hidden mini:block font-primary-bold">
                Kittynomica TOKEN
              </h1>
              <h3 className="start:text-2xl mini:text-[36px] text-white text-center mini:text-start">
                A P2E warfare and adventurous game environment in the metaverse
                (KittynomicaVerse)
              </h3>
              <p className="font-primary mini:text-base mini:text-start text-center text-white">
                Kittynomica Token is a complete ecosystem built on the Binance
                Smart Chain network that features futuristic characters in a
                metaverse where users can play games, earn tokens, and generate
                NFTs on layer-2 solution. With Kittynomica Token, you can trade
                your exclusive NFTs in our metaverse-based NFT Marketplace while
                exploring the vast universe of our metaverse as you battle with
                the game character called Kittynomica, assemble your army and
                win battles in this virtual universe.
              </p>
              <div className="flex flex-col mini:flex-row space-y-5 mini:space-y-0 items-center space-x-[33px] justify-center mini:items-start mini:justify-start">
                <PrimaryAnchor text="Buy Presale" href={LINKS.BUY} />
                <PrimaryAnchor
                  text="Read Whitepaper"
                  width="210px"
                  href={LINKS.WEBSITE}
                />
              </div>
              <div className="mt-[48px] mini:hidden">
                <CountDown />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="max-w-[254px] md:max-w-[454px]">
                <Kitty className="w-full h-full" />
              </div>
              {/* <div className="mt-[25px] hidden mini:block">
                <CountDown />
              </div> */}
            </div>
          </div>
        </div>
      </HeroContainer>
      <About />
      <GamePlay />
      <Features />
      <TokenEcosystem />
      <div className="px-4 flex items-center justify-center relative overflow-hidden pb-5 mb-[200px]">
        <div className="absolute z-[0] top-0">
          <Ecosystem />
        </div>
        <div className="flex flex-col space-y-5 z-[1]" id="tokenomics">
          <h3 className="text-white text-center text-[20px] mini:text-3xl">
            Kittynomica Token Allocation
          </h3>
          <p className="text-white text-center leading-8 font-primary">
            The Kittynomica ecosystem will have a total supply of 1,000,000,000
            $KIN tokens which will be distributed as follows:
          </p>
          <div className="mt-[100px] ecosystem-chart-wrapper">
            <EcosystemChart className="w-full h-full" />
          </div>
          {/* <Bonuses /> */}
        </div>
      </div>
      <RoadMap />
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
            <BinanceLaunchPad className="w-full" />
            <Decentraland className="w-full" />
            <DogeCoin className="w-full" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
