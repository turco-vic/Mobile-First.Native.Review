import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: 'blue' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' },
            }}
        >
            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name="produtos" options={{ title: 'Products' }} />
            <Stack.Screen name="contato" options={{ title: 'Contact' }} />
            <Stack.Screen name="sobre" options={{ title: 'About' }} />
        </Stack>
    );
}
