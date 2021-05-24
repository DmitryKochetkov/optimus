import React from "react";
import {Container, Grid, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import FileUploader from "../components/FileUploader";
// import FileUploader from "../components/FileUploader";

export default function AddDataSourcePage() {
    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                <h1>Добавление источника данных</h1>

                <Grid item xs={12}>
                    <TextField id="title" name="title" label="Название" variant="outlined" fullWidth />
                </Grid>

                <Grid item xs={12} align={'center'}>
                    <FileUploader/>
                </Grid>

                <Grid item>
                    <Button variant="contained" color="primary" component={Link} to="/data-sources/create">
                        Сохранить
                    </Button>
                </Grid>
            </Grid>

        </Container>
    );
}