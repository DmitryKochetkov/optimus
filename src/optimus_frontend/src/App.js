import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Layout from "./components/Layout";
import ScenarioListPage from "./pages/ScenarioListPage";
import CreateScenarioPage from "./pages/CreateScenarioPage";
import DataSourcesPage from "./pages/DataSourcesPage";
import AddDataSourcePage from "./pages/AddDataSourcePage";
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/scenarios" component={ScenarioListPage}/>
                    <Route exact path="/data-sources" component={DataSourcesPage}/>
                    <Route path="/scenarios/create">
                        <CreateScenarioPage />
                    </Route>
                    <Route path="/data-sources/create">
                        <AddDataSourcePage />
                    </Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
