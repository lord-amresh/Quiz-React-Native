import {View, Text, StyleSheet } from 'react-native';

type Card = {
    title: string;
}

export default function card({title}: Card) {
    return (
        <View style= {styles.container}>
            <Text style= {styles.title}>{title}</Text>
            </View>
    );
}


const styles = StyleSheet.create({
    QuestionCard: { 
        backgroundColor: 'white',
        padding: 20,
        paddingVertical: 40,
        borderRadius: 20,
        gap: 20,

        // Shaddow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
     },
    question: { 
        fontSize: 24,
        fontWeight: '500',
     },
})