import PropTypes from "prop-types"; // імпорт PropTypes для документування призначених типів властивостей, що передаються компонентам
import { NotificationMassage } from "./Notification.styled.jsx"; // імпорт стилів

export const Notification = ({ textMassage }) => {
  return <NotificationMassage>{textMassage}</NotificationMassage>;
};

Notification.protoTypes = {
  textMassage: PropTypes.string.isRequired,
};
