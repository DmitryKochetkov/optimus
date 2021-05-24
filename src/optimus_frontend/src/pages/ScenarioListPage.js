import React from 'react'
import {Container, List, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import LinearProgrammingAvatar from "../components/scenario_avatars/LinearProgrammingAvatar";
import {Link} from "react-router-dom";

class ScenarioListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scenarios: [],
            error: null
        };
    }

    async componentDidMount() {
        const params = this.props.match.params;
        const response = await fetch('/api/scenarios?page=0', {
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}});

        if (response.ok) {
            const json = await response.json();
            this.setState({
                scenarios: json
            });
        }
        else {
            this.setState({error: response})
        }
    }

    render() {
        let scenarioList = [];
        if (this.state.scenarios.content) {
            scenarioList = this.state.scenarios.content.map((scenario) => {
                let avatar = <LinearProgrammingAvatar/>;
                let description = "Нет описания.";
                if (scenario.description !== "")
                    description = scenario.description;

                return <ListItem button>
                    <ListItemAvatar>
                        {avatar}
                    </ListItemAvatar>

                    <ListItemText
                        primary={scenario.title}
                        secondary={description}
                    />
                </ListItem>
            });
        }

        if (scenarioList.length === 0) {
            scenarioList = <p>Пока ничего нет.</p>
        }
        else {
            scenarioList = <List>{scenarioList}</List>
        }

        return (
            <Container maxWidth="md">
                <h1>Сценарии</h1>
                {scenarioList}
                <Button variant="contained" color="primary" component={Link} to="/scenarios/create">
                    Новая кампания
                </Button>
            </Container>
        );
    }
}

export default ScenarioListPage;