export interface Data {
  mission_name: string;
  launch_date_local: string;
  launch_success: boolean;
  ships: Ship[];
  id: number;
}

export interface Ship {
  name: string;
  home_port: string;
  image: string;
}
