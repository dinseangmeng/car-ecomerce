import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config/dist';
import { AwsS3Service } from 'src/aws-s3/aws-s3.service';
export declare class FileService {
    private prisma;
    private config;
    private readonly awsS3Service;
    constructor(prisma: PrismaService, config: ConfigService, awsS3Service: AwsS3Service);
    SaveImage(file: any, path: string): Promise<string>;
}
