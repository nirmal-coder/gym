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
          Advanced Workout Plan
          </Typography>
          <Typography variant="h6" align="center" paragraph>
          Push your limits with an intense workout routine designed for advanced fitness enthusiasts.
          </Typography>
          <Box mt={4}>
            <Typography variant="h6" gutterBottom>
              Goal:
            </Typography>
            <Typography variant="body1" paragraph>
            Build muscle strength, endurance, and improve athletic performance.           </Typography>
            <Typography variant="h6" gutterBottom>
              Schedule:
            </Typography>
            <Typography variant="body1" paragraph>
            5 days per week (e.g., Monday, Wednesday, Friday, Saturday, Sunday).
            </Typography>

            <Divider sx={{ marginY: 2 }} />
            <Typography variant="h6" gutterBottom>
              Workout Routine:
            </Typography>

            {/* Day 1 */}
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpp3YsDeKwzA4TxsxZ62IREr1ns4LZAGojvA&s"
                  alt="Push Ups"
                  width="100%"
                  style={{ borderRadius: '8px' }}
                />
                <Typography align="center" variant="body2" color="textSecondary">
                Weighted Pull-Ups
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <img
                  src="https://thumbs.dreamstime.com/b/middle-aged-woman-doing-bench-press-gym-332563532.jpg"
                  alt="Bodyweight Squats"
                  width="100%"
                  style={{ borderRadius: '8px' }}
                />
                <Typography align="center" variant="body2" color="textSecondary">
                Bench Press
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx8kWCm7-Gch2w9CgrGGL6WroAC1ZQHf1tjg&s"
                  alt="Glute Bridges"
                  width="100%"
                  style={{ borderRadius: '8px' }}
                />
                <Typography align="center" variant="body2" color="textSecondary">
                Overhead Shoulder Press
                </Typography>
              </Grid>
            </Grid>

            <Typography mt={2}>
            Warm-up: 10 mins dynamic stretching
            </Typography>
            <ul>
              <li>Weighted Pull-Ups: 5 sets of 8 reps</li>
              <li>Bench Press: 4 sets of 8 reps</li>
              <li>Overhead Shoulder Press: 4 sets of 10 reps</li>
              <li>Tricep Dips: 4 sets of 12 reps</li>
            </ul>

            <Divider sx={{ marginY: 2 }} />

            {/* Day 2 */}
            <Typography variant="h6" gutterBottom>
            Day 2: Lower Body Power
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47BmGuYDYlDeFlB314ZiRAw6OzSrRlCVNsw&s"
                  alt="Jump Rope"
                  width="100%"
                  style={{ borderRadius: '8px' }}
                />
                <Typography align="center" variant="body2" color="textSecondary">
                Barbell Squats
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqsTLqWhn_7ueJcU0y6fG_ciDWyfF7FONDA&s"
                  alt="Russian Twists"
                  width="100%"
                  style={{ borderRadius: '8px' }}
                />
                <Typography align="center" variant="body2" color="textSecondary">
                  Russian TwistsDeadlifts
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7PzWSxzFHddRlPyjCct_q2Gkgi6RiVM4TrA&s"
                  alt="Bicycle Crunches"
                  width="100%"
                  style={{ borderRadius: '8px' }}
                />
                <Typography align="center" variant="body2" color="textSecondary">
                Bulgarian Split Squats
                </Typography>
              </Grid>
            </Grid>
            <Typography mt={2}>
            Warm-up: 10 mins of light jogging
            </Typography>
            <ul>
              <li>Barbell Squats: 5 sets of 6 reps</li>
              <li>Deadlifts: 5 sets of 5 reps</li>
              <li>Bulgarian Split Squats: 4 sets of 8 reps per leg</li>
              <li>Calf Raises: 4 sets of 15 reps</li>
            </ul>

            <Divider sx={{ marginY: 2 }} />

            {/* Day 3 */}
            <Typography variant="h6" gutterBottom>
            Day 3: Functional Circuit
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0JB9Vb83V_gEmD2nL27UtmoLa8C_FmrCTzQ&s"
                  alt="Wall Push Ups"
                  width="100%"
                  style={{ borderRadius: '8px' }}
                />
                <Typography align="center" variant="body2" color="textSecondary">
                Battle Ropes
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ZP4bvuPBa2IJwQTNHyKNiSciqrNfhF5qHQ&s"
                  alt="Lunges"
                  width="100%"
                  style={{ borderRadius: '8px' }}
                />
                <Typography align="center" variant="body2" color="textSecondary">
                Box Jumps
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1fQr2xX7ciZAKZH_ZKUnQ_oa6BNNFUqBosg&s"
                  alt="Superman Exercise"
                  width="100%"
                  style={{ borderRadius: '8px' }}
                />
                <Typography align="center" variant="body2" color="textSecondary">
                Kettlebell Swings
                </Typography>
              </Grid>
            </Grid>
            <Typography mt={2}>
            Warm-up: 5 mins jump rope
            </Typography>
            <ul>
              <li>Battle Ropes: 4 sets of 45 seconds</li>
              <li>Box Jumps: 4 sets of 15 reps</li>
              <li>Kettlebell Swings: 4 sets of 20 reps</li>
              <li>Burpees: 3 sets of 20 reps</li>
            </ul>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default App;
