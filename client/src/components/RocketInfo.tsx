import React from "react";
import {
  InfoList,
  ListItem,
  Container,
  LeftAlignTitle,
  Paragraph,
} from "../utils/mutuals";

type data = {
  rocket: {
    rocket_name: string;
    rocket: {
      success_rate_pct: number;
      cost_per_launch: number;
      description: string;
    };
  };
};

const RocketInfo: React.FC<data> = ({ rocket }) => {
  const { rocket_name } = rocket;
  const { success_rate_pct, cost_per_launch, description } = rocket.rocket;
  return (
    <Container>
      <div>
        <LeftAlignTitle>
          <h3>Rocket Info</h3>
        </LeftAlignTitle>
        <InfoList>
          <ListItem>
            <h3>Rocket name : {rocket_name}</h3>
          </ListItem>
          <ListItem>
            <h3>Success rate : {success_rate_pct}%</h3>
          </ListItem>
          <ListItem>
            <h3>Cost per launch : ${cost_per_launch} </h3>
          </ListItem>
        </InfoList>
        <Paragraph>
          <p>{description}</p>
        </Paragraph>
      </div>
    </Container>
  );
};

export default RocketInfo;
