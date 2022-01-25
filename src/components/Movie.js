//상위 컴포넌트 [App.js]로 부터 파라미터의 값을 받아와야한다 -> props
import { Link } from 'react-router-dom';

//css
import '../css/Movie.css';
function Movie({ cover, id, title, rating, genres, summary }) {
    return (
        <div className='movieBox' key={id}>
            <div className='movieBox__img'>
                {cover ? <img className='cover' src={cover} ></img> : null}
            </div>
            <div className='movieBox__text'>
                <h3>
                    {/*<a href="/detail">{title} [{rating}]</a>*/}
                    <Link to={`information/${id}`}>{title}</Link>
                </h3>
                <span style={{ fontWeight: 600, color: 'salmon' }}>⭐️ {rating}</span>
                <ul>
                    {genres ? genres.slice(0, 3).map((g, index) => (<li key={index}>{g}</li>))
                        : <li>ETC</li>}
                </ul>
                {/*<p>{summary.length > 100 ? `${summary.slice(0, 100)}...` : summary}</p>*/}
            </div>
        </div>)
}


export default Movie;