package com.deadduck.Project2MUSICAPP.controller;

import com.deadduck.Project2MUSICAPP.bean.User;
import com.deadduck.Project2MUSICAPP.dto.UserDTO;
import com.deadduck.Project2MUSICAPP.repository.UserRepository;

import java.util.List;
import java.util.Optional;

import com.deadduck.Project2MUSICAPP.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/login")

public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService theUserService) {
        userService = theUserService;
    }

    @PostMapping("/signup")
        public User addUser(@RequestBody User theUser){
        theUser.setUserid(0);
        userService.addUser(theUser);
        return theUser;
    }



    @Autowired
    UserRepository repository;

    @GetMapping(path = "/user_list", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<User> allUsers(){
        return this.userService.getAllUsers();
    }

    @PostMapping(path = "/auth", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public User handleLogin(@RequestBody UserDTO userDTO) {
        return this.userService.findUserByEmailAndPassword(userDTO.getEmail(), userDTO.getPassword());
    }


    @PutMapping("/usersubscription/{userid}")
    public ResponseEntity<User> changeSub(@PathVariable("userid") int id) {
        System.out.println("Subscribe");
        Optional<User> userData = repository.findById(id);
        System.out.println("changing subscription...");
        if(userData.isPresent()) {
            User _user = userData.get();
            if(_user.getSubscription_id() == 1) {
                _user.setSubscription_id(2);
                return new ResponseEntity<>(repository.save(_user), HttpStatus.OK);
            } else if (_user.getSubscription_id() == 2) {
                _user.setSubscription_id(1);
                return new ResponseEntity<>(repository.save(_user), HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
