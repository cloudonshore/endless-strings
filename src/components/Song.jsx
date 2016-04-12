import React  from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

var AudioPlayer = React.createClass({
    componentDidMount () {
        const {playing,onProgress,onEnd} = this.props;
        this.el = ReactDOM.findDOMNode(this.refs.audio_tag);
        if(playing){
            this.play();
        }
        this.el.ontimeupdate = ()=>{
            onProgress(this.el.currentTime / this.el.duration);
        };
        this.el.onended = ()=>{
            this.el.currentTime = 0;
            onEnd();
        };
    },
    componentWillReceiveProps(newProps){
        const {playing} = this.props;
        if(newProps.playing && !playing) {
            this.play();
        } else if(!newProps.playing && playing) {
            this.stop()
        }
    },
    play() {
        this.el.play();
    },
    stop(){
        this.el.pause();
    },
    seekPercent(percent){
        this.el.currentTime = this.el.duration * percent;
    },
    render() {
        const {url} = this.props;
        //debugger
        return (
            <audio ref="audio_tag" src={url} />
        );
    }
});


const Song = React.createClass({
    getInitialState(){
        return {
            progress:0
        }
    },
    onProgress(percent){
        this.setState({progress:percent});
    },
    seekProgress(e){
        e.stopPropagation();
        e.preventDefault();
        const mouseX = e.clientX;

        const bar = this.refs.p_bar;
        this.refs.player.seekPercent((mouseX - bar.offsetLeft)/bar.offsetWidth);
    },
    onEnd(){
        const {onEnd,_id} = this.props;
        onEnd(_id);
    },
    render () {
        const {progress} = this.state;

    
    const {_id, title, url,playing,playSong} = this.props;
    const progressBarStyle = {width:(progress * 100)+'%'}
    const outerProgressBarStyle = (playing ?  {} : {height : "0px", border: "0px solid #aaa"} );
    return <div className="song" key={_id}>
        <div className="info" onClick={playSong.bind(null,_id)}>
            <span className="icon">
                <span className={"glyphicon glyphicon-" + (playing?"pause":"play")}></span>
            </span> 
            <span className="song-title" >
                {title}
            </span>
        </div>
        <div className={"p-bar " + (playing ? "playing" : "")} style={outerProgressBarStyle} onClick={this.seekProgress} ref="p_bar">
            <div className="inner-p-bar" style={progressBarStyle}></div>
        </div>
        <AudioPlayer playing={playing} url={url} onProgress={this.onProgress} ref="player" onEnd={this.onEnd}/>
      </div>
    }
});

export default Song