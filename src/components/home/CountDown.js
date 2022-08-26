import { useCountdown } from "hooks/useCountdown";
import styled from "styled-components";

const OuterWrapper = styled.div`
  filter: drop-shadow(0px 1px 14px #6549b9);
`;

const Wrapper = styled.div`
  padding: 6px;
  background: linear-gradient(
    180deg,
    rgba(219, 70, 165, 1),
    rgba(136, 101, 213, 1),
    rgba(150, 244, 173, 1),
    rgba(159, 172, 210, 1)
  );
  clip-path: polygon(15% 0, 100% 0, 100% 74%, 85% 100%, 0 100%, 0 26%);

  .inner {
    height: 100%;
    padding: 15px 53px;
    width: 100%;
    clip-path: polygon(15% 0, 100% 0, 100% 74%, 85% 100%, 0 100%, 0 26%);
    @media (max-width: 600px) {
      padding: 10px;
    }
  }

  h4 {
    font-size: 18px;
    text-align: center;
    color: #fff;
  }
  .ring_ {
    height: 77px;
    width: 77px;
    border-radius: 38.5px;
    @media (max-width: 600px) {
      height: 45px;
      width: 45px;
    }
    padding: 5px;
    background: linear-gradient(
      180deg,
      rgba(219, 70, 165, 1),
      rgba(136, 101, 213, 1),
      rgba(150, 244, 173, 1),
      rgba(159, 172, 210, 1)
    );

    .ring-inner {
      height: 100%;
      width: 100%;
      border-radius: 38.5px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const CountDown = () => {
  const [days, hours, minutes, seconds] = useCountdown(new Date(2022, 10, 10));
  return (
    <OuterWrapper>
      <Wrapper>
        <div className="inner bg-dark">
          <h3 className="text-white text-[13px] mini:text-[21px] ml-[30px] mini:ml-0">
            Hurry! Presale will end in :
          </h3>
          <div className="mt-[10px] flex space-x-[23px]">
            <div className="flex flex-col space-y-3">
              <div className="ring_">
                <div className="ring-inner bg-dark">
                  <h2 className="text-white font-medium text-sm mini:text-[28px]">
                    {days}
                  </h2>
                </div>
              </div>
              <h3 className="text-white text-center text-sm mini:text-base">
                Day{days > 1 && "s"}
              </h3>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="ring_">
                <div className="ring-inner bg-dark">
                  <h2 className="text-white font-medium text-sm mini:text-[28px]">
                    {hours}
                  </h2>
                </div>
              </div>
              <h3 className="text-white text-center text-sm mini:text-base">
                Hour{hours > 1 && "s"}
              </h3>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="ring_">
                <div className="ring-inner bg-dark">
                  <h2 className="text-white font-medium text-sm mini:text-[28px]">
                    {minutes}
                  </h2>
                </div>
              </div>
              <h3 className="text-white text-center text-sm mini:text-base">
                Minute{minutes > 1 && "s"}
              </h3>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="ring_">
                <div className="ring-inner bg-dark">
                  <h2 className="text-white font-medium text-sm mini:text-[28px]">
                    {seconds}
                  </h2>
                </div>
              </div>
              <h3 className="text-white text-center text-sm mini:text-base">
                Second{seconds > 1 && "s"}
              </h3>
            </div>
          </div>
        </div>
      </Wrapper>
    </OuterWrapper>
  );
};

export default CountDown;
