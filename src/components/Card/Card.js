import React from "react";
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from "./Card.style";

const Card = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.text}>{props.text}</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => { Alert.alert(`${props.title}'ın sözünü beğendiniz.`) }}>
                <Text style={styles.buttonText}>Beğenmek için tıklayın</Text>
            </TouchableOpacity>
            {/* bir view'ı button seklinde kullanmak istersek 'TouchableOpacity'i tercih ederiz */}
        </View>
    )
}

export default Card;