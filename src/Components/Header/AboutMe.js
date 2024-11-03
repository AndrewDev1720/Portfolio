import React, { useContext, useEffect, useState } from 'react';
import { Typography, Grid, Box, Button } from '@mui/material/';
import { motion, useAnimation } from 'framer-motion';
import './AboutMe.css';
import { FontColorContext } from '../../App';

const AboutMe = () => {
  const fontColor = useContext(FontColorContext);

  // State to manage visibility of intro, new text, old text view, and expanded text
  const [showIntroText, setShowIntroText] = useState(true);
  const [showNewText, setShowNewText] = useState(false);
  const [showOldText, setShowOldText] = useState(false);
  const [showFullText, setShowFullText] = useState(false);

  // Animation control for flashing effect
  const controls = useAnimation();

  // Effect to dissolve intro text and show new text after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      // Trigger flashing animation before hiding the intro text
      controls.start({
        opacity: [1, 0, 1, 0, 1, 0],
        transition: { duration: 1.4, ease: "easeInOut" },
      }).then(() => {
        setShowIntroText(false); // hide intro text
        setShowNewText(true);    // show new text
      });
    }, 1550); // 3 seconds delay before text dissolves

    return () => clearTimeout(timer);
  }, [controls]);

  // Handle button click to toggle between old and new text
  const handleRetrieveOldText = () => {
    setShowOldText((prev) => !prev); // toggle old text view
  };

  // Toggle between short and full text view
  const handleToggleFullText = () => {
    setShowFullText((prev) => !prev);
  };

  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      {/* Name remains visible */}
      <Grid item>
        <Typography
          sx={{
            fontWeight: 'bold',
            color: fontColor,
            fontSize: '100px',
            fontStyle: 'italic',
            fontFamily: 'FF-DIN-PRO-COND_BOLD',
          }}
          className="gradient-color"
        >
          ANDREW TRAN
        </Typography>
      </Grid>

      {/* Introductory Text Box with Flashing Effect */}
      {showIntroText && (
        <motion.div animate={controls}>
          <Box
            sx={{
              maxWidth: '750px',
              margin: '10px',
              backgroundColor: '#F7F7FF',
              borderRadius: '6px',
              padding: '10px',
              transition: 'opacity 1s ease-in-out',
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                color: 'black',
                fontSize: '20px',
                fontFamily: 'Ubuntu, sans-serif',
                width: '100%',
              }}
            >
              As a full-stack software engineer, my drive comes from seeing how technology bridges industry gaps and reshapes our world.
              I'm passionate about using software to innovate, streamline, and open new paths for growth and opportunity, aiming to make a significant impact where it's most needed.
            </Typography>
          </Box>
        </motion.div>
      )}
      <Box
        sx={{
          maxWidth: '750px',
          margin: '10px auto',
          position: 'relative',
        }}
      >
        {/* New Text Box - Appears after the old text dissolves */}
        {showNewText && !showOldText && (
          <Box
            sx={{
              backgroundColor: '#E8E8FF',
              borderRadius: '6px',
              padding: '10px',
              transition: 'opacity 1s ease-in-out',
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                color: 'black',
                fontSize: '20px',
                fontFamily: 'Ubuntu, sans-serif',
                width: '100%',
              }}
            >
              Hi, this is my portfolio. I am a rising senior interested in CS, hungry to make measurable contributions.
              I enjoy the concept of understanding!
              {showFullText ? (
                <>
                  {" "}That's why I love listening, reading, and watching works on consciousness, like everyone else.
                  The more I understand the message conveyed, the more I believe I have a role to fulfill.
                  And on my way to figuring out that role, I see my knowledge, skillset, and commitment fulfilling the role of a builder, part of an organization with an impactful, initiative-driven mindset.
                  And of course, here are some of my favorite minds whose work I admire: Thom Yorke, Roger Waters, Andy Weir, Hammock, Dan Harmon, Neil deGrasse Tyson, Steve Jobs, James Gosling, 
                  Albert Einstein, Alan Turing, Aristotle, Albert Hoffman. (I am in the process refactoring my portfolio, so many of the parts below haven't been updated)
                </>
              ) : (
                <>{" "}...{" "}</>
              )}
            </Typography>
            <Button 
              onClick={handleToggleFullText} 
              sx={{ fontSize: '12px', padding: '0', marginTop: '5px' , marginRight: '0px'}}
            >
              {showFullText ? "Read Less" : "Read More"}
            </Button>
          </Box>
        )}

        {/* Subtle Button positioned 20px below the new text box */}
        {showNewText && (
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleRetrieveOldText}
            sx={{ 
              backgroundColor: '#a3c4f3',
              marginTop: '10px',
              color: 'black',
              fontSize: '12px',
              padding: '4px 8px',
              position: 'absolute',
              right: '0px',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#90b3e6'
              }
            }}
          >
            {showOldText ? "Hide Previous Version" : "Check out previous state"}
          </Button>
        )}

        {/* Old Text Box */}
        {showOldText && (
          <>
            <Box
              sx={{
                maxWidth: '750px',
                marginTop: '45px',
                marginBottom: '15px',
                padding: '10px',
                backgroundColor: '#E8E8FF',
                borderRadius: '6px',
                fontStyle: 'italic',
                color: '#555',
              }}
            >
              <Typography
                sx={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: '20px',
                  fontFamily: 'Ubuntu, sans-serif',
                  marginBottom: '10px',
                }}
              >
                As a full-stack software engineer, my drive comes from seeing how technology bridges industry gaps and reshapes our world.
                I'm passionate about using software to innovate, streamline, and open new paths for growth and opportunity, aiming to make a significant impact where it's most needed.
              </Typography>
            </Box>

            {/* Self-awareness comment styled as a comic speech bubble below the old text box */}
            <Box
              sx={{
                maxWidth: '700px',
                margin: '10px auto',
                padding: '10px 15px',
                backgroundColor: '#D0D0FF',
                color: '#333',
                fontSize: '16px',
                fontFamily: 'Comic Sans MS, Comic Sans, cursive',
                borderRadius: '10px',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '-10px',
                  left: '20px',
                  width: 0,
                  height: 0,
                  borderLeft: '10px solid transparent',
                  borderRight: '10px solid transparent',
                  borderBottom: '10px solid #D0D0FF',
                },
              }}
            >
              It’s sometimes amusing to look back and see how much we've changed.
              What you are reading above is a piece of text with little to no presence of character or identity.
              In the midst of polished, professional words is a humble realization about the role of software and technology — efficiently performing physical & manual tasks digitally.
              Even that simple idea is masked with flashy words for a portfolio.
            </Box>
          </>
        )}
      </Box>
    </Grid>
  );
};

export default AboutMe;