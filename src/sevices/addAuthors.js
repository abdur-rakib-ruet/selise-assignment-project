import { message } from "antd";

export const addAuthors = (author) => {
  // get item from localstorage first
  const favouriteAuthors =
    JSON.parse(localStorage.getItem("favouriteAuthors")) || [];
  // save author to localstorage
  localStorage.setItem(
    "favouriteAuthors",
    JSON.stringify([...favouriteAuthors, author])
  );

  //   save favourite author ids
  const ids = JSON.parse(localStorage.getItem("ids")) || {};
  localStorage.setItem(
    "ids",
    JSON.stringify({ ...ids, [author._id]: author._id })
  );
  message.success("Added to favourite", 0.8);
};
