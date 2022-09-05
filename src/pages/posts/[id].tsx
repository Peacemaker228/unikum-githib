import { GetServerSideProps } from 'next/types';
import { FC } from 'react';

const FullPost: FC = ({ id }: any) => {
  return <h1>FullPost {id}</h1>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: { id: ctx.query.id },
  };
};

export default FullPost;
