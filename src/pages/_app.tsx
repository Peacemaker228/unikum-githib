import { FC } from 'react';
import { AppProps } from 'next/app';
import Wrapper from 'src/client/components/Wrapper/Wrapper';
import '../styles/index.scss';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
};

export default App;
