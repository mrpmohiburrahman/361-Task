import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
const Button = (props) => {
    return (
        <View style={[style.mainContainer, props.backgroundColorStyle]} >
            <TouchableOpacity onPress={props.clickAction} activeOpacity={props.opacity} style={[style.innerContainer,props.innerContainerCustomStyle]}>
                <Image style={props.imageStyle} resizeMode={'contain'} source={props.img} />
                <Text style={[style.txt, props.textStyle]}>{props.text}</Text>
                <Image style={props.imageStyleRight} resizeMode={'contain'} source={props.imgRight} />
            </TouchableOpacity>
        </View>
    )
}
export default Button
const style = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        height: 61,
        overflow: 'hidden',
        borderRadius: 14, 
    },
    innerContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        backgroundColor: '#FFDDD5',
        borderRadius: 14,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    txt: {
        color: '#2F3034',
        fontWeight: '600',
        textAlign:'center',
        fontSize:16
    }
});




