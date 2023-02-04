import { NewProps } from "../../@types/newProps.tyes";

const New = ({ id, title, description, category }: NewProps) => {
  return (
    <>
      <span>{id}- </span>
      <span>{title}</span> - <span>{description}</span> -{" "}
      <span>{category}</span>
      <hr />
    </>
  );
};

export default New;
