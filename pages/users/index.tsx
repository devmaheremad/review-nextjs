import { GetStaticProps } from "next";
import Head from "next/head";
import { UserTypes } from "../../@types/user.types";
import { UsersProps } from "../../@types/usersProps.types";
import { User } from "../../src/components";

const Users = ({ users }: UsersProps) => {
  return (
    <>
      <Head>
        <title>Users page</title>
        <meta name="description" content="Users page, all Users here" />
      </Head>
      <h1>Users page, all Users will listed here</h1>
      <ul>
        {users?.map((user) => {
          const { id, username, email } = user;
          return (
            <li key={id}>
              <User id={id} username={username} email={email} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: UserTypes[] = await response.json();

  return {
    props: {
      users: data,
    },
  };
};

export default Users;
