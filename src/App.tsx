import {Router, Route, Switch} from './components/Router';
import {Home, Groups, PageNotFound, Messages, Join} from './pages/Pages'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/groups" component={Groups}/>
        <Route path="/chat" component={Messages}/>
        <Route path="/join" component={Join}/>
        {/* <Route path="" component={PageNotFound}/> */}
      </Switch>
    </Router>
  )
}

export default App;
