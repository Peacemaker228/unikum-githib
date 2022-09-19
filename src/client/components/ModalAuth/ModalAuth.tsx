import React, { FC } from 'react';
import { useState } from 'react';

const ModalAuth: FC = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__content_title"></h2>
        <button className="modal__content_close">
          <img src="../../assets/images/auth/close.svg" alt="close" />
        </button>
      </div>
    </div>
  );
};

export default ModalAuth;
