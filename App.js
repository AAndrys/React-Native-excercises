import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  AppState
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

//Components
import TitleView from './components/titleView';
import TextView from './components/textView';
import ResetButton from './components/resetButton';

const App = () => {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    getValueFromStorage();
  }, []);

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

  const resetAsyncStorage = async () => {
    setCounter(0);
    try {
      await AsyncStorage.setItem('@storage_activeValue', JSON.stringify(0));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.mainView}>
          <TitleView />
          <TextView counter={counter} />
          <ResetButton reset={resetAsyncStorage} />
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
});

export default App;
