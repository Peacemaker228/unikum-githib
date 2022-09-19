import { FC } from 'react';
import { AppProps } from 'next/app';
import Wrapper from 'src/client/components/Wrapper/Wrapper';
// import { wrapper } from 'src/client/store/store';
import '../styles/index.scss';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
};

// export default wrapper.withRedux(App);

export default App;
