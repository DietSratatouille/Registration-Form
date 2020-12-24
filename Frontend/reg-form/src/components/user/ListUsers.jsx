import React, {Component} from 'react'
import UserDataServices from "../../services-HTTP/UserDataServices";

class ListUsers extends Component{
    constructor(props){
        super(props)
        this.state = {
            users:[],
        }
        //bindings go here
        this.refreshUserList = this.refreshUserList.bind(this)
    }

    componentDidMount() {
        this.refreshUserList();

    }

    refreshUserList(){
        UserDataServices.listUsers()
            .then(
                response => {
                    this.setState({users:response.data})
                    console.log(this.state.users)


                }
            )

    }

    render() {
        return(
            <div className="container">
                <h2 style={{textAlign:"left"}}>Applicant Listing</h2>
                <br/>

                <div className="jumbotron" style={{color:"white"}}>
                    <table className="table table-bordered" style={{backgroundColor:"black"}}>
                        <thead>
                            <tr style={{textAlign: "left" , color: "white"}}>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Surname</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>ZIP</th>
                                <th>Gender</th>
                                <th>Hispanic/Latino</th>
                                <th>American Indian</th>
                                <th>Asian</th>
                                <th>Black</th>
                                <th>Pacific</th>
                                <th>White</th>
                                <th>Non-Ethnic</th>
                                <th>Veteran</th>
                                <th>Degree</th>
                                <th>University</th>
                                <th>Graduation Date</th>
                                <th>C++</th>
                                <th>C#</th>
                                <th>Java</th>
                                <th>JavaScript</th>
                                <th>PHP</th>
                                <th>Python</th>
                                <th>R</th>
                                <th>Ruby</th>
                                <th>Swift</th>
                                <th>Other</th>
                                <th>None</th>
                                <th>Relocate</th>
                                <th>Work Authorization</th>
                                <th>Sponsorship</th>
                                <th>Start Date</th>
                                <th>Ad</th>
                                <th>Referral</th>
                                <th>Resume File</th>
                            </tr>
                        </thead>

                        <tbody>
                        {

                            this.state.users.map(
                                user =>
                                    <tr style={{textAlign: "left"}} key={user.userID}>
                                        <td>{user.userID}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.telephoneNum}</td>
                                        <td>{user.zipcode}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.hls}</td>
                                        <td>{user.americanIndian.toString()}</td>
                                        <td>{user.asian.toString()}</td>
                                        <td>{user.black.toString()}</td>
                                        <td>{user.pacific.toString()}</td>
                                        <td>{user.white.toString()}</td>
                                        <td>{user.non_Ethnic.toString()}</td>
                                        <td>{user.veteran}</td>
                                        <td>{user.degree}</td>
                                        <td>{user.edu}</td>
                                        <td>{user.graduationDate}</td>
                                        <td>{user.cPlusPlus.toString()}</td>
                                        <td>{user.cSharp.toString()}</td>
                                        <td>{user.java.toString()}</td>
                                        <td>{user.javascript.toString()}</td>
                                        <td>{user.python.toString()}</td>
                                        <td>{user.php.toString()}</td>
                                        <td>{user.r.toString()}</td>
                                        <td>{user.ruby.toString()}</td>
                                        <td>{user.swift.toString()}</td>
                                        <td>{user.other.toString()}</td>
                                        <td>{user.none.toString()}</td>
                                        <td>{user.relocate}</td>
                                        <td>{user.workAuthorization}</td>
                                        <td>{user.sponsorship}</td>
                                        <td>{user.startDate}</td>
                                        <td>{user.ad}</td>
                                        <td>{user.referral}</td>
                                        <td>{user.file}</td>
                                        <td><button className="btn btn-link" style={{color:"yellow"}}>Update</button></td>
                                        <td><button className="btn btn-link" style={{color:"red"}}>Delete</button></td>
                                    </tr>
                            )
                        }
                        </tbody>

                    </table>
                </div>

            </div>
        )
    }
}

export default ListUsers
