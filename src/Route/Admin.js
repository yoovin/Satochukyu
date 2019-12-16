import React, { Component } from 'react'
import axios from 'axios'
import {Alert} from 'react-bootstrap'
import {Animated} from "react-animated-css"

export default class Admin extends Component {

    state = {
        answer:""
    }

    componentWillMount(){
        axios.get('/get/answerhow')
        .then((res)=>this.setState({answer:res.data}))
        .then(res => {
            const aanswer = this.state.answer.sort(function(a, b) { // 오름차순
                return a.seikai > b.seikai ? -1 : a.seikai < b.seikai ? 1 : 0;
            });
            this.setState({answer:aanswer})
        })
        .catch(err=>console.log(err))
    }

    render() {
        const {answer} = this.state
        return (
            <div className="out">
                <div className="adin">
                <Alert variant="success">
                    정답수 확인!
                </Alert>
                <Animated animationIn="lightSpeedIn" animationOut="zoomOutDown" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                {answer ? answer.map(data => {
                    return(
                        <div>
                            <Alert variant="primary">
                                <span>{data.name} : {data.seikai}</span>
                            </Alert>
                        </div>
                    )
                }) :''}
                </Animated>
                </div>
            </div>
        )
    }
}
