import PropTypes from "prop-types";
import { Button, Typography } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavButton = ({ pathname, text, link }) => {
  const navigate = useNavigate();
  return (
    <Button
      variant="outline"
      onClick={() => navigate(link)}
      sx={{
        width: "max-content",
        backgroundColor: pathname === link ? "rgb(108, 163, 177)" : "#465489",
        color: pathname === link ? "#1A254F" : "#9B9B9B",
      }}
    >
      {text}
    </Button>
  );
};

NavButton.propTypes = {
  pathname: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NavButton;
