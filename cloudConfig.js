const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
CLOUD_NAME=drz37msvd
CLOUD_API_KEY=538592972797747
CLOUD_API_SECRET=17DOSppo7-OTh842kdDsVCt8EWU
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'wanderlust_Dev',
     allowerdFormat: ["png", "jpg", "jpeg"],
    },
  });

  module.exports = {
    cloudinary,
    storage
  }
