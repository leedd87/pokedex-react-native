import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Image, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated'
import { styles } from '../theme/appTheme'

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets()

    const navigation = useNavigation()

    usePokemonPaginated()

    return (
        <View>
            <Text style={{
                ...styles.title,
                ...styles.globalMargin,
                top: top + 20
            }}>Pokedex</Text>
            {/* <Button
                title='Pokemon'
                onPress={() => navigation.navigate('PokemonScreen')}
            /> */}
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />
        </View>
    )
}
