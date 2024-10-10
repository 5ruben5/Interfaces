/** IMPORTEM les llibreries necessàries */
import React from 'react';
import {ScrollView, StatusBar, StyleSheet, View,} from 'react-native';
import { PaperProvider, Text, TextInput } from 'react-native-paper';
const info = ["Email","Nom"];
const nom = (textAMostrar, estilo) =>{
  return(
      <Text style={estilo}>{textAMostrar}</Text>
  );
};

const dades = (prueba) =>{

  return(
    prueba.map((texto) => {
      <TextInput
      label={texto}
      value={texto}
    />
    })
  );
};

/** A la funció App, dins del return crearem la notra pantalla */
const App = () => {
  return (

    <PaperProvider>
      {nom("Rubén Martínez Martínez", estils.titol)};
      {dades(info)};
    </PaperProvider>

  );
};

/** En aquesta secció, crearem els estils a aplicar als nostres components */
const estils = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  titol: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  descripcio: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});

export default App;