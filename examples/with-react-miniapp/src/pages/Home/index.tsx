import * as React from 'react';
import { usePageShow, usePageHide } from 'ice';
import styles from './index.module.scss';

const Home = (props) => {
  usePageShow(() => {
    console.log('page show...');
  });

  usePageHide(() => {
    console.log('page hide...');
  });

  const { history } = props;
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Welcome to icejs miniapp!</h2>
      <view className={styles.description}>This is a awesome project, enjoy it!</view>
      <view onClick={() => {
        console.log('Click');
        history.push('/about');
      }}>go about</view>
    </div>
  );
};

export default Home;
