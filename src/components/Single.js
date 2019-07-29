import React, { Component } from 'react';
import axios from 'axios'

export default class Single extends Component {

    state = {
        photo: [],
        loading: true
    }





    componentDidMount() {
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let photo_id = params.get('id');

        axios.get('https://api.unsplash.com/photos/' + photo_id + '/?client_id=3777f99088243a2077cc5c78265944ca60c685f0d3d2bba7f1ce6bb042a47152').then(
            res => this.setState({
                photo: res.data,
                loading: false
            })
        )

    }

    render() {
        console.log(this.state.photo)
        var photo = this.state.photo
        return (
            <div>
                <div className="photo wraper">
                    <div className="photo-info">
                       {photo.title ? <h3>{photo.story.title}</h3> : ''}
                       {photo.description ? <p>{photo.description}</p> : ''}
                        
                        <ul>
                            <li><label htmlFor="uploaded_by">Uploaded by:</label> {photo.user && photo.user.first_name} {photo.user && photo.user.last_name}</li>
                            {photo.updated_at ? <li><label htmlFor="photo_date">Upload date:</label> {photo.updated_at}</li> : ''}
                            <li><label htmlFor="camera_model">Camera model:</label> {photo.exif && photo.exif.model}</li>
                            <li><label htmlFor="camera_aperture">Camera aperture:</label> {photo.exif && photo.exif.aperture}</li>
                            <li><label htmlFor="camera_length">Focal length:</label> {photo.exif && photo.exif.focal_length}</li>
                            <li><label htmlFor="camera_ico">Iso:</label> {photo.exif && photo.exif.iso}</li>
                        </ul>

                        <a target="blank_" href={photo.links && photo.links.download}>Download</a>

                    </div>
                    <img src={photo.urls && photo.urls.full} alt=""/>
                </div>
            </div>
        )
    }
}
