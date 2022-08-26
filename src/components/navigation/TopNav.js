import { ReactComponent as Logo } from "assets/images/logo.svg";
import PrimaryAnchor from "components/buttons/PrimaryAnchor";
import { LINKS } from "utils/constants";

const TopNav = () => {
  return (
    <div className="flex justify-center mini:justify-between wrapped items-center pt-[32px] h-[80px] mini:px-5">
      <Logo className="flex-shrink-0" />
      <nav className="hidden mini:flex items-center space-x-[39px]">
        <a className="text-white text-base" href="#about">
          About
        </a>
        <a className="text-white text-base" href="#features">
          Features
        </a>
        <a className="text-white text-base" href="/buy">
          How to buy
        </a>
        <a className="text-white text-base" href="#tokenomics">
          Tokenomics
        </a>
        <a className="text-white text-base" href="#roadmap">
          Roadmap
        </a>
        <a className="text-white text-base" href="#partners">
          Partners
        </a>
        <PrimaryAnchor text="Buy Presale" href={LINKS.BUY} width="130px" filled />
        <PrimaryAnchor text="Claim" href={LINKS.WEBSITE} width="130px" filled />
        
      </nav>
    </div>
  );
};

export default TopNav;
