import React from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import img1 from "../assets/quizimg1.png";
import img2 from "../assets/quizimg2.png";
import img3 from "../assets/quizimg3.png";

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: 10 }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: 300,
              backgroundColor: "#E0F7FA",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={img1}
              alt="Create New Quiz Background"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
             
              }}
            />
            <CardContent sx={{ position: "relative", zIndex: 1 }}>
      
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: 300,
              backgroundColor: "#FFEBEE",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={img2}
              alt="Play Quiz Background"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
             
              }}
            />
            <CardContent sx={{ position: "relative", zIndex: 1 }}>
              
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: 300,
              backgroundColor: "#FFEBEE",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={img3}
              alt="My Quizzes Background"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
           
              }}
            />
            <CardContent sx={{ position: "relative", zIndex: 1 }}>
            
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;