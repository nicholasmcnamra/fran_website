package com.francarter.FranArtistSite.Controllers;

import com.francarter.FranArtistSite.Entities.Artwork;
import com.francarter.FranArtistSite.Services.ArtworkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ArtworkController {
    private ArtworkService artworkService;
    @Autowired
    public ArtworkController(ArtworkService artworkService) {
        this.artworkService = artworkService;
    }
    @GetMapping("/artworks")
    public ResponseEntity<Iterable<Artwork>> index() {
        return new ResponseEntity<>(artworkService.index(), HttpStatus.OK);
    }
    @GetMapping("/artwork/{id}")
    public ResponseEntity<Artwork> show(@PathVariable Long id) {
        return new ResponseEntity<>(artworkService.show(id), HttpStatus.OK);
    }
    @PostMapping("/artwork")
    public ResponseEntity<Artwork> create(@RequestBody Artwork artwork) {
        return new ResponseEntity<>(artworkService.create(artwork), HttpStatus.OK);
    }
    @PutMapping("/artwork/{id}")
    public ResponseEntity<Artwork> update(@PathVariable Long id, @RequestBody Artwork artwork) {
        return new ResponseEntity<>(artworkService.update(id, artwork), HttpStatus.OK);
    }
    public ResponseEntity<Boolean> delete(@PathVariable Long id) {
        return new ResponseEntity<>(artworkService.delete(id), HttpStatus.OK);
    }
}
