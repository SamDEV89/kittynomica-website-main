import styled from "styled-components";
import ovals from "assets/images/backgrounds/ovals.svg";
import { ReactComponent as Kitty } from "assets/images/small-kitty.svg";
import { ReactComponent as Wallet } from "assets/images/wallet.svg";
import { ReactComponent as Community } from "assets/images/community.svg";
import { ReactComponent as NFT } from "assets/images/nft.svg";
import { ReactComponent as MetaVerse } from "assets/images/metaverse.svg";
import { ReactComponent as CurvedArrow } from "assets/images/curved-arrow.svg";
import { ReactComponent as Vision } from "assets/images/eye.svg";
import { ReactComponent as Mission } from "assets/images/mission.svg";
import { ReactComponent as Value } from "assets/images/diamond.svg";
import origin from "assets/images/backgrounds/origin.svg";

const points = [
  {
    name: "Vision",
    text: "At Kittynomica Token, we are working together to develop and create the biggest and most versatile NFT marketplace and gaming ecosystem in the metaverse that has been lacking in other memecoin projects.",
    icon: <Vision />,
  },
  {
    name: "Mission",
    text: "With the advent of the metaverse, we want our players to enjoy the adventure and explore our metaverse while benefiting from Play-2-earn gaming models by playing a game in the metaverse, earning tokens and generating NFTs while dashing over and under platforms, enemies, and even a werewolf neighborhood in the KittynomicaVerse.",
    icon: <Mission />,
  },
  {
    name: "Value",
    text: "We believe in bringing the metaverse to players through generative NFTs and adventure-packed gaming experiences. Kittynomica intends to launch the first NFT Marketplace in the metaverse, where players can earn tokens and generate NFTs. With this, we are bringing P2E gaming, generative NFTs, and metaverse experiences to the global teaming gaming audience in the cryptocurrency space.",
    icon: <Value />,
  },
];

const AboutContent = styled.div`
  background: url(${ovals});
  background-size: cover;
  background-position: -10%;
  background-repeat: no-repeat;
  padding-bottom: 185px;
  .bg {
    top: -250px;
    overflow-y: hidden;
    svg {
      height: 100%;
      width: 100%;
    }
  }
  .box {
    background: linear-gradient(180deg, #03020c 0%, rgba(3, 2, 12, 0) 100%);
    border-radius: 20px;
    width: 280px;
    height: 120px;
    border-top: 1px solid #6e5cb6;
  }
`;

const OriginContent = styled.div`
  background: #0d0929 url(${origin});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 3px solid #d45e89;
  box-shadow: 0px 1px 114px rgba(212, 94, 137, 0.3);
  backdrop-filter: blur(70px);
  border-radius: 30px;
  padding: 27px 50px 54px 50px;
  .header {
    width: 157.15px;
    position: relative;
    width: 548px;
    display: grid;
    align-items: center;
  }
`;

const details = [
  { icon: <Wallet />, text: "Play-to-earn" },
  { icon: <Community />, text: "Community participation" },
  { icon: <NFT />, text: "NFTs" },
  { icon: <MetaVerse />, text: "Metaverse integration(KittynomicaVerse)" },
];

const About = () => {
  return (
    <div
      className="max-w-[1168px] px-4 mx-auto mt-[100px] mini:mt-[200px] flex flex-col space-y-5 mini:space-y-[50px]"
      id="about"
    >
      <h3 className="text-white text-center text-lg mini:text-2xl">About Kittynomica TOKEN</h3>
      <AboutContent className="max-w-[1168px] mx-auto flex flex-col items-center space-y-[50px] relative">
        <Kitty />
        <p className="text-white text-sm mini:text-base font-primary text-[20px] text-center max-w-[809px]">
          Kittynomica Token is one of the most anticipated games in the NFT
          Metaverse for 2022. It is a P2E warfare and adventurous game
          environment in the metaverse, complete with an integrated generative
          NFT marketplace based on a layer-2 solution (Binance Smart Chain). We
          aim to build an immersive metaverse environment through:
        </p>
        <div className="mini:flex-row flex-col space-y-[50px] mini:space-y-0 flex mini:space-x-4">
          {details.map((detail, index) => (
            <div
              className="relative box flex flex-col items-center"
              key={index}
            >
              <div className="mt-[-36px]">{detail.icon}</div>
              <p className="mt-4 text-center text-white font-header text-[18px]">
                {detail.text}
              </p>
            </div>
          ))}
        </div>
      </AboutContent>
      <OriginContent className="w-full mini:w-[1168px] mx-auto relative flex flex-col space-y-6 mini:space-y-[72px]">
        <div className="flex flex-col items-center justify-center">
          <div className="header reltive">
            <div className="absolute">
              <CurvedArrow />
            </div>
            <h3 className="text-lg mini:text-[36px] text-white text-center">
              Origin of Kittynomica Token
            </h3>
          </div>
          <p className="text-white text-sm mini:text-base mt-5 mini:mt-[20px] text-center font-primary mini:leading-8">
            Kittynomica Token is inspired by the rise of memcoin and its NFT
            gaming. The developers thought it wise to fuse gaming and metaverse
            technologies into an ecosystem that allows for trading NFTs and
            in-game assets. This was lacking in similar projects. With the
            Kittynomica token's emergency, the developer decided to provide the
            teaming fans of these tokens with a gamified metaverse experience.
            Kittynomica Token – a new token design to bring metaverse and NFT
            gaming to memecoin lovers.
          </p>
        </div>
        <div className="mini:flex-row flex-col space-y-[50px] mini:space-y-0 flex mini:space-x-6">
          {points.map((point, index) => (
            <div className="flex flex-col flex-1" key={index}>
              {point.icon}
              <h3 className="start:text-[22px] mini:text-[32px] mt-3 mini:mt-[17.25px] text-white">
                {point.name}
              </h3>
              <p className="mini:mt-[10px] text-sm mini:text-base mt-2 font-primary text-white">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </OriginContent>
    </div>
  );
};

export default About;
