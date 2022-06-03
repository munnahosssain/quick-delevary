import React from 'react';
import Text from '../Components/text/text';
import { spacing } from '../theme/spacing';
import { colors } from '../theme/colors';
import { View, StyleSheet, Image, Pressable, Button } from 'react-native';

export default function OrderPage() {
    return (
        <View style={styles.orderItem}>
            <Image
                style={styles.imgWrap}
                source={require('../svg/images/box.png')}
            />
            <Text preset='h1' style={{ color: colors.black, fontWeight: 'bold', textAlign: 'center' }}>
                Non-Contact{'\n'}Deliveries
            </Text>
            <Text style={{ color: colors.black, textAlign: 'center', paddingHorizontal: spacing[4], marginTop: spacing[4] }}>
                When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door.
            </Text>
            <Pressable style={styles.button}>
                <Text style={{ textTransform: 'uppercase', }}>
                    Order Now
                </Text>
            </Pressable>
            <Pressable>
                <Text style={{ textTransform: 'uppercase', color: colors.black }}>
                    dismiss
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    orderItem: {
        flex: 1,
        marginTop: 160,
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#F6F5F5',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    
    imgWrap: {
        margin: spacing[5],
    },

    button: {
        height: 50,
        width: '90%',
        margin: 25,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.green,
        marginHorizontal: spacing[4],
    }
});