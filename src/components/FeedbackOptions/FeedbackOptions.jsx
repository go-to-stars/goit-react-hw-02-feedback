import PropTypes from "prop-types"; // імпорт PropTypes для документування призначених типів властивостей, що передаються компонентам
import { ButtonsList, ButtonsListItem, Button } from "./FeedbackOptions.styled"; // імпорт стилів

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsList>
      {options.map((value) => (
        <ButtonsListItem>
          <Button
            key={value}
            type="button"
            name={value}
            onClick={onLeaveFeedback}
          >
            {value}
          </Button>
        </ButtonsListItem>
      ))}
    </ButtonsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
