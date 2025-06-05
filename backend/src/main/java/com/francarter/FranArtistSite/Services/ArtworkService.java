package com.francarter.FranArtistSite.Services;

import com.francarter.FranArtistSite.Entities.Artwork;
import com.francarter.FranArtistSite.Repositories.ArtworkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ArtworkService {
    private ArtworkRepository artworkRepository;
    @Autowired
    public ArtworkService(ArtworkRepository artworkRepository) {
        this.artworkRepository = artworkRepository;
    }

    public Iterable<Artwork> index() {
        return artworkRepository.findAll();
    }

    public Artwork show(Long id) {
        return artworkRepository.findById(id).get();
    }

    public Artwork create(Artwork artwork) {
        return artworkRepository.save(artwork);
    }

    public Artwork update(Long id, Artwork artwork) {
        Artwork originalArtwork = show(id);
        originalArtwork.setTitle(artwork.getTitle());
        originalArtwork.setYear(artwork.getYear());
        originalArtwork.setDescription(artwork.getDescription());
        originalArtwork.setFilePath(artwork.getFilePath());
        return artworkRepository.save(originalArtwork);
    }

    public Boolean delete(Long id) {
        artworkRepository.deleteById(id);
        return true;
    }
}
