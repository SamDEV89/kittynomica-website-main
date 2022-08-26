import styled from "styled-components";
import { ReactComponent as RoadMapSvg } from "assets/images/roadmap.svg";
import { ReactComponent as BigRoadMapSvg } from "assets/images/big-roadmap.svg";
import mesh from "assets/images/backgrounds/mesh.svg";

const Wrapper = styled.div`
  .inner-inner {
    width: 100%;
    background: url(${mesh});
    background-size: cover;
    background-position: center;
  }
`;

const RoadMap = () => {
  return (
    <Wrapper className="bg-pink" id="roadmap">
      <div className="roadmap-inner">
        <div className="inner-inner flex flex-col mini:flex-row px-4">
          <h3 className="text-white mb-5 mt-[110px] mr-[95px]">Roadmap</h3>
          <BigRoadMapSvg className="hidden mini:block" />
          <RoadMapSvg className="block mini:hidden w-full h-full" />
        </div>
      </div>
    </Wrapper>
  );
};

export default RoadMap;
