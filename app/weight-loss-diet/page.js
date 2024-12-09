"use client"
import React from "react";
import {
  Box,
  Container,
  Typography,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Grid,
} from "@mui/material";
import Header from "@/components/Header";

// Dark theme configuration
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
    },
    primary: {
      main: "#90caf9", // Light blue accent
    },
    secondary: {
      main: "#81c784", // Light green accent
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
});

const GymFluencerDark = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <main style={{ padding: "2rem" }}>
        <Container>
          {/* Card Wrapper */}
          <Box
            sx={{
              backgroundColor: "#1e1e1e",
              borderRadius: 2,
              boxShadow: 3,
              padding: 4,
              maxWidth: 800,
              margin: "auto",
            }}
          >
            <Typography variant="h4" align="center" gutterBottom color="primary">
              Weight Loss Diet Plan
            </Typography>

            {/* Goal Section */}
            <section className="mb-6">
              <Typography variant="h5" color="primary" gutterBottom>
                Goal
              </Typography>
              <Typography variant="body1" color="text.primary">
                Lose fat and reduce body weight while maintaining muscle mass.
              </Typography>
            </section>

            {/* Diet Focus Section */}
            <section className="mb-6">
              <Typography variant="h5" color="primary" gutterBottom>
                Diet Focus
              </Typography>
              <Typography variant="body1" color="text.primary">
                High protein, moderate carbs, and healthy fats.
              </Typography>
            </section>

            {/* Best Diet Plan Section */}
            <section className="mb-6">
              <Typography variant="h5" color="primary" gutterBottom>
                Best Diet Plan
              </Typography>
              <Typography variant="body1" color="text.primary">
                Calories: Slight calorie deficit (20-30% less than maintenance).
              </Typography>

              <Typography variant="h6" color="primary" gutterBottom>
                Macronutrients
              </Typography>
              <ul style={{ marginLeft: "1rem", color: "#f0f0f0" }}>
                <li>
                  <strong>Protein:</strong> 1.6–2.2 grams per kg of body weight.
                </li>
                <li>
                  <strong>Carbs:</strong> 30-40% of total calories.
                </li>
                <li>
                  <strong>Fats:</strong> 20-30% of total calories.
                </li>
              </ul>
            </section>

            {/* Foods to Include Section */}
            <section className="mb-6">
              <Typography variant="h5" color="primary" gutterBottom>
                Foods to Include
              </Typography>
              <ul style={{ marginLeft: "1rem", color: "#f0f0f0" }}>
                <li>Lean meats (chicken, turkey)</li>
                <li>Fish</li>
                <li>Leafy greens</li>
                <li>Low-glycemic carbs (sweet potatoes, brown rice)</li>
                <li>Healthy fats (avocados, nuts, olive oil)</li>
              </ul>
            </section>

            {/* Sample Meal Section */}
            <section>
              <Typography variant="h5" color="primary" gutterBottom>
                Sample Meal
              </Typography>
              <Typography variant="body1" color="text.primary">
                Grilled chicken breast, quinoa, and broccoli with olive oil.
              </Typography>
            </section>

            {/* Image Section */}
            <section className="mt-6">
              <Box
                sx={{
                  backgroundColor: "#333333",
                  height: "300px",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <img
                  src="https://i.pinimg.com/originals/34/16/ee/3416ee87f5a488ce4583cc8b7ec4cf76.png"
                  alt="Grilled chicken breast, quinoa, and broccoli"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </Box>
            </section>
          </Box>
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default GymFluencerDark;
