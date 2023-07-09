import PropTypes from "prop-types"; // імпорт PropTypes для документування призначених типів властивостей, що передаються компонентам
import { NotificationMassage } from "./Notification.styled.jsx"; // імпорт стилів тегу p (NotificationMassage)

export const Notification = ({ textMassage }) => {
  return <NotificationMassage>{textMassage}</NotificationMassage>;
}; // повернення для рендеру розмітки блоку "Notification"; 

Notification.protoTypes = {
  textMassage: PropTypes.string.isRequired,
}; // типізація (опис типів) пропсів компоненту Notification
