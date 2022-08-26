import styled from "styled-components";

const BonusWrapper = styled.div`
  padding: 14px;
  background: linear-gradient(
    180deg,
    rgba(219, 70, 165, 1),
    rgba(136, 101, 213, 1),
    rgba(150, 244, 173, 1),
    rgba(159, 172, 210, 1)
  );
`;

const bonuses = [
  { name: "Stage 1", bonus: 9 },
  { name: "Stage 2", bonus: 7 },
  { name: "Stage 3", bonus: 5 },
];
const Bonuses = () => {
  return (
    <div className="!mt-[270px]">
      <h3 className="md:text-[40px] text-lg text-center text-white lg:mb-[150px] mb-[50px]">
        Bonuses
      </h3>
      <div className="flex flex-col space-y-[70px] items-center justify-center md:flex-row md:space-y-0 md:space-x-[100px]">
        {bonuses.map((bonus, index) => (
          <div
            key={index}
            className="flex items-center justify-center flex-col lg:space-y-[60px] space-y-[20px] bonus"
          >
            <BonusWrapper className="w-[150px] h-[150px] lg:w-[236px] lg:h-[236px] rounded-[50%]">
              <div className="flex items-center justify-center bg-dark h-full w-full rounded-[50%]">
                <h3 className="text-white text-center text-[48px] lg:text-[80px]">
                  {bonus.bonus}%
                </h3>
              </div>
            </BonusWrapper>
            <h3 className="text-white text-center text-[28px] lg:text-[48px]">
              {bonus.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bonuses;
