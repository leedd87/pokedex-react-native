import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ActivityIndicator, Button, FlatList, Image, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { createIconSetFromFontello } from 'react-native-vector-icons'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated'
import { styles } from '../theme/appTheme'

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets()

    const navigation = useNavigation()

    const { simplePokemonList, isLoading, loadPokemons } = usePokemonPaginated()

    console.log(simplePokemonList)

    return (
        <>
            {/* <Text style={{
                ...styles.title,
                ...styles.globalMargin,
                top: top + 20
            }}>Pokedex</Text> */}
            {/* <Button
                title='Pokemon'
                onPress={() => navigation.navigate('PokemonScreen')}
            /> */}
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />
            <FlatList
                data={simplePokemonList}
                keyExtractor={(pokemon) => pokemon.id}
                renderItem={({ item }) => (
                    <Image
                        source={{ uri: item.picture }}
                        style={{
                            width: 100,
                            height: 100,
                        }}
                    />
                )}
                showsVerticalScrollIndicator={false}
                onEndReached={loadPokemons}
                onEndReachedThreshold={0.4}
                ListFooterComponent={(
                    <ActivityIndicator
                        style={{ height: 100 }}
                        size={20}
                        color='red'
                    />)}
            />
        </>
    )
}
