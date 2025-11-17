import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.containerPrincipal}>
        <View style={styles.containerGeral}>
            <View>
              <Text style={styles.textUpContainer}>Treino do Dia</Text>
              <View style={styles.containerBranco}></View>
            </View>
            <View>
              <Text style={styles.textUpContainer}>Ranking</Text>
              <View style={styles.containerBranco}></View>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({

  containerPrincipal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerGeral: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50,
  },

  containerBranco: {
    backgroundColor: '#ffffff',
    width: 300,
    height: 200,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000000ff',
  },

  textUpContainer: {
    color:'#ffff',
    marginLeft:10,
    marginBottom:5,
  }

});