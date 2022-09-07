import React, { useEffect, useState } from "react";
// styled components
import styled from "styled-components";

type Props = {
  id: number;
  reload: boolean;
};

type data = {
  name: string;
  launchTypeId: number;
  comment: string;
  commentId: number;
  date: string;
};

const Comments: React.FC<Props> = ({ id, reload }) => {
  const [data, setdata] = useState([] as data[]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await fetch("http://localhost:4000/comments");

      const response = await data.json();
      console.log(reload);
      // i filtered this response by  Ythe param id in order to get dynamically  comments for each launch
      const filterResponse = response.filter(
        (data: data) => data.launchTypeId === id
      );
      setdata(filterResponse);
      setLoading(false);
    };
    fetchData();
  }, [id, reload]);

  if (loading) return <p>Loading...!</p>;
  if (data.length === 0 || !data) return <p>Be the first to comment!</p>;
  return (
    <CommentSection>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.commentId}>
              <NameAndDate>
                <h3>{item.name} </h3> <span>{item.date}</span>
              </NameAndDate>
              <p>' {item.comment} '</p>
            </li>
          );
        })}
      </ul>
    </CommentSection>
  );
};

export default Comments;

const CommentSection = styled.div`
  width: 100%;
  border-radius: 8px;

  ul {
    text-decoration: none;
    padding: 0;
    list-style: none;
    margin: 0;
  }

  li {
    display: flex;
    flex-direction: column;
    padding: 0.6rem 0;
    gap: 0.3rem;

    p {
      background-color: #fff;
      padding: 0.3rem;
      border-radius: 8px;
      font-size: 1.3rem;
      letter-spacing: 0.9px;
      color: #444;
      font-style: italic;
      font-weight: 300;
    }
  }
`;
const NameAndDate = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  align-items: baseline;
  h3 {
    font-size: 1.5rem;
    color: #444;
  }
  span {
    font-style: italic;
  }
`;
