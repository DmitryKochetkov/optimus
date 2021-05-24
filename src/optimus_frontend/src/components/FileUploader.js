import {Grid, makeStyles} from "@material-ui/core";
import React from "react";
import {AddCircleOutlineOutlined} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    fileUploader: {
        backgroundColor: '#D2DEF6',
        border: '2px solid',
        borderColor: '#1b2eea',
        borderRadius: '25px',
        width: '150px',
        height: '150px',
        alignItems: 'center',
        cursor: 'pointer'
    },

    fileUploaderIcon: {
        fontSize: '30'
    }
})

export default function FileUploader() {
    const classes = useStyles();
    return (
        <Grid container className={classes.fileUploader} alignItems="center" justify="center">
            <input
                type="file"
                accept="text/csv"
                hidden
                id="uploader_input"
            />
            <label htmlFor="uploader_input">
                <Grid item align={'center'} style={{cursor: 'pointer'}}>
                    <Typography variant='body2' align={'center'}>Кликните для загрузки файла</Typography>
                    <AddCircleOutlineOutlined fontSize={'large'} />
                </Grid>
            </label>

        </Grid>
    );
}