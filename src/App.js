import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Card from './components/Card';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Card title= "Eddard Stark" text= "Winter is coming..." />
            <Card title= "Arif Işık" text= "Uzaylılar tarafından kaçırıldım..."/>
            <Card title= "Cem Yılmaz" text= "Çeku hazırsan çıkalım balım..."/>
            <Card title= "Şafak Sezer" text= "Altın kapılarımız kan oldu Tayfun..."/>
            <StatusBar style='auto' />
            {/* en üstteki barın görünümü için kullanılır */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c0c0c0',
    }
})
export default App;