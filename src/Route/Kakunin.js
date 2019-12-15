import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import Copyright from '../Component/Copyright'
import axios from 'axios'

export default class Kakunin extends Component {

    state = {
        name:window.sessionStorage.getItem('name')
    }

    handleAnswerSubmit = async () => {
        const kakunin = window.confirm("본인의 답이 확실한가요?") 
        var seikai = 0
        // const {getItem, clear} = window.sessionStorage
        if(kakunin){
            if(window.sessionStorage.getItem('mon1') === '1'){
                seikai++
            }
            if(window.sessionStorage.getItem('mon2') === '1'){
                seikai++
            }
            if(window.sessionStorage.getItem('mon3') === '2'){
                seikai++
            }
            if(window.sessionStorage.getItem('mon4') === '3'){
                seikai++
            }
            if(window.sessionStorage.getItem('mon5') === '2'){
                seikai++
            }
            if(window.sessionStorage.getItem('mon6') === '2'){
                seikai++
            }
            if(window.sessionStorage.getItem('mon7') === '1'){
                seikai++
            }
            if(window.sessionStorage.getItem('mon8') === '3'){
                seikai++
            }
            if(window.sessionStorage.getItem('mon9') === '2'){
                seikai++
            }
            if(window.sessionStorage.getItem('mon10') === '3'){
                seikai++
            }
            await axios({
                method:'post',
                url:'/post/submitanswer',
                data:{
                    name:this.state.name,
                    seikai:seikai
                }
            })
            .then(res => {
                if(res.data.result === 1)
                alert("확인되었습니다.")
            })
            await window.sessionStorage.clear()
            await this.props.history.push('/')
        }else{
            console.log("취소")
        }
    }

    render() {
        return (
            <div className="out">
                <div className="in">
                    <span className="title">이름 : </span>
                    <span className="name">{window.sessionStorage.getItem('name')}</span><br/>
                    <span className="title">問題１ : </span>
                    <span className="answer">{window.sessionStorage.getItem('mon1')}</span><br/>
                    <span className="title">問題２ : </span>
                    <span className="answer">{window.sessionStorage.getItem('mon2')}</span><br/>
                    <span className="title">問題3 : </span>
                    <span className="answer">{window.sessionStorage.getItem('mon3')}</span><br/>
                    <span className="title">問題4 : </span>
                    <span className="answer">{window.sessionStorage.getItem('mon4')}</span><br/>
                    <span className="title">問題5 : </span>
                    <span className="answer">{window.sessionStorage.getItem('mon5')}</span><br/>
                    <span className="title">問題6 : </span>
                    <span className="answer">{window.sessionStorage.getItem('mon6')}</span><br/>
                    <span className="title">問題7 : </span>
                    <span className="answer">{window.sessionStorage.getItem('mon7')}</span><br/>
                    <span className="title">問題8 : </span>
                    <span className="answer">{window.sessionStorage.getItem('mon8')}</span><br/>
                    <span className="title">問題9 : </span>
                    <span className="answer">{window.sessionStorage.getItem('mon9')}</span><br/>
                    <span className="title">問題10 : </span>
                    <span className="answer">{window.sessionStorage.getItem('mon10')}</span><br/><br/>
                    {this.state.name 
                    ? <Button variant="outline-dark" onClick={this.handleAnswerSubmit}>提出</Button>
                    :''}
                </div>
                <Copyright/>
            </div>
        )
    }
}
