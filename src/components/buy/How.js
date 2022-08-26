import styled from "styled-components";
import { ReactComponent as Vector } from "assets/images/Vector.svg";
import { ReactComponent as Vector1 } from "assets/images/Vector1.svg";

const OriginContent = styled.div`
  background: #0d0929;
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

  .text-medium {
    font-size: 20px;
  }
`;

const How = () => {
  return (
    <div className="max-w-[1168px] px-4 mx-auto mt-[100px] mini:mt-[200px] flex flex-col space-y-5 mini:space-y-[50px] ">
      <h3 className="text-white text-center text-lg mini:text-2xl">
        How to Buy Kittynomica{" "}
      </h3>

      <OriginContent className="w-full mini:w-[1168px] mx-auto relative flex flex-col space-y-6 mini:space-y-[72px]">
        <div className="flex flex-col">
          <div>
            <h3 className="text-lg mini:text-[36px] text-white text-center mb-5 mt-5">
              Step 1
            </h3>
          </div>
          <p className="text-white text-sm mini:text-base mt-5 mini:mt-[20px]  font-primary mini:leading-8">
            You must first create a digital wallet in order to get your $KIN
            tokens. We advise using Metamask as your wallet but you could use
            wallet connect if you already have another wallet.
          </p>
        </div>
      </OriginContent>

      <div className="flex flex-col items-center ">
        <Vector className="w-90" />
      </div>

      <OriginContent className="w-full mini:w-[1168px] mx-auto relative flex flex-col space-y-6 mini:space-y-[72px]">
        <div className="flex flex-col">
          <div>
            <h3 className="text-lg mini:text-[36px] text-white text-center mb-5 mt-5">
              Step 2
            </h3>
          </div>
          <p className="text-white text-sm mini:text-base mt-5 mini:mt-[20px]  font-primary mini:leading-8">
            When this has been done, it is time to buy BNB. This is possible on
            exchanges like Binance. Send the BNB to your wallet once you've made
            the purchase. You can now trade your BNB for KIN tokens.
          </p>
        </div>
      </OriginContent>

      <div className="flex flex-col items-center ">
        <Vector1 className="w-90" />
      </div>

      <OriginContent className="w-full mini:w-[1168px] mx-auto relative flex flex-col space-y-6 mini:space-y-[72px]">
        <div className="flex flex-col">
          <div>
            <h3 className="text-lg mini:text-[36px] text-white text-center mb-5 mt-5">
              Step 3
            </h3>
          </div>
          <p className="text-white text-sm mini:text-base mt-5 mini:mt-[20px]  font-primary mini:leading-8">
            When you click connect wallet, a pop-up will appear. Select your
            preferred wallet and you'll be taken to a new page. Once here,
            select the 'Buy With BNB' button and another pop-up will appear.
            Click buy and the transaction will be made. Congratulations, you
            have just bought into the Kittynomica presale!
          </p>
        </div>
      </OriginContent>

      <div className="flex flex-col items-center ">
        <Vector1 className="w-90" />
      </div>

      <OriginContent className="w-full mini:w-[1168px] mx-auto relative flex flex-col space-y-6 mini:space-y-[72px]">
        <div className="flex flex-col">
          <div>
            <h3 className="text-lg mini:text-[36px] text-white text-center mb-5 mt-5">
              Step 4
            </h3>
          </div>
          <p className="text-white text-sm mini:text-base mt-5 mini:mt-[20px]  font-primary mini:leading-8">
            {" "}
            Once the presale ends your KIN tokens will be made available to you
            via the main website (Kittynomica.io). A new button will appear on
            the website which is where your tokens will be located.
          </p>
        </div>
      </OriginContent>
    </div>
  );
};

export default How;
