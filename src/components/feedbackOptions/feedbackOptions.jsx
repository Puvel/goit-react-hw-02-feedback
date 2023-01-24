import PropTypes from 'prop-types';
import css from './feedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map(option => (
      <button
        className={css.feedbackBtn}
        key={option}
        type="button"
        name={option}
        onClick={onLeaveFeedback}
      >
        {option[0].toUpperCase() + option.slice(1)}
      </button>
    ))}
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
