import React from 'react';
import {post} from 'axios';

class CustomerAdd extends React.Component {
    constructor(props){
        super(props);
        this.state={
            file: null,
            userName: '',
            birthday:'',
            gender:'',
            job:'',
            fileName:''
        }
    }

    handleFormSubmit=(e)=>{
        e.preventDefault()
        this.addCustomer()
            .then((response)=>{
                console.log(response.data);
                this.props.stateRefresh();
            })
            this.setState({
                file:null,
                userName:'',
                birthday:'',
                gender:'',
                job:'',
                fileName:''
            })
            
            // window.location.reload();   //새로고침해서 데이터를 받아오는 식
    }

    handleFileChange=(e)=>{
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }

    handleValueChange=(e)=>{
        let nextState={};
        nextState[e.target.name]=e.target.value;
        this.setState(nextState);
    }


    addCustomer=()=>{
        const url='/api/customers';
        const formData=new FormData();
        formData.append('image', this.state.file);
        formData.append('name', this.state.userName);
        formData.append('birthday', this.state.birthday);
        formData.append('gender', this.state.gender);
        formData.append('job', this.state.job);
        const config={   //file 포함된 데이터를 서버로 보낼 때는 웹표준에 맞는 header를 추가해줘야 한다
            headers: {
                'content-type': 'multipart/form-data'  //지금 보내려는 파일이 multipart의 form-data라고 써야함
            }                                //multipart/form-data  ->file이 포함된 데이터를 서버로 보낼 때 써야하는 문구
        }
        return post(url, formData, config);     //실제로 서버에 보낼 수 있도록 axios의 post를 이용
    }

    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
                <h1>고객 추가</h1>
                프로필 이미지: <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}/><br />
                이름: <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange}/><br />
                생년월일: <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange}/><br />
                성별: <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange}/><br />
                직업: <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange}/><br />
                <button type="submit">추가하기</button>
            </form>
        )
    }
}

export default CustomerAdd;