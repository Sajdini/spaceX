import { gql } from "@apollo/client";

export const LAUNCH_QUERY = gql`
  query LaunchQuery($id: ID!) {
    launch(id: $id) {
      details
      launch_date_local
      launch_success
      mission_name
      launch_site {
        site_name_long
      }
      links {
        video_link
        mission_patch
        article_link
      }
      rocket {
        rocket_name
        rocket {
          success_rate_pct
          cost_per_launch
          description
        }
      }
    }
  }
`;

export const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launchesPast(limit: 12) {
      mission_name
      launch_date_local
      launch_success
      id
      ships {
        name
        home_port
        image
      }
    }
  }
`;
