import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Image, Text, SafeAreaView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather as Icon, FontAwesome } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'

import api from '../../services/api'

import styles from './styles'

interface Params {
    point_id: number
}

interface Point {
    image: string
    name: string
    email: string
    whatsapp: string
    city: string
    uf: string
    items: {
        title: string
    }[]
}

const Detail = () => {
    const navigation = useNavigation()
    const route = useRoute()

    const routeParams = route.params as Params

    const [point, setPoint] = useState<Point>({} as Point)

    useEffect(() => {
        api.get(`points/${routeParams.point_id}`).then(response => setPoint(response.data))
    }, [])

    function handleNavigateBack() {
        navigation.goBack()
    }

    if (!point) return null
    if (!point.items) return null

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={handleNavigateBack}>
                <Icon name="arrow-left" size={20} color="#34cb79" />
            </TouchableOpacity>

            <Image style={styles.pointImage} source={{ uri: point.image }} />

            <Text style={styles.pointName}>{point.name}</Text>
            <Text style={styles.pointItems}>
                {point.items.map(item => item.title).join(', ')}
            </Text>

            <View style={styles.address}>
                <Text style={styles.addressTitle}>Endereço</Text>
                <Text style={styles.addressContent}>{point.city}, {point.uf}</Text>
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