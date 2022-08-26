import styled from "styled-components";
import { ReactComponent as CurvedArrow } from "assets/images/curved-arrow.svg";
import origin from "assets/images/backgrounds/origin.svg";

const Wrapper = styled.div`
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
    position: relative;
    display: grid;
    align-items: center;
  }
`;

const TokenEcosystem = () => {
  return (
    <Wrapper className="mt-[133px] mb-[80.7px] w-[90%] lg:w-[972px] relative mx-auto">
      <div className="flex flex-col items-center justify-center">
        <div className="header relative">
          <div className="absolute">
            <CurvedArrow />
          </div>
          <h3 className="start:text-[22px] mini:text-[36px] text-white text-center">
            Kittynomica Token Ecosystem
          </h3>
        </div>
        <p className="text-white text-sm mini:text-base mt-5 mini:mt-[20px] text-center font-primary mini:leading-8">
          Kittynomica token's sole aim is to be listed on many exchanges as
          possible to provide our teaming lovers with access to our ecosystem.
        </p>
      </div>
    </Wrapper>
  );
};

export default TokenEcosystem;
