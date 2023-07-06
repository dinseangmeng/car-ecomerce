/// <reference types="node" />
import * as AWS from 'aws-sdk';
export declare class AwsS3Service {
    private s3;
    constructor();
    uploadFile(bucketName: string, fileKey: string, file: Buffer, ACL_OTION: string): Promise<AWS.S3.ManagedUpload.SendData>;
    getFile(bucketName: string, fileKey: string): Promise<AWS.S3.GetObjectOutput>;
}
