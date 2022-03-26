import React from "react";
import { Row, Typography } from "antd";
import SingleAuthor from "../Author/SingleAuthor";

const { Title } = Typography;

const FavouriteAuthor = () => {
  const [favouriteAuthors, setFavouriteAuthors] = React.useState([]);

  const getFavouriteAuthors = () => {
    // get favourite authors from localStorage
    const favouriteAuthors =
      JSON.parse(localStorage.getItem("favouriteAuthors")) || [];
    setFavouriteAuthors(favouriteAuthors);
  };

  // get favourite authors from localStorage
  React.useEffect(() => {
    getFavouriteAuthors();
  }, []);

  if (favouriteAuthors.length === 0) {
    return (
      <Title style={{ textAlign: "center", marginTop: 30 }} level={3}>
        You have no favourite author
      </Title>
    );
  }

  return (
    <>
      <Title
        style={{ textAlign: "center", marginTop: 10, marginBottom: 0 }}
        level={4}
      >
        Favourite Author
      </Title>
      <Row style={{ margin: 6 }}>
        {favouriteAuthors.map((author) => (
          <SingleAuthor
            getFavouriteAuthors={getFavouriteAuthors}
            key={author._id}
            author={author}
          />
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
