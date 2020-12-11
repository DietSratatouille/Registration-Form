import React from 'react';
import {Component} from 'react';
import UserDataServices from "../../services-HTTP/UserDataServices";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            zip: '',
            gender: '',
            hls: '',
            isAmericanIndian: false,
            isAsian: false,
            isBlack: false,
            isPacific: false,
            isWhite: false,
            veteran: '',
            degree: '',
            education: '',
            graduationDate: '',
            knowsCPlus: false,
            knowsCSharp: false,
            knowsJava: false,
            knowsJavaScript: false,
            knowsPython: false,
            knowsPHP: false,
            knowsR: false,
            knowsRuby: false,
            knowsSwift: false,
            knowsOther: false,
            knowsNone: false,
            relocate: '',
            workAuthorization: '',
            sponsorship: '',
            startDate: '',
            ad: '',
            referral: ''


            // store booleans to list for check box use?
            //isEthnic: [],
            //knownLanguages: []
        }
        // handler bindings go below

    }

    //component mount
    componentDidMount() {
        this.createUser()
    }

    // handle change
    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }


    // toggles a boolean to be either true or false
    // toggleBoolean(event){
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    //
    // }

    // handle submit
    createUser(){
        let user = {
            //states below
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            zip: this.state.zip,
            gender: this.state.gender,
            hls: this.state.hls,
            isAmericanIndian: this.state.isAmericanIndian,
            isAsian: this.state.isAsian,
            isBlack: this.state.isBlack,
            isPacific: this.state.isPacific,
            isWhite: this.state.isWhite,
            veteran: this.state.veteran,
            degree: this.state.degree,
            education: this.state.education,
            graduationDate: this.state.graduationDate,
            knowsCPlus: this.state.knowsCPlus,
            knowsCSharp: this.state.knowsCSharp,
            knowsJava: this.state.knowsJava,
            knowsJavaScript: this.state.knowsJavaScript,
            knowsPython: this.state.knowsPython,
            knowsPHP: this.state.knowsPHP,
            knowsR: this.state.knowsR,
            knowsRuby: this.state.knowsRuby,
            knowsSwift: this.state.knowsSwift,
            knowsOther: this.state.knowsOther,
            knowsNone: this.state.knowsNone,
            relocate: this.state.relocate,
            workAuthorization: this.state.workAuthorization,
            sponsorship: this.state.sponsorship,
            startDate: this.state.startDate,
            ad: this.state.ad,
            referral: this.state.referral
        }
        // data service call goes here
        UserDataServices.createUser(user)
            .then(window.location.reload)

    }

    render() {
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor:"gray"}}>
                    <h2 style={{textAlign:"center"}}>Pyramid Academy Registration Form</h2>
                </div>
                <div className="container">
                    <form onSubmit={this.createUser}>
                        <div className="form-group">
                            <label> </label>
                                <input className="form-control" type="text" value={this.state.id} disabled/>
                        </div>

                        <div className="form-group">
                            <label>First Name*</label>
                                <input className="form-control" type="text" name="firstName" onChange={this.handleChange}/>
                        </div>

                        <div className="form-group">
                            <label>Last Name*</label>
                                <input className="form-control" type="text" name="lastName" onChange={this.handleChange}/>
                        </div>

                        <div className="form-group">
                            <label>Email*</label>
                                <input className="form-control" type="text" name="email" onChange={this.handleChange}/>
                        </div>

                        <div className="form-group">
                            <label>Phone Number*</label>
                                <input className="form-control" type="text" name="phoneNumber" onChange={this.handleChange}/>
                        </div>

                        <div className="form-group">
                            <label>ZIP Code*</label>
                                <input className="form-control" type="text" name="zip" onChange={this.handleChange}/>
                        </div>

                        <div className="form-check">
                            <h2>What gender do you identify with?*</h2>
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="gender" onChange={this.handleChange}/>Yes
                            </label>

                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="gender" onChange={this.handleChange}/>No
                            </label>

                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="gender" onChange={this.handleChange}/>Prefer not to say
                            </label>
                        </div>

                        <div className="form-check">
                            <h2>Are you of Hispanic or Latino origins*</h2>
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="hls" onChange={this.handleChange}/>Yes
                            </label>

                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="hls" onChange={this.handleChange}/>No
                            </label>

                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="hls" onChange={this.handleChange}/>Prefer not to say
                            </label>
                        </div>







                        <div className="form-check">
                            <h2>Are you a veteran?*</h2>
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="veteran" onChange={this.handleChange}/>Yes
                            </label>

                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="veteran" onChange={this.handleChange}/>No
                            </label>
                        </div>

                        <div className="form-check">
                            <h2>Highest Degree of Education Completed*</h2>
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="degree" onChange={this.handleChange}/>Associates
                            </label>

                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="degree" onChange={this.handleChange}/>Bachelors
                            </label>

                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="degree" onChange={this.handleChange}/>Masters
                            </label>

                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="degree" onChange={this.handleChange}/>Post-Graduate
                            </label>
                        </div>

                        <div className="form-group">
                            <label>School/University Name*</label>
                            <input className="form-control" type="text" name="education" placeholder="Enter your answer" onChange={this.handleChange}/>
                        </div>

                        <div className="form-group">
                            <label>Graduation Date</label>
                            <input className="form-control" type="text" name="graduationDate" placeholder="Please enter the date formatted as mm/dd/yyyy" onChange={this.handleChange}/>
                        </div>








                        <div className="form-check">
                            <h2>Are you willing to relocate anywhere within the US for customer based engagements?*</h2>
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="relocate" onChange={this.handleChange}/>Yes
                            </label>

                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="relocate" onChange={this.handleChange}/>No
                            </label>

                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="relocate" onChange={this.handleChange}/>Hmm.. Maybe
                            </label>
                        </div>

                        <div className="form-check">
                            <h2>Are you authorized to legally/lawfully work*</h2>
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="workAuthorization" onChange={this.handleChange}/>Yes
                            </label>

                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="workAuthorization" onChange={this.handleChange}/>No
                            </label>
                        </div>

                        <div className="form-check">
                            <h2>Will you now or in the future require Pyramid Academy to commence (“sponsor”) an immigration
                                case in order to employ you (for example, H-1B or other employment-based immigration case)?
                                This is sometimes called “sponsorship” for an employment-based visa status.*
                            </h2>
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="sponsorship" onChange={this.handleChange}/>Yes
                            </label>

                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="sponsorship" onChange={this.handleChange}/>No
                            </label>
                        </div>

                        <div className="form-group">
                            <label>What is the earliest date you'd be willing to join Pyramid Academy?*</label>
                            <input className="form-control" type="text" name="startDate" placeholder="Please enter the date formatted as mm/dd/yyyy" onChange={this.handleChange}/>
                        </div>

                        <div className="form-check">
                            <h2>How did you hear about us?*</h2>
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="ad" onChange={this.handleChange}/>University hosted event
                            </label>

                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="ad" onChange={this.handleChange}/>Handshake
                            </label>

                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="ad" onChange={this.handleChange}/>Pyramid Academy hosted information session
                            </label>

                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="ad" onChange={this.handleChange}/>Personal ad
                            </label>

                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="ad" onChange={this.handleChange}/> Search Engine (Google,Bing,Yahoo, etc.)
                            </label>

                            <label className="form-check-label"> Social media (Facebook, LinkedIn, Twitter, etc.)
                            </label>

                            <label>Other
                            <input className="form-control" type="text" name="ad" onChange={this.handleChange}/>
                            </label>
                        </div>

                        <div>
                            <label>If someone referred you, what's their name?</label>
                                <input className="form-control" type="text" name="referral" placeholder="Enter your answer" onChange={this.handleChange}/>
                        </div>

                    </form>
                </div>

            </div>
        )
    }

}
