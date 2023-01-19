import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootStackParams } from '../navigator/Navigator';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { };

export const PokemonScreen = ({ navigation, route }: Props) => {

    const { simplePokemon, color } = route.params
    const { id, name, picture } = simplePokemon
    const { top } = useSafeAreaInsets()

    return (
        <View style={{
            ...styles.headerContainer,
            backgroundColor: color,

        }}>
            <TouchableOpacity
                onPress={() => navigation.pop(1)}
                activeOpacity={0.8}
                style={{
                    ...styles.backButton,
                    top: top + 5
                }}
            >
                <Icon
                    name="arrow-back-outline"
                    color='white'
                    size={35}
                />
            </TouchableOpacity>

            <Text style={{
                ...styles.pokemonName,
                top: top + 45
            }}>
                {name + '\n'}#{id}
            </Text>


            <Image
                source={require('../assets/pokebola-blanca.png')}
                style={{ ...styles.pokeBall }}
            />

            <FadeInImage
                uri={picture}
                style={styles.pokemonImage}
            />

        </View>
    )
}

const styles = StyleSheet.create({

    headerContainer: {
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },
    backButton: {
        position: 'absolute',
        left: 20,
    },
    pokemonName: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20,
    },
    pokeBall: {
        width: 250,
        height: 250,
        bottom: -20,
        opacity: 0.7,
    },
    pokemonImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -20
    }

})