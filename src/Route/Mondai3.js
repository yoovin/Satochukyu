import React, { Component } from 'react'
import {Alert, ButtonGroup, Button, Image} from 'react-bootstrap'
import Copyright from '../Component/Copyright'
import chocos from '../img/chocos.png'

export default class Mondai3 extends Component {

    state = {
        selected:0
    }

    handleAnswerChange = async (num) => {
        await this.setState({selected:num})
        await window.sessionStorage.setItem('mon3', this.state.selected)
    }

    render() {
        return (
            <div className="out">
                <div className="in">
                <Alert variant="success">
                <Alert.Heading>問題3</Alert.Heading>
                <Image src={chocos} rounded />
                <hr />
                <p className="mb-0">上の写真の材料の名前は何ですか？</p>
                </Alert>
                <span className="monanswer">1. 간장</span><br/>
                <span className="monanswer">2. 초콜릿</span><br/>
                <span className="monanswer">3. 육회</span><br/><br/>
                <ButtonGroup aria-label="Basic example">
                <Button variant="outline-success" active={this.state.selected === 1 ? true : false} onClick={() => this.handleAnswerChange(1)}>1番</Button>
                <Button variant="outline-success" active={this.state.selected === 2 ? true : false} onClick={() => this.handleAnswerChange(2)}>2番</Button>
                <Button variant="outline-success" active={this.state.selected === 3 ? true : false} onClick={() => this.handleAnswerChange(3)}>3番</Button>
                </ButtonGroup>
                <br/><br/>
                <Button variant="outline-dark" onClick={() =>
                    this.state.selected === 0 ? alert("번호를 선택해 주세요!")
                    : this.props.history.push('/mon4')
                    }>다음 -></Button>
                </div>
                <Copyright/>
            </div>
        )
    }
}
