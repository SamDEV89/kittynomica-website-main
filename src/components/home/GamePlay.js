import { ReactComponent as OrbGlow } from "assets/images/orb-glow.svg";
import { ReactComponent as ShinyOrb } from "assets/images/shiny-orb.svg";
import { ReactComponent as Pad } from "assets/images/pad.svg";
import gameplayMask from "assets/images/backgrounds/gameplay-mask.png";

const GamePlay = () => {
  return (
    <div className="mt-[152px] relative">
      <div className="absolute top-0 right-[-183.06px] z-[1]">
        <OrbGlow />
      </div>
      <div className="bg-purple h-full flex flex-col relative">
        <img
          src={gameplayMask}
          alt="Gameplay mask"
          className="absolute hidden md:block z-[0] pointer-events-none left-0 top-0 h-full w-full object-cover"
        />
        <div className="ml-5 mt-[48px] md:ml-[15%] mr-4 md:mt-[2%] z-[2]  flex flex-col space-y-2">
          <h2 className="text-[30px] md:text-[55px] uppercase text-white outlined-bordered-text">
            Gameplay
          </h2>
          <p className="max-w-[486px] md:pb-[280px] text-white font-[200] font-primary">
            Kittynomica Token Game contains ten enjoyable, fast-paced stages
            that increase complexity as the player advances. To reach the
            Kittynomica House and complete the game, players must dash over and
            under platforms, enemies, and even a werewolf neighborhood. There
            are three difficulty settings: Casual, Elite, and Pro. "Casual"
            provides players with three more lives and a maximum prize of 1,000
            tokens. "Elite" mode gives 2x lives and a maximum prize of 3,000
            tokens, while "Pro" mode offers a maximum payoff of 10,000 tokens
            but only 1x life. If a player completes the game by reaching the
            Kittynomica house at the conclusion of level 10, the earned tokens
            are instantly accessible for claim and trading in their crypto
            wallet.
          </p>
          <div className="md:hidden !mt-[-60px] !mb-[-60px]">
          <Pad
            className="w-full h-full"
          />
          </div>
        </div>
        <div className="ml-5 mt-[48px] mr-4 md:ml-auto md:mt-[20%] md:mr-[10%] z-[2] flex flex-col space-y-2 px-2">
          <h3 className="uppercase text-white text-lg md:text-[36px]">The Global Gaming Market</h3>
          <p className="max-w-[486px] md:pb-[280px] text-white font-primary">
            The Gaming Market was valued at USD 198.40 billion in 2021, and it
            is estimated to reach a value of USD 339.95 billion by 2027, showing
            a CAGR of 8.94 % over 2022-2027.It is anticipated that this growth
            will continue in the future years. The gaming business trends
            indicate that the sector is on track to generate total sales of
            $314.4 billion by 2026. At Kittynomica, we will ensure the value of
            our community's investment over the long run by employing various
            game-based optimization tactics to increase the value of our token.
            <div className="flex space-x-1 items-center mt-[5px]">
              <div className="bg-lightPurple h-[5px] w-[50px] rounded" />
              <div className="bg-lightPurple/40 h-[5px] w-[20px] rounded" />
              <div className="bg-lightPurple/40 h-[5px] w-[20px] rounded" />
            </div>
          </p>
        </div>
        <ShinyOrb className="md:hidden w-full"/>
        {/*         
        <div className="absolute left-[-80%] bottom-0">
          <Orb />
        </div> */}
      </div>
    </div>
  );
};

export default GamePlay;
