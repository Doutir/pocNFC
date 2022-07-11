import React from 'react';
import {Alert, View, StyleSheet} from 'react-native';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';
import {Button} from '../../components/Button';

// Pre-step, call this before any NFC operations
NfcManager.start();

function Home({navigation}) {
  async function readNdef() {
    navigation.navigate('Profile', {
      userId: '5403dd5e-61dd-47ff-ae84-cc13bad5fd9a',
    });
    console.log({navigation});
    // try {
    //   // register for the NFC tag with NDEF in it
    //   await NfcManager.requestTechnology(NfcTech.Ndef);
    //   // the resolved tag object will contain `ndefMessage` property
    //   const tag = await NfcManager.getTag();
    //   // let text = String.fromCharCode(...tag.ndefMessage[0].payload);
    //   let text = String.fromCharCode(...tag.ndefMessage[0].payload).substring(
    //     3,
    //   );
    //   console.log({text});
    //   console.log('Tag found', JSON.stringify(tag, null, 1));
    // } catch (ex) {
    //   Alert.alert('Oops!', 'houve um erro ao ler a tag, tente novamente');
    //   console.warn('Oops!', ex);
    // } finally {
    //   // stop the nfc scanning
    //   NfcManager.cancelTechnologyRequest();
    // }
  }

  return (
    <View style={styles.wrapper}>
      <Button onPress={readNdef}>Ler TAG</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {Home};
