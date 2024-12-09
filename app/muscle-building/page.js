"use client"
import React from 'react';
import { createTheme, ThemeProvider, Paper, Typography, Button, Box } from '@mui/material';
import Header from '@/components/Header';

const App = () => {
  // Create a custom dark theme with the same colors
  const darkTheme = createTheme({
    palette: {
      mode: 'dark', // Dark mode
      primary: {
        main: '#4caf50', // Green color used for buttons and other accents
      },
      secondary: {
        main: '#f44336', // Red color for secondary accents (optional)
      },
      background: {
        default: '#121212', // Dark background
        paper: '#1d1d1d', // Dark Paper component background
      },
      text: {
        primary: '#ffffff', // Light text for dark mode
        secondary: '#b0b0b0', // Light gray text for secondary content
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
        <Header />
      <Paper sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
        <Box sx={{ padding: 4 }}>

          <main>
            <Box sx={{ maxWidth: 'md', margin: 'auto', backgroundColor: 'background.paper', padding: 4, borderRadius: 2, boxShadow: 3 }}>
              <Typography variant="h3" align="center" color="text.primary" sx={{ marginBottom: 2 }}>
                Muscle Building (Hypertrophy) Diet Plan
              </Typography>

              <section sx={{ marginBottom: 3 }}>
                <Typography variant="h5" color="text.primary" sx={{ marginBottom: 1 }}>
                  Goal
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Build muscle mass by providing the body with the necessary nutrients and calories to promote hypertrophy and strength.
                </Typography>
              </section>

              <section sx={{ marginBottom: 3 }}>
                <Typography variant="h5" color="text.primary" sx={{ marginBottom: 1 }}>
                  Diet Focus
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  High protein, moderate to high carbs, and healthy fats to fuel muscle growth and recovery.
                </Typography>
              </section>

              <section sx={{ marginBottom: 3 }}>
                <Typography variant="h5" color="text.primary" sx={{ marginBottom: 1 }}>
                  Best Diet Plan
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Calories: Slight calorie surplus (10-20% above maintenance) to support muscle growth.
                </Typography>
                <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 1 }}>Macronutrients</Typography>
                <ul>
                  <li><Typography variant="body2" color="text.secondary"><strong>Protein:</strong> 1.6–2.2 grams per kg of body weight to support muscle repair and growth.</Typography></li>
                  <li><Typography variant="body2" color="text.secondary"><strong>Carbs:</strong> 40-50% of total calories to fuel workouts and recovery.</Typography></li>
                  <li><Typography variant="body2" color="text.secondary"><strong>Fats:</strong> 20-30% of total calories for hormone production and overall health.</Typography></li>
                </ul>
              </section>

              <section sx={{ marginBottom: 3 }}>
                <Typography variant="h5" color="text.primary" sx={{ marginBottom: 1 }}>
                  Foods to Include
                </Typography>
                <ul>
                  <li><Typography variant="body2" color="text.secondary">Lean meats (chicken, turkey, beef)</Typography></li>
                  <li><Typography variant="body2" color="text.secondary">Fish (salmon, tuna)</Typography></li>
                  <li><Typography variant="body2" color="text.secondary">Whole grains (brown rice, oats, quinoa)</Typography></li>
                  <li><Typography variant="body2" color="text.secondary">Healthy fats (avocados, nuts, olive oil)</Typography></li>
                  <li><Typography variant="body2" color="text.secondary">Fruits and vegetables (spinach, berries, broccoli)</Typography></li>
                  <li><Typography variant="body2" color="text.secondary">Dairy (Greek yogurt, cottage cheese)</Typography></li>
                </ul>
              </section>

              <section>
                <Typography variant="h5" color="text.primary" sx={{ marginBottom: 1 }}>
                  Sample Meal
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Grilled chicken breast, sweet potatoes, steamed broccoli, and a serving of quinoa with olive oil.
                </Typography>
              </section>

              <section sx={{ marginTop: 4 }}>
                <Box sx={{ height: 400, backgroundColor: 'grey.800', borderRadius: 2 }}>
                  <img src="https://zenaskitchen.com/wp-content/uploads/2022/01/Cajun-Chicken-Sweet-Potato-Bowls.jpg" alt="Muscle building meal" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                </Box>
              </section>
            </Box>
          </main>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
