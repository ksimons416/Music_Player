package com.deadduck.Project2MUSICAPP.service;

import com.deadduck.Project2MUSICAPP.bean.Song;
import com.deadduck.Project2MUSICAPP.repository.MusicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

public class MusicService  implements IMusicService{

    @Autowired
    private MusicRepository musicRepository;

    @Override
    public List<Song> findAll() {
        List<Song> songs = (List<Song>) musicRepository.findAll();
        return songs;
    }
}
