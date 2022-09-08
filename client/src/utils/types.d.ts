export interface Launches {
  mission_name: string;
  launch_date_local: string;
  launch_success: boolean;
  ships: Ship[];
  id: number;
}

interface Ship {
  name: string;
  home_port: string;
  image: string;
}

export interface LaunchType {
  details: string;
  launch_date_local: string;
  launch_success: boolean;
  mission_name: string;
  launch_site: {
    site_name_long: string;
  };
  links: {
    video_link: string;
    mission_patch: string;
    article_link: string;
  };
  rocket: {
    rocket_name: string;
    rocket: {
      success_rate_pct: number;
      cost_per_launch: number;
      description: string;
    };
  };
}

type StyleProps = {
  status: boolean;
};

export type InputType = {
  name: string;
  comment: string;
};


export type Launch = {
  details: string;
  launch_date_local: string;
  launch_success: boolean;
  mission_name: string;
  launch_site: {
    site_name_long: string;
  };
  links: {
    video_link: string;
    mission_patch: string;
    article_link: string;
  };
};