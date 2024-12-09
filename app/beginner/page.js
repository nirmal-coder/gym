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
            Beginner Workout Plan
          </Typography>
          <Typography variant="h6" align="center" paragraph>
            Build basic strength, improve mobility, and establish workout consistency.
          </Typography>
          <Box mt={4}>
            <Typography variant="h6" gutterBottom>
              Goal:
            </Typography>
            <Typography variant="body1" paragraph>
              Build basic strength, improve mobility, and establish workout consistency.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Schedule:
            </Typography>
            <Typography variant="body1" paragraph>
              3 days per week (e.g., Monday, Wednesday, Friday).
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLySnMV93NmVnf5ljsCPv9UWBm8j5y3VCZeg&s"
                  alt="Bodyweight Squats"
                  width="100%"
                  style={{ borderRadius: '8px' }}
                />
                <Typography align="center" variant="body2" color="textSecondary">
                  Bodyweight Squats
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHZ0t9_LjbSRvnoE8VrlAa0ljaL4ulx2WTw&s"
                  alt="Glute Bridges"
                  width="100%"
                  style={{ borderRadius: '8px' }}
                />
                <Typography align="center" variant="body2" color="textSecondary">
                  Glute Bridges
                </Typography>
              </Grid>
            </Grid>

            <Typography mt={2}>
              Warm-up: 5 mins brisk walk or light jog
            </Typography>
            <ul>
              <li>Push-Ups: 3 sets of 8-10 reps (kneeling if needed)</li>
              <li>Bodyweight Squats: 3 sets of 12 reps</li>
              <li>Glute Bridges: 3 sets of 12 reps</li>
              <li>Plank Hold: 3 sets of 20 seconds</li>
              <li>Mountain Climbers: 3 sets of 15 seconds</li>
            </ul>

            <Divider sx={{ marginY: 2 }} />

            {/* Day 2 */}
            <Typography variant="h6" gutterBottom>
              Day 2: Cardio & Core
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUJXLptWfThHpzdztzryl3ZCB_gGDTDf2ooA&s"
                  alt="Jump Rope"
                  width="100%"
                  style={{ borderRadius: '8px' }}
                />
                <Typography align="center" variant="body2" color="textSecondary">
                  Jump Rope
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzk4RYbc4FdQP7-6Fz4oimmv2D3GReMs7Lpw&s"
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
              Warm-up: 5 mins brisk walk or light jog
            </Typography>
            <ul>
              <li>Jump Rope: 3 sets of 30 seconds</li>
              <li>Russian Twists: 3 sets of 15 reps per side (holding light weight if available)</li>
              <li>Standing Knee Tucks: 3 sets of 15 reps per leg</li>
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ejQwT7LooBI3lud5oa0YsBzDm8mYjfiiZA&s"
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFJPlo6s6vepqP6_FrCiK74Zauekclwg3xA&s"
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeOXfE_cs0MYl7GkmncUEr9CBQ_SnwhBpWQ&s"
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
