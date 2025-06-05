package com.francarter.FranArtistSite.Controllers;

import com.francarter.FranArtistSite.Services.AmazonClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/storage")
public class BucketController {
    private final AmazonClient amazonClient;

    @Autowired
    public BucketController(AmazonClient amazonClient) {
        this.amazonClient = amazonClient;
    }
    @GetMapping("/getFiles")
    public ResponseEntity<List<String>> getFiles() {
        List<String> s3Urls = amazonClient.getFilesFromS3Bucket();
        return ResponseEntity.ok(s3Urls);
    }

    @PostMapping("/uploadFile")
    public String uploadFile(@RequestPart(value = "file") MultipartFile file) {
        return this.amazonClient.uploadFile(file);
    }

    @DeleteMapping("/deleteFile")
    public String deleteFile(@RequestParam(value="url") String fileUrl) {
        return this.amazonClient.deleteFileFromS3Bucket(fileUrl);
    }
}