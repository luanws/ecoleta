import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import MapView from 'react-native-maps'

import styles from './styles'

const Points = () => {
    const navigation = useNavigation()

    function handleNavigateBack() {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleNavigateBack}>
                <Icon name="arrow-left" size={20} color="#34cd79" />
            </TouchableOpacity>

            <Text style={styles.title}>Bem vindo</Text>
            <Text style={styles.description}>Encontre no mapa um ponto de coleta.</Text>

            <View style={styles.mapContainer}>
                <MapView style={styles.map}></MapView>
            </View>
            
            <View style={styles.itemsContainer}>
                <TouchableOpacity style={styles.item} onPress={() => {}}>

                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Points