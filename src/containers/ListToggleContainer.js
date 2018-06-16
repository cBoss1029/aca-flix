import {connect} from 'react-redux';
import {saveMyMovie, removeMyMovie} from '../actions';
import ListToggle from '../components/ListToggle';

function mapDispatchToProps(dispatch){
    return{
        saveMyMovie: function(movie){
            let action = saveMyMovie(movie);
            dispatch(action);
        },
        removeMyMovie: function(movie){
            let action = removeMyMovie(movie);
            dispatch(action);
        }
    }
}
export default connect(null, mapDispatchToProps)(ListToggle);