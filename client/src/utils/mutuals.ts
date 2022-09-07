import styled from "styled-components";

export const Layout = styled.div`
  width: 95%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 4rem 0;
`;

export const Title = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 4rem;
    margin: 0;
  }
`;

export const Container = styled.div`
  position: relative;
  padding: 1rem 2rem;
  background-color: #eaeaea;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  display: flex;
  justify-content: space-between;
  color: #333;
`;

export const LeftAlignTitle = styled(Title)`
  text-align: left;
  margin-bottom: 0.5rem;
  h3 {
    font-size: 2.4rem;
  }
`;

export const InfoList = styled.ul`
  text-decoration: none;
  list-style: none;
  padding: 0;
`;
export const ListItem = styled.li`
  margin: 0.5rem 0%;
  h3 {
    font-size: 1.4rem;
    span {
      text-transform: capitalize;

      &.success {
        color: green;
      }
      &.error {
        color: red;
      }
    }
  }
`;
export const Paragraph = styled.div`
  margin-top: 3rem;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.8px;
  text-align: justify;
`;
