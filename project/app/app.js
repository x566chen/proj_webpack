import React, {Component} from 'react'
import config from './config.json';
import styles from './app.css';

class App extends Component{
  render() {
    return (
      <div className={styles.root}>
        {config.greetText}
      </div>
    );
  }
}

export default App