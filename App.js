/** IMPORTEM les llibreries necessàries */
import React from 'react';
import {StyleSheet} from 'react-native';
import { PaperProvider, Text, TextInput } from 'react-native-paper';

const info = ["Email", "Nom"];
const estil = 'upv'; // Canvia a 'upv' segons vulguis

const nom = (textAMostrar, estilo) => {
  return (
    <Text style={estilo}>{textAMostrar}</Text>
  );
};

const dades = (prueba, colorText, placeholderColor) => {
  return (
    prueba.map((texto, index) => (
      <TextInput
        key={index} // Añadir una key única para cada elemento
        label={texto}
        value={texto}
        style={{ color: colorText }} // Aplicar color al text
        placeholderTextColor={placeholderColor} // Aplicar color al placeholder
      />
    ))
  );
};

/** A la funció App, dins del return crearem la nostra pantalla */
const App = () => {
  // Determinem l'estil a aplicar i els colors dinàmics en funció de la constant 'estil'
  const estilSeleccionat = estil === 'florida' ? estils.florida : estils.upv;
  const colorText = estil === 'florida' ? 'white' : 'orange';
  const placeholderColor = estil === 'florida' ? 'white' : 'orange';

  return (
    <PaperProvider>
      {nom("Rubén Martínez Martínez", estilSeleccionat)}
      {dades(info, colorText, placeholderColor)}
    </PaperProvider>
  );
};

/** En aquesta secció, crearem els estils a aplicar als nostres components */
const estils = StyleSheet.create({
  titol: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  upv: {
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
  },
});

export default App;
