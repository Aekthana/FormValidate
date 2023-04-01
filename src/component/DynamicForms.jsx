import * as Yup from "yup";
import React, { createContext, useState } from "react";
import { Formik, Form } from "formik";
import FormField1 from "./FormField1";
import FormField2 from "./FormField2.jsx";
import { Container } from "@mui/system";
import { Avatar, Box, Typography, Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const CssButton = styled(Button)(({ theme }) => ({
  color: "#F6F5F7",
  border: "2px solid #040404",
  "&:hover": {
    backgroundColor: "#120e0e",
    borderColor: "#FFFFFF",
  },
}));
const formSchemas = {
  form1: Yup.object().shape({
    name: Yup.string().required("กรุณากรอกข้อมูล"),
    lastName: Yup.string().required("กรุณากรอกข้อมูล"),
    nickName: Yup.string().required("กรุณากรอกข้อมูล"),
  }),
  form2: Yup.object().shape({
    email: Yup.string()
      .email("กรุณาข้อมูลให้ถูกต้อง")
      .required("กรุณากรอกข้อมูล"),
    password: Yup.string()
      .matches(/[a-z]/, "ต้องมีพิมพ์เล็กอย่างน้อย 1 ตัว")
      .matches(/[A-Z]/, "ต้องมีพิมพ์ใหญ่อย่างน้อย 1 ตัว")
      .matches(/[0-9]/, "ต้องมีตัวเลขอย่างน้อย 1 ตัว")
      .min(8, "ต้องมีความยาวอย่างน้อย 8 ตัว")
      .required("กรุณากรอกข้อมูล"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "กรุณากรอก password ให้ตรงกัน")
      .required("กรุณากรอกข้อมูล"),
  }),
};

const initialValue = {
  name: "",
  lastName: "",
  nickName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const FormContext = createContext({});
const DynamicForms = () => {
  const [activeForm, setActiveForm] = useState("form1");
  const [focusedField1, setfocusedField1] = useState(null);
  const [focusedField2, setfocusedField2] = useState(null);
  const [valueLinear, setValueLinear] = useState(0);
  const [valueBufferLinear, setValueBufferLinear] = useState(0);

  const theme = createTheme({
    palette: {
      primary: {
        main:
          focusedField1 === "name" ||
          focusedField1 === "lastname" ||
          focusedField1 === "nickname"
            ? "rgb(255, 255, 0)"
            : "#F6F5F7",
      },
    },
  });

  const handleSubmit = (values, { setFieldTouched }) => {
    if (activeForm === "form1") {
      setValueLinear(50);
      setValueBufferLinear(100);
    } else if (activeForm === "form2") {
      setValueLinear(100);
    }

    setTimeout(() => {
      setActiveForm("form2");
      Object.keys(formSchemas.form2.fields).forEach((fieldName) => {
        setFieldTouched(fieldName, false);
      });
    }, 250);
  };

  const handleClickBack = () => {
    setValueLinear(0);
    setValueBufferLinear(50);
    setTimeout(() => {
      setActiveForm("form1");
    }, 250);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        p: 4,
        background: " #0b0909",
        boxShadow: "7px 7px 14px #040404,-7px -7px 14px #120e0e;",
        borderRadius: "50px",
        my: 5,
      }}
    >
      <Box sx={{ mb: 3, textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{ typography: { letterSpacing: "5px" }, fontWeight: "bold" }}
        >
          REGISTER
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 4,
        }}
      >
        <Box>
          <Avatar
            sx={{
              width: "1.8rem",
              height: "1.8rem",
              background:
                focusedField1 === "name" ||
                focusedField1 === "lastname" ||
                focusedField1 === "nickname"
                  ? "rgb(255, 255, 0)"
                  : "#0b0909",
              border:
                focusedField1 === "name" ||
                focusedField1 === "lastname" ||
                focusedField1 === "nickname"
                  ? "2px solid #F6F5F7"
                  : "2px solid #120e0e",
            }}
          >
            1
          </Avatar>
        </Box>
        <ThemeProvider theme={theme}>
          <LinearProgress
            variant="buffer"
            color="primary"
            value={valueLinear}
            valueBuffer={valueBufferLinear}
            sx={{ flexGrow: 1 }}
          />
        </ThemeProvider>
        <Avatar
          sx={{
            width: "1.8rem",
            height: "1.8rem",
            background:
              focusedField2 === "email" ||
              focusedField2 === "password" ||
              focusedField2 === "confirmpassword"
                ? "rgb(255, 255, 0)"
                : "#0b0909",
            border:
              focusedField2 === "email" ||
              focusedField2 === "password" ||
              focusedField2 === "confirmpassword"
                ? "2px solid #F6F5F7"
                : "2px solid #120e0e",
          }}
        >
          2
        </Avatar>
      </Box>

      <Formik
        initialValues={initialValue}
        validationSchema={formSchemas[activeForm]}
        onSubmit={handleSubmit}
      >
        {(formikProps) => (
          <FormContext.Provider
            value={{
              formikProps,
              setfocusedField1,
              setfocusedField2,
              setValueBufferLinear,
            }}
          >
            <Form>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                {activeForm === "form1" && <FormField1 />}
                {activeForm === "form2" && <FormField2 />}
                <Box
                  sx={{
                    width: "100%",
                    mt: 2,
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  {activeForm === "form1" && (
                    <CssButton
                      type="submit"
                      variant="outlined"
                      endIcon={<NavigateNextIcon />}
                    >
                      NEXT
                    </CssButton>
                  )}
                  {activeForm === "form2" && (
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 2,
                      }}
                    >
                      <CssButton
                        sx={{ marginRight: "5px" }}
                        variant="outlined"
                        startIcon={<NavigateBeforeIcon />}
                        onClick={handleClickBack}
                      >
                        BACK
                      </CssButton>
                      <CssButton
                        type="submit"
                        variant="outlined"
                        color="error"
                        endIcon={<NavigateNextIcon />}
                      >
                        FINISH
                      </CssButton>
                    </Box>
                  )}
                </Box>
              </Box>
            </Form>
          </FormContext.Provider>
        )}
      </Formik>
    </Container>
  );
};

export default DynamicForms;
export { FormContext };
