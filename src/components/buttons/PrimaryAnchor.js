import styled from "styled-components";

const OuterWrapper = styled.a`
  filter: drop-shadow(0px 1px 14px #6549b9);
  margin-top:1rem;
`;

const Wrapper = styled.div`
  padding: 3px;
  margin-right: auto;
  background: #6549b9;
  height: 54px;
  width: ${(props) => props.width ?? "181px"};
  clip-path: polygon(15% 0, 100% 0, 100% 74%, 85% 100%, 0 100%, 0 26%);
  box-shadow: 0px 1px 14px #6549b9;

  .inner {
    height: 100%;
    width: 100%;
    clip-path: polygon(15% 0, 100% 0, 100% 74%, 85% 100%, 0 100%, 0 26%);
    box-shadow: 0px 1px 14px #6549b9;
    background: ${(props) => (props.filled ? "#6549b9" : "#02010A")};
  }

  h4 {
    font-size: 18px;
    text-align: center;
    color: #fff;
  }
`;

const PrimaryAnchor = ({ text, href, width, filled, onClick }) => {
  return (
    <OuterWrapper href={href} onClick={onClick}  >
      <Wrapper width={width} filled={filled}>
        <div className="inner flex items-center justify-center cursor-pointer">
          <h4>{text}</h4>
        </div>
      </Wrapper>
    </OuterWrapper>
  );
};

export default PrimaryAnchor;
