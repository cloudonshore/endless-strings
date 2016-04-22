import React  from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';


const Footer = React.createClass({
    getInitialState(){
      return {
        playingSong:undefined
      };
    },
    componentWillReceiveProps(newProps){
      if(newProps.playingSong){
      this.setState({playingSong: newProps.playingSong});
      }
      else if(this.state.playingSong) {
        const newSong = _.extend({}, this.state.playingSong);
        newSong.playing = false;
        this.setState({playingSong: newSong});
      }
    },
    renderFilters(){
      const {mood, orcestration, tempo, changeFilter, playNext, playPrevious, playSong, filters} = this.props;
      const settings = {mood, orcestration, tempo};
      return _.map(filters,(filterValues,filter)=>{
        
        const filterValuesDivs = _.map(filterValues,filterValue=>{
          const key = _.first(_.keys(filterValue))
          return <div className={"filter-value " + (settings[filter]==key?"active":"")}
                      onClick={changeFilter.bind(null,filter,key)}
                      key={key}
                      >
            {_.first(_.values(filterValue))}
            </div>
        });
        return <div className="filter" key={filter}>
          <div className="filter-title">
            {_.capitalize(filter)}:
          </div>
          <div className="filter-values">
            {filterValuesDivs}
          </div>
        </div>
      });
    },
    render(){
        const {mood, orcestration, tempo, changeFilter, playNext, playPrevious, playSong, filters} = this.props;
        const {playingSong} = this.state;
        
        const id = (playingSong ? playingSong._id : null);
        const title = (playingSong ? playingSong.title : null);
        return <div className="footer">
            <div className={"global-info " + (playingSong?"playing":"") }>
              <div className="play-controls">
                <span className="glyphicon glyphicon-backward" onClick={playPrevious.bind(null,id)}></span>
                <span className={"glyphicon glyphicon-" + (_.get(playingSong,'playing')?"pause":"play")} onClick={playSong.bind(null,id)}></span>
                <span className="glyphicon glyphicon-forward" onClick={playNext.bind(null,id)}></span>
              </div>
              <div className="controls-title">
                {title}
              </div>
            </div>
            <div className="filters">
            {this.renderFilters()}
            </div>
        </div>;
    }
});

export default Footer

/*
                <div className="form-group">
                    <label>Mood &nbsp;</label>
                    <div  className="form-control filter" role="group" aria-label="...">
                      <span className={"filter-value " + (mood=="all"?"active":"")} onClick={changeFilter.bind(null,"mood","all")}> All </span>
                      <button type="button" className={"btn btn-default " + (mood=="Major"?"active":"")} onClick={changeFilter.bind(null,"mood","Major")}> 😊 </button>
                      <button type="button" className={"btn btn-default " + (mood=="minor"?"active":"")} onClick={changeFilter.bind(null,"mood","minor")}> 😔  </button>
                    </div>
                </div>
                <div className="form-group">
                    <label>Orchestration &nbsp;</label>
                    <div  className="form-control" className="btn-group" role="group" aria-label="...">
                      <button type="button" className={"btn btn-default " + (orcestration=="all"?"active":"")} onClick={changeFilter.bind(null,"orcestration","all")}>All</button>
                      <button type="button" className={"btn btn-default " + (orcestration=="Strings Concertino"?"active":"")} onClick={changeFilter.bind(null,"orcestration","Strings Concertino")}>Strings Concertino</button>
                      <button type="button" className={"btn btn-default " + (orcestration=="Strings Tutti"?"active":"")} onClick={changeFilter.bind(null,"orcestration","Strings Tutti")}>Strings Tutti</button>
                      <button type="button" className={"btn btn-default " + (orcestration=="Strings Pizzicato"?"active":"")} onClick={changeFilter.bind(null,"orcestration","Strings Pizzicato")}>Strings Pizzicato</button>
                    </div>
                </div>
                <div className="form-group">
                    <label>Tempo &nbsp;</label>
                    <div  className="form-control" className="btn-group" role="group" aria-label="...">
                      <button type="button" className={"btn btn-default " + (tempo=="all"?"active":"")} onClick={changeFilter.bind(null,"tempo","all")}>All</button>
                      <button type="button" className={"btn btn-default " + (tempo=="Allegro"?"active":"")} onClick={changeFilter.bind(null,"tempo","Allegro")}>Allegro</button>
                      <button type="button" className={"btn btn-default " + (tempo=="Lento"?"active":"")} onClick={changeFilter.bind(null,"tempo","Lento")}>Lento</button>
                      <button type="button" className={"btn btn-default " + (tempo=="Presto"?"active":"")} onClick={changeFilter.bind(null,"tempo","Presto")}>Presto</button>
                    </div>
                </div>
                */