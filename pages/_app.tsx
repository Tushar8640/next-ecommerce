import React, { Fragment } from 'react';
import {wrapper} from '../store';

// types
import type { AppProps } from 'next/app';

// global styles
import 'swiper/css';
import 'rc-slider/assets/index.css';
import 'react-rater/lib/react-rater.css';
import '../assets/css/styles.scss';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';



const MyApp = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <Component {...pageProps} />
  </Fragment>
);

export default wrapper.withRedux(MyApp);