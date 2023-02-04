import { UserProps } from "../../@types/userProps.types";

const User = ({ id, username, email }: UserProps) => {
  return (
    <>
      <span>{id}</span> - <span>{username}</span> - <span>{email}</span>
    </>
  );
};

export default User;
