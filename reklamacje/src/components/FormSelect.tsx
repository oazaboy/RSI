import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { FormControl, FormHelperText, TextField } from '@material-ui/core';
const FormSelect: React.FC<FieldRenderProps<any, HTMLElement>> = (props) => {
 const { input: { name, value, onChange, ...restInput },
 meta,
 ...rest
 } = props
 return (
 <FormControl error={meta.error ? true : false} style={{width: 'inherit'}}>
 <TextField
 select
 {...rest}
 name={name}
 onChange={onChange}
 inputProps={restInput}
 value={value} />
 {meta.touched && meta.error && <FormHelperText>{meta.error}</FormHelperText>}
 </FormControl>
 )
}
export default FormSelect;