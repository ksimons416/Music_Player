package com.deadduck.Project2MUSICAPP.bean;

import java.util.Objects;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="song")
public class Song {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int song_id;
    private int genre_id;
    private String song_title;
    private String artist_name;
    private String album_name;
    private String song_link;


    public Song() {

    }

    public Song(int song_id, int genre_id, String song_title, String artist_name, String album_name, String song_link) {
        this.song_id = song_id;
        this.genre_id = genre_id;
        this.song_title = song_title;
        this.artist_name = artist_name;
        this.album_name = album_name;
        this.song_link = song_link;
    }

    public String getSong_link() {
        return song_link;
    }

    public void setSong_link(String song_link) {
        this.song_link = song_link;
    }

    public int getSong_id() {
        return song_id;
    }

    public void setSong_id(int song_id) {
        this.song_id = song_id;
    }

    public int getGenre_id() {
        return genre_id;
    }

    public void setGenre_id(int genre_id) {
        this.genre_id = genre_id;
    }

    public String getSong_title() {
        return song_title;
    }

    public void setSong_title(String song_title) {
        this.song_title = song_title;
    }

    public String getArtist_name() {
        return artist_name;
    }

    public void setArtist_name(String artist_name) {
        this.artist_name = artist_name;
    }

    public String getAlbum_name() {
        return album_name;
    }

    public void setAlbum_name(String album_name) {
        this.album_name = album_name;
    }

    @Override
    public String toString() {
        return "Song{" +
                "song_id=" + song_id +
                ", genre_id=" + genre_id +
                ", song_title='" + song_title + '\'' +
                ", artist_name='" + artist_name + '\'' +
                ", album_name='" + album_name + '\'' +
                ", song_link='" + song_link + '\'' +
                '}';
    }
}
