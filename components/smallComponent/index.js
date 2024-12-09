import { Button } from "@mui/material";

export const Btn = ({ children }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        border: "1px solid white",
        color: "#27374D",
        backgroundColor: "#D7FB00",
        ml: 5,
        cursor: "pointer",
        fontWeight:600,
        borderRadius: 10,
        "&:hover": {
          backgroundColor: "#fff",
          border: "0px",
          color: "#000",
          
        },
      }}
    >
      {children}
    </Button>
  );
};
