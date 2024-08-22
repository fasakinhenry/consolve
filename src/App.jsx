import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Switch>
        {/* Other routes */}
        <Route path='/' exact component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
