package com.francarter.FranArtistSite.Services;

import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.*;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AmazonClient {
    private S3Client s3client;
    @Value("${spring.aws.s3.endpoint-url}")
    private String endpointUrl;
    @Value("${spring.aws.s3.bucket}")
    private String bucketName;
    @Value("${spring.aws.s3.access-key}")
    private String accessKey;
    @Value("${spring.aws.s3.secret-key}")
    private String secretKey;

    @PostConstruct
    private void initializeAmazon() {
        AwsBasicCredentials awsCreds = AwsBasicCredentials.create(this.accessKey, this.secretKey);
        this.s3client = S3Client.builder()
                .credentialsProvider(StaticCredentialsProvider.create(awsCreds))
                .region(Region.US_EAST_2)
                .build();

        // Debugging info
        System.out.println("Endpoint URL: " + endpointUrl);
        System.out.println("Bucket Name: " + bucketName);
        System.out.println("Access Key: " + accessKey);
        System.out.println("Secret Key: " + secretKey);
    }

    private File convertMultipartFile(MultipartFile file) throws IOException {
        File convFile = new File(file.getOriginalFilename());
        try (FileOutputStream outputStream = new FileOutputStream(convFile)) {
            outputStream.write(file.getBytes());
        }
        return convFile;
    }

    private String generateFileName(MultipartFile multipartFile) {
        return new Date().getTime() + "-" + multipartFile.getOriginalFilename().replace(" ", "_");
    }

    private String getFileUrl(String key) {
        return String.format("%s/%s", endpointUrl, key);
    }
    public List<String> getFilesFromS3Bucket() {
        try {
            ListObjectsV2Request listObjectsV2Request = ListObjectsV2Request.builder()
                    .bucket(bucketName)
                    .build();

            ListObjectsV2Response listObjectsV2Response = s3client.listObjectsV2(listObjectsV2Request);
            System.out.println("Files retrieved successfully");
            return listObjectsV2Response.contents().stream()
                    .map(S3Object::key)
                    .map(this::getFileUrl)
                    .collect(Collectors.toList());
        } catch (S3Exception e) {
            System.out.println("Error occurred while fetching files: " + e.getMessage());
        }
        return Collections.emptyList();
    }

    private void uploadFileToS3Bucket(String fileName, File file) {
        try {
            PutObjectRequest putObjectRequest = PutObjectRequest.builder()
                    .bucket(bucketName)
                    .key(fileName)
                    .build();

            s3client.putObject(putObjectRequest, Paths.get(file.getAbsolutePath()));
            System.out.println("File uploaded successfully: " + fileName);
        } catch (S3Exception e) {
            System.out.println("Error occurred while uploading: " + e.getMessage());
            throw new RuntimeException(e);
        }
    }

    public String uploadFile(MultipartFile multipartFile) {
        String fileUrl = "";
        try {
            File file = convertMultipartFile(multipartFile);
            String fileName = generateFileName(multipartFile);
            fileUrl = endpointUrl + "/" + fileName;
            uploadFileToS3Bucket(fileName, file);
            file.delete();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return fileUrl;
    }

    public String deleteFileFromS3Bucket(String fileUrl) {
        String fileName = fileUrl.substring(fileUrl.lastIndexOf("/") + 1);
        try {
            DeleteObjectRequest deleteObjectRequest = DeleteObjectRequest.builder()
                    .bucket(bucketName)
                    .key(fileName)
                    .build();

            s3client.deleteObject(deleteObjectRequest);
            return "Successfully deleted";
        } catch (S3Exception e) {
            System.out.println("Error occurred while deleting: " + e.getMessage());
            throw new RuntimeException(e);
        }
    }
}