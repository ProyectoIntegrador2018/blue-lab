const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const config = require('../config')
 
aws.config.update({
    secretAccessKey: config.secretAccessKey ,
    accessKeyId: config.accessKeyID ,
    region: config.s3Region
});

const s3 = new aws.S3();

const bucket = config.s3Bucket
 
//upload a file to AWS S3
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