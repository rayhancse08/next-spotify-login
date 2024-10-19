// components/Moodboard.js
import styled from 'styled-components';

const RoomWrapper = styled.div`
  background: linear-gradient(160deg, #000428, #004e92);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const AccentColor = styled.div`
  background-color: #f2994a;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 20px;
`;

const RoomTitle = styled.h1`
  font-size: 2.5rem;
  font-family: 'Jokker', sans-serif;
`;

const RoomDescription = styled.p`
  font-size: 1.2rem;
  width: 60%;
  text-align: center;
`;

const Moodboard = () => (
  <RoomWrapper>
    <RoomTitle>Moody Vibes with Warm Accents</RoomTitle>
    <RoomDescription>
      Inspired by the energetic sounds of Fetty Wap and Juice WRLD, this room blends deep blues and purples with warm oranges and reds to create a space where music meets ambiance.
    </RoomDescription>
    <AccentColor />
  </RoomWrapper>
);

export default Moodboard;
