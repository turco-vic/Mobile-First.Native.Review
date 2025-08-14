import { View, Text, Button, StyleSheet } from 'react-native';
import { Link } from "expo-router";

export default function Sobre() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the About Page</Text>
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
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    link: {
        marginTop: 20,
    },
});