import React from 'react';
import { FC, useState, useRef } from 'react';
import { useOnClickOutside } from './../../hooks/useOnClickOutside';
import classNames from 'classnames';

type IDropDown = {
  data: string[];
  selected: string;
  setSelected: any;
};

const DropDown: FC<IDropDown> = ({ data, selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const node = useRef<HTMLInputElement>();
  // console.log(node);

  useOnClickOutside(node, () => setIsActive(false));

  console.log(data);

  return (
    <div className="dropdown">
      <div
        ref={node}
        className={classNames('dropdown__container', isActive ? 'active' : '')}
        onClick={() => setIsActive((prev) => !prev)}
      >
        <div className="dropdown__container_btn">{selected ?? '0000'}</div>
        {isActive && (
          <div className="dropdown__container_content">
            <ul className="dropdown__list">
              {data?.map((el, index) => {
                return (
                  <li
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelected(el);
                      setIsActive(false);
                    }}
                    className="dropdown__list_item"
                  >
                    {el}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
