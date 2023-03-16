import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { TfiEmail } from "react-icons/tfi";
import { Apple, Facebook, Twitter } from "@mui/icons-material";
import { Footer } from "../Footer";


const Google = styled(FcGoogle)({
  fontSize: "20px",
});
const Email = styled(TfiEmail)({
  fontSize: "20px",
});
const Cover = styled(Box)({
  display: "flex",
  flexDirection: "row",
  border: "1px solid rgb(168,168,168)",
  borderRadius: "50px",
  padding: "1px 7px 1px 15px",
  margin: 12,
  cursor: "pointer",
});
const Icon = styled(Box)({
  fontSize: "8px",
  margin: "6px 0",
  paddingRight: "0px 8px 0px 0px",
});
const Text = styled(Typography)({
  margin: "7px 10px",
  fontFamily: "'Helvetica Neue', Helvetica",
  fontSize: "14px",
  p: 0,
});
const LinkEmail = styled(Link)({
  textDecoration: "none",
  color: "black",
});
const LinkCreate = styled(Link)({
  textDecoration: "none",
  color: "#1a8917",
  fontWeight: 900,
});

export const Signin = () => {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      maxWidth={550}
      height={"100%"} //you can do without writing this line
      justifyContent="center"
      alignItems={"center"}
      margin="auto"
      paddingTop={7}
      paddingX={{ xs: 0, sm: 5, md: 10 }}
      borderRadius={2}
      boxShadow="0 0 15px 5px rgba(231, 233, 235, 0.8)"
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Georgia, Cambria",
          fontSize: 30,
          mb: 3,
        }}
      >
        Welcome back.
      </Typography>
      <Box
        sx={{
          my: 5,
        }}
      >
        <Cover>
          <Icon>
            <Google />
          </Icon>
          <Text> Sign in with Google</Text>
        </Cover>
        <Cover>
          <Icon>
            <Facebook sx={{ color: "darkblue" }} />
          </Icon>
          <Text> Sign in with Facebook</Text>
        </Cover>
        <Cover>
          <Icon>
            <Apple />
          </Icon>
          <Text> Sign in with Apple</Text>
        </Cover>
        <Cover>
          <Icon>
            <Twitter sx={{ color: "#1DA1F2" }} />
          </Icon>
          <Text> Sign in with Twitter</Text>
        </Cover>
        <Cover>
          <Icon>
            <Email />
          </Icon>
          <Text>
            <LinkEmail to="/signinemail">Sign in with email</LinkEmail>
          </Text>
        </Cover>
      </Box>
      <Typography
        sx={{
          fontSize: "15px",
          mb: 8,
          wordSpacing: "-2px",
          textAlign: "center",
        }}
      >
        No account?{" "}
        <span>
          <LinkCreate to="/create">Create one</LinkCreate>
        </span>
      </Typography>

      <Footer/>
    </Box>
  );
};
