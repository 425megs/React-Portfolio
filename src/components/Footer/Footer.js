import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id="footer">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:425megs@gmail.com">
            425megs@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/425megs">
            <AiFillGithub size="50px" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/megankmclean">
            <AiFillLinkedin size="50px" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
