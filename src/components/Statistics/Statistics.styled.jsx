import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 1023.98px) {
    gap: 12px;
  }

  @media (max-width: 767.98px) {
    gap: 8px;
  }
`;

export const ListItem = styled.li`
  font-size: 18px;

  @media (max-width: 1023.98px) {
    font-size: 14px;
  }

  @media (max-width: 767.98px) {
    font-size: 12px;
  }
`;
