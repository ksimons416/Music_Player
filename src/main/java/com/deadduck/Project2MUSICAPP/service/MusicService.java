package com.deadduck.Project2MUSICAPP.service;

import com.deadduck.Project2MUSICAPP.Data.MusicDao;
import com.deadduck.Project2MUSICAPP.Data.MusicDaoImp;
import com.deadduck.Project2MUSICAPP.bean.Song;
import com.deadduck.Project2MUSICAPP.repository.MusicRepository;
import com.sun.xml.internal.bind.v2.model.core.ID;
//import org.hibernate.Criteria;
//import org.hibernate.Session;
//import org.hibernate.criterion.Restrictions;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.service.ServiceRegistry;

import javax.persistence.criteria.CriteriaQuery;
import java.util.List;

@Service
public class MusicService implements IMusicService{
    Session session;

    @Autowired
    private MusicRepository musicRepository;

    @Autowired
    public MusicService(MusicRepository musicRepository){
        this.musicRepository = musicRepository;
    }

    @Override
    public List<Song> findAll() {
        List<Song> songs = (List<Song>) musicRepository.findAll();
        return songs;
    }

    @Override
    public List<Song> findByGenreId() {
    return null;
    }
}
