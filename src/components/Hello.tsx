import { StyleSheet, Text, View } from 'react-native'

export default function Hello({msg}: {msg:string}) {
    return (
        <View style={styles.container}>
            <Text>{msg}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
