export type User = {
  access_token: string;
  refresh_token: string;
  user: {
    pk: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
  };
};
