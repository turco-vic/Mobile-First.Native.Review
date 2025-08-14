import { View, Text, Button, StyleSheet } from 'react-native'; // Corrigido de StylesSheet para StyleSheet
import { Link } from "expo-router";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Home Page</Text>
            <Link href="/produtos" style={styles.link}>
                <Button title="Go to Products Page" />
            </Link>
            <Link href="/contato" style={styles.link}>
                <Button title="Go to Contact Page" />
            </Link>
            <Link href="/sobre" style={styles.link}>
                <Button title="Go to About Page" />
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
        backgroundColor: "blue",
        color: "#fff",
    },
    linkText: {
        color: 'blue',
    },
});