import React from "react";
// types
import { LaunchType } from "../utils/types";
//react router
import { Link } from "react-router-dom";
//components
import { LeftAlignTitle } from "../utils/mutuals";
//styled
import styled from "styled-components";
// components
import RocketInfo from "./RocketInfo";
import LaunchInfo from "./LaunchInfo";
//react icons
import { IoMdArrowRoundBack } from "react-icons/io";

const Main: React.FC<LaunchType> = ({
  mission_name,
  launch_date_local,
  launch_success,
  details,
  launch_site,
  links,
  rocket,
}) => {
  return (
    <>
      <Container>
        <HomeLink>
          <Link to="/">
            <IoMdArrowRoundBack />
          </Link>
        </HomeLink>
        <LeftAlignTitle>
          <h1>{mission_name}</h1>
        </LeftAlignTitle>
        <LaunchInfo
          launch_date_local={launch_date_local}
          launch_success={launch_success}
          details={details}
          launch_site={launch_site}
          links={links}
          mission_name={mission_name}
        />
        <RocketInfo rocket={rocket} />
      </Container>
    </>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;
`;

const HomeLink = styled.div`
  position: absolute;
  top: -4rem;
  left: 0rem;
  svg {
    width: 4rem;
    height: 4rem;
    color: #000;
  }
`;
