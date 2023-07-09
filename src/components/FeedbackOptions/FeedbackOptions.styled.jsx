import styled from "@emotion/styled";

export const ButtonsList = styled.ul`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;

  @media (max-width: 1023.98px) {
    gap: 15px;
    margin-bottom: 10px;
  }

  @media (max-width: 767.98px) {
    gap: 10px;
    margin-bottom: 15px;
  }
`;

export const ButtonsListItem = styled.li`
  list-style: none;
`;

export const Button = styled.button`
  width: 100px;
  height: 28px;

  font-size: 18px;
  text-transform: capitalize;
  background-color: transparent;
  border-radius: 10px;

  &:hover {
    background-color: #5995f4;
    border-color: #5995f4;
    color: #fff;
  }

  @media (max-width: 1023.98px) {
    width: 72px;
    height: 24px;

    font-size: 14px;

    border-radius: 8px;
  }

  @media (max-width: 767.98px) {
    width: 52px;
    height: 20px;

    font-size: 10px;

    border-radius: 5px;
  }
`;
