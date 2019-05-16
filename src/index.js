import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import './index.css';
import App from './components/App/App';
import reducers from './reducers';

const Application = () => {
    return (
        <Provider store={createStore(reducers)}>
            <App />
        </Provider>
    )
}

ReactDOM.render(<Application />, document.getElementById('root'));
