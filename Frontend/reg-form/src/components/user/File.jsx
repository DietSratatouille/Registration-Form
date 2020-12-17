import React, {Component} from 'react'

class File extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }

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
    }

}