import React from 'react';
import {Alert, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';

// Pre-step, call this before any NFC operations
NfcManager.start();

function Home() {
  async function readNdef() {
    console.log('iniciandoLeitura');
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      // let text = String.fromCharCode(...tag.ndefMessage[0].payload);
      let text = String.fromCharCode(...tag.ndefMessage[0].payload).substring(
        3,
      );

      console.log({text});

      console.log('Tag found', JSON.stringify(tag, null, 1));
    } catch (ex) {
      console.warn('Oops!', ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  }

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={{backgroundColor: 'red', width: 100, height: 100}}
        onPress={readNdef}>
        <Text>Scan a Tag</Text>
      </TouchableOpacity>
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
