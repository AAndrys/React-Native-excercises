import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  AppState,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const App = () => {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    getValueFromStorage();
  }, [])

  useEffect(() => {
    AppState.addEventListener("change", _counterEvent);

    return () => {
      AppState.removeEventListener("change", _counterEvent);
    };
  }, [counter]);

  const _counterEvent = (nextAppState) => {
    if(nextAppState === "active") {
      setCounter(counter + 1);
    } else {
      saveValueToStorage();
    }
  };
  const getValueFromStorage =  async () => {
    try {
      const storageCounterValue = await AsyncStorage.getItem('@storage_activeValue');
      setCounter(JSON.parse(storageCounterValue));
      console.log('GET ' + counter);
    } catch(err) {
      console.log(err);
    }
  };
  const saveValueToStorage =  async () => {
    try {
      await AsyncStorage.setItem('@storage_activeValue', JSON.stringify(counter));
      console.log(await AsyncStorage.getItem('@storage_activeValue'));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.mainView}>
          <View style={styles.mainViewTitle}> 
            <Text style={{ fontSize: 25 }}>
              Active application counter
            </Text>
          </View>
          <View style={styles.mainViewText} >
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'darkblue' }}>
              {counter}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainViewTitle: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainViewText: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
