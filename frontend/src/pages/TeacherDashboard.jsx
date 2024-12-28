import React from 'react';
import {
    Box,
    Button,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';

const TeacherDashboard = () => {
    // Sample data for demonstration
    const tests = [
        {
            name: 'Math Test 1',
            dueDate: '2024-12-30',
            createdBy: 'Mr. Sharma',
            topics: 'Algebra, Geometry',
            batch: 'Batch A',
        },
        {
            name: 'Physics Quiz',
            dueDate: '2025-01-10',
            createdBy: 'Ms. Gupta',
            topics: 'Kinematics, Dynamics',
            batch: 'Batch B',
        },
        {
            name: 'English Test 2',
            dueDate: '2025-01-15',
            createdBy: 'Mrs. Iyer',
            topics: 'Grammar, Comprehension',
            batch: 'Batch C',
        },
    ];

    const handleAssign = (testName) => {
        console.log(`Assigning ${testName}...`);
        // Add assignment logic here (e.g., API call or modal to select students)
    };

    const handleGenerateQuestions = () => {
        console.log('Navigating to Generate Questions page...');
        // Add navigation or action logic here
    };

    const handleViewResults = () => {
        console.log('Navigating to View Results page...');
        // Add navigation or action logic here
    };

    return (
        <Box sx={{ p: 3 }}>
            {/* Header Section */}
            <Typography variant="h4" gutterBottom>
                Teacher Dashboard
            </Typography>

            {/* Button Section */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    mt: 4,
                    mb: 4,
                }}
            >
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={handleGenerateQuestions}
                >
                    Generate Questions
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={handleViewResults}
                >
                    View Results
                </Button>
            </Box>

            {/* Generated Tests Table */}
            <Typography variant="h5" gutterBottom>
                Generated Tests
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Test Name</b></TableCell>
                            <TableCell><b>Due Date</b></TableCell>
                            <TableCell><b>Created By</b></TableCell>
                            <TableCell><b>Topics</b></TableCell>
                            <TableCell><b>Batch</b></TableCell>
                            <TableCell><b>Action</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tests.map((test, index) => (
                            <TableRow key={index}>
                                <TableCell>{test.name}</TableCell>
                                <TableCell>{test.dueDate}</TableCell>
                                <TableCell>{test.createdBy}</TableCell>
                                <TableCell>{test.topics}</TableCell>
                                <TableCell>{test.batch}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        onClick={() => handleAssign(test.name)}
                                    >
                                        Assign
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default TeacherDashboard;
