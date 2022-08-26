import styled from "styled-components";
import squares from "assets/images/backgrounds/squares.png";

const HeroContainer = styled.div`
  min-height: 100vh;
  background: url(${squares});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 4rem;
  .hero-text {
    h1 {
      font-weight: 900;
      font-size: 35px;
      line-height:49px;
      text-transform: uppercase;
      color:white;
     
    }
    span{
      background: linear-gradient(
          91.7deg,
          #db46a5 9.79%,
          #8865d5 35.03%,
          #96f4ad 70.95%,
          #9facd2 108.31%
        );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
  .border-gradient{
    padding: 4rem;
    min-height: 300px;
    border-radius: 0.8rem;
    position: relative;
    border: 1px solid #d45e89;
  }
  // .border-gradient::before{
  //   content: "";
  //   position: absolute;
  //   padding: 2px;
  //   border-radius: inherit;
  //   z-index: -1;
  //   top: -1px;
  //   bottom: -1px;
  //   right: -1px;
  //   left: -1px;
  //   background: linear-gradient(146.87deg, #5f36ff 3.58%, #08ff42 88.73%);
  // }
  .kitty{
    z-index:1;
  }
 
`;

export default HeroContainer;
