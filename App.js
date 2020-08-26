import React, { useRef, useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  AppState,
} from 'react-native';

const App = () => {

  const appState = useRef(AppState.currentState);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    AppState.addEventListener("change", _counterEvent);

    return () => {
      AppState.removeEventListener("change", _counterEvent);
    };
  }, []);

  const _counterEvent = (nextAppState) => {
    if(nextAppState === "active") {
      // console.log(AppState);
      setCounter(counter + 1);
      console.log(appState.current)
    }
    // console.log(nextAppState)
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View>
          <Text>
            {counter}
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

export default App;
