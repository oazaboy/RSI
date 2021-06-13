import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { TextField, FormControl } from '@material-ui/core';
const FormTextField: React.FC<FieldRenderProps<any, HTMLElement>> =
 ({ input: { name, value, onChange, ...restInput }, meta, ...rest }) => {
 const showError = ((meta.submitError && !meta.dirtySinceLastSubmit) ||
 meta.error) && meta.touched
 return (
 <FormControl error={meta.error? true : false} style={{width: 'inherit'}}>
 <TextField
 {...rest}
 name={name}
 helperText={showError ? meta.error || meta.submitError : undefined}
 error={showError}
 inputProps={restInput}
 onChange={onChange}
 value={value}
 />
 </FormControl>
 )
 }
export default FormTextField