import { useContext } from "react";
import { FormContext } from "./DynamicForms";
import TextField from "@mui/material/TextField";
import {styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
  width: "100%",
  '& label.Mui-focused': {
    color: 'rgb(255, 255, 0)',
  },
  '& label': {
    color: '#F6F5F7',
    borderColor: '#F6F5F7',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'rgb(255, 255, 0)',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#120e0e',
    },
    '&:hover fieldset': {
      borderColor: '#F6F50F7',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgb(255, 255, 0)',
    },
    '& input': {
      color: '#F6F5F7',
    },
  },
});


const FormField1 = () => {
  const formikProps = useContext(FormContext);
  return (
    <>
      <div style={{ height: "5.5rem" }}>
        
        <CssTextField
          id="outlined-basic"
          label="ชื่อ"
          variant="outlined"
          name="name"
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          value={formikProps.values.name}
          error={formikProps.touched.name && Boolean(formikProps.errors.name)}
          helperText={formikProps.touched.name && formikProps.errors.name}
        />
      </div>

      <div style={{ height: "5.5rem" }}>
        <CssTextField
          id="outlined-basic"
          label="นามสกุล"
          variant="outlined"
          name="lastName"
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          value={formikProps.values.lastName}
          error={
            formikProps.touched.lastName && Boolean(formikProps.errors.lastName)
          }
          helperText={
            formikProps.touched.lastName && formikProps.errors.lastName
          }
        />
      </div>
      <div style={{ height: "5.5rem" }}>
        <CssTextField
          id="outlined-basic"
          label="ชื่อเล่น"
          variant="outlined"
          name="nickName"
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          value={formikProps.values.nickName}
          error={
            formikProps.touched.nickName && Boolean(formikProps.errors.nickName)
          }
          helperText={
            formikProps.touched.nickName && formikProps.errors.nickName
          }
        />
      </div>
    </>
  );
};
export default FormField1;
