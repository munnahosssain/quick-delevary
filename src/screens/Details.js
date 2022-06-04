import React from 'react';
import Text from '../Components/text/text';
import { spacing } from '../theme/spacing';
import { colors } from '../theme/colors';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import { View, StyleSheet, Image, Pressable } from 'react-native';

export default function Details() {
  return (
    <View>
      <Image
        style={styles.slideImg}
        source={require('../svg/images/sliderOne.png')}
      />
      <View style={styles.orderDetails}>
        <View style={{ margin: spacing[6] }}>
          <Text preset='h3' style={{ color: colors.black, fontWeight: 'bold' }}>Boston Lettuce</Text>
          <Text preset='h3' style={{ color: colors.black, fontWeight: 'bold', paddingVertical: spacing[4] }}>
            1.10 <Text style={{ color: colors.gray }}>€ / piece</Text>
          </Text>
          <Text preset='small' style={{ color: colors.green }}>~ 150 gr / piece</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.black, paddingVertical: spacing[4] }}>Spain</Text>
          <Text preset='h' style={{ lineHeight: 18, fontSize: 14, color: colors.black }}>
            Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.
          </Text>
          <View style={{ flexDirection: 'row', marginTop: 25 }}>
            <Pressable
              style={styles.button}
            >
              <Text style={{ textTransform: 'uppercase', }}>
                <FontAwesome5 name="heart" size={22} color="gray" />
              </Text>
            </Pressable>
            <Pressable
              style={styles.secondBtn}
            >
              <Text style={{ textTransform: 'uppercase', }}>
                <AntDesign name="shoppingcart" size={22} color="white" />{' '}
                add to cart
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  )
}

const styles = StyleSheet.create({
  slideImg: {
    marginTop: 50,
  },
  orderDetails: {
    marginTop: -25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#F6F5F5',
  },
  button: {
    height: 50,
    width: '30%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  secondBtn: {
    height: 50,
    width: '60%',
    marginLeft: 25,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.green,
  }
})