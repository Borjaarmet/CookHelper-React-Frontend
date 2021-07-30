import React, { Component } from "react";
import { Link } from "react-router-dom";
import Video from "../../video/pexels-miguel-á-padriñán-6122138.mp4";

// import { Button } from "../ButtonElement";

import {
  TitleContainer,
  TitleBg,
  TitleVideoBg,
  TitleContent,
  TitleText,
  TitleH1,
  TitleP,
  TitleIcons,
  IconLink,
  TitleButton,
  Button,
} from "./titleElements";
import {
  TiSocialLinkedin,
  TiSocialFacebook,
  TiSocialGithub,
  TiSocialInstagram,
} from "react-icons/ti";


class TitleSection extends Component {
  constructor(props){
    super(props)
    this.state = {
      hover:false
    }
  }

  render(){
  return (
    <TitleContainer id="home">
      <TitleBg>
        <TitleVideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </TitleBg>
      <TitleContent>
        <TitleText>
          <TitleH1>COOK HELPER</TitleH1>
          <TitleP>
            We are an App that help you to find a recipe from the ingredients
            that you have in your fridge.Enjoy cooking!!
          </TitleP>

          <TitleIcons>
            <IconLink
              to={{
                pathname: "https://www.linkedin.com/in/borja-armet-alonso/",
              }}
              target="_blank"
            >
              <TiSocialLinkedin />
            </IconLink>
            <IconLink
              to={{
                pathname: "https://instagram.com/Borjaarmet",
              }}
              target="_blank"
            >
              <TiSocialInstagram />
            </IconLink>
            <IconLink
              to={{
                pathname: "https://github.com/Borjaarmet",
              }}
              target="_blank"
            >
              <TiSocialGithub />
            </IconLink>
            <IconLink
              to={{
                pathname: "https://facebook.com/Borjaarmet",
              }}
              target="_blank"
            >
              <TiSocialFacebook />
            </IconLink>
          </TitleIcons>
        </TitleText>
        <TitleButton>
          <Link to= '/signup'>
          <Button>
            Get started
          </Button>
          </Link>
        </TitleButton>
      </TitleContent>
    </TitleContainer>
  );
 }
};

export default TitleSection;
