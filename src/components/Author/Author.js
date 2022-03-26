import { Row, Pagination, Typography } from "antd";
import React, { useEffect } from "react";
import { getAuthors } from "../../sevices/getAuthors";
import SingleAuthor from "./SingleAuthor";
import "./Author.css";
import LoadingContent from "../LoadingContent";

const { Title } = Typography;

const Author = () => {
  const [authors, setAuthors] = React.useState();
  const [totalPage, setTotalPage] = React.useState();
  const [currentPage, setCurrentPage] = React.useState(1);

  useEffect(() => {
    getAuthors(currentPage)
      .then((res) => {
        setAuthors(res.results);
        !totalPage && setTotalPage(res.totalPages);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const onChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <Title
        style={{ textAlign: "center", marginTop: 10, marginBottom: 0 }}
        level={4}
      >
        Author
      </Title>
      <Row style={{ margin: 6 }}>
        {authors
          ? authors.map((author) => (
              <SingleAuthor key={author._id} author={author} />
            ))
          : new Array(9).fill(0).map((el, i) => <LoadingContent key={i} />)}
      </Row>
      <div className='pagination-box'>
        <Pagination
          defaultCurrent={currentPage}
          current={currentPage}
          total={totalPage}
          onChange={onChange}
          showSizeChanger={false}
        />
      </div>
    </>
  );
};

export default Author;
