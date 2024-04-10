// emailUtils.js

const axios = require('axios');

const sendConfirmationEmail = async (userEmail) => {
  try {
    const response = await axios.post('https://api.resend.com/send_confirmation_email', {
      email: userEmail,
      // Add any additional parameters required by the resend.com API
    });
    console.log('Email sent successfully:', response.data);
    return response.data; // Return response data if needed
  } catch (error) {
    if (error.response) {
      console.error('Error sending email:', error.response.data);
      return error.response.data; // Return error response data
    } else if (error.request) {
      console.error('No response received:', error.request);
      return { error: 'No response received' }; // Return custom error message
    } else {
      console.error('Error:', error.message);
      return { error: error.message }; // Return error message
    }
  }
};

module.exports = sendConfirmationEmail;
