import React, { FC } from 'react';
import classNames from 'classnames';
import { IButton } from 'src/client/types/Button/IButton';

const Button: FC<IButton> = ({ type, btnText, onClick, isWhite, isBlue }) => {
  return (
    <button
      className={classNames(
        'button__custom',
        isWhite ? 'btn__white' : 'btn__blue',
      )}
      type={type}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
