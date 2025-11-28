

let Movie = ()=>{
    let Movie = "jananayagan";
    let Actors = "Vijay";
    let images = "https://tse3.mm.bing.net/th/id/OIP.ZMWsRC6illbOstiJqQo_dAHaEK?pid=Api&P=0&h=180"

    return <div>
        <h3>Movie Components</h3>
        <hr />
        <h3>Movie Name: {Movie}</h3>
        <h3>Actor: {Actors}</h3>
        <img src={images} alt="" />
    </div>
}
export default Movie;