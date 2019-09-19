import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Car from './Car';
import getCarPrice from '../logic/getCarPrice.js';

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

const Form = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 12px;
  background: #f7f9f9;
  border-radius: 5px;
  padding: 10px 20px;
  box-sizing: border-box;
`;

const Input = styled.input`
  background: #f7f9f9;
  flex: 1;
  border-radius: 5px;
  padding: 5px 8px;
  border: 1px solid #e2e2e2;
  font-size: 18px;
  transition: border 300ms ease;

  &:hover {
    border: 1px solid #c3c3c3;
  }
`;

const Label = styled.label`
  display: flex;
  margin: 5px 0;
  font-size: 18px;

  span {
    min-width: 20%;
  }
`;

const CarsList = () => {
  const [data, setData] = useState([]);
  const [cars, setCars] = useState([]);
  const [distance, setDistance] = useState(300);
  const [duration, setDuration] = useState(3);

  useEffect(() => {
    const url = `http://localhost:3001/cars.json?duration=${duration}&distance=${distance}`;
    
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setCars(data);
      });
  }, [distance, duration]);

  const carsWithPrice = cars.map((car) => ({
    ...car,
    price: getCarPrice(distance, duration, car),
  }));

  return (
    <div>
      <Form>
        <Label htmlFor="distance">
          <span>Distance (in km)</span>
          <Input
            id="distance"
            type="number"
            value={distance}
            onChange={(event) => setDistance(event.target.value)}
            max="3000"
            min="0"
          />
        </Label>
        <Label htmlFor="duration">
          <span>Duration (in days)</span>
          <Input
            id="duration"
            type="number"
            value={duration}
            onChange={(event) => setDuration(event.target.value)}
            max="30"
            min="1"
          />
        </Label>
      </Form>
      <CarsWrapper>
        {carsWithPrice && carsWithPrice.map((car, i) => (
          <Car key={car.id} style={{marginBottom: 30}} {...car} />
        ))}
      </CarsWrapper>
    </div>
  );
};

export default CarsList;