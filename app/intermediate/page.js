"use client"
import React, { useState } from 'react';
import { CssBaseline, Container, Button, Typography, Paper, Grid, Box, Divider, useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from '@/components/Header';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container component="main" maxWidth="lg">
        
        <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
          {/* Main Workout Plan */}
          <Typography variant="h4" align="center" gutterBottom>
          Intermediate Workout Plan
          </Typography>
          <Typography variant="h6" align="center" paragraph>
          Take your fitness to the next level with balanced strength, endurance, and flexibility training.
          </Typography>
          <Box mt={4}>
            <Typography variant="h6" gutterBottom>
              Goal:
            </Typography>
            <Typography variant="body1" paragraph>
            Improve overall fitness, increase muscle strength, and enhance cardiovascular endurance.            </Typography>
            <Typography variant="h6" gutterBottom>
              Schedule:
            </Typography>
            <Typography variant="body1" paragraph>
            4 days per week (e.g., Monday, Tuesday, Thursday, Saturday).
            </Typography>

            <Divider sx={{ marginY: 2 }} />
            <Typography variant="h6" gutterBottom>
              Workout Routine:
            </Typography>

            {/* Day 1 */}
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_pO9n0phiCSu_cw3uN7vSyx5xxkEGlYKsag&s"
                  alt="Push Ups"
                  width="100%"
                  style={{ borderRadius: '8px' }}
                />
                <Typography align="center" variant="body2" color="textSecondary">
                  Push-Ups
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzk4RYbc4FdQP7-6Fz4oimmv2D3GReMs7Lpw&s"
                  alt="Bodyweight Squats"
                  width="100%"
                  style={{ borderRadius: '8px' }}
                />
                <Typography align="center" variant="body2" color="textSecondary">
                Dumbbell Rows
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLySnMV93NmVnf5ljsCPv9UWBm8j5y3VCZeg&s"
                  alt="Glute Bridges"
                  width="100%"
                  style={{ borderRadius: '8px' }}
                />
                <Typography align="center" variant="body2" color="textSecondary">
                Shoulder Press
                </Typography>
              </Grid>
            </Grid>

            <Typography mt={2}>
            Warm-up: 5 mins light cardio
            </Typography>
            <ul>
              <li>Push-Ups: 4 sets of 12 reps</li>
              <li>Dumbbell Rows: 4 sets of 10 reps per side</li>
              <li>Shoulder Press: 4 sets of 12 reps</li>
              <li>Plank Hold: 3 sets of 30 seconds</li>
            </ul>

            <Divider sx={{ marginY: 2 }} />

            {/* Day 2 */}
            <Typography variant="h6" gutterBottom>
            Day 2: Lower Body & Core
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFJPlo6s6vepqP6_FrCiK74Zauekclwg3xA&s"
                  alt="Jump Rope"
                  width="100%"
                  style={{ borderRadius: '8px' }}
                />
                <Typography align="center" variant="body2" color="textSecondary">
                Lunges
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUJXLptWfThHpzdztzryl3ZCB_gGDTDf2ooA&ss"
                  alt="Russian Twists"
                  width="100%"
                  style={{ borderRadius: '8px' }}
                />
                <Typography align="center" variant="body2" color="textSecondary">
                  Russian Twists
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6LmcdVcMB_dUlEfStwXnYpA6yCm32VxmWYA&s"
                  alt="Bicycle Crunches"
                  width="100%"
                  style={{ borderRadius: '8px' }}
                />
                <Typography align="center" variant="body2" color="textSecondary">
                  Bicycle Crunches
                </Typography>
              </Grid>
            </Grid>
            <Typography mt={2}>
            Warm-up: 5 mins light cardio
            </Typography>
            <ul>
              <li>Lunges: 4 sets of 12 reps per leg</li>
              <li>Russian Twists: 4 sets of 15 reps per side</li>
              <li>Standing Knee Tucks: 4 sets of 15 reps per leg</li>
              <li>Bicycle Crunches: 3 sets of 15 reps</li>
            </ul>

            <Divider sx={{ marginY: 2 }} />

            {/* Day 3 */}
            <Typography variant="h6" gutterBottom>
              Day 3: Strength & Flexibility
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_pO9n0phiCSu_cw3uN7vSyx5xxkEGlYKsag&s"
                  alt="Wall Push Ups"
                  width="100%"
                  style={{ borderRadius: '8px' }}
                />
                <Typography align="center" variant="body2" color="textSecondary">
                  Wall Push-Ups
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeOXfE_cs0MYl7GkmncUEr9CBQ_SnwhBpWQ&s"
                  alt="Lunges"
                  width="100%"
                  style={{ borderRadius: '8px' }}
                />
                <Typography align="center" variant="body2" color="textSecondary">
                  Lunges
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHZ0t9_LjbSRvnoE8VrlAa0ljaL4ulx2WTw&s"
                  alt="Superman Exercise"
                  width="100%"
                  style={{ borderRadius: '8px' }}
                />
                <Typography align="center" variant="body2" color="textSecondary">
                  Superman Exercise
                </Typography>
              </Grid>
            </Grid>
            <Typography mt={2}>
              Warm-up: 5 mins brisk walk or light jog
            </Typography>
            <ul>
              <li>Wall Push-Ups: 3 sets of 10 reps</li>
              <li>Lunges: 3 sets of 10 reps per leg</li>
              <li>Standing Calf Raises: 3 sets of 15 reps</li>
              <li>Superman Exercise: 3 sets of 15 seconds</li>
              <li>Stretching: 10-15 mins of full-body stretching</li>
            </ul>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default App;
