import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import router from './router/router';
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    {router.map((route, key) => {
                        return (
                            <Route
                                path={route.path}
                                key={key}
                                render={props => (
                                    <route.component
                                        {...props}
                                        routes={route.routes}
                                    />
                                )}
                            />
                        );
                    })}
                </div>
            </Router>
        );
    }
}

export default App;
