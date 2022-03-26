import { message } from "antd";

export const removeAuthors = (author) => {
  // get item from localstorage first
  const favouriteAuthors =
    JSON.parse(localStorage.getItem("favouriteAuthors")) || [];

  // find index
  const authorIndex = favouriteAuthors.findIndex(
    (element) => element._id === author._id
  );

  //   delete author from favourite
  favouriteAuthors.splice(authorIndex, 1);
  // save author to localstorage
  localStorage.setItem("favouriteAuthors", JSON.stringify(favouriteAuthors));

  //   save favourite author ids
  const ids = JSON.parse(localStorage.getItem("ids")) || {};

  delete ids[author._id];
  localStorage.setItem("ids", JSON.stringify(ids));

  message.warning("Removed author from favourite", 0.8);
};
