import React,{Component,Fragment} from "react";

class Name extends Component{
    constructor(props) {
        super(props)
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.info('getSnapshotBeforeUpdate')
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.info('componentDidUpdate')
    }
    componentDidMount() {
        console.info('componentDidMount')
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.info('shouldComponentUpdate')
        return true;
    }
    componentDidCatch(error, errorInfo) {
        console.info('componentDidCatch')
    }
    componentWillUnmount() {

    }


    render() {
        console.info('render')
        return <Fragment>
            {this.props.name}
        </Fragment>
    }
}
export default Name