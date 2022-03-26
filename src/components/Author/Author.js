import { Row, Pagination } from "antd";
import React, { useEffect } from "react";
import { getAuthors } from "../../sevices/getAuthors";
import SingleAuthor from "./SingleAuthor";
import "./Author.css";
import LoadingContent from "../LoadingContent";

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
  }, [currentPage]);

  const onChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <Row style={{ margin: 6 }}>
        {authors
          ? authors.map((author) => (
              <SingleAuthor key={author.slug} author={author} />
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
