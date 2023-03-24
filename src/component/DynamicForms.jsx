import * as Yup from 'yup';
import React,{createContext,useState} from 'react';

const formSchemas ={
  form1:Yup.object().shape({
    name:Yup.string().required('กรุณากรอกข้อมูล'),
    lastName:Yup.string().required('กรุณากรอกข้อมูล'),
    nickName:Yup.string().required('กรุณากรอกข้อมูล')
  }),
  form2:Yup.object().shape({
    email:Yup.string().email('กรุณาข้อมูลให้ถูกต้อง').required('กรุณากรอกข้อมูล'),
    password:Yup.string()
    .matches(/[a-z]/,'ต้องมีพิมพ์เล็กอย่างน้อย 1 ตัว')
    .matches(/[A-Z]/,'ต้องมีพิมพ์ใหญ่อย่างน้อย 1 ตัว')
    .matches(/[0-9]/,'ต้องมีตัวเลขอย่างน้อย 1 ตัว')
    .min(8,'ต้องมีความยาวอย่างน้อย 8 ตัว')
    .required('กรุณากรอกข้อมูล'),
    confirmPassword:Yup.string().oneOf([Yup.ref('password')],'กรุณากรอก password ให้ตรงกัน')
    .required('กรุณากรอกข้อมูล')

  })
}

const initialValue ={
  form1:{
    name:'',
    lastName:'',
    nickName:''
  },
  form2:{
    email:'',
    password:'',
    confirmPassword:''
  }
}

const FormContext = createContext({});

const DynamicForms=()=>{

}


export default DynamicForms;
