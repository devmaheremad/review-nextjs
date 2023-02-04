import { EventProps } from "../../@types/eventProps.types";

const Event = ({ id, title, description, category, date }: EventProps) => {
  return (
    <>
      <span>{id}- </span>
      <span>{title}</span> - <span>{description}</span> |{" "}
      <span>{category}</span> | <span>{date}</span>
    </>
  );
};

export default Event;
