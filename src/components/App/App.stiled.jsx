import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: calc(10px + 2vmin);

  max-width: 60vw;
  margin: 20px auto 0;
  padding: 15px;

  background-color: rgb(231, 236, 242);
  border-radius: 10px;

  @media (max-width: 1023.98px) {
    margin: 15px auto 0;
    padding: 10px;

    border-radius: 8px;
  }

  @media (max-width: 767.98px) {
    margin: 10px auto 0;
    padding: 5px;

    border-radius: 6px;
  }
`;
