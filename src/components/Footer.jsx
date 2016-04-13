import React  from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';


const Footer = React.createClass({
    render(){
        const {mood, orcestration, tempo, changeFilter} = this.props;
        return <div className="footer">
            
            <div className="filters">
                <div className="form-group">
                    <label>Mood &nbsp;</label>
                    <div  className="form-control" className="btn-group" role="group" aria-label="...">
                      <button type="button" className={"btn btn-default " + (mood=="all"?"active":"")} onClick={changeFilter.bind(null,"mood","all")}> All </button>
                      <button type="button" className={"btn btn-default " + (mood=="Major"?"active":"")} onClick={changeFilter.bind(null,"mood","Major")}> 😊 &nbsp; </button>
                      <button type="button" className={"btn btn-default " + (mood=="Minor"?"active":"")} onClick={changeFilter.bind(null,"mood","minor")}> 😔 &nbsp; </button>
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
            </div>
        </div>;
    }
});

export default Footer