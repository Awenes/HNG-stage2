const MOVIEBOX = "https://api.themoviedb.org/3/movie/top_rated?api_key=";
const IMG = "https://api.themoviedb.org/3/movie/{movie_id}/images";

 
 const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(MOVIEBOX)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setMovies(data.results);
        })
    }, [])