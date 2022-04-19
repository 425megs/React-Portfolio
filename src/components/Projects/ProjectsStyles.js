import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  padding: 2px;
  border-radius: 10px;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
margin-top: 20px;
padding: 20px;
place-items: center;
column-gap: 20px;
row-gap: 40px;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 0;
}

`

export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 2px 2px 10px #BEBBBB;
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  color: #fff;
  padding-top: 10px;
  font-size: 30px;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #fff;
  padding: 5px 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #33A1FD;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #fff;
  font-style: 20px;
  line-height: 24px;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:5px;
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 25px 0;
`;

export const ExternalLinks = styled.a`
color:#fff;
font-size: 16px;
padding:10px 15px;
background: #E6AF2E;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #E2C789;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 20px;
`
export const Tag = styled.li`
color: #33A1FD;
font-size: 15px;
`