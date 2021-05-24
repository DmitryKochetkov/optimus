import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Layout from "./components/Layout";
import ScenarioListPage from "./pages/ScenarioListPage";
import CreateScenarioPage from "./pages/CreateScenarioPage";

function App() {
  return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/scenarios" component={ScenarioListPage}/>
            <Route path="/scenarios/create">
              <CreateScenarioPage />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
