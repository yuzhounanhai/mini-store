import * as React from 'react';
import MiniStore, { packMiniStoreState } from '@/components/MiniStore';
import './App.scss';
import A from './component/A';

class App extends React.Component {
  state = {
    storeColor: '#00ffff',
  }
  render() {
    return (
      <div className="App">
        <div className="demo">
          <p>MiniStore --- context的解决方案</p>
          <MiniStore.Provider storeName="store1" value={{
            name: 'store1',
            ...packMiniStoreState('storeColor', this.state.storeColor, this),
          }}>
            <A />
          </MiniStore.Provider>
        </div>
      </div>
    );
  }
}

export default App;
