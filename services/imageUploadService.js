// imageUploadService.js

const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with your cloud name, API key, and API secret
cloudinary.config({
  cloud_name: 'YOUR_CLOUD_NAME',
  api_key: 'YOUR_API_KEY',
  api_secret: 'YOUR_API_SECRET'
});

const uploadImage = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file.path);
    console.log('Image uploaded successfully:', result);
    return result; // Return upload result
  } catch (error) {
    console.error('Error uploading image:', error);
    throw new Error('Error uploading image');
  }
};

module.exports = { uploadImage };
