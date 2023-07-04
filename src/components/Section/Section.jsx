import PropTypes from "prop-types"; // імпорт PropTypes для документування призначених типів властивостей, що передаються компонентам
import { Box, Title } from "./Section.styled"; // імпорт стилів

export const Section = ({ title, children }) => {
  return (
    <Box>
      <Title>{title}</Title>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
