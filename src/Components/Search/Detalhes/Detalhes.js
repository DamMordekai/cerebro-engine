import React from 'react'
import axios from 'axios';
import './detalhes.scss'
import Comiccard from './Comiccard';

export default class Detalhes extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            thumb: [],
            comics: [],
            events: []
        }

        this.componentDidMount = this.componentWillMount.bind(this)
        this.render = this.render.bind(this)
        this.componentWillUnmount = this.componentWillUnmount.bind(this)
    }

    componentWillMount(){
        const id = this.props.id
        const api = 'fbcd07f17ddb82dc53dd9935316dbbd9'
        const pApi = '3c9047ca911454e9d552d2c63f924257'
        const ts = '1594729697'
        const urlC = `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?&ts=${ts}&apikey=${api}&hash=${pApi}`
        const urlE = `https://gateway.marvel.com:443/v1/public/characters/${id}/events?&ts=${ts}&apikey=${api}&hash=${pApi}`
        
        axios.get(urlE,{})
            .then(res => {
                const events = res.data.data.results
                this.setState({events: events})
            })
        axios.get(urlC,{})
        .then(res1 => {
            const comics = res1.data.data.results
            this.setState({comics: comics})
        })
    }

    componentWillUnmount(){
        this.setState({
            thumb: [],
            comics: [],
            events: []
        })
    }

    render() {
        return (
            <div className='details-wrapper'>
                <button className='close-btn' onClick={this.props.handleClose}><i class="far fa-3x fa-times-circle"></i></button>
                <br/>
                <br/>
                <div className='hero-name'>{this.props.results.name}</div>
                <div className='hero-details'>
                    {this.props.results.description ? <span>{this.props.results.description}</span>: <h1 style={{color: 'rgb(151, 151, 151)'}}>No description</h1>}</div>
                
                <ul className='events'>
                    <h3>Participou em:</h3>
                    {this.state.events ?
                    this.state.events.map((events) => {
                        return <li key={events.id}><a href={events.urls[0].url} target='_blank' rel="noopener noreferrer">{events.title}</a></li>
                    }): null}
                </ul>
                <h3>Comics:</h3>
                {this.state.comics ? 
                <div className='comics'>
                    <br/>
                    {this.state.comics.map((result) =>{
                        return <Comiccard key={result.id} comics={result} />
                    })}
                </div>: null}
            </div>
        )
    }
}
