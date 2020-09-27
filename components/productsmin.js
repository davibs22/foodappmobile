import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { Rating } from 'react-native-ratings';
import { Left } from 'native-base';

const ProductsMin = (props) => {
    return (
        <View style={styles.background}>
            <Image style={styles.imgProducts} source={require('../assets/img/0.jpg')}/>
            <View>
                <Text style={styles.title}>{props.titleName}</Text>
                <Text style={styles.type}>{props.typeName}</Text>
                <View style={styles.ratingContent}>
                    <Rating
                        style={styles.star}
                        type='star'
                        ratingCount={5}
                        imageSize={15}
                        fractions={0}
                        startingValue={props.ratingValue}
                    />
                </View>
            </View>
            <View style={styles.priceContent}>
               <Text style={styles.price}>R${props.price}</Text>
            </View>
        </View>
    )
}

export default ProductsMin

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#FFFFFF',
        height: 90,
        width: '100%',
        flexDirection: 'row', //Elemento um ao lado do outro
        flexWrap: 'wrap',
        borderBottomColor: '#3D3D3D',
        borderBottomWidth: 0.8
    },
    imgProducts: {
        backgroundColor: '#000000',
        height: 70,
        width: 70,
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 10
    },
    title: {
        color: '#EB5757',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10
    },
    type: {
        marginLeft: 10
    },
    star: {
        marginTop: 7
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 0,
    },
    ratingContent: {
        maxWidth: 100
    },
    priceContent: {
        flex: 1,
        width: 'auto',
        marginRight: 20,
        paddingBottom: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
  });
