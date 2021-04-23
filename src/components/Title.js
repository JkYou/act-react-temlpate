import React, { Component,Fragment } from 'react'
import './title.less'
export default class Title extends Component {
    constructor(props){
        super(props)
        console.info('constructor title')
    }

    // 初始化渲染时调用
    componentWillMount() {
        console.log("componentWillMount方法执行");
    }

    // 初始化渲染时调用
    componentDidMount() {
        console.log("componentDidMount方法执行");
    }

    // 父组件修改组件的props时会调用
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps方法执行");
    }

    // 组件更新时调用
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate方法执行");
        return true;
    }

    // 组件更新时调用
    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate方法执行");
    }

    // 组件更新后调用
    componentDidUpdate(preProps, preState) {
        console.log("componentDidUpdate方法执行");
    }

    // 组件卸载时调用
    componentWillUnmount() {
        console.log("子组件的componentWillUnmount方法执行");
    }
    render(){
        console.info('render')
        return (<Fragment>
            <p>swy-react-webpack 活动模板{this.props.title} </p>
        </Fragment>)
    }
}