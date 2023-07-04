import styled from "@emotion/styled";

export const Box = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 5px 10px;
  margin: 5px 24px;

  border: 1px solid rgb(236 232 239);
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 10px 20px 5px rgba(0, 0, 0, 0.6);

  @media (max-width: 1023.98px) {
    padding: 4px 8px;
    margin: 4px 12px;
    gap: 15px;

    border-radius: 8px;
  }

  @media (max-width: 767.98px) {
    padding: 3px 6px;
    margin: 3px 5px;
    gap: 10px;

    border-radius: 5px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;

  @media (max-width: 1023.98px) {
    font-size: 24px;
  }

  @media (max-width: 767.98px) {
    font-size: 14px;
  }
`;
