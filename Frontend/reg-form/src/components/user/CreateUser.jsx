import React,{Component} from 'react';
import UserDataServices from "../../services-HTTP/UserDataServices";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //id: '',
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
            isNoneEthnic: false,
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
        this.handleChange = this.handleChange.bind(this)
        this.createUser = this.createUser.bind(this)
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
            isNoneEthnic: this.state.isNoneEthnic,
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
            <form onSubmit={this.createUser}>
                <label>First Name*
                    <input
                        type="text"
                        value={this.state.firstName}
                        name="firstName"
                        placeholder="Enter your answer"
                        onChange={this.handleChange}
                    />
                </label>
                <br />

                <label>Last Name*
                    <input
                        type="text"
                        value={this.state.lastName}
                        name="lastName"
                        placeholder="Enter your answer"
                        onChange={this.handleChange}
                    />
                </label>
                <br/>

                <label>Email Address*
                    <input
                        type="text"
                        value={this.state.email}
                        name="email"
                        placeholder="Enter your answer here"
                        onChange={this.handleChange}
                    />
                </label>
                <br />

                <label>Telephone Number*
                    <input
                        type="text"
                        value={this.state.phoneNumber}
                        name="phoneNumber"
                        placeholder="Enter your answer here"
                        onChange={this.handleChange}
                    />
                </label>
                <br/>

                <label>Zip Code*
                    <input
                        type="text"
                        value={this.state.zip}
                        name="zip"
                        placeholder="Enter your answer here"
                        onChange={this.handleChange}
                    />
                </label>
                <br />

                <label className="form-control">What gender do you identify as? (if any)
                    <br/>
                    <input
                        className="form-control"
                        type="radio"
                        name="gender"
                        value="woman"
                        checked={this.state.gender === "woman"}
                        onChange={this.handleChange}
                    /> Woman
                    <br/>
                    <input
                        type="radio"
                        name="gender"
                        value="Man"
                        checked={this.state.gender === "Man"}
                        onChange={this.handleChange}
                    /> Man
                    <br/>
                    <input
                        type="radio"
                        name="gender"
                        value="Non-binary"
                        checked={this.state.gender === "Non-binary"}
                        onChange={this.handleChange}
                    /> Non-Binary
                    <br/>
                    <input
                        type="radio"
                        name="gender"
                        value="Prefer not to say"
                        checked={this.state.gender === "Prefer not to say"}
                        onChange={this.handleChange}
                    /> Prefer not to say
                </label>
                <br/>

                <label>Are you of Hispanic, Latino, or Spanish origin?
                    <br/>
                    <input
                        type="radio"
                        name="hls"
                        value="Yes"
                        checked={this.state.hls === "Yes"}
                        onChange={this.handleChange}
                    /> Yes
                    <br/>
                    <input
                        type="radio"
                        name="hls"
                        value="No"
                        checked={this.state.hls === "No"}
                        onChange={this.handleChange}
                    /> No
                    <br/>
                    <input
                        type="radio"
                        name="hls"
                        value="Prefer not to say"
                        checked={this.state.hls === "Prefer not to say"}
                        onChange={this.handleChange}
                    /> Prefer not to say
                </label>
                <br/>

                <label>How would you describe yourself?
                    <br/>
                    <input
                        type="checkbox"
                        name="isAmericanIndian"
                        checked={this.state.isAmericanIndian}
                        onChange={this.handleChange}
                    />American Indian
                    <br/>
                    <input
                        type="checkbox"
                        name="isAsian"
                        checked={this.state.isAsian}
                        onChange={this.handleChange}
                    />Asian
                    <br/>
                    <input
                        type="checkbox"
                        name="isBlack"
                        checked={this.state.isBlack}
                        onChange={this.handleChange}
                    />Black
                    <br/>
                    <input
                        type="checkbox"
                        name="isPacific"
                        checked={this.state.isPacific}
                        onChange={this.handleChange}
                    />Native Hawaiian or other Pacific Islander
                    <br/>
                    <input
                        type="checkbox"
                        name="isWhite"
                        checked={this.state.isWhite}
                        onChange={this.handleChange}
                    />White
                    <br/>
                    <input
                        type="checkbox"
                        name="isNoneEthnic"
                        checked={this.state.isNoneEthnic}
                        onChange={this.handleChange}
                    />Prefer not to say
                </label>
                <br/>

                <label>Are you a veteran?*
                    <br/>
                    <input
                        type="radio"
                        name="veteran"
                        value="Yes"
                        checked={this.state.veteran === "Yes"}
                        onChange={this.handleChange}
                    />Yes
                    <br/>
                    <input
                        type="radio"
                        name="veteran"
                        value="No"
                        checked={this.state.veteran === "No"}
                        onChange={this.handleChange}
                    />No
                </label>
                <br/>

                <label>Highest completed degree of education*
                    <br/>
                    <input
                        type="radio"
                        name="degree"
                        value="Associate's"
                        checked={this.state.degree === "Associates"}
                        onChange={this.handleChange}
                    />Associate's
                    <br/>
                    <input
                        type="radio"
                        name="degree"
                        value="Bachelors"
                        checked={this.state.degree === "Bachelors"}
                        onChange={this.handleChange}
                    />Bachelor's
                    <br/>
                    <input
                        type="radio"
                        name="degree"
                        value="Masters"
                        checked={this.state.degree === "Masters"}
                        onChange={this.handleChange}
                    />Master's
                    <br/>
                    <input
                        type="radio"
                        name="degree"
                        value="Post-Graduate"
                        checked={this.state.degree === "Post-Graduate"}
                        onChange={this.handleChange}
                    />Post-Graduate
                </label>
                <br/>

                <label>School/University name*
                    <br/>
                    <input
                        type="text"
                        value={this.state.education}
                        name="education"
                        placeholder="Enter your answer here"
                        onChange={this.handleChange}
                    />
                </label>
                <br/>

                <label>Graduation Date/Expected Graduation Date*
                    <br/>
                    <input
                        type="text"
                        value={this.state.graduationDate}
                        name="graduationDate"
                        placeholder="Enter date as m/d/yyyy"
                        onChange={this.handleChange}
                    />
                </label>
                <br/>

                <label>What programming languages do you have experience with, if any?*
                    <br/>
                    <input
                        type="checkbox"
                        name="knowsCPlus"
                        checked={this.state.knowsCPlus}
                        onChange={this.handleChange}
                    />C++
                    <br/>
                    <input
                        type="checkbox"
                        name="knowsCSharp"
                        checked={this.state.knowsCSharp}
                        onChange={this.handleChange}
                    />C#
                    <br/>
                    <input
                        type="checkbox"
                        name="knowsJava"
                        checked={this.state.knowsJava}
                        onChange={this.handleChange}
                    />Java
                    <br/>
                    <input
                        type="checkbox"
                        name="knowsJavaScript"
                        checked={this.state.knowsJavaScript}
                        onChange={this.handleChange}
                    />JavaScript
                    <br/>
                    <input
                        type="checkbox"
                        name="knowsPython"
                        checked={this.state.knowsPython}
                        onChange={this.handleChange}
                    />Python
                    <br/>
                    <input
                        type="checkbox"
                        name="knowsPHP"
                        checked={this.state.knowsPHP}
                        onChange={this.handleChange}
                    />PHP
                    <br/>
                    <input
                        type="checkbox"
                        name="knowsR"
                        checked={this.state.knowsR}
                        onChange={this.handleChange}
                    />R
                    <br/>
                    <input
                        type="checkbox"
                        name="knowsRuby"
                        checked={this.state.knowsRuby}
                        onChange={this.handleChange}
                    />Ruby
                    <br/>
                    <input
                        type="checkbox"
                        name="knowsSwift"
                        checked={this.state.knowsSwift}
                        onChange={this.handleChange}
                    />Swift
                    <br/>
                    <input
                        type="checkbox"
                        name="knowsOther"
                        checked={this.state.knowsOther}
                        onChange={this.handleChange}
                    />Other
                    <br/>
                    <input
                        type="checkbox"
                        name="knowsNone"
                        checked={this.state.knowsNone}
                        onChange={this.handleChange}
                    />None
                    <br/>
                </label>
                <br/>

                <label>Are you willing to relocate anywhere within the US for customer based engagements?*
                    <br/>
                    <input
                        type="radio"
                        name="relocate"
                        value="Yes"
                        checked={this.state.relocate === "Yes"}
                        onChange={this.handleChange}
                    /> Yes
                    <br/>
                    <input
                        type="radio"
                        name="relocate"
                        value="No"
                        checked={this.state.relocate === "No"}
                        onChange={this.handleChange}
                    /> No
                    <br/>
                    <input
                        type="radio"
                        name="relocate"
                        value="Maybe"
                        checked={this.state.relocate === "Maybe"}
                        onChange={this.handleChange}
                    /> Maybe/unsure
                </label>

                <label>Are you authorized to work lawfully in the United States for Pyramid Academy?*
                    <br/>
                    <input
                        type="radio"
                        name="workAuthorization"
                        value="Yes"
                        checked={this.state.workAuthorization === "Yes"}
                        onChange={this.handleChange}
                    /> Yes
                    <br/>
                    <input
                        type="radio"
                        name="workAuthorization"
                        value="No"
                        checked={this.state.workAuthorization === "No"}
                        onChange={this.handleChange}
                    /> No
                </label>
                <br/>

                <label>What is the earliest date you are available or interested in joining Pyramid Academy?*
                    <br/>
                    <input
                        type="text"
                        value={this.state.startDate}
                        name="startDate"
                        placeholder="Enter date as m/d/yyyy"
                        onChange={this.handleChange}
                    />
                </label>
                <br/>

                <label>How did you hear about us?*
                    <br/>
                    <input
                        type="radio"
                        name="ad"
                        value="University hosted event"
                        checked={this.state.ad === "University hosted event"}
                        onChange={this.handleChange}
                    />University hosted event (virtual or in-person)
                    <br/>
                    <input
                        type="radio"
                        name="ad"
                        value="Handshake"
                        checked={this.state.ad === "Handshake"}
                        onChange={this.handleChange}
                    />Handshake
                    <br/>
                    <input
                        type="radio"
                        name="ad"
                        value="Pyramid hosted info session"
                        checked={this.state.ad === "Pyramid hosted info session"}
                        onChange={this.handleChange}
                    />Pyramid Academy hosted info session
                    <br/>
                    <input
                        type="radio"
                        name="ad"
                        value="Referral"
                        checked={this.state.ad === "Referral"}
                        onChange={this.handleChange}
                    />Referral (personal referral)
                    <br/>
                    <input
                        type="radio"
                        name="ad"
                        value="Search engine"
                        checked={this.state.ad === "Search engine"}
                        onChange={this.handleChange}
                    />Search Engine (Google, AskJeeves, DuckDuckGo etc.)
                    <br/>
                    <input
                        type="radio"
                        name="ad"
                        value="Social media"
                        checked={this.state.ad === "Social media"}
                        onChange={this.handleChange}
                    />Social Media (Facebook, LinkedIn, Twitter, etc.))
                    <br/>
                    <input
                        type="radio"
                        value="Other"
                        checked={this.state.ad === "Other"}
                        //value={this.state.ad}
                        name="ad"
                        //placeholder="Other"
                        onChange={this.handleChange}
                    />Other
                </label>
                <br/>

                <label> If someone referred you, what is their name?
                    <input
                        type="text"
                        value={this.state.referral}
                        name="referral"
                        placeholder="Enter your answer"
                        onChange={this.handleChange}
                    />
                </label>
                <br/>

                <button className="btn btn-link text-input" style={{color:"black"}} type="submit">Submit</button><br/><br/>
            </form>
        )
    }

}
export default User