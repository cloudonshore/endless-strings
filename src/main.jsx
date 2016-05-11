import 'styles/main.less';

import React  from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Playlist from 'components/Playlist'
import Footer from 'components/Footer'
import request from 'superagent';

window._ = _;

const Header = React.createClass({
    render(){
        return <div className="header">
                <div  className="header-left">
                <img className="title-image" src={require('assets/title.png')} /> 
                <div className="credits">
                  A 6,000 song album made by <a href="http://asdf.us" target="_BLANK">Pepper</a>,  
                   <a href="https://www.linkedin.com/in/brandon-winston-3b179951" target="_BLANK"> Brandon</a>, 
                  and <a href="http://cloudonshore.com" target="_BLANK">Sam</a>.
                </div>
            </div>
            <div className="header-right">
                <img src={require('assets/header.png')} />
            </div>
        </div>;
    }
});

const limit = 100;
var offset = 0;
var done = false;

const filters = {
  mood:[{"all":"All"},{"Major":"😊"},{"Minor":"😔"}],
  orchestration:[{"all":"All"},{"Strings Concertino":"Strings Concertino"}, {"Strings Tutti":"Strings Tutti"},{"Strings Pizzicato":"Strings Pizzicato"}],
  tempo:[{"all":"All"},{"Allegro":"Slow"},{"Lento":"Medium"},{"Presto":"Fast"}]
};

const App = React.createClass({
 getInitialState(){
    return {
        songs:[],
        mood:"all",
        orchestration:"all",
        tempo:"all"
    };
  },
  componentDidMount(){
    this.fetchSongs();
    window.onscroll = _.throttle(()=>{
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        var _docHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
        if(_docHeight - top < 2000) {
            offset += limit; 
            if(!done){ this.fetchSongs() };
        }
    },100);
  },
  fetchSongs(){
      request
        .get('http://endless-strings.com/data/songs')
        .query({ limit: limit, offset: offset })
        .end((err, res)=>{
           const songs = res.body.map(song=>{
                song.playing = false;
                return song;
           }); 
           //console.log(songs);
           if(songs.length==0){
            done = true;
           } else {
              this.setState({songs: this.state.songs.concat(songs)});
           }
        });
  },
  playSong(id){
    let {songs} = this.state;

    const song = _.find(songs,{_id:id});
    if(song.playing){
        song.playing = false;
    } else {
        _.each(songs,song=>{ song.playing =false;});
        song.playing = true;
    }
    this.forceUpdate();
  },
  changeFilter(filterName,filterValue){
    this.setState({[filterName]:filterValue});
  },
  playNext(id){
    let {songs} = this.state;
    const index = _.findIndex(songs,{_id:id});
    this.playSong(songs[index+1]._id);
  },
  playPrevious(id){
    let {songs} = this.state;
    const index = _.findIndex(songs,{_id:id});
    if(index != 0)
    {
      this.playSong(songs[index-1]._id);
    }
  },
    render(){
        const {playNext, playSong, playPrevious, changeFilter} = this;
        const {songs, mood, orchestration, tempo} = this.state;
        const filteredSongs = filterSongs(songs,mood, orchestration, tempo);
        
        const playingSong = _.find(songs, {playing:true});

        window.songs = songs;
        const currentlyPlaying = null;
        return <div>
            <Header />
            <Playlist {...{playNext, playSong, songs:filteredSongs}} />
            <Footer {...{playNext, 
                        playPrevious, 
                        currentlyPlaying, 
                        playSong, 
                        mood, 
                        orchestration, 
                        tempo, 
                        changeFilter, 
                        playingSong,
                        filters}} />
        </div>;
    }
});

function filterSongs(songs,mood, orchestration, tempo){
   const filters = {}
   if(mood!="all"){
    filters["harmonic_key_type"]=mood;
   } if(orchestration!="all"){
    filters["orchestral_preset"]=orchestration;
   } if(tempo!="all"){
    filters["tempo_classification"]=tempo;
   } 
   if(_.isEmpty(filters)) {
    return songs;
   } else {
     return _.filter(songs,filters)
   }
}

const el = document.getElementById('container');
const app = <App />;
// todo: re-add ga.pageview call for each page load??
ReactDOM.render(app, el);
