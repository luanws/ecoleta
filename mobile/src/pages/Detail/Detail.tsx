import React from 'react'
import { View, TouchableOpacity, Image, Text, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather as Icon, FontAwesome } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'

const Detail = () => {
    const navigation = useNavigation()

    function handleNavigateBack() {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={handleNavigateBack}>
                <Icon name="arrow-left" size={20} color="#34cb79" />
            </TouchableOpacity>

            <Image style={styles.pointImage} source={{ uri: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' }} />

            <Text style={styles.pointName}>Mercadão do João</Text>
            <Text style={styles.pointItems}>Lâmpadas, Óleo de Cozinha</Text>

            <View style={styles.address}>
                <Text style={styles.addressTitle}>Endereço</Text>
                <Text style={styles.addressContent}>Rio do Sul, SC</Text>
            </View>

            <View style={styles.footer}>
                <RectButton style={styles.button}>
                    <FontAwesome name="whatsapp" size={20} color="#fff" />
                    <Text style={styles.buttonText}>Whatsapp</Text>
                </RectButton>
                <RectButton style={styles.button}>
                    <Icon name="mail" size={20} color="#fff" />
                    <Text style={styles.buttonText}>Email</Text>
                </RectButton>
            </View>
        </SafeAreaView>
    )
}

export default Detail