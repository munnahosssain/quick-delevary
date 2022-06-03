import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import OrderPage from './OrderPage';
import { colors } from '../theme/colors';

export default function Home() {
    return (
        <View>
            <View style={styles.container}>
                <Image
                    style={{ marginTop: 35 }}
                    source={require('../svg/images/LOGO.png')}
                />
                <OrderPage />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: colors.purple,
    }
});