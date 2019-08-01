import React from 'react';
import { Provider } from 'react-redux';
import Store from '../redux/Store';
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
    return (
        <Provider store={Store}>
            <div className="ui container">
                <div className="ui container grid">
                    <div className="ui row">
                        <div className="column eight wide">
                            <SongList></SongList>
                        </div>
                        <div className="column eight wide">
                            <SongDetail></SongDetail>
                        </div>
                    </div>
                </div>

            </div>
        </Provider>

    );
};

export default App;