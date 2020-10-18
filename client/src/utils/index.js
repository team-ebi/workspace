import aws from "aws-sdk";
require("dotenv").config();

// AWS S3 configuration
const bucketName = process.env.REACT_APP_S3_BUCKET_NAME;

aws.config.credentials = new aws.Credentials({
  accessKeyId: process.env.REACT_APP_S3_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_S3_SECRET_ACCESS_KEY,
});


export function listObjects(bizId) {
  const bucket = new aws.S3({
    params: {
      Bucket: bucketName,
      Prefix: `${bizId}/`,
    },
  });
  const listObjects = new Promise((resolve, reject) => {
    bucket.listObjects((error, data) => {
      if (error) {
        console.error("error: ", error);
        return;
      }

      resolve(data.Contents);
    });
  });

  return listObjects;
}

export function getSingleObject(bizId, key) {
    const bucket = new aws.S3({
    params: {
      Bucket: bucketName,
      Prefix: `${bizId}/`,
    },
  });
  const getSingleObject = new Promise((resolve, reject) => {
    bucket.getObject(
      {
        Bucket: bucketName,
        Key: key,
      },
      (error, data) => {
        if (error) {
          console.error("error: ", error);
          return;
        }

        resolve(data.Body.toString("base64"));
      }
    );
  });

  return getSingleObject;
}

export function saveObject(bucket, file) {
  const saveObject = new Promise((resolve, reject) => {
    bucket.putObject(
      {
        Key: file.name,
        Body: file,
        ACL: "public-read",
      },
      (error, data) => {
        if (error) {
          console.error("error: ", error);
          return;
        }

        resolve(data);
      }
    );
  });

  return saveObject;
}

// Delete folder
const deleteObjects = (bucket, objects) => {
  const deleteObjects = new Promise((resolve, reject) => {
    bucket.deleteObjects(
      { Delete: { Objects: objects, Quiet: true } },
      (error, data) => {
        error ? console.error("error: ", error) : resolve(data);
      }
    );
  });
  return deleteObjects;
};
