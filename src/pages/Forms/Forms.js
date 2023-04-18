// Material UI components
import { useState } from "react";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import LoginForm from "./loginForm";
import RegistrationForm from "./registrationForm";
import { makeStyles } from "tss-react/mui";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function Form() {
  const [tab, setTab] = useState("2");
  const { classes } = useStyles();

  const switchTab = (e) => {
    console.log(e);
  };
  return (
    <Container
      disableGutters
      maxWidth="xl"
      className={[classes.gradiant, classes.center]}
    >
      <Card
        variant="outlined"
        typography="body1"
        className={classes.center}
        sx={{ py: 0, px: 0, p: 4, borderRadius: 3 }}
      >
        <Tabs
          value={tab}
          sx={{ borderBottom: 1, borderColor: "divider", marginBottom: 3 }}
          onChange={switchTab}
        >
          <Tab label="Login" value="1" />
          <Tab label="Register" value="2" key="2" />
        </Tabs>
        <Box component="div">
          {tab === "1" ? <LoginForm /> : <RegistrationForm />}
        </Box>
      </Card>
    </Container>
  );
}

const useStyles = makeStyles()({
  center: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    typography: "body1",
    borderRadius: 15,
  },
  gradiant: {
    position: "absolute",
    inset: 0,
    background: "#c31432",
    background: "-webkit-linear-gradient(to right, #240b36, #c31432)",
    background: "linear-gradient(to right, #240b36, #c31432)",
    backdropFilter: "blur(1.5px)",
    zIndex: 10,
  },
  border: {
    border: "0.1em solid black",
  },
});

export default Form;
