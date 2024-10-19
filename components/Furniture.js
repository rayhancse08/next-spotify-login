// components/Furniture.js
import styled from 'styled-components';

const FurnitureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 50px;
`;

const FurnitureItem = styled.div`
  background: ${({ type }) => (type === 'velvet' ? '#550a46' : '#333')};
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  color: white;
  font-family: 'EpilepsySansBold';
`;

const Furniture = () => (
  <FurnitureGrid>
    <FurnitureItem type="velvet">Plush Velvet Couch</FurnitureItem>
    <FurnitureItem type="leather">Leather Armchair</FurnitureItem>
    <FurnitureItem type="bed">Cozy Bed with Soft Bedding</FurnitureItem>
  </FurnitureGrid>
);

export default Furniture;
