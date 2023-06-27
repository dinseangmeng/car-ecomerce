import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Injectable()
export class AwsS3Service {
  private s3: AWS.S3;

  constructor() {
    this.s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });
  }

  async uploadFile(bucketName: string, fileKey: string, file: Buffer,ACL_OTION:string): Promise<AWS.S3.ManagedUpload.SendData> {
    const params: AWS.S3.PutObjectRequest = {
      Bucket: bucketName,
      Key: fileKey,
      Body: file,
      ACL: ACL_OTION
    };

    return this.s3.upload(params).promise();
  }

  async getFile(bucketName: string, fileKey: string): Promise<AWS.S3.GetObjectOutput> {
    const params: AWS.S3.GetObjectRequest = {
      Bucket: bucketName,
      Key: fileKey,
    };

    return this.s3.getObject(params).promise();
  }
}
