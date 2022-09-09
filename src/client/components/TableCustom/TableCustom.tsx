import React from 'react';
import { FC } from 'react';

type head = {
  item: string;
};

type row = {
  data: string[];
};

type dataRow = {
  id: number | string;
  items: string[];
};

type tableMain = {
  theadData: string[];
  tbodyData: dataRow[];
  customClass?: any;
  title?: string;
};

export const TableHeadItem: FC<head> = ({ item }) => {
  return <th title={item}>{item}</th>;
};

export const TableRow: FC<row> = ({ data }) => {
  return (
    <tr>
      {data.map((item) => {
        return <td key={item}>{item}</td>;
      })}
    </tr>
  );
};

const TableCustom: FC<tableMain> = ({
  theadData,
  tbodyData,
  title,
  customClass,
}) => {
  return (
    <div className="">
      <table className="table">
        {title && <caption>{title}</caption>}
        <thead>
          <tr>
            {theadData.map((h) => {
              return <TableHeadItem key={h} item={h} />;
            })}
          </tr>
        </thead>
        <tbody>
          {tbodyData.map((item) => {
            return <TableRow key={item.id} data={item.items} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableCustom;
