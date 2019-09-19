import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Car from './Car';

const CarsWrapper = styled.div`
  max-width: 1200px;
  margin:  0 auto 80px auto;
  padding: 0 12px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  @media(max-width: 880px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media(max-width: 460px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CarsList = () => {
  const [data, setData] = useState([]);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const url = `http://localhost:3001/cars.json`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setCars(data);
      });
  }, []);

  return (
    <div>
      <CarsWrapper>
        {cars && cars.map((car, i) => (
          <Car key={car.id} style={{marginBottom: 30}} {...car} />
        ))}
      </CarsWrapper>
    </div>
  );
};

export default CarsList;