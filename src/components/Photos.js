import React, { Component } from 'react'
import axios from 'axios'

export default class Photos extends Component {

    state = {
        photos: [],
        page: 1,
        loading: true,
        search_query: '',
        searching: false,
    }

    componentDidMount(){
        axios.get('https://api.unsplash.com/photos/?client_id=3777f99088243a2077cc5c78265944ca60c685f0d3d2bba7f1ce6bb042a47152&per_page=8&page=' + this.state.page).then(
            res => this.setState({
                photos: res.data,
                loading: false,
                page: this.state.page + 1
            })
        )
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }


    loadNextpage = (e) => {

         axios.get('https://api.unsplash.com/photos/?client_id=3777f99088243a2077cc5c78265944ca60c685f0d3d2bba7f1ce6bb042a47152&per_page=8&page=' + this.state.page).then(
             res => this.setState({
                 photos: res.data,
                 loading: false,
                 page: this.state.page + 1
             })
         )
         window.scrollTo({
             top: 0,
             behavior: 'smooth',
         })
    }


    searchQuery = (e) => {
        this.setState({
            search_query: e.target.value
        })
        
    }

    searchTrigger = (e) => {
        
        axios.get('https://api.unsplash.com/search/photos/?client_id=3777f99088243a2077cc5c78265944ca60c685f0d3d2bba7f1ce6bb042a47152&query=' + this.state.search_query + '&per_page=8&page=' + this.state.page).then(
            res => this.setState({
                photos: res.data.results,
                loading: false,
                page: 2,
                searching: true,
                total_found: res.data.total,
                total_found_pages: res.data.total_pages
            })
        )
        e.preventDefault();
    }


     loadNextSearchPage = (e) => {

        axios.get('https://api.unsplash.com/search/photos/?client_id=3777f99088243a2077cc5c78265944ca60c685f0d3d2bba7f1ce6bb042a47152&query=' + this.state.search_query + '&per_page=8&page=' + this.state.page).then(
            res => this.setState({
                photos: res.data.results,
                loading: false,
                page: this.state.page + 1,
                searching: true,
                total_found: res.data.total,
                total_found_pages: res.data.total_pages
            })
        )

         window.scrollTo({
             top: 0,
             behavior: 'smooth',
         })
     }



    render() {
       
        var searchHeading = '';
        var searchButtonMarkup = '';
        var searchInfo = '';
        if(this.state.searching === true){
            searchHeading = <h2>You searched with <b>{this.state.search_query}</b></h2>
            searchButtonMarkup = <button onClick={this.loadNextSearchPage} type="button">Load More {this.state.page}</button>
            searchInfo = <span>Total found: {this.state.total_found} | Pages {this.state.page -1} of {this.state.total_found_pages}</span>

        } else{
            searchHeading = <h2>Recent Photos</h2>
            searchButtonMarkup = <button onClick={this.loadNextpage} type="button">Load More {this.state.page}</button>
            searchInfo = ''
        }

        if(this.state.loading === true) {
            return(
            <div className="row">
                <div className="col text-center">
                    <div className="loading">
                        <i className="fa fa-spinner fa-pulse"></i>
                    </div>
                </div>
            </div>
            )
        } 

        return(
            <React.Fragment>
                <div className="row top-heading">
                    <div className="col">
                        {searchHeading}
                        {searchInfo}
                    </div>
                    <div className="col col-auto my-auto text-right">
                        <div className="search-form">
                            <form onSubmit={this.searchTrigger} action="">
                                <input type="search" value={this.state.search_query} onChange={this.searchQuery} placeholder="Search keywords"/>
                                <input type="submit" value="Submit"/>
                            </form>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                {
                    this.state.photos.map((photo) => (
                        <div key={photo.id} className="col-md-3 col-6">
                            <div className="single-photo">
                                <a target="blank_" className="d-block" href={'single?id=' + photo.id}>
                                    <div className="image-wraper">
                                        <img src={photo.urls.small} alt={photo.description}/>
                                    </div>
                                    <span className="date-name">{photo.created_at}</span>
                                    <h5>By: {photo.user.first_name}</h5>
                                </a>
                            </div>
                        </div>
                    ))
                }
                </div>

                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="load-more">
                            {searchButtonMarkup}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

