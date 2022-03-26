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
  message.success("Added to favourite", 0.8);
};
