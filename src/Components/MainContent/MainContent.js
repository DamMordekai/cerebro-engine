import React from 'react'
import Search from '../Search/Search'
import Results from '../Search/Results'

import axios from 'axios'
import './Assets/mainstyle.scss'
import Detalhes from '../Search/Detalhes/Detalhes'


export default class MainContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            query: '',
            enter: false,
            result: false,
            results: [],
            open: false,
            selected: {},
            selectresults: [],
            thumb: [],
            searched: false,
            error: false
        }

        this.handleInput = this.handleInput.bind(this)
        this.search = this.search.bind(this)
        this.openDetails = this.openDetails.bind(this)
        this.handleSearchClick = this.handleSearchClick.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    search(){
        const api = 'fbcd07f17ddb82dc53dd9935316dbbd9'
        const pApi = '3c9047ca911454e9d552d2c63f924257'
        const ts = '1594729697'
        const query = this.state.query

        const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}&ts=${ts}&apikey=${api}&hash=${pApi}`


            if(this.state.query === '' && this.state.enter === false){
                return
            } else {
                this.setState({result: true})
                axios.get(url, {})
                .then((data) =>{
                    const results = data.data.data.results
                    this.setState({results: results, searched: true})
                })
                .catch((error) => {
                    this.setState({error: true})
                    console.log(error)
                })
                this.setState({enter: false})
            }
    }

    handleKeyPress(e){
        if(e.key === 'Enter') {
            this.search()
        }
    }

    handleSearchClick(){
        this.search()
    }
    
    handleInput(e){
        let q = e.target.value;

        this.setState(prevState=>{
            return {...prevState, query: q}
        })

    }

    handleClose(){
        this.setState({open: false})
    }

    openDetails(id, name){
        const api = 'fbcd07f17ddb82dc53dd9935316dbbd9'
        const pApi = '3c9047ca911454e9d552d2c63f924257'
        const ts = '1594729697'
        const query = name
        const url = `https://gateway.marvel.com:443/v1/public/characters?name=${query}&ts=${ts}&apikey=${api}&hash=${pApi}`

        axios.get(url, {})
            .then((data) =>{
                const results = data.data.data.results
                console.log(results)
                this.setState({selectresults: results[0]})
            })

        const key = id
        this.setState({open: true, selected: key})
        
    }

    render(){
        return(
            <div className={this.state.open ? 'content up': 'content'}>
                <header>
                    <div className='nav'>
                    </div>
                    <img className={this.state.result ? 'logo-sm': 'logo'} src={require('./Assets/Logo.png')} alt='Cerebro' />  
                </header >
                <main>
                    <Search 
                        searchClick={this.handleSearchClick}
                        handleInput={this.handleInput} 
                        search={this.handleKeyPress} 
                    />

                    <Results 
                        results={this.state.results} 
                        searched={this.state.searched} 
                        error={this.state.error} 
                        openDetails={this.openDetails} 
                    />
                    {this.state.open ? 
                        <Detalhes 
                            results={this.state.selectresults}
                            handleClose={this.handleClose}
                            id={this.state.selected} 
                        />
                    : false}
                </main>
            </div>
        )

    }
}