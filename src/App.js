import Card from './components/UI/Card';
import './App.css';
import { Input, Image, Tag, Row, Col } from 'antd';
import styled from 'styled-components';

function App() {

  const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  background-color: midnightblue;
  `;

  const Username = styled.p`
  color: white;
  margin: 25px 0px 0px 75px;
  font-weight: 400;
  font-family:Arial, Helvetica, sans-serif;
  font-size: 20px;
  `;

  const About = styled.p`
  color: white;
  font-size: 15px;
  margin: 3px 0px 0px 60px;
  padding: 15px;
  `

  const Stat = styled.span`
  color: white;
  font-size: 13px;
  &:nth-child(1) {
    margin-left: 75px;
  };
  &:nth-child(2) {
    padding-left: 45px;
    padding-right: 45px;
  };
  `
  const Container = styled.div`
  display: inline-flex;
  flex-flow: row wrap;
  margin: 15px 0px 45px 75px;
  gap: 5px;
  `


  return (
    <Background>
      <Input className='search' />
      <Card>

        <Col>
          <Image
            width={100}
            height={100}
            style={{ borderRadius: 100, boxShadow: "0 0 4px 8px midnightblue", margin: "45px" }}
            src="https://via.placeholder.com/300"
            alt="avatar" />
        </Col>
        <Col className='description'>
          <Row>
            <Username>Brad Traversy</Username>
          </Row>
          <Row>
            <About>Full stack developer and online instructor, specializing in mostly JS, but also write Python, PHP and some other stuff.</About>
          </Row>
          <Row>
            <Stat>31852 Followers</Stat>
            <Stat>6 Following</Stat>
            <Stat>205 Repos</Stat>
          </Row>
          <Container>
          <Tag color="midnightblue">project tag</Tag>
          <Tag color="midnightblue">project tag</Tag>
          <Tag color="midnightblue">project tag</Tag>
          <Tag color="midnightblue">project tag kkkk</Tag>
          <Tag color="midnightblue">project tag</Tag>
          <Tag color="midnightblue">project tag here</Tag>
          <Tag color="midnightblue">project tag wioewoeuu</Tag>
          <Tag color="midnightblue">project tag</Tag>
          </Container>
        </Col>

      </Card>
    </Background>
  );
}

export default App;
