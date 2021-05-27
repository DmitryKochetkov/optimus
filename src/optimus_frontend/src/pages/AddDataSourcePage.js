import React, {useState} from "react";
import {Container, Grid, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FileUploader from "../components/FileUploader";
import {Alert} from "@material-ui/lab";
import {useHistory} from "react-router-dom";

export default function AddDataSourcePage() {
    const initialFormValues = {
        name: "",
        file: null
    };
    const history = useHistory();

    const [formValues, setFormValues] = useState(initialFormValues);
    const [error, setError] = useState(null);

    const handleFieldChange = e => {
        const {name, value} = e.target;
        setFormValues(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleFileChange = e => {
        const file = e;
        setFormValues(prev => ({
            ...prev,
            file: file
        }));
    }

    const handleSubmit = async () => {
        console.log(formValues.file);

        const formData = new FormData();
        formData.append('file', formValues.file);
        formData.append('name', formValues.name);

        try {
            const response = await fetch('/api/data-sources', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                setError(null);
                history.push('/data-sources');
            }
            else {
                setError(response.status);
            }
        }
        catch (error) {
            setError(error);
            console.log(error);
        }
    }

    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                <h1>Добавление источника данных</h1>

                <Grid item xs={12}>
                    <TextField id="name" name="name" label="Название" variant="outlined" fullWidth onChange={handleFieldChange}/>
                </Grid>

                <Grid item xs={12} align={'center'}>
                    <FileUploader onChange={handleFileChange}/>
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