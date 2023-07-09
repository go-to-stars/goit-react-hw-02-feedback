import PropTypes from "prop-types"; // імпорт PropTypes для документування призначених типів властивостей, що передаються компонентам
import { Box, Title } from "./Section.styled"; // імпорт стилів тегів section (Box) та h2 (Title)

export const Section = ({ title, children }) => {
  return (
    <Box>
      <Title>{title}</Title>
      {children}
    </Box>
  );
}; // повернення для рендеру розмітки секції з заголовком (title) та вмістом секції (children)

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
}; // типізація (опис типів) пропсів компоненту Section
