package com.francarter.FranArtistSite.Services;

import com.francarter.FranArtistSite.Entities.User;
import com.francarter.FranArtistSite.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private UserRepository userRepository;
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    public User show(Long id) {
        return userRepository.findById(id).get();
    }
    public User create(User user) {
        return userRepository.save(user);
    }
    public User update(Long id, User user) {
        User originalUser = show(id);
        originalUser.setUserName(user.getUserName());
        originalUser.setFirstName(user.getFirstName());
        originalUser.setLastName(user.getLastName());
        originalUser.setEmail(user.getEmail());
        originalUser.setPassword(user.getPassword());
        return userRepository.save(originalUser);
    }
    public Boolean delete(Long id) {
        userRepository.deleteById(id);
        return true;
    }
}
