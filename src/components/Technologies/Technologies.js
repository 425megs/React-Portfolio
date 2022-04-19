import React from 'react';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Hr, List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionTitle>Technologies</SectionTitle>
    <Hr/>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            HTML <br />
            CSS <br />
            JavaScript <br />
            jQuery <br />
            APIs <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            JavaScript <br />
            OOP <br />
            SQL / MySQL <br />
            MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Bootstrap <br />
            MUI <br />
            Bulma <br />
            Foundation 
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

  </Section>
);

export default Technologies;
