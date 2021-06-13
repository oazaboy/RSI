import React from 'react';
import { Paper, Grid, MenuItem, Button } from '@material-ui/core';
import { Form, FormRenderProps, Field } from 'react-final-form';
import FormTextField from '../components/FormTextField';
import FormSelect from '../components/FormSelect';
import Complaint from '../models/Complaint';
import {v4 as uuidv4} from 'uuid';
import ComplaintsAgent from '../api/agent';
import { useHistory } from 'react-router-dom';
const ComplaintForm: React.FC = () => {
 const history = useHistory();
 const handleSubmit = (values: any) => {
 const complaint: Complaint =
 {
 id: uuidv4(),
 title: values.title,
 sender: values.sender,
 complaintCategory: values.category,
 details: values.details
 };
 ComplaintsAgent.create(complaint);
 history.push("/");
 }
 const validate = (values: any): any => {
 const errors: any = {};
 if (!values.title) {
 errors.title = 'Tytuł jest obowiązkowy!'
 }
 if (!values.sender) {
 errors.sender = 'Email jest obowiązkowy!'
 } else {
 const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
 if (!re.test(values!!.sender)) {
 errors.sender = 'Podaj poprawny adres email'
            }
        }
        if (!values.category) {
        errors.category = 'Kategoria jest obowiązkowa!'
        }
        if (!values.details) {
        errors.details = 'Szczegóły nie mogą być puste!'
        }
        return errors;
        }
        return (
        <div style={{ flexGrow: 1 }}>
        <Grid container justify='flex-start' alignItems='flex-start' >
        <Grid item xs={12}>
        <Paper elevation={3} style={{ padding: 12, margin: 'auto' }}>
        <Form
        onSubmit={handleSubmit}
        validate={validate}
        render={(props: FormRenderProps) => {
        return (
        <form onSubmit={props.handleSubmit}
        style={{ display: 'flex' }}>
        <Grid
        container
        alignItems='flex-end'
        justify='space-evenly'>
        <Grid item xs={12} style={{ width: '100%' }
       }>
        <Field
        name="title"
       label="Tytuł"
       component={FormTextField}
        fullwidth="true"
        variant="standard"
        />
        </Grid>
       <Grid item xs={12} style={{ width: '100%' }
       }>
        <Field
        name="sender"
       label="Email"
        component={FormTextField}
        variant="standard"
                        /> </Grid>
            <Grid item xs={12} style={{ width: '100%' }
}>
 <Field
 name="category"
label="Kategoria"
component={FormSelect}
 variant="standard">
 <MenuItem value={"Zwrot"}>
 {"Zwrot"}
 </MenuItem>
 <MenuItem value={"Uszkodzenie"}>
 {"Uszkodzenie"}
 </MenuItem>
 <MenuItem value={"Gwarancja"}>
 {"Gwarancja"}
 </MenuItem>
 </Field>
 </Grid>
<Grid item xs={12} style={{ width: '100%' }
}>
 <Field
 name="details"
 label="Szczegóły"
component={FormTextField}
 multiline
 rows={5}
 variant="standard"
 /> </Grid>
 <Grid item xs={12}>
 <Button style={{ marginTop: 8 }}
 color='primary'
variant='contained'
 type="submit"
 disabled={props.submitting}>
 Wyślij zgłoszenie
 </Button> </Grid>
 </Grid>
 </form>
 );
 }}>
 </Form>
 </Paper>
 </Grid>
 </Grid>
        </div>
            )
        }
export default ComplaintForm;
        