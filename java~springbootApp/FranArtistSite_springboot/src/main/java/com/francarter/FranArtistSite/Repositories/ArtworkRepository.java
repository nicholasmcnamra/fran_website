package com.francarter.FranArtistSite.Repositories;

import com.francarter.FranArtistSite.Entities.Artwork;
import org.springframework.data.repository.CrudRepository;

public interface ArtworkRepository extends CrudRepository<Artwork, Long> {
}
