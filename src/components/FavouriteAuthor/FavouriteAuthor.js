import React from "react";
import { Row } from "antd";
import SingleAuthor from "../Author/SingleAuthor";

const FavouriteAuthor = () => {
  const [favouriteAuthors, setFavouriteAuthors] = React.useState([]);

  // get favourite authors from localStorage
  React.useEffect(() => {
    // get favourite authors from localStorage
    const favouriteAuthors =
      JSON.parse(localStorage.getItem("favouriteAuthors")) || [];
    setFavouriteAuthors(favouriteAuthors);
  }, []);
  return (
    <>
      <Row style={{ margin: 6 }}>
        {favouriteAuthors.map((author) => (
          <SingleAuthor key={author._id} author={author} />
        ))}
      </Row>
      {/* <div className='pagination-box'>
        <Pagination
          defaultCurrent={currentPage}
          current={currentPage}
          total={totalPage}
          onChange={onChange}
          showSizeChanger={false}
        />
      </div> */}
    </>
  );
};

export default FavouriteAuthor;
