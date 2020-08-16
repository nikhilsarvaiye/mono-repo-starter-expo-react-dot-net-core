import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from '@library/text-input';

const home = () => {
    const [text, setText] = useState('');
    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={(text: string) => setText(text)}
                value={text}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 20,
    },
});

export { home as Home };
