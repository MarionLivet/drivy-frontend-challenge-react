import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  display: block;
  max-width: 100%;
`;

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  color: #333;
  text-decoration: none;
  border-radius: 5px;
  overflow: hidden;
`;

const Content = styled.div`
  position: relative;
  padding: 10px 20px;
  background: #f7f9f9;
  transition: 300ms ease background;

  ${Wrapper}:hover & {
    background: #f1f5f5;
  }
`;

const Title = styled.div`
  position: relative;
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  color: #262959;

  span {
    position: relative;
  }

  ::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 0;
    background: #00d9d9;
    transition: 300ms ease height;
  }

  ${Wrapper}:hover &::before {
    height: 10px;
  }
`;

const Price = styled.div`
  position: absolute;
  right: 0;
  top: -50px;
  padding: 4px 16px 9px 16px;
  background: #50588c;
  font-size: 20px;
  color: #fff;
  transform: translateX(5px);
  transition: transform 300ms ease;

  ${Wrapper}:hover & {
    transform: translateX(0);
  }
`;

const Car = ({
  picturePath,
  model,
  brand,
  price,
}) => (
  <Wrapper href="#">
    <Image src={`http://localhost:3001/${picturePath}`} alt={model} />
    <Content>
      <Title><span>{brand} {model}</span></Title>
      <Price>{price}€</Price>
    </Content>
  </Wrapper>
);

export default Car;