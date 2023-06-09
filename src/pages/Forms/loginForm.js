// Material UI components
import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { makeStyles } from "tss-react/mui";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Link as LinkMUI } from "@mui/material";
import Stack from "@mui/material/Stack";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
// import loginValidation from "../../functions/loginValidation";

function LoginForm({ handleLog }) {
  // states
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(true);

  // variables
  const { classes } = useStyles();

  // functions
  const checker = (email, password) => {
    console.log("handleChange");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("handleSubmit");
    handleLog();
  };

  const handleClickShowPassword = (e) => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      component="form"
      autoComplete="off"
      noValidate
      onSubmit={(e) => handleSubmit(e)}
      className={[classes.inputContainer, classes.center]}
      sx={{ flexDirection: "column", gap: 2 }}
    >
      <TextField
        fullWidth
        id="email"
        label="Email"
        variant="outlined"
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormControl sx={{ width: "100%" }} variant="outlined">
        <InputLabel htmlFor="password">Password</InputLabel>
        <OutlinedInput
          id="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      <Stack spacing={15} direction="row" className={classes.center}>
        <FormControl>
          <FormControlLabel
            checked={checked}
            control={<Checkbox />}
            label="Remember Me"
            onChange={() => setChecked(!checked)}
          />
        </FormControl>
        <LinkMUI href="#" underline="none">
          Forgot Password
        </LinkMUI>
      </Stack>
      <Link to="/">
        <Button
          variant="contained"
          onClick={(e) => handleSubmit(e)}
          size="medium"
          sx={{ width: 300 }}
        >
          Login
        </Button>
      </Link>
      <Button
        variant="outlined"
        size="medium"
        sx={{ width: 300 }}
        startIcon={<GoogleIcon />}
      >
        Sign in with Google
      </Button>
    </Box>
  );
}

const useStyles = makeStyles()({
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: 400,
  },
  border: {
    border: "0.1em solid black",
  },
});

export default LoginForm;
