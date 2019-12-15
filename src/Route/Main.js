import React, { Component } from 'react'
import {Alert, InputGroup, FormControl, Button} from 'react-bootstrap'
import Copyright from '../Component/Copyright'

export default class Main extends Component {

    state = {
        name:""
    }

    handleNameChange = (e) => {
        this.setState({name:e.target.value})
    }

    render() {
        return (
            <div className="out">
                <div className="in">
                    <Alert variant="success">
                    <Alert.Heading>사토의 시장 여행기</Alert.Heading>
                    <p>
                        우리 어린이여러분 수업 재미있었나요?
                        사토쨩이 심부름을 잘 해 봤는지 확인해볼거에요~
                        오늘 배운 내용들을 한번 더 가볍게 읽으면서, 앞의 사진에 맞는 한국어 단어를 골라 주세요!
                    </p>
                    <hr />
                    <p className="mb-0">
                        많이 맞춘 어린이여러분들에게는 인섭요정이 맛있는 간식을 나눠줄거에요~
                    </p>
                    </Alert>
                    <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    placeholder="이름을 입력해 주세요"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    />
                </InputGroup>
                <Button variant="outline-success" onClick={
                    this.state.name ? () => {
                        window.sessionStorage.setItem('name', this.state.name)
                        this.props.history.push("/mon1") 
                    }
                    : () => alert("이름을 입력해 주세요!")}>Start!</Button>
                </div>
                <Copyright/>
            </div>
        )
    }
}
