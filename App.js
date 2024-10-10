/** IMPORTEM les llibreries necessàries */
import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

/** A la funció App, dins del return crearem la notra pantalla */
const App = () => {
  return (
    <View>
      <StatusBar/>
      <ScrollView>
        <View>
          <Text style={estils.titol}> Hola </Text>
        </View>
      </ScrollView>
    </View>
  );
}

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