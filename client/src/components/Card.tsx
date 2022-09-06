import React from "react";
//styled components
import styled from "styled-components";
// types
import { Data } from "../utils/types";
//
import { Link } from "react-router-dom";

type StyleProps = {
  status: boolean;
};

const Card: React.FC<Data> = ({
  mission_name,
  launch_date_local,
  launch_success,
  ships,
  id,
}) => {
  const time = new Date(launch_date_local).toString().split("G")[0];

  return (
    <CardContainer>
      <Link to={`/launch/${id}`} />
      <Title>{mission_name}</Title>
      <ImageHolder>
        <img src={ships[0]?.image} alt={mission_name} />
      </ImageHolder>
      <Info status={launch_success}>
        <p>
          Status : <span>{launch_success ? "successful" : "failed"}</span>
        </p>
        <p>
          Date: <strong>{time}</strong>{" "}
        </p>
      </Info>
    </CardContainer>
  );
};

export default Card;
const CardContainer = styled.div`
  position: relative;
  background-color: #eeeeea;
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 2rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  border-radius: 8px;
  cursor: pointer;
  transition: all 300ms;
  a {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  :hover {
    transform: scale(105%);
  }
`;

const ImageHolder = styled.div`
  width: 95%;
  height: 15rem;
  margin: auto;
  border-radius: 8px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.h2`
  font-size: 2.1rem;
  font-weight: 700;
  text-align: center;
  padding-top: 1rem;
`;

const Info = styled.div<StyleProps>`
  width: 100%;
  padding: 0 0 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    font-size: 1.5rem;

    span {
      color: ${(props) => (props.status ? "green" : "red")};
      text-transform: capitalize;
    }
  }
`;
