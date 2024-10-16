/** IMPORTEM les llibreries necessàries */
import React from 'react';
import {ScrollView, StatusBar, StyleSheet, View,} from 'react-native';
import { PaperProvider, Text, TextInput } from 'react-native-paper';
const info = ["Email","Nom"];
const nom = (textAMostrar, estilo) => {
  return (
    <Text style={estilo}>{textAMostrar}</Text>
  );
};

const dades = (prueba) => {
  return (
    prueba.map((texto, index) => (
      <TextInput
        key={index} // Añadir una key única para cada elemento
        label={texto}
        value={texto}
      />
    ))
  );
};

/** A la funció App, dins del return crearem la nostra pantalla */
const App = () => {
  return (
    <PaperProvider>
      {nom("Rubén Martínez Martínez", estils.titol)}
      {dades(info)}
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
  upv:{
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
    },
    florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
    },
});

export default App;