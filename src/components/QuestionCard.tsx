import { View, Text, StyleSheet } from 'react-native'
import AnswerOption from './AnswerOption';
import { Question } from '../types';


type  QuestionCard = {
    question: Question;
};

export  default function QuestionCard({question}: QuestionCard){
    const selectedOption = question.options[0];

    

    return (
        <View style= {styles.QuestionCard}>
            <Text style= {styles.question}>{question.title}</Text>

            <View style={{ gap: 10}}>
            <AnswerOption option={question.options[0]} isSelected={question.options[0] === selectedOption} />
            <AnswerOption option={question.options[1]} isSelected={question.options[1] === selectedOption}/>
            <AnswerOption option={question.options[2]} isSelected={question.options[2] === selectedOption}/>
            <AnswerOption option={question.options[3]} isSelected={question.options[3] === selectedOption}/>
            </View>
        </View>
    )
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
});