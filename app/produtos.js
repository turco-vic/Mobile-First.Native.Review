import { View, Text, Button, StyleSheet } from 'react-native';
import { Link } from "expo-router";

export default function Produtos() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Products Page</Text>
            <Link href="/" style={styles.link}>
                <Button title="Back to Home" />
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    link: {
        marginTop: 20,
    },
    linkText: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
});