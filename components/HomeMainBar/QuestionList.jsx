import React from 'react'
import Questions from './Questions';

const QuestionList = ({ questionsList }) => {
    return (
        <>
            {questionsList?.map((question) => (
                <QuestionsList />
            ))}
        </>
    );
};
export default QuestionList;