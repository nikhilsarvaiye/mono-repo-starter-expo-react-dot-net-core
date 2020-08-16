import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const textInput = ({ ...props }) => {
    const [text, setText] = useState('');
    return (
        <TextInput
            style={styles.default}
            onChangeText={(text) => setText(text)}
            value={text}
            {...props}
        />
    );
};

const styles = StyleSheet.create({
    default: {
        borderColor: '#bbb',
        borderWidth: 1,
        paddingLeft: 5,
        paddingTop: 1,
        paddingBottom: 1,
    },
});

export { textInput as TextInput };
