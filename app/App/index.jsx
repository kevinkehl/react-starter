import React from 'react';
import styles from './index.scss';

const App = ({
  children,
}) => (
  <div className={styles.component}>
    {children}
  </div>
);

export default App;
