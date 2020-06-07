import { connect } from 'react-redux';
import { blogs } from '../actions';
import Home from '../../components/Home';

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => {
	return {
		onAddEmployee: emp => {
			dispatch(blogs(emp));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);