import React from 'react'
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets()

    return (
        <View style={{
            flex: 1,
            marginTop: top + 20
        }}>
            <Text>SearchScreen</Text>
        </View>
    )
}
