import React from 'react';
import { 
    View, 
    StyleSheet, 
    Text,
} from 'react-native';

const TextView = ({ counter }) => {

    return (
        <View style={styles.mainViewText} >
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'darkblue' }}>
                {counter}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainViewText: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
      },
  });
  
  export default TextView;