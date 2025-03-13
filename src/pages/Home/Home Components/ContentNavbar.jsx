import { Box, styled, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

const ContentNavbarBox = styled(Box)({
  position: "sticky",
  top: "65px",
  background: "rgba(62,139,157)",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  padding: "10px 0px",
  zIndex: "1",
});

const ContentNavbar = ({ activeSection }) => {
  const sections = [
    { id: "who", label: "Who" },
    { id: "what", label: "What" },
    { id: "how", label: "How" },
    { id: "why", label: "Why" },
    { id: "where", label: "Where" },
    { id: "when", label: "When" },
  ];

  return (
    <ContentNavbarBox>
      {sections.map((section) => (
        <Link key={section.id} to={section.id} offset={-66} smooth>
          <Box
            sx={{
              backgroundColor:
                activeSection === section.id
                  ? "rgba(26, 37, 79)"
                  : "transparent",
              border: "2px solid",
              borderColor: "rgba(26, 37, 79)",
              padding: "4px 13px",
              borderRadius: "20px",
              transition: "color 0.3s ease-in, background-color 0.3s ease-in",
              ":hover": {
                cursor: "pointer",
                background:
                  activeSection === section.id
                    ? "rgba(26, 37, 79, 0.8)"
                    : "rgba(26, 37, 79, 0.3)",
              },
            }}
          >
            <Typography
              color={
                activeSection === section.id
                  ? "rgba(62,139,157)"
                  : "rgba(26, 37, 79)"
              }
              fontWeight={600}
            >
              {section.label.toUpperCase()}
            </Typography>
          </Box>
        </Link>
      ))}
    </ContentNavbarBox>
  );
};

ContentNavbar.propTypes = {
  activeSection: PropTypes.string.isRequired
}

export default ContentNavbar