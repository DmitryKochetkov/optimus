import React, {useState} from "react";
import {Container, Grid, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FileUploader from "../components/FileUploader";
import {Alert} from "@material-ui/lab";
// import FileUploader from "../components/FileUploader";

export default function AddDataSourcePage() {
    const [file, setFile] = useState({});
    const [error, setError] = useState(null);

    const handleSubmit = async () => {
        console.log(file);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', 'title');

        try {
            const response = await fetch('/api/data-sources', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                setError(response.status);
            }
        }
        catch (error) {
            setError(error);
        }
    }

    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                <h1>Добавление источника данных</h1>

                <Grid item xs={12}>
                    <TextField id="title" name="title" label="Название" variant="outlined" fullWidth />
                </Grid>

                <Grid item xs={12} align={'center'}>
                    <FileUploader handleChange={setFile}/>
                </Grid>

                {error ? <Grid item xs={12}><Alert severity="error">Ошибка при подключении к серверу.</Alert></Grid> : <></>}

                <Grid item>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Сохранить
                    </Button>
                </Grid>
            </Grid>

        </Container>
    );
}