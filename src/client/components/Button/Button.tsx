import React, { FC } from 'react';
import classNames from 'classnames';
import { IButton } from 'src/shared/types/client/Button/IButton';

const Button: FC<IButton> = ({
  type = 'button',
  btnText,
  onClick,
  isWhite,
  isBlue,
  className = '',
}) => {
  return (
    <button
      className={classNames(
        'button__custom',
        isWhite ? 'btn__white' : 'btn__blue',
        className,
      )}
      type={type}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
