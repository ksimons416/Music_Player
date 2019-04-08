package com.deadduck.Project2MUSICAPP.Data;

import com.deadduck.Project2MUSICAPP.bean.Song;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;

@Repository
@Transactional
public class MusicDaoImp implements MusicDao{

    @Autowired
    private EntityManager em;

    Session session;

    @Override
    public List<Song> getRockSongs() {
        final CriteriaBuilder criteriaBuilder = em.getCriteriaBuilder();
        CriteriaQuery<Song> crit = criteriaBuilder.createQuery(Song.class);
        Root<Song> root = crit.from(Song.class);
        crit.where(criteriaBuilder.equal(root.get("genre_id"), 1));
        return em.createQuery(crit).getResultList();
    }
}
