import React from 'react'
import {FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField} from "@material-ui/core";

class ScenarioFormStep1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <form noValidate autoComplete="off" onChange={this.props.handleChange}>
            <Grid container alignItems="baseline" spacing={2}>
                <Grid item xs={12}>
                    <TextField id="title" name="title" label="Название" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="description" name="description" label="Описание" variant="outlined" fullWidth/>
                </Grid>

                <Grid item>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Тип оптимизации</FormLabel>
                        <RadioGroup column>
                            <FormControlLabel value="lp" control={<Radio />} label="Линейное программирование" />
                            <FormControlLabel value="ilp" control={<Radio />} label="Целочисленное программирование" />
                            <FormControlLabel value="salesman" control={<Radio />} label="Задача коммивояжёра" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </form>
    }
}

export default ScenarioFormStep1;