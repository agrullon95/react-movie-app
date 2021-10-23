import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from '../components/Main';
// import Register from '../pages/Register';
import Login from '../components/Login';
import NavigationBar from '../components/NavigationBar';
import Container from 'react-bootstrap/Container';

const AppRouter = () => {
  return (
    <Router>
      <Container fluid>
        <NavigationBar />
        <Switch>
          {/* <Route path="/register" component={Register} />*/}
          <Route path="/login" component={Login} />
          <Route path="/" component={Main} />
        </Switch>
      </Container>
    </Router>
  );
};

export default AppRouter;