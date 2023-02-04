import { GetServerSideProps } from "next";
import Head from "next/head";
import { EventTypes } from "../../@types/event.types";
import { EventsProps } from "../../@types/events.types";
import { Event } from "../../src/components";
import { useState } from "react";
import { useRouter } from "next/router";

const Events = ({ events }: EventsProps) => {
  const [eventsList, setEventsList] = useState<EventTypes[]>(events);
  // const [categorySelected, setCategorySelected] = useState<string>("");
  if (!events) {
    return <h1>Loading...</h1>;
  }

  const router = useRouter();

  const handleSportsEvents = async () => {
    const response = await fetch(
      "http://localhost:4000/events?category=sports"
    );
    const data: EventTypes[] = await response.json();

    setEventsList(data);

    router.push(`/events?category=sports`, undefined, { shallow: true });
  };

  // const handleSportsEvents = async (
  //   e: MouseEvent<HTMLButtonElement, MouseEvent>
  // ) => {
  //   const response = await fetch(
  //     `http://localhost:4000/events?category=${e.target.innerHTML.toLowerCase()}`
  //   );
  //   const data: EventTypes[] = await response.json();

  //   setEventsList(data);

  //   // router.push(`/events/${}`);
  // };

  return (
    <>
      <Head>
        <title>Events page</title>
        <meta name="description" content="Events page, all Events here" />
      </Head>
      <h1>Events page, all events will listed here</h1>
      <button onClick={handleSportsEvents}>Sports</button>
      {/* <button onClick={(e) => handleSportsEvents(e)}>Sports</button>
      <button onClick={(e) => handleSportsEvents(e)}>Arts</button> */}
      <ul>
        {eventsList.map((event) => {
          const { id, title, description, category, date } = event;
          return (
            <li key={id}>
              <Event
                id={id}
                title={title}
                description={description}
                category={category}
                date={date}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Events;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { category } = ctx.query;
  const categoryString = category ? "category=sports" : "";
  const response = await fetch(
    `http://localhost:4000/events?${categoryString}`
  );
  const data: EventTypes[] = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      events: data,
    },
  };
};
