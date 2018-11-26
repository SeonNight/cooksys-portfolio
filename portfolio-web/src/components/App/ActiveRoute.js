import { Component } from 'react';
import { withRouter} from 'react-router-dom'

/*To make sure the page value is the correct value
  during a reload or refresh */
class ActiveRoute extends Component {
  handlePageChange = () => {
    //Make sure it doesn't redo after first reload
    if(!this.props.pageChange) {
      let value = '0'
      switch(this.props.location.pathname) {
        default:
        case '/':
          break;
        case '/Home':
          value = '1'
          break;
        case '/About':
          value = '2'
          break;
        case '/Portfolio':
          value = '3'
          break;
      }
      if(this.props.page !== value) {
        this.props.handlePageChange(value)
        this.props.handlePageChangeFlag()
      }
    }
  }
  
  componentDidMount(){
    this.handlePageChange()
  }

  render() {
    return (this.props.children)
  }
}

export default withRouter(ActiveRoute);