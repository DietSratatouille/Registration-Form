import React, {Component} from 'react'
import  '../../bootstrap.css'
import UserDataServices from "../../services-HTTP/UserDataServices"
import axios from "axios";
import User from "./CreateUser";

class File extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }

        //bindings go here
        // this.onFileChange = this.onFileChange.bind(this)
        // this.onFileUpload = this.onFileUpload.bind(this)

    }

    onFileChange = event => {
        this.setState({selectedFile: event.target.files[0]});
    }

    onFileUpload = () => {
        const formData = new FormData();
        formData.append(
            "tmpFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );
        console.log(this.state.selectedFile);

        //axios POST for upload ?
        //UserDataServices.downloadPDF(`http://localhost:8080/fileDownload`,formData)
        axios.post(`http://localhost:8080/fileDownload`, formData).then()


    }

    fileData = () => {
        if (this.state.selectedFile) {

            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {this.state.selectedFile.name}</p>
                    <p>File Type: {this.state.selectedFile.type}</p>
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    }

    render() {
        return(
            <div>
                <h1>
                    File Uploader
                </h1>
                <h3>
                    File Upload Test!
                </h3>
                <div>
                    <input type="file" onChange={this.onFileChange} />
                    <button onClick={this.onFileUpload}>
                        Upload!
                    </button>
                </div>
                {this.fileData()}
            </div>
        )
    }

}
export default File;
