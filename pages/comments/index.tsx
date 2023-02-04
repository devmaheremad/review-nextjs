import Head from "next/head";
import { Comment } from "../../data/comments";
import { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  const handleLoadComments = async () => {
    const response = await fetch("http://localhost:3000/api/comments");
    const data: Comment[] = await response.json();
    setComments(data);
  };

  return (
    <>
      <Head>
        <title>Comments page</title>
        <meta name="description" content="Comments page, all Comments here" />
      </Head>
      <h1>
        Comments page, all comments will listed here, before that click on the
        btn to load them...
      </h1>
      <button onClick={handleLoadComments}>Load comments</button>
      {comments && (
        <ul>
          {comments.map((comment) => {
            const { id, text } = comment;
            return (
              <li key={id}>
                <span>{id}</span>- <span>{text}</span>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Comments;
