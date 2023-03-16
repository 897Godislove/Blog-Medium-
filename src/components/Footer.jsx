import { Box, Typography } from '@mui/material'
import React from 'react'

export const Footer = () => {
  return (
    <Box>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "13px",
            color: "rgb(115,115,115)",
            fontWeight: 500,
            wordSpacing: "-2px",
            letterSpacing: "0.5px",
            textAlign: "center",
            mb: 3,
          }}
        >
          Forgot email or trouble signing in?
          <a href="https://help.medium.com/hc/en-us/requests/new?ticket_form_id=9455427953559&form=true&source=login--------------------------creator_tools_page_nav_signin-----------">
            <Typography
              sx={{
                fontSize: "13px",
                color: "rgb(115,115,115)",
                fontWeight: 500,
                wordSpacing: "-2px",
                letterSpacing: "0.5px",
                cursor: "pointer",
                mx: "2px",
                textDecoration: 'none',
              }}
            >
              <u>Get help</u>.
            </Typography>
          </a>
        </Typography>
        <Typography
          sx={{
            fontSize: "13px",
            color: "rgb(115,115,115)",
            fontWeight: 500,
            wordSpacing: "-2px",
            letterSpacing: "0.5px",
            textAlign: "center",
            mb: 8,
            px: 3,
            // width: '80%',
          }}
        >
          Click “Sign In” to agree to Medium’s <u>Terms of Service</u> and
          acknowledge that Medium’s <u>Privacy Policy</u> applies to you.
        </Typography>
      </Box>
  )
}