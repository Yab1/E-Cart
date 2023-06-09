// React
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Custom Components
import Account from "./account";
import SearchAppBar from "./search";
import ColorBadge from "./shoppingCart";

// MUI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const HeaderAppBar = ({ isLogging }) => {
  return (
    <Box sx={{ flexGrow: 1 }} className="mb-3">
      <AppBar sx={{ bgcolor: "#fafafa", position: "static", color: "#212121" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-Cart
          </Typography>
          {isLogging ? (
            <Stack direction="row" spacing={2}>
              <SearchAppBar />
              <ColorBadge />
              <Account />
            </Stack>
          ) : (
            <Link to="/form">
              <Button>Login</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderAppBar;
