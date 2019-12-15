import React, { Component } from 'react'
import {Alert, ButtonGroup, Button} from 'react-bootstrap'
import Copyright from '../Component/Copyright'

export default class Mondai8 extends Component {

    state = {
        selected:0
    }

    handleAnswerChange = async (num) => {
        await this.setState({selected:num})
        await window.sessionStorage.setItem('mon8', this.state.selected)
    }

    render() {
        return (
            <div className="out">
                <div className="in">
                <Alert variant="success">
                <Alert.Heading>問題8</Alert.Heading>
                <p className="mb-0">韓国の朝のあいさつは何ですか？</p>
                </Alert>
                <span className="monlongans">1. 좋은 저녁이에요.</span><br/>
                <span className="monlongans">2. 점심은 맛있게 드셨나요?</span><br/>
                <span className="monlongans">3. 좋은 아침이네요.</span><br/><br/>
                <ButtonGroup aria-label="Basic example">
                <Button variant="outline-success" active={this.state.selected === 1 ? true : false} onClick={() => this.handleAnswerChange(1)}>1番</Button>
                <Button variant="outline-success" active={this.state.selected === 2 ? true : false} onClick={() => this.handleAnswerChange(2)}>2番</Button>
                <Button variant="outline-success" active={this.state.selected === 3 ? true : false} onClick={() => this.handleAnswerChange(3)}>3番</Button>
                </ButtonGroup>
                <br/><br/>
                <Button variant="outline-dark" onClick={() =>
                    this.state.selected === 0 ? alert("번호를 선택해 주세요!")
                    : this.props.history.push('/mon9')
                    }>다음 -></Button>
                </div>
                <Copyright/>
            </div>
        )
    }
}
