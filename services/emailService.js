const axios = require('axios');

const sendConfirmationEmail = async (userEmail) => {
  try {
    const response = await axios.post('https://api.resend.com/send_confirmation_email', {
      email: userEmail
    });
    console.log('Email sent successfully:', response.data);
    return response.data; 
  } catch (error) {
    if (error.response) {
      console.error('Error sending email:', error.response.data);
      return error.response.data; 
    } else if (error.request) {
      console.error('No response received:', error.request);
      return { error: 'No response received' };
    } else {
      console.error('Error:', error.message);
      return { error: error.message };
    }
  }
};

module.exports = { sendConfirmationEmail };
