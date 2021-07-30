import styled from "styled-components";


export const TitleContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 500px;
  position: relative;
  z-index: 1;
  overflow-y: hidden;

  @media screen and (max-width: 1200px) {
    height: 800px;
    overflow-y: hidden;
  }
`;

export const TitleBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const TitleVideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const TitleContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const TitleText = styled.div`
  z-index: 3;
  max-width: 1200px;

  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleH1 = styled.h1`
  color: #fff;
  font-size: 40px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const TitleP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const TitleIcons = styled.div`
  margin-top: 30px;
  display: flex;
  font-size: 40px;
  text-align: center;
  max-width: 600px;
`;

export const TitleButton = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconLink = styled.p`
  font-size: 26px;
  color: #fff;
  cursor: pointer;
  margin-right: 15px;
  border: 1px solid white;
  border-radius: 25px;
  padding: 3px 5px;
`;

export const Button = styled.button`
 background-color: #01bf71;
  border-radius: 50px;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  outline: none;
  white-space: nowrap;
  color: #010606;
  transition: all 0.2s ease-in-out;
  margin-right: 10px;
`

