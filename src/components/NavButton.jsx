import PropTypes from "prop-types";
import { Button, Typography } from "@mui/material";
import { Link } from "react-scroll";

const NavButton = ({ text, link }) => {
  return (
    <Link to={link} smooth>
      <Button
        variant="outline"
        sx={{
          color: "#636262",
          width: "max-content",
          textTransform: "none",
          fontSize: "18px",
          fontFamily: "Calibri",
        }}
      >
        {text}
      </Button>
    </Link>
  );
};

NavButton.propTypes = {
  pathname: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NavButton;
