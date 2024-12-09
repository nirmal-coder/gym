"use client"
import React from "react";
import {
  Typography,
  Button,
  Box,
  Container,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  CssBaseline,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Header from "@/components/Header";

// Define the Dark Theme
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
    button: {
      textTransform: "none",
    },
  },
});

const GymFluencerDark = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main style={{ marginTop: 120, padding: "1rem" }}>
        <Container>
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
              Personalized Diet Plan Form
            </Typography>
            <form>
              {/* Personal Details */}
              <Typography variant="h5" color="primary" gutterBottom>
                Personal Details
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Age"
                    type="number"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel>Gender</InputLabel>
                    <Select>
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Height (cm)"
                    type="number"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Weight (kg)"
                    type="number"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Activity Level</InputLabel>
                    <Select>
                      <MenuItem value="Sedentary">Sedentary</MenuItem>
                      <MenuItem value="Moderate">Moderate</MenuItem>
                      <MenuItem value="Active">Active</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              {/* Dietary Goals */}
              <Typography variant="h5" color="primary" gutterBottom mt={3}>
                Dietary Goals
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Goal</InputLabel>
                    <Select>
                      <MenuItem value="Weight Loss">Weight Loss</MenuItem>
                      <MenuItem value="Weight Gain">Weight Gain</MenuItem>
                      <MenuItem value="Maintenance">Maintenance</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Specific Goal (e.g., muscle gain)"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
              </Grid>

              {/* Dietary Preferences */}
              <Typography variant="h5" color="primary" gutterBottom mt={3}>
                Dietary Preferences and Restrictions
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Diet Type</InputLabel>
                    <Select>
                      <MenuItem value="Vegetarian">Vegetarian</MenuItem>
                      <MenuItem value="Non-Vegetarian">Non-Vegetarian</MenuItem>
                      <MenuItem value="Vegan">Vegan</MenuItem>
                      <MenuItem value="Keto">Keto</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Food Allergies or Intolerances"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Foods You Dislike"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
              </Grid>

              {/* Submit Button */}
              <Box mt={4}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  color="secondary"
                  size="large"
                >
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default GymFluencerDark;
