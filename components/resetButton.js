import React from 'react';
import { 
    View,
    Button 
} from 'react-native';

const ResetButton = ({ reset }) => {

    return (
        <View>
            <Button title="Reset async storage" onPress={reset} />
        </View>
    );
}
  
export default ResetButton;