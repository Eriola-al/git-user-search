import Card from './components/UI/Card';
import './App.css';
import { Input, Image, Tag, Row, Col } from 'antd';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

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
  font-weight: 600;
  font-family:Arial, Helvetica, sans-serif;
  font-size: 20px;
  `;

const About = styled.p`
  color: white;
  font-size: 15px;
  margin: 3px 0px 0px 60px;
  padding: 15px;
  `;

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
const Tags = styled.div`
  display: inline-flex;
  flex-flow: row wrap;
  margin: 15px 0px 45px 75px;
  gap: 5px;
  `;

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/bradtraversy")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return "Loading...";
  if (error) return "Error!";

  return (
    <Background>

    <Input className='search' />
      <Card>

      <>
        <Col>
          <Image
            width={100}
            height={100}
            style={{ borderRadius: 100, boxShadow: "0 0 4px 8px midnightblue", margin: "45px" }}
            src={data.avatar_url}
            alt="avatar" />
        </Col>
        <Col className='description'>
          <Row>
            <Username>{data.name}</Username>
          </Row>
          <Row>
            <About>{data.bio}</About>
          </Row>
          <Row>
            <Stat>{data.followers} Followers</Stat>
            <Stat>{data.following} Following</Stat>
            <Stat>{data.public_repos} Repos</Stat>
          </Row>
          <Tags>
            <Tag color="midnightblue">popular repo</Tag>
          </Tags>
        </Col>
        </>
      
      </Card>
    </Background>
  );
}

export default App;
