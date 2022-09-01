import { GetServerSideProps } from 'next/types';
import { FC } from 'react';

const FullPost: FC = (props) => {
  return <h1>FullPost {props.id}</h1>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: { id: context.query.id },
  };
};

export default FullPost;
