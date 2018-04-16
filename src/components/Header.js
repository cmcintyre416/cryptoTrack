import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Header = () => {
    return (
        <View style={headerWrapper}>
            <Text style={header}>CryptoTrack</Text>
        </View>    
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        display: 'flex',
        marginTop: 40,
        alignItems: 'center',
    },
    header: {
        fontWeight: 'bold',
        fontSize: 30,
    }
})

const { headerWrapper, header} = styles;



export default Header;