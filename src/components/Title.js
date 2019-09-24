import React, { Component,Fragment } from 'react'
import './title.less'
export default class Title extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (<Fragment>
            <p>react-webpack 活动模板 </p>
        </Fragment>)
    }
}