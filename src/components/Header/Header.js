import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiMega } from 'react-icons/si';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <SiMega size="4rem" />
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#footer">
          <NavLink>Contact</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/425megs" target="_blank">
          <AiFillGithub size="50px" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/megankmclean" target="_blank">
          <AiFillLinkedin size="50px" />
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
