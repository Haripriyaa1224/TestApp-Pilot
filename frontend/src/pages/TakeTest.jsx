import React, { useState } from 'react';
import {
    Box,
    Button,
    Typography,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Paper,
} from '@mui/material';

const TakeTest = () => {
    // Sample questions data
    const questions = [
        {
            id: 1,
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
        },
        {
            id: 2,
            question: "Who developed the theory of relativity?",
            options: ["Newton", "Einstein", "Tesla", "Edison"],
        },
        {
            id: 3,
            question: "What is the largest planet in our solar system?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
        },
        {
            id: 4,
            question: "What is the square root of 64?",
            options: ["6", "7", "8", "9"],
        },
        {
            id: 5,
            question: "Which element has the chemical symbol 'O'?",
            options: ["Oxygen", "Gold", "Iron", "Silver"],
        },
        {
            id: 6,
            question: "Who wrote 'Hamlet'?",
            options: ["Shakespeare", "Dickens", "Hemingway", "Twain"],
        },
        {
            id: 7,
            question: "What is the boiling point of water in Celsius?",
            options: ["50°C", "100°C", "150°C", "200°C"],
        },
        {
            id: 8,
            question: "What is the chemical formula for water?",
            options: ["H2O", "CO2", "O2", "NaCl"],
        },
        {
            id: 9,
            question: "Which is the fastest land animal?",
            options: ["Lion", "Cheetah", "Tiger", "Leopard"],
        },
        {
            id: 10,
            question: "Who painted the Mona Lisa?",
            options: ["Van Gogh", "Da Vinci", "Picasso", "Monet"],
        },
    ];

    // State to store selected answers
    const [answers, setAnswers] = useState({});

    const handleAnswerChange = (questionId, answer) => {
        setAnswers((prev) => ({
            ...prev,
            [questionId]: answer,
        }));
    };

    const handleSubmit = () => {
        console.log("Submitted Answers:", answers);
        // Add submission logic here, such as saving answers to a database
        alert("Your test has been submitted!");
    };

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>
                Take Test
            </Typography>
            <Box sx={{ mt: 3 }}>
                {questions.map((q) => (
                    <Paper key={q.id} sx={{ p: 2, mb: 3 }}>
                        <FormControl component="fieldset">
                            <FormLabel>
                                <Typography variant="h6">{q.id}. {q.question}</Typography>
                            </FormLabel>
                            <RadioGroup
                                value={answers[q.id] || ""}
                                onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                            >
                                {q.options.map((option, index) => (
                                    <FormControlLabel
                                        key={index}
                                        value={option}
                                        control={<Radio />}
                                        label={option}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </Paper>
                ))}
            </Box>
            <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </Box>
    );
};

export default TakeTest;
