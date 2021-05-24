import {Grid, makeStyles} from "@material-ui/core";
import React, {useState} from "react";
import {AddCircleOutlineOutlined} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import {Icon} from '@fluentui/react/lib/Icon';
import {getFileTypeIconProps, initializeFileTypeIcons} from "@fluentui/react-file-type-icons";
// import { getFileTypeIconProps } from '@fluentui/react-file-type-icons';

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

export default function FileUploader(props) {
    const classes = useStyles();
    const [filename, setFilename] = useState(null);

    const handleChange = e => {
        const file = e.target.files[0];
        if (file) {
            setFilename(file.name);
            props.handleChange(file);
        }
        else setFilename(null);
    };

    initializeFileTypeIcons();

    return (
        <Grid container className={classes.fileUploader} alignItems="center" justify="center">
            <input
                type="file"
                accept="text/csv"
                hidden
                id="uploader_input"
                onChange={handleChange}
            />
            <label htmlFor="uploader_input">
                {
                    filename ?
                        <Grid item align={'center'} style={{cursor: 'pointer'}}>
                            <Icon {...getFileTypeIconProps({ extension: 'csv', size: 40 })} />
                            <Typography variant='body2' align={'center'}>{filename}</Typography>
                        </Grid>
                        :
                        <Grid item align={'center'} style={{cursor: 'pointer'}}>
                            <Typography variant='body2' align={'center'}>Кликните для загрузки файла</Typography>
                            <AddCircleOutlineOutlined fontSize={'large'}/>
                        </Grid>
                }
            </label>

        </Grid>
    );
}