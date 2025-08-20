import React from "react";

class Movies extends React.Component{
    movie_Name = 'coolie';
    actors = 'Rajini';
    movie_Image = 'https://www.siasat.com/wp-content/uploads/2025/08/Coolie-poster.jpg'

    render (){
        return <div>
            <h3> Movies components</h3>
            <h3> Movies Names: { this.movie_Name}</h3>
            <img src={this.movie_Image} alt="coolie" />
        </div>
    }

}

export default Movies;