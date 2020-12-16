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



                }
            )
        console.log(this.state.users)
    }

    render() {
        return(
            <div className="container">
                <h2 style={{textAlign:"left"}}>Applicant Listing</h2>
                <br/>

                <div className="jumbotron" style={{color:"white"}}>
                    <table className="table table-bordered" style={{backgroundColor:"gray"}}>
                        <thead>
                            <tr style={{textAlign: "left" , color: "black"}}>
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
                            </tr>
                        </thead>

                        <tbody>
                        {

                            this.state.users.map(
                                users =>
                                    <tr style={{textAlign: "left"}} key={users.userID}>
                                        <td>{users.userID}</td>
                                        <td>{users.firstName}</td>
                                        <td>{users.lastName}</td>
                                        <td>{users.email}</td>
                                        <td>{users.telephoneNum}</td>
                                        <td>{users.zipcode}</td>
                                        <td>{users.gender}</td>
                                        <td>{users.hls}</td>
                                        <td>{users.americanIndian.toString()}</td>
                                        <td>{users.asian.toString()}</td>
                                        <td>{users.black.toString()}</td>
                                        <td>{users.pacific.toString()}</td>
                                        <td>{users.white.toString()}</td>
                                        <td>{users.nonEthnic}</td>
                                        <td>{users.veteran}</td>
                                        <td>{users.degree}</td>
                                        <td>{users.edu}</td>
                                        <td>{users.graduationDate}</td>
                                        <td>{users.cPlusPlus.toString()}</td>
                                        <td>{users.cSharp.toString()}</td>
                                        <td>{users.java.toString()}</td>
                                        <td>{users.javascript.toString()}</td>
                                        <td>{users.python.toString()}</td>
                                        <td>{users.php.toString()}</td>
                                        <td>{users.r.toString()}</td>
                                        <td>{users.ruby.toString()}</td>
                                        <td>{users.swift.toString()}</td>
                                        <td>{users.other.toString()}</td>
                                        <td>{users.none.toString()}</td>
                                        <td>{users.relocate}</td>
                                        <td>{users.workAuthorization}</td>
                                        <td>{users.sponsorship}</td>
                                        <td>{users.startDate}</td>
                                        <td>{users.ad}</td>
                                        <td>{users.referral}</td>
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
