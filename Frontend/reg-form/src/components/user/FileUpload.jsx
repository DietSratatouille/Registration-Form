import '../../bootstrap.css'
import React, {Component} from 'react'
import UserDataServices from "../../services-HTTP/UserDataServices";


class FileUpload extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectFile: null
        }

        //bindings go here
        // this.onFileChange = this.onFileChange.bind(this)
        // this.downloadFileClicked = this.downloadFileClicked.bind(this)
    }

    onFileChange = event => {
        this.setState({selectFile: event.target.files[0]});

    }

    downloadFileClicked(){
        console.log(this.state.selectFile)
        let file ={
            selectFile: this.state.selectFile,
            fileName: 'testFile'
        }

        //service call (axios)
        // UserDataServices.downloadPDF(file)
        //     .then(
        //         response => {
        //             this.setState({file: response.data})
        //             console.log(this.state.file)
        //         }
        //     )
    }

    render() {
        return (
            <div>
                <label htmlFor="formFileSm" className="form-label">Browse files</label>
                <input
                    className="form-control form-control-sm"
                    id="formFileSm"
                    type="file"
                    name="selectFile"
                    id="selectFile"
                    onChange={this.onFileChange}
                />
                <button onClick={this.downloadFileClicked}>Download the file</button>
            </div>
        )
    }
}
export default FileUpload;

//notes

//1.) add onCLick button to connect & push user ID to File/FileUpload Component
//2.)execute file upload and potentially
// 2A.)push file to ListUsers component OR  2B.)add onclick button to execute use of pdfDownloader from axios-API
//3.)