import React, { useState } from 'react';
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

const StudentDashboard = () => {
    const [view, setView] = useState('completed'); // State to manage active view

    // Sample data for demonstration
    const data = {
        completed: [
            { name: 'Math Test 1', date: '2024-12-01', score: '85%' },
            { name: 'Science Quiz', date: '2024-12-05', score: '90%' },
        ],
        pending: [
            { name: 'History Essay', date: '2024-12-29' },
            { name: 'Geography Presentation', date: '2024-12-30' },
        ],
        upcoming: [
            { name: 'Math Test 2', date: '2025-01-05' },
            { name: 'Physics Lab', date: '2025-01-10' },
        ],
    };

    return (
        <Box sx={{ p: 3 }}>
            {/* Header Section */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    mb: 3,
                }}
            >
                <Button
                    variant={view === 'completed' ? 'contained' : 'outlined'}
                    color="primary"
                    onClick={() => setView('completed')}
                >
                    Completed
                </Button>
                <Button
                    variant={view === 'pending' ? 'contained' : 'outlined'}
                    color="warning"
                    onClick={() => setView('pending')}
                >
                    Pending
                </Button>
                <Button
                    variant={view === 'upcoming' ? 'contained' : 'outlined'}
                    color="success"
                    onClick={() => setView('upcoming')}
                >
                    Upcoming
                </Button>
            </Box>

            {/* Content Section */}
            <Typography variant="h5" gutterBottom>
                {view.charAt(0).toUpperCase() + view.slice(1)} Tasks
            </Typography>

            <TableContainer component={Paper} sx={{ mt: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Task</b></TableCell>
                            <TableCell><b>Date</b></TableCell>
                            <TableCell align="center"><b>Action</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data[view].map((task, index) => (
                            <TableRow key={index}>
                                <TableCell>{task.name}</TableCell>
                                <TableCell>{task.date}</TableCell>
                                <TableCell align="center">
                                    {view === 'completed' ? (
                                        <Button variant="contained" color="primary">
                                            View Result
                                        </Button>
                                    ) : (
                                        <Button variant="contained" color="success">
                                            Start
                                        </Button>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default StudentDashboard;
