/** IMPORTEM les llibreries necessàries */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import { PaperProvider, Text, TextInput, Button, IconButton } from 'react-native-paper';

const info = ["Email", "Nom"];
const estil = 'florida'; // Canvia a 'upv' segons vulguis
const isAdmin = true; // Canvia a true si és administrador

const moduls2Dam = [
  { nom: 'DIN', professor: 'Manel', hores: 120 },
  { nom: 'ADA', professor: 'Roberto', hores: 120 },
  { nom: 'PMDM', professor: 'Paco', hores: 100 },
  { nom: 'PSP', professor: 'Roberto', hores: 60 },
  { nom: 'SGE', professor: 'Belén', hores: 100 },
  { nom: 'Anglés', professor: 'Caterina', hores: 40 },
  { nom: 'EIE', professor: 'Ana', hores: 60 },
];
  

// Funció per mostrar cada mòdul amb els estils aplicats
const mostrarModuls = () => {
  return moduls2Dam.map((modul, index) => (
    <View key={index} style={estils.modulContainer}>
      <Text style={estils.nomModul}>{modul.nom}</Text>
      <Text style={estils.professor}>{modul.professor}</Text>
      <Text style={estils.hores}>{modul.hores} hores</Text>
    </View>
  ));
};

// Funció per seleccionar l'estil basat en la constant estil
const seleccionarEstil = () => {
  return estil === 'florida' ? estils.florida : estils.upv;
};

// Funció per seleccionar el color del text
const seleccionarColorText = () => {
  return estil === 'florida' ? 'white' : 'orange';
};

// Funció per seleccionar el color del placeholder
const seleccionarPlaceholderColor = () => {
  return estil === 'florida' ? 'white' : 'orange';
};

// Funció per mostrar el nom amb l'estil correcte
const nom = (textAMostrar, estilo) => {
  return (
    <Text style={estilo}>{textAMostrar}</Text>
  );
};

// Funció per generar els inputs amb els colors i estils dinàmics
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

// Funció per mostrar el botó d'informes només si isAdmin és true
const mostrarBotoInformes = () => {
  if (isAdmin) {
    return (
      <Button icon="format-list-bulleted" mode="contained" onPress={() => console.log('Informes')}>
        Informes
      </Button>
    );
  }
  return null; // No mostrar res si no és admin
};

/** A la funció App, dins del return crearem la nostra pantalla */
const App = () => {
  // Utilitzem les funcions per obtenir els estils i els colors
  const estilSeleccionat = seleccionarEstil();
  const colorText = seleccionarColorText();
  const placeholderColor = seleccionarPlaceholderColor();

  return (
    <PaperProvider>
      <View style={{ padding: 16 }}>
        {nom("Rubén Martínez Martínez", estilSeleccionat)}
        {dades(info, colorText, placeholderColor)}
        {mostrarBotoInformes()}
        {mostrarModuls()}
      </View>
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
  container: {
    padding: 16,
  },
  modulContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f0f0f0', // Color de fons per al mòdul
    borderRadius: 8,
  },
  nomModul: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue', // Color per al nom del mòdul
    marginBottom: 4,
  },
  professor: {
    fontSize: 16,
    color: 'green', // Color per al nom del professor
    marginBottom: 4,
  },
  hores: {
    fontSize: 16,
    color: 'red', // Color per a les hores
  },
});

export default App;
