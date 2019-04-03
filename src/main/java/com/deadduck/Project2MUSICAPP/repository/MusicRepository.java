package com.deadduck.Project2MUSICAPP.repository;

import com.deadduck.Project2MUSICAPP.bean.Song;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MusicRepository extends CrudRepository<Song, Integer>{

}
