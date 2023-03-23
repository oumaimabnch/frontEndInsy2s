import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button } from '@mui/material';
import Box from '@mui/material/Box';
import {Container,Paper} from '@mui/material';

const PasswordForm = () => {
  const  paperStyle={padding:'50px 10px' ,width:750,margin:"40px auto" ,borderColor : "#00BFFF" }
  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validate: (values) => {
      const errors = {};
      if (!values.password) {
        errors.password = 'Required';
      }
      if (!values.confirmPassword) {
        errors.confirmPassword = 'Required';
      } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Passwords do not match';
      }
      return errors;
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (

    <Container maxWidth="sm" bg="#4f2f7e"  borderColor = "#00BFFF"
    >
        <Paper elevation={16} style={paperStyle} >
        <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        '& > :not(style)': { m: 1,  },
      }}
      noValidate
      autoComplete="off"
    >
       <h3>Mot de passe </h3>
      <TextField
        fullWidth
        label="Password"
        type="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
             <h3>Confirmation Mot de passe </h3>

      <TextField
        fullWidth
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
      />
      <Button type="submit" variant="contained" disabled={!formik.isValid}  style={{ margin: '20px 0' ,backgroundColor: '#4f2f7e' , color: 'white'}}>
        Validation
      </Button>
      </Box>
    </Paper>
    </Container>
  );
};

export default PasswordForm;
