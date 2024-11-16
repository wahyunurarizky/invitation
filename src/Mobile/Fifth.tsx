import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TextField, Button, Snackbar, SnackbarContent } from '@mui/material';
import { CheckCircle, Error } from '@mui/icons-material';

const Fifth = () => {
  const [sender, setSender] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const handleSenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSender(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!sender || !message) return;

    setLoading(true);

    fetch('https://api.apispreadsheets.com/data/KGVXul9oElixwhEB/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: { sender, message } })
    })
      .then((res) => {
        if (res.status === 201) {
          setSnackbarSeverity('success');
          setSnackbarMessage('Message sent successfully! Thank you for your message.');
          setSender('');
          setMessage('');
        } else {
          setSnackbarSeverity('error');
          setSnackbarMessage('Failed to save the message.');
        }
      })
      .catch(() => {
        setSnackbarSeverity('error');
        setSnackbarMessage('An error occurred. Please try again.');
      })
      .finally(() => {
        setLoading(false);
        setOpenSnackbar(true);
      });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-between w-full gap-4 px-8 py-16 h-dvh font-Comfortaa"
      // initial={{ opacity: 0, y: 50 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{ duration: 1 }}
    >
      {/* Heading Animation */}
      <motion.div
        className="self-start font-gideon"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ amount: 0.5 }}
      >
        <h1 className="text-[60px]/[60px] text-gray-800">
          BEST
          <br />
          FOR US
          <br />
        </h1>
        <span className="self-start text-base font-light text-right font-crimson text-inv-grayA">we will keep your messages private</span>
      </motion.div>

      {/* Form Animation */}
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ amount: 0.5 }}
      >
        {/* Sender Input Animation */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ amount: 0.5 }}
        >
          <TextField
            label="Sender Name"
            id="sender"
            type="text"
            value={sender}
            onChange={handleSenderChange}
            fullWidth
            variant="outlined"
            placeholder="Enter your name"
            className="p-3"
            sx={{
              '& .MuiInputLabel-root': {
                color: '#616161', // Label color
                '&.Mui-focused': {
                  color: '#616161' // Label color on focus
                }
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#616161' // Outline color
                },
                '&:hover fieldset': {
                  borderColor: '#616161' // Outline color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#616161' // Outline color on focus
                }
              }
            }}
          />
        </motion.div>

        {/* Message Textarea Animation */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ amount: 0.5 }}
        >
          <TextField
            label="Message"
            id="message"
            value={message}
            onChange={handleMessageChange}
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            placeholder="Type your message here..."
            className="p-3"
            sx={{
              '& .MuiInputLabel-root': {
                color: '#616161', // Label color
                '&.Mui-focused': {
                  color: '#616161' // Label color on focus
                }
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#616161' // Outline color
                },
                '&:hover fieldset': {
                  borderColor: '#616161' // Outline color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#616161' // Outline color on focus
                }
              }
            }}
          />
        </motion.div>

        {/* Submit Button Animation */}
        <motion.div
          className="flex justify-end"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ amount: 0.5 }}
        >
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            fullWidth
            size="large"
            sx={{
              backgroundColor: '#171717', // Set the background color
              '&:hover': {
                backgroundColor: '#171717' // Set the hover color
              },
              '&:focus': {
                backgroundColor: '#171717' // Set the focus color
              }
            }}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </Button>
        </motion.div>
      </motion.form>

      <img src="/line.svg" alt="" />

      {/* Snackbar Alert */}
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <SnackbarContent
          message={
            <span className="flex items-center">
              {snackbarSeverity === 'success' ? (
                <CheckCircle sx={{ color: 'white', marginRight: '8px' }} />
              ) : (
                <Error sx={{ color: 'white', marginRight: '8px' }} />
              )}
              {snackbarMessage}
            </span>
          }
          sx={{
            backgroundColor: snackbarSeverity === 'success' ? 'green' : 'red',
            color: '#fff',
            borderRadius: '8px',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
        />
      </Snackbar>
    </motion.div>
  );
};

export default Fifth;
