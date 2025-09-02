import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormGroup,
  FormHelperText,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { countries } from "../../../utils/countries";

const ContactUsBox = styled(Box)({
  display: "flex",
});
const SideImageBox = styled(Box)(({ theme }) => ({
  width: "500px",
  height: "100vh",
  backgroundImage: "url(/./assets/iStock-1719539154_500_300_s_c1.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "-400px 0px",
  borderRadius: "0px 100px 0px 0px",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  paddingTop: "50px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const FormBox = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  padding: "80px 100px",
  gap: "30px",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("lg")]: {
    padding: "50px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "50px 20px",
  },
}));

const PhoneNumberBox = styled(Box)({
  display: "flex",
  gap: "10px",
  justifyContent: "space-between",
});

const ContactUs = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState({
    code: "US",
    label: "United States",
    phone: "1",
  });
  const [phoneNumber, setPhoneNumber] = useState("");
  const [focusArea, setFocusArea] = useState([]);
  const [desc, setDesc] = useState("");

  const [fullNameError, setFullNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  const [loading, setLoading] = useState(false);

  const focusAreas = [
    "Home/Remote Care",
    "Fitness/Physiotherapy",
    "In Clinic Connectivity",
    "Assisted Living",
    "Nursing Organizations",
    "Other",
  ];

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
    if (e.target.validity.valid) {
      setFullNameError(false);
    } else {
      setFullNameError(true);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.validity.valid) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const handleCountryChange = (e, newValue) => {
    setCountry(newValue);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    if (e.target.validity.valid) {
      setPhoneNumberError(false);
    } else {
      setPhoneNumberError(true);
    }
  };

  const handleFocusAreaChange = (e) => {
    setFocusArea(
      typeof e.target.value === "string"
        ? e.target.value.split(",")
        : e.target.value
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFullName((prev) => prev.trim());
    setEmail((prev) => prev.trim());
    setPhoneNumber((prev) => prev.trim());
    setDesc((prev) => prev.trim());
    const focusAreaString = focusArea.join(", ");

    try {
      setLoading(true);
      const response = await fetch("https://formspree.io/f/mblodjlk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: fullName,
          Email: email,
          Country: country.label,
          Code: `+${country.phone}`,
          Phone: phoneNumber,
          Focus: focusAreaString,
          Description: desc,
        }),
      });
      const resBody = await response.json();
      if (response.ok) {
        alert("Form Submitted");
      } else {
        if (resBody.error === "Validation errors") {
          let errorString = "Error(s):\n";
          resBody.errors.map(
            (error) =>
              (errorString += `Field: ${error.field}\nMessage: ${error.message}\n`)
          );
          alert(errorString);
        } else {
          alert("Failed to submit form");
        }
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactUsBox id="contactUs">
      <SideImageBox>
        <Typography
          color="white"
          padding={"0px 20px"}
          fontSize={"44px"}
          borderLeft={"10px solid #F99929"}
          fontFamily={"Calibri"}
        >
          Contact Us
        </Typography>
      </SideImageBox>
      <FormBox>
        <Typography color="#636262" fontFamily={"Calibri"} fontSize={"32px"}>
          Connect With Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Grid2 container rowSpacing={{ xs: 2, md: 3, lg: 6 }} columnSpacing={{xs: 2, md: 3, lg: 3}}>
              <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
                <FormControl error={fullNameError} fullWidth>
                  <TextField
                    required
                    label={"Full Name"}
                    value={fullName}
                    error={fullNameError}
                    onChange={handleFullNameChange}
                    slotProps={{
                      htmlInput: {
                        pattern: "[A-Za-z ]+",
                      },
                    }}
                    fullWidth
                  />
                  {fullNameError && (
                    <FormHelperText>
                      Please enter your name (letters and spaces only)
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
                <FormControl error={emailError} fullWidth>
                  <TextField
                    required
                    label={"Email Address"}
                    value={email}
                    error={emailError}
                    onChange={handleEmailChange}
                    slotProps={{
                      htmlInput: {
                        type: "email",
                      },
                    }}
                    fullWidth
                  />
                  {emailError && (
                    <FormHelperText>
                      Please enter a valid email address
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
                <FormControl error={phoneNumberError} fullWidth>
                  <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, sm: 8, md: 8, lg: 7 }}>
                      <Autocomplete
                        fullWidth
                        required
                        options={countries}
                        value={country}
                        onChange={handleCountryChange}
                        getOptionLabel={(option) =>
                          `${option.label} +${option.phone}`
                        }
                        renderInput={(params) => (
                          <TextField {...params} label="Country" />
                        )}
                      />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 4, md: 4, lg: 5 }}>
                      <TextField
                        fullWidth
                        required
                        label={"Phone Number"}
                        value={phoneNumber}
                        error={phoneNumberError}
                        onChange={handlePhoneNumberChange}
                        slotProps={{
                          htmlInput: {
                            pattern: "^[0-9]{10}$",
                          },
                        }}
                      />
                    </Grid2>
                  </Grid2>
                  {phoneNumberError && (
                    <FormHelperText>Enter a valid phone number</FormHelperText>
                  )}
                </FormControl>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
                <FormControl fullWidth>
                  <InputLabel
                    id="focus-area"
                    sx={{ backgroundColor: "white", padding: "0px 7px" }}
                  >
                    Focus Area
                  </InputLabel>
                  <Select
                    labelId="focus-area"
                    multiple
                    value={focusArea}
                    onChange={handleFocusAreaChange}
                    sx={{ maxWidth: "90vw" }}
                  >
                    {focusAreas.map((area, idx) => (
                      <MenuItem
                        key={idx}
                        value={area}
                        sx={{ maxWidth: "90vw" }}
                      >
                        {area}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                <FormControl fullWidth>
                  <TextField
                    label="What do you seek?"
                    multiline
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </FormControl>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                <Button
                  type="submit"
                  disabled={loading}
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "#F99929",
                    padding: "15px",
                    textTransform: "none",
                    fontSize: "16px",
                    borderRadius: "24px",
                  }}
                >
                  Submit
                </Button>
              </Grid2>
            </Grid2>
          </FormGroup>
        </form>
      </FormBox>
    </ContactUsBox>
  );
};

export default ContactUs;
