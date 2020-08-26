import React from 'react';
import { 
    View, 
    StyleSheet, 
    Text 
} from 'react-native';

const TitleView = () => {

    return (
        <View style={styles.mainViewTitle}>
            <Text style={{ fontSize: 25 }}>
            Active application counter
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainViewTitle: {
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });
  
  export default TitleView;