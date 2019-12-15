import React, { Component } from 'react'
import {Alert, ButtonGroup, Button, Image} from 'react-bootstrap'
import Copyright from '../Component/Copyright'
import satou from '../img/satou.png'

export default class Mondai1 extends Component {

    state = {
        selected:0
    }

    handleAnswerChange = async (num) => {
        await this.setState({selected:num})
        await window.sessionStorage.setItem('mon1', this.state.selected)
    }

    render() {
        return (
            <div className="out">
                <div className="in">
                <Alert variant="success">
                <Alert.Heading>問題1</Alert.Heading>
                <Image src={satou} rounded />
                <hr />
                <p className="mb-0">上の写真の材料の名前は何ですか？</p>
                </Alert>
                <span className="monanswer">1. 설탕</span><br/>
                <span className="monanswer">2. 소금</span><br/>
                <span className="monanswer">3. 깨</span><br/><br/>
                <ButtonGroup aria-label="Basic example">
                <Button variant="outline-success" active={this.state.selected === 1 ? true : false} onClick={() => this.handleAnswerChange(1)}>1番</Button>
                <Button variant="outline-success" active={this.state.selected === 2 ? true : false} onClick={() => this.handleAnswerChange(2)}>2番</Button>
                <Button variant="outline-success" active={this.state.selected === 3 ? true : false} onClick={() => this.handleAnswerChange(3)}>3番</Button>
                </ButtonGroup>
                <br/><br/>
                <Button variant="outline-dark" onClick={() =>
                    this.state.selected === 0 ? alert("번호를 선택해 주세요!")
                    : this.props.history.push('/mon2')
                    }>다음 -></Button>
                </div>
                <Copyright/>
            </div>
        )
    }
}
