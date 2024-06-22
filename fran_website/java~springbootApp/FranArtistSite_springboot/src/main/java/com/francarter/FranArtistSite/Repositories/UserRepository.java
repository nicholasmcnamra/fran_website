package com.francarter.FranArtistSite.Repositories;

import com.francarter.FranArtistSite.Entities.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

}
