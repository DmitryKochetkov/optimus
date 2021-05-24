import React from "react";
import {Container, List, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import {InsertDriveFile} from "@material-ui/icons";

class DataSourcesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSources: [],
            error: null
        };
    }

    async componentDidMount() {
        const params = this.props.match.params;
        const response = await fetch('/api/data-sources?page=0', {
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
        let dataSourcesList = [];
        if (this.state.dataSources.content) {
            dataSourcesList = this.state.dataSources.content.map((dataSource) => {
                let avatar = <InsertDriveFile/>;

                return <ListItem button>
                    <ListItemAvatar>
                        {avatar}
                    </ListItemAvatar>

                    <ListItemText
                        primary={dataSource.title}
                    />
                </ListItem>
            });
        }

        if (dataSourcesList.length === 0) {
            dataSourcesList = <p>Источников пока нет.</p>
        }
        else {
            dataSourcesList = <List>{dataSourcesList}</List>
        }

        return (
            <Container maxWidth="md">
                <h1>Источники данных</h1>
                {dataSourcesList}
                <Button variant="contained" color="primary" component={Link} to="/data-sources/create">
                    Добавить источник
                </Button>
            </Container>
        );
    }
}

export default DataSourcesPage;