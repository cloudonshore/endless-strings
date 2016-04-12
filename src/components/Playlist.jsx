import React  from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Song from 'components/Song'
import request from 'superagent';

const Playlist = React.createClass({
  getInitialState(){
    return {
        offset:0,
        songs:[]
    };
  },
  componentDidMount(){
    this.fetchSongs();
  },
  fetchSongs(){
      request
        .get('http://localhost:3000/songs')
        .end((err, res)=>{
           const songs = res.body.map(song=>{
                song.playing = false;
                return song;
           }); 
           this.setState({songs: this.state.songs.concat(songs)});
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
  playNext(id){
    let {songs} = this.state;
    const index = _.findIndex(songs,{_id:id});
    this.playSong(songs[index+1]._id);
  },
  getInitialState(){
    return {
      songs:[]
    };
  },
  render(){
    const {songs} = this.state;
    const songDivs = songs.map(song=>{
      return <Song {...song} key={song._id} playSong={this.playSong} onEnd={this.playNext} />
    });
    return (<div className="playlist">{songDivs}</div>);
  }
});

export default Playlist;