import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export interface Props {
  primary?: boolean
  backgroundColor?: string | null
  size?: string
  label?: string
  onClick?: (event: MouseEvent) => void
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<Props> = ({...props }) => {
  const mode = props.primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${props.size}`, mode].join(' ')}
      style={{
        backgroundColor: props.backgroundColor ? props.backgroundColor : ''
      }}
    >
      {props.label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
