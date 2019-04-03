package com.deadduck.Project2MUSICAPP.controller;

import com.deadduck.Project2MUSICAPP.bean.Song;
import com.deadduck.Project2MUSICAPP.repository.MusicRepository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/login")

public class MusicController {

    @Autowired
    MusicRepository repository;

    @GetMapping("/freeradio")
    public List<Song> getFreeSongs() {
        System.out.println("Get all Free Songs...");
        List<Song> freeSongs = new ArrayList<>();
        repository.findAll().forEach(freeSongs::add);
        return freeSongs;
    }


}
