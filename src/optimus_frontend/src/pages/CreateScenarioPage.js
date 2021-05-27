import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import {Step, StepLabel, Stepper} from "@material-ui/core";
import ScenarioFormStep1 from "../components/ScenarioFormStep1";
import Alert from '@material-ui/lab/Alert';
import ScenarioFormStep2LinearProgramming from "../components/ScenarioFormStep2LinearProgramming";

export default function CreateScenario() {
    const initialFormValues = {
        title: "",
        description: "",
        type: ""
    };

    const [activeStep, setActiveStep] = useState(0);
    const [formValues, setFormValues] = useState(initialFormValues);

    let steps = ['Название и тип оптимизации', 'Загрузка исходных данных', 'Завершение'];

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleChange = e => {
        const {name, value} = e.target;
        setFormValues(prev => ({
            ...prev,
            [name]: value
        }));
        console.log('Fields: ', formValues)
    };

    const handleSubmit = () => {

    };

    const renderStepContent = step => {
        switch (step) {
            case 0:
                return <ScenarioFormStep1 values={formValues} handleChange={handleChange}/>;
            case 1:
                return <ScenarioFormStep2LinearProgramming values={formValues} handleChange={handleChange}/>;
            default:
                return <Alert severity="error">Ошибка: шаг выбран некорректно.</Alert>;
        }
    }

    return (
        <Container maxWidth="md">
            <h1>Создание сценария оптимизации</h1>

            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            <div>
            {renderStepContent(activeStep)}
            </div>

            <Button disabled={activeStep === 0} onClick={handleBack} color="primary">
                Назад
            </Button>

            {
                activeStep + 1 === steps.length ?
                    <Button
                        onClick={handleNext}
                        color="primary"
                        variant="contained"
                    >
                        Завершить
                    </Button> :
                    <Button
                        onClick={handleNext}
                        color="primary"
                        variant="contained"
                    >
                        Далее
                    </Button>
            }
        </Container>
    );
}