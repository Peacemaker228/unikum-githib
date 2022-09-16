import { useRouter } from 'next/router';
import React from 'react';

const Order = () => {
  const router = useRouter();

  const routerNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <div className="order">
      <div className="order__container">
        <h2 className="order__container_title">
          ЗАКАЗАТЬ ТОЛСТОВКУ С СОБСТВЕННЫМ ПРИНТОМ!
        </h2>
        <button
          className="order__container_button"
          type="button"
          onClick={() => routerNavigate('/design')}
        >
          Перейти к заказу
        </button>
      </div>
    </div>
  );
};

export default Order;
