const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const config = require('../config')
 
aws.config.update({
    secretAccessKey: config.secretAccessKey ,
    accessKeyId: config.accessKeyID ,
    region: "us-east-2"
});

const s3 = new aws.S3();

const bucket = config.s3bucket
 
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: bucket,
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

module.exports = upload;