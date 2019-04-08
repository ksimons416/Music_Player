package com.deadduck.Project2MUSICAPP.controller;

import com.deadduck.Project2MUSICAPP.Data.MusicDao;
import com.deadduck.Project2MUSICAPP.Data.MusicDaoImp;
import com.deadduck.Project2MUSICAPP.bean.Song;
import com.deadduck.Project2MUSICAPP.repository.MusicRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.deadduck.Project2MUSICAPP.service.MusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/login")

public class MusicController {

    private MusicService musicService;

    @Autowired
    private MusicDao musicDao;

    @Autowired
    public MusicController(MusicService musicService, MusicDao musicDao){
        this.musicService = musicService;
        this.musicDao = musicDao;
    }

//    @GetMapping("/freeradio")
//    public List<Song> getFreeSongs() {
//        System.out.println("Get all Free Songs...");
//        List<Song> freeSongs = new ArrayList<>();
//        repository.findAll().forEach(freeSongs::add);
//        return freeSongs;
//    }

    @GetMapping("/freeradio")
    @ResponseBody
    public List<Song> getFreeSongs(){
        System.out.println("Getting all free songs...");
       return musicService.findAll();
    }

    @GetMapping("/freeradio/rock")
    @ResponseBody
    public List<Song> getByGenreId(){
        System.out.println("getting by genre...");
        return musicDao.getRockSongs();
    }
}
