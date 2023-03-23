import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Container,Paper} from '@mui/material';
import { useFormik } from 'formik';
import { DatePicker } from '@mui/lab';

import * as yup from 'yup';


const validationSchema = yup.object({
    nom: yup.string().required('Nom is required'),
    prenom: yup.string().required('Prénom is required'),
    email: yup.string().email('Enter a valid email').required('Email is required'),
    poste: yup.string().required('Poste is required'),

    dateNaissance: yup.string().required('Date de naissance is required'),
    numSS: yup.string().required('Numéro SS is required'),
    telephone: yup.string().required('Numéro de téléphone is required'),
    adresse: yup.string().required('Adresse is required'),
    codePostal: yup.string().required('Code postal is required'),
    ville: yup.string(),
   
  });

  





export default function Consultant() {
  const  paperStyle={padding:'50px 10px' ,width:750,margin:"40px auto" ,borderColor : "#00BFFF" }


  const formik = useFormik({
    initialValues: {
      nom: '',
      prenom: '',
      email: '',
      poste:'',
      dateNaissance: null,
      numSS: '',
      telephone: '',
      adresse: '',
      codePostal: '',
      ville: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const { handleChange, handleBlur, errors, isValid , dirty } = formik;


  return (
    <Container maxWidth="sm" bg="#4f2f7e"  borderColor = "#00BFFF"
    >
        <Paper elevation={16} style={paperStyle} >
            <h1 style={{color:"#4f2f7e"}}>Prêt à démarrer en portage salarial ? </h1>
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        '& > :not(style)': { m: 1,  },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="nom" label="Nom" variant="outlined" required onChange={formik.handleChange} value={formik.values.nom} error={formik.touched.nom && Boolean(formik.errors.nom)}
            helperText={formik.touched.nom && formik.errors.nom}/>
      <TextField id="prenom" label="Prénom" variant="outlined" required  value={formik.values.prenom}
            onChange={formik.handleChange}
            error={formik.touched.prenom && Boolean(formik.errors.prenom)}
            helperText={formik.touched.prenom && formik.errors.prenom} />
      <TextField id="email" label="Email" variant="outlined" required email="Enter a valid mail"
       onChange={handleChange} onBlur={handleBlur}  error={!!errors.email} helperText={errors.email}/>
      <TextField id="poste" label="Poste" variant="outlined" required value={formik.values.poste}
            onChange={formik.handleChange}
            error={formik.touched.poste && Boolean(formik.errors.poste)}
            helperText={formik.touched.poste && formik.errors.poste} />


<DatePicker
  id="dateNaissance"
  label="Date de naissance"
  inputFormat="DD/MM/YYYY"
  value={formik.values.dateNaissance}
  onChange={(date) => formik.setFieldValue('dateNaissance', date)}
  renderInput={(params) => (
    <TextField
      {...params}
      variant="outlined"
      error={formik.touched.dateNaissance && Boolean(formik.errors.dateNaissance)}
      helperText={formik.touched.dateNaissance && formik.errors.dateNaissance}
      onFocus={() => {
        // Set the `open` prop to `true` when the input field is focused
        formik.setFieldTouched('dateNaissance', true, false);
      }}
    />
  )}
  // Set the `open` prop to `true` when the field has been touched
  open={formik.touched.dateNaissance}
/>




     

      <TextField id="numSS" label="Numéro SS" variant="outlined" required value={formik.values.numSS}
            onChange={formik.handleChange}
            error={formik.touched.numSS && Boolean(formik.errors.numSS)}
            helperText={formik.touched.numSS && formik.errors.numSS} />
      <TextField id="telephone" label="Numéro de téléphone" variant="outlined" required  value={formik.values.telephone}
            onChange={formik.handleChange}
            error={formik.touched.telephone && Boolean(formik.errors.telephone)}
            helperText={formik.touched.telephone && formik.errors.telephone} />
      <TextField id="adresse" label="Adresse" variant="outlined" required  value={formik.values.adresse}
            onChange={formik.handleChange}
            error={formik.touched.adresse && Boolean(formik.errors.adresse)}
            helperText={formik.touched.adresse && formik.errors.adresse} />
      <TextField id="codePostal" label="Code postal" variant="outlined"  required  value={formik.values.codePostal}
            onChange={formik.handleChange}
            error={formik.touched.codePostal && Boolean(formik.errors.codePostal)}
            helperText={formik.touched.codePostal && formik.errors.codePostal}  />
      <TextField id="ville" label="Ville" variant="outlined"  required value={formik.values.ville}
            onChange={formik.handleChange}
            error={formik.touched.ville && Boolean(formik.errors.ville)}
            helperText={formik.touched.ville && formik.errors.ville} />
     
            <Button type="submit"  variant="contained" disabled={!(isValid && dirty)} style={{ margin: '20px 0' ,backgroundColor: '#4f2f7e' , color: 'white'}}> Enregistrer </Button>


        

    </Box>
    </Paper>
    </Container>
  );
}
