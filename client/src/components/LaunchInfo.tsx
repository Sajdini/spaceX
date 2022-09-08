import React from "react";
// styled mutual
import {
  InfoList,
  ListItem,
  Container,
  LeftAlignTitle,
  Paragraph,
} from "../utils/mutuals";
//styled
import styled from "styled-components";
//types
import { Launch } from "../utils/types";

const LaunchInfo: React.FC<Launch> = ({
  mission_name,
  launch_date_local,
  launch_success,
  details,
  launch_site,
  links,
}) => {
  const time = new Date(launch_date_local).toString().split("G")[0];
  return (
    <Container>
      <div>
        <LeftAlignTitle>
          <h3>Launch Info</h3>
        </LeftAlignTitle>
        <InfoList>
          <ListItem>
            <h3>Date and Time Launched : {time}</h3>
          </ListItem>
          <ListItem>
            <h3>
              Status :{" "}
              <span className={`${launch_success ? "success" : "error"}`}>
                {launch_success ? "successful" : "failed"}
              </span>
            </h3>
          </ListItem>
          <ListItem>
            <h3>Launch place : {launch_site.site_name_long}</h3>
          </ListItem>
        </InfoList>

        <Links>
          {links.article_link && (
            <p>
              <a href={links.article_link}>Read More</a>
            </p>
          )}
        </Links>

        <Links>
          {links.video_link && (
            <p>
              <a href={links.video_link}>Watch </a>
            </p>
          )}
        </Links>
        <ImageHolder>
          <img src={links.mission_patch} alt={mission_name} />
        </ImageHolder>
        <Paragraph>
          <p>{details}</p>
        </Paragraph>
      </div>
    </Container>
  );
};

export default LaunchInfo;

const Links = styled.div`
  p {
    font-size: 1.5rem;
    color: #555;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  :hover {
    p {
      color: #111;
    }
  }
`;

const ImageHolder = styled.div`
  position: absolute;
  max-width: 15rem;
  max-height: 15rem;
  right: 2px;
  top: 2px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 61.25em) {
    position: relative;
    margin: auto;
  }
`;
