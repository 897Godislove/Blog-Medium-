import { ChevronLeft } from "@mui/icons-material";
import { Box, Button, Input, styled, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Linkback = styled(Link)({
  textDecoration: "none",
  color: "#1a8917",
});

export const CreateEmail = () => {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      maxWidth={550}
      height={"100%"} //you can do without writing this line
      justifyContent="center"
      alignItems={"center"}
      margin="auto"
      paddingTop={17}
      paddingX={{ xs: 0, sm: 5, md: 8 }}
      borderRadius={2}
      boxShadow="0 0 15px 5px rgba(231, 233, 235, 0.8)"
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Georgia, Cambria",
          fontSize: 30,
          mb: 1,
        }}
      >
        Sign up with email
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          m: "25px 0px 180px 0px",
          width: "58%",
        }}
      >
        <Box mb={8}>
          <Typography textAlign="center" fontSize="16px">
            Enter your email address to create an account
          </Typography>
        </Box>

        <form>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography textAlign="center" fontSize="12px">
              Your email
            </Typography>
            <Input
              disableUnderline
              textAlign="center"
              sx={{
                input: { textAlign: "center" },
                borderBottom: "1px solid black",
                width: "85%",
                mb: 5,
              }}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                bgcolor: "black",
                width: "70%",
                borderRadius: "50px",
                fontSize: "16px",
                textTransform: "none",
                boxShadow: "none",
                mb: 3.8,
                "&:hover": {
                  bgcolor: "black",
                  boxShadow: "none",
                },
              }}
            >
              Continue
            </Button>
          </Box>
        </form>

        <Linkback to="/">
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ChevronLeft
              sx={{
                fontSize: "25px",
              }}
            />
            {/* &lt; this is how to right the left angular bracket */}
            <Typography fontSize={14} fontWeight={500}>
              {" "}
              All sign in options{" "}
            </Typography>
          </Box>
        </Linkback>
      </Box>
    </Box>
  );
};
