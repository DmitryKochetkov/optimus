import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import CreateScenario from './pages/CreateScenario'
import Layout from "./components/Layout";
import ScenarioListPage from "./pages/ScenarioListPage";

function App() {
  return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/scenarios" component={ScenarioListPage}/>
            {/*<Route path="/scenario/create">*/}
            {/*  <CreateScenario />*/}
            {/*</Route>*/}
          </Switch>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
