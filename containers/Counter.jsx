import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as CounterActions from '../actions/counter'
import Counter from '../components/Counter'

function mapStateToProps(state) {
  return state.counter
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CounterActions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
