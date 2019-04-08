package com.deadduck.Project2MUSICAPP.service;
import com.deadduck.Project2MUSICAPP.bean.Song;

import java.util.List;
import java.util.Optional;

public interface IMusicService {
    public List<Song> findAll();
    public List<Song> findByGenreId();
}
