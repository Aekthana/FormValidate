import { useContext } from "react";
import { FormContext } from "./DynamicForms";
import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { FormHelperText } from "@mui/material";
import { styled } from "@mui/material/styles";

const CssTextField = styled(TextField)({
  width: "100%",
  "& label.Mui-focused": {
    color: "rgb(255, 255, 0)",
  },
  "& label": {
    color: "#F6F5F7",
    borderColor: "#120e0e",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "rgb(255, 255, 0)",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#120e0e",
    },
    "&:hover fieldset": {
      borderColor: "#F6F5F7",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgb(255, 255, 0)",
    },
    "& input": {
      color: "#F6F5F7",
    },
  },
});
const StyledFormControl = styled(FormControl)({
  width: "100%",
  "& label.Mui-focused": {
    color: "rgb(255, 255, 0)",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#120e0e",
    },
    "&:hover fieldset": {
      borderColor: "#F6F5F7",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgb(255, 255, 0)",
    },
    "& input": {
      color: "#F6F5F7",
    },
  },
});
const FormField2 = () => {
  const { formikProps, setfocusedField2 } = useContext(FormContext);
  const handleFocus = (field) => {
    setfocusedField2(field);
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseDownConfirmPassword = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <div style={{ height: "5.5rem" }}>
        <CssTextField
          id="outlined-basic"
          label="อีเมลล์"
          variant="outlined"
          name="email"
          onFocus={() => handleFocus("email")}
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          value={formikProps.values.email}
          error={formikProps.touched.email && Boolean(formikProps.errors.email)}
          helperText={formikProps.touched.email && formikProps.errors.email}
        />
      </div>
      <div style={{ height: "5.5rem" }}>
        <StyledFormControl
          sx={{ width: "100%" }}
          variant="outlined"
          error={
            formikProps.touched.password && Boolean(formikProps.errors.password)
          }
        >
          <InputLabel
            htmlFor="outlined-adornment-password"
            sx={{ color: "white" }}
          >
            password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  sx={{ color: "white" }}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="password"
            inputProps={{
              name: "password",
              onChange: formikProps.handleChange,
              onBlur: formikProps.handleBlur,
              value: formikProps.values.password,
              onFocus: () => handleFocus("password"),
            }}
            error={
              formikProps.touched.password &&
              Boolean(formikProps.errors.password)
            }
          />
          {formikProps.touched.password &&
            Boolean(formikProps.errors.password) && (
              <FormHelperText>{formikProps.errors.password}</FormHelperText>
            )}
        </StyledFormControl>
      </div>

      <div style={{ height: "5.5rem" }}>
        <StyledFormControl
          sx={{ width: "100%" }}
          variant="outlined"
          error={
            formikProps.touched.confirmPassword &&
            Boolean(formikProps.errors.confirmPassword)
          }
        >
          <InputLabel
            htmlFor="outlined-adornment-confirmPassword"
            sx={{ color: "white" }}
          >
            confirmPassword
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  sx={{ color: "white" }}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownConfirmPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="confirmPassword"
            inputProps={{
              name: "confirmPassword",
              onChange: formikProps.handleChange,
              onBlur: formikProps.handleBlur,
              value: formikProps.values.confirmPassword,
              onFocus: () => handleFocus("confirmpassword"),
            }}
            error={
              formikProps.touched.confirmPassword &&
              Boolean(formikProps.errors.confirmPassword)
            }
          />
          {formikProps.touched.confirmPassword &&
            Boolean(formikProps.errors.confirmPassword) && (
              <FormHelperText>
                {formikProps.errors.confirmPassword}
              </FormHelperText>
            )}
        </StyledFormControl>
      </div>
    </>
  );
};

export default FormField2;
