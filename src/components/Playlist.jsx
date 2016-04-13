import React  from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Song from 'components/Song'

const Playlist = React.createClass({
  render(){
    const {playSong, playNext, songs} = this.props;
    const songDivs = songs.map(song=>{
      return <Song {...song} key={song._id} playSong={playSong} onEnd={playNext} />
    });
    return (<div className="playlist">{songDivs}</div>);
  }
});

export default Playlist;