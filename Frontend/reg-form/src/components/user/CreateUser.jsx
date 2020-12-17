import React,{Component} from 'react';
import UserDataServices from "../../services-HTTP/UserDataServices";
import  '../../bootstrap.css'


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {

            userID: '' ,
            firstName: '',
            lastName: '',
            email: '',
            telephoneNum: '',
            zipcode: '',
            gender: '',
            hls: '',
            americanIndian: false,
            asian: false,
            black: false,
            pacific: false,
            white: false,
            nonEthnic: false,
            veteran: '',
            degree: '',
            edu: '',
            graduationDate: '',
            cPlusPlus: false,
            cSharp: false,
            java: false,
            javascript: false,
            python: false,
            php: false,
            r: false,
            ruby: false,
            swift: false,
            other: false,
            none: false,
            relocate: '',
            workAuthorization: '',
            sponsorship: '',
            startDate: '',
            ad: '',
            referral: '',

            file: null


            // store booleans to list for check box use?
            //isEthnic: [],
            //knownLanguages: []
        }
        // handler bindings go below
        this.handleChange = this.handleChange.bind(this)
        this.createUser = this.createUser.bind(this)


    }

    //component mount


    // handle change
    handleChange(event){
        const {name, value, type, checked} = event.target
        if(type === "file"){
            this.setState({file: event.target.files[0]})
            console.log(this.state.file)
        }
        else
        {
            type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
        }
        console.log({[name]: value})
    }


    // On file upload (click the upload button)


    // toggles a boolean to be either true or false
    // toggleBoolean(event){
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    //
    // }

    // handle submit
    createUser()
        {
            let user = {
                //states below
                userID: this.state.userID,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                telephoneNum: this.state.telephoneNum,
                zipcode: this.state.zipcode,
                gender: this.state.gender,
                hls: this.state.hls,
                americanIndian: this.state.americanIndian,
                asian: this.state.asian,
                black: this.state.black,
                pacific: this.state.pacific,
                white: this.state.white,
                non_Ethnic: this.state.non_Ethnic,
                veteran: this.state.veteran,
                degree: this.state.degree,
                edu: this.state.edu,
                graduationDate: this.state.graduationDate,
                cPlusPlus: this.state.cPlusPlus,
                cSharp: this.state.cSharp,
                java: this.state.java,
                javascript: this.state.javascript,
                python: this.state.python,
                php: this.state.php,
                r: this.state.r,
                ruby: this.state.ruby,
                swift: this.state.swift,
                other: this.state.other,
                none: this.state.none,
                relocate: this.state.relocate,
                workAuthorization: this.state.workAuthorization,
                sponsorship: this.state.sponsorship,
                startDate: this.state.startDate,
                ad: this.state.ad,
                referral: this.state.referral,

            }
            // data service call goes here
            const formData = new FormData();

            // Update the formData object
            formData.append(
                "myFile",
                this.state.file,
                this.state.file.name
            );
            console.log(this.state.file.name)
            UserDataServices.downloadPDF(formData).then(r => console.log("Sent"))
            UserDataServices.createUser(user).then(r => console.log("Success") )



    }

    render() {
        return(
            <div>
                <h1 style={{textAlign:"center", alignContent:"40%"}}>Pyramid Academy Registration</h1>
                <br/>

                    <form onSubmit={this.createUser}>
                        {/*<div className="jumbotron table" style={{textAlign:"left"}}>*/}
                        <div className="form-group" style={{textAlign: ""}}>
                            {/*<label className="form-check-label">ID**/}
                            {/*    <br/>*/}
                            {/*    <input*/}
                            {/*        className="form-control "*/}
                            {/*        type="text"*/}
                            {/*        value={this.state.id} disabled*/}
                            {/*        name="id"*/}
                            {/*        placeholder="Enter your answer"*/}

                            {/*    />*/}
                            {/*</label>*/}
                            {/*<br />*/}
                            {/*<br/>*/}

                        <label className="form-check-label" style={{textAlign:"left"}}>1. First Name*
                            <br/>
                            <input
                                className="form-control "
                                type="text"
                                value={this.state.firstName}
                                name="firstName"
                                placeholder="Enter your answer"
                                onChange={this.handleChange}
                            />
                        </label>
                        <br />
                        <br/>

                        <label className="form-check-label">2. Last Name*
                            <br/>
                            <input
                                className="form-control "
                                type="text"
                                value={this.state.lastName}
                                name="lastName"
                                placeholder="Enter your answer"
                                onChange={this.handleChange}
                            />
                        </label>
                        <br/>
                        <br/>

                        <label className="form-check-label">3. Email Address*
                            <br/>
                            <input
                                className="form-control "
                                type="text"
                                value={this.state.email}
                                name="email"
                                placeholder="Enter your answer here"
                                onChange={this.handleChange}
                            />
                        </label>
                        <br />
                        <br/>

                        <label className="form-check-label">4. Telephone Number*
                            <br/>
                            <input
                                className="form-control "
                                type="text"
                                value={this.state.telephoneNum}
                                name="telephoneNum"
                                placeholder="Enter your answer here"
                                onChange={this.handleChange}
                            />
                        </label>
                        <br/>
                        <br/>

                        <label className="form-check-label">5. Zip Code*
                            <br/>
                            <input
                                className="form-control "
                                type="text"
                                value={this.state.zipcode}
                                name="zipcode"
                                placeholder="Enter your answer here"
                                onChange={this.handleChange}
                            />
                        </label>
                        <br />
                        <br/>

                        <label className="form-check-label" >6. What gender do you identify as? (if any)
                            <br/>
                            <input style={{textAlign:"center"}}
                                className="form-check-input "
                                style={{}}
                                type="radio"
                                name="gender"
                                value="woman"
                                checked={this.state.gender === "woman"}
                                onChange={this.handleChange}
                            /> Woman
                            <br/>
                            <input
                                className="form-check-input "
                                style={{}}
                                type="radio"
                                name="gender"
                                value="Man"
                                checked={this.state.gender === "Man"}
                                onChange={this.handleChange}
                            /> Man
                            <br/>
                            <input
                                className="form-check-input "
                                style={{}}
                                type="radio"
                                name="gender"
                                value="Non-binary"
                                checked={this.state.gender === "Non-binary"}
                                onChange={this.handleChange}
                            /> Non-Binary
                            <br/>
                            <input
                                className="form-check-input "
                                style={{}}
                                type="radio"
                                name="gender"
                                value="Prefer not to say"
                                checked={this.state.gender === "Prefer not to say"}
                                onChange={this.handleChange}
                            /> Prefer not to say
                        </label>
                        <br/>
                        <br/>

                        <label className="form-check-label">7. Are you of Hispanic, Latino, or Spanish origin?
                            <br/>
                            <input
                                className="form-check-input "
                                style={{}}
                                type="radio"
                                name="hls"
                                value="Yes"
                                checked={this.state.hls === "Yes"}
                                onChange={this.handleChange}
                            /> Yes
                            <br/>
                            <input
                                className="form-check-input "
                                style={{}}
                                type="radio"
                                name="hls"
                                value="No"
                                checked={this.state.hls === "No"}
                                onChange={this.handleChange}
                            /> No
                            <br/>
                            <input
                                className="form-check-input "
                                style={{}}
                                type="radio"
                                name="hls"
                                value="Prefer not to say"
                                checked={this.state.hls === "Prefer not to say"}
                                onChange={this.handleChange}
                            /> Prefer not to say
                        </label>
                        <br/>
                        <br/>

                        <label className="form-check-label">8. How would you describe yourself?
                            <br/>
                            <input
                                className="form-check-input"
                                style={{}}
                                type="checkbox"
                                name="americanIndian"
                                checked={this.state.americanIndian}
                                onChange={this.handleChange}
                            />American Indian
                            <br/>
                            <input
                                className="form-check-input"
                                style={{}}
                                type="checkbox"
                                name="asian"
                                checked={this.state.asian}
                                onChange={this.handleChange}
                            />Asian
                            <br/>
                            <input
                                className="form-check-input"
                                style={{}}
                                type="checkbox"
                                name="black"
                                checked={this.state.black}
                                onChange={this.handleChange}
                            />Black
                            <br/>
                            <input
                                className="form-check-input"
                                style={{}}
                                type="checkbox"
                                name="pacific"
                                checked={this.state.pacific}
                                onChange={this.handleChange}
                            />Native Hawaiian or other Pacific Islander
                            <br/>
                            <input
                                className="form-check-input"
                                style={{}}
                                type="checkbox"
                                name="white"
                                checked={this.state.white}
                                onChange={this.handleChange}
                            />White
                            <br/>
                            <input
                                className="form-check-input"
                                style={{}}
                                type="checkbox"
                                name="nonEthnic"
                                checked={this.state.nonEthnic}
                                onChange={this.handleChange}
                            />Prefer not to say
                        </label>
                        <br/>
                        <br/>

                        <label className="form-check-label">9. Are you a veteran?*
                            <br/>
                            <input
                                className="form-check-input "
                                style={{}}
                                type="radio"
                                name="veteran"
                                value="Yes"
                                checked={this.state.veteran === "Yes"}
                                onChange={this.handleChange}
                            />Yes
                            <br/>
                            <input
                                className="form-check-input "
                                style={{}}
                                type="radio"
                                name="veteran"
                                value="No"
                                checked={this.state.veteran === "No"}
                                onChange={this.handleChange}
                            />No
                        </label>
                        <br/>
                        <br/>

                        <label className="form-check-label">10. Highest completed degree of education*
                            <br/>
                            <input
                                className="form-check-input "
                                style={{}}
                                type="radio"
                                name="degree"
                                value="Associate's"
                                checked={this.state.degree === "Associates"}
                                onChange={this.handleChange}
                            />Associate's
                            <br/>
                            <input
                                className="form-check-input "
                                style={{}}
                                type="radio"
                                name="degree"
                                value="Bachelors"
                                checked={this.state.degree === "Bachelors"}
                                onChange={this.handleChange}
                            />Bachelor's
                            <br/>
                            <input
                                className="form-check-input "
                                style={{}}
                                type="radio"
                                name="degree"
                                value="Masters"
                                checked={this.state.degree === "Masters"}
                                onChange={this.handleChange}
                            />Master's
                            <br/>
                            <input
                                className="form-check-input "
                                style={{}}
                                type="radio"
                                name="degree"
                                value="Post-Graduate"
                                checked={this.state.degree === "Post-Graduate"}
                                onChange={this.handleChange}
                            />Post-Graduate
                        </label>
                        <br/>
                        <br/>

                        <label className="form-check-label">11. School/University name*
                            <br/>
                            <input
                                className="form-control "
                                type="text"
                                value={this.state.edu}
                                name="edu"
                                placeholder="Enter your answer here"
                                onChange={this.handleChange}

                            />
                        </label>

                        <br/>
                        <br/>

                        <label className="form-check-label">12. Graduation Date/Expected Graduation Date*
                            <br/>
                            <input
                                className="form-control "
                                type="text"
                                value={this.state.graduationDate}
                                name="graduationDate"
                                placeholder="Enter date as m/d/yyyy"
                                onChange={this.handleChange}
                            />
                        </label>
                        <br/>
                        <br/>

                        <label className="form-check-label">13. What programming languages do you have experience with, if any?*
                            <br/>
                            <input
                                className="form-check-input"
                                style={{}}
                                type="checkbox"
                                name="cPlusPlus"
                                checked={this.state.cPlusPlus}
                                onChange={this.handleChange}
                            />C++
                            <br/>
                            <input
                                className="form-check-input"
                                style={{}}
                                type="checkbox"
                                name="cSharp"
                                checked={this.state.cSharp}
                                onChange={this.handleChange}
                            />C#
                            <br/>
                            <input
                                className="form-check-input"
                                style={{}}
                                type="checkbox"
                                name="java"
                                checked={this.state.java}
                                onChange={this.handleChange}
                            />Java
                            <br/>
                            <input
                                className="form-check-input"
                                style={{}}
                                type="checkbox"
                                name="javascript"
                                checked={this.state.javascript}
                                onChange={this.handleChange}
                            />JavaScript
                            <br/>
                            <input
                                className="form-check-input"
                                style={{}}
                                type="checkbox"
                                name="python"
                                checked={this.state.python}
                                onChange={this.handleChange}
                            />Python
                            <br/>
                            <input
                                className="form-check-input"
                                style={{}}
                                type="checkbox"
                                name="php"
                                checked={this.state.php}
                                onChange={this.handleChange}
                            />PHP
                            <br/>
                            <input
                                className="form-check-input"
                                style={{}}
                                type="checkbox"
                                name="r"
                                checked={this.state.r}
                                onChange={this.handleChange}
                            />R
                            <br/>
                            <input
                                className="form-check-input"

style={{}}                                type="checkbox"
                                name="ruby"
                                checked={this.state.ruby}
                                onChange={this.handleChange}
                            />Ruby
                            <br/>
                            <input
                                className="form-check-input"
                                style={{}}
                                type="checkbox"
                                name="swift"
                                checked={this.state.swift}
                                onChange={this.handleChange}
                            />Swift
                            <br/>
                            <input
                                className="form-check-input"
                                style={{}}
                                type="checkbox"
                                name="other"
                                checked={this.state.other}
                                onChange={this.handleChange}
                            />Other
                            <br/>
                            <input
                                className="form-check-input"
                                style={{}}
                                type="checkbox"
                                name="none"
                                checked={this.state.none}
                                onChange={this.handleChange}
                            />None
                            <br/>
                        </label>
                        <br/>
                        <br/>

                        <label className="form-check-label">14. Are you willing to relocate anywhere within the US for customer based engagements?*
                            <br/>
                            <input
                                className="form-check-input "
                                style={{}}
                                type="radio"
                                name="relocate"
                                value="Yes"
                                checked={this.state.relocate === "Yes"}
                                onChange={this.handleChange}
                            /> Yes
                            <br/>
                            <input
                                className="form-check-input "
                                style={{}}
                                type="radio"
                                name="relocate"
                                value="No"
                                checked={this.state.relocate === "No"}
                                onChange={this.handleChange}
                            /> No
                            <br/>
                            <input
                                className="form-check-input "
                                style={{}}
                                type="radio"
                                name="relocate"
                                value="Maybe"
                                checked={this.state.relocate === "Maybe"}
                                onChange={this.handleChange}
                            /> Maybe/unsure
                        </label>
                        <br/>
                        <br/>

                        <label className="form-check-label">15. Are you authorized to work lawfully in the United States for Pyramid Academy?*
                            <br/>
                            <input
                                className="form-check-input "
                                style={{}}
                                type="radio"
                                name="workAuthorization"
                                value="Yes"
                                checked={this.state.workAuthorization === "Yes"}
                                onChange={this.handleChange}
                            /> Yes
                            <br/>
                            <input
                                className="form-check-input "
                                style={{}}
                                type="radio"
                                name="workAuthorization"
                                value="No"
                                checked={this.state.workAuthorization === "No"}
                                onChange={this.handleChange}
                            /> No
                        </label>
                        <br/>
                        <br/>

                        <label className="form-check-label">16. Will you now or in the future require Pyramid Academy to commence (“sponsor”)
                            an immigration case in order to employ you (for example, H-1B or other employment-based immigration case)?
                            This is sometimes called “sponsorship” for an employment-based visa status.*
                            <br/>
                            <input
                                className="form-check-input "
                                style={{}}
                                type="radio"
                                name="sponsorship"
                                value="Yes"
                                checked={this.state.sponsorship === "Yes"}
                                onChange={this.handleChange}
                            />Yes
                            <br/>
                            <input
                                className="form-check-input "
                                style={{}}
                                type="radio"
                                name="sponsorship"
                                value="No"
                                checked={this.state.sponsorship === "No"}
                                onChange={this.handleChange}
                            />No
                        </label>
                        <br/>
                        <br/>

                        <label className="form-check-label">17. What is the earliest date you are available or interested in joining Pyramid Academy?*
                            <br/>
                            <input
                                className="form-control "
                                type="text"
                                value={this.state.startDate}
                                name="startDate"
                                placeholder="Enter date as m/d/yyyy"
                                onChange={this.handleChange}
                            />
                        </label>
                        <br/>
                        <br/>

                        <label className="form-check-label">18. How did you hear about us?*
                            <br/>
                            <input
                                className="form-check-input "
                                style={{}}
                                type="radio"
                                name="ad"
                                value="University hosted event"
                                checked={this.state.ad === "University hosted event"}
                                onChange={this.handleChange}
                            />University hosted event (virtual or in-person)
                            <br/>
                            <input
                                className="form-check-input "
                                style={{}}
                                type="radio"
                                name="ad"
                                value="Handshake"
                                checked={this.state.ad === "Handshake"}
                                onChange={this.handleChange}
                            />Handshake
                            <br/>
                            <input
                                className="form-check-input "
                                style={{}}
                                type="radio"
                                name="ad"
                                value="Pyramid hosted info session"
                                checked={this.state.ad === "Pyramid hosted info session"}
                                onChange={this.handleChange}
                            />Pyramid Academy hosted info session
                            <br/>
                            <input
                                className="form-check-input "
                                style={{}}
                                type="radio"
                                name="ad"
                                value="Referral"
                                checked={this.state.ad === "Referral"}
                                onChange={this.handleChange}
                            />Referral (personal referral)
                            <br/>
                            <input
                                className="form-check-input "
                                style={{}}
                                type="radio"
                                name="ad"
                                value="Search engine"
                                checked={this.state.ad === "Search engine"}
                                onChange={this.handleChange}
                            />Search Engine (Google, AskJeeves, DuckDuckGo etc.)
                            <br/>
                            <input
                                className="form-check-input "
                                style={{}}
                                type="radio"
                                name="ad"
                                value="Social media"
                                checked={this.state.ad === "Social media"}
                                onChange={this.handleChange}
                            />Social Media (Facebook, LinkedIn, Twitter, etc.))
                            <br/>
                            <input
                                className="form-check-input "
                                style={{}}
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
                        <br/>

                        <label>19. If someone referred you, what is their name?
                            <br/>
                            <input
                                className="form-control "
                                type="text"
                                value={this.state.referral}
                                name="referral"
                                placeholder="Enter your answer"
                                onChange={this.handleChange}
                            />
                        </label>
                        <br/>
                        <br/>

                        <label>20. Upload your updated resume.*
                            <br/>
                            <div className="custom-file">
                                <input
                                    type="file"
                                    name="file"
                                    value={this.state.file}
                                    className="custom-file-input"
                                    id="file" /*required*/
                                    onChange={this.handleChange}
                                />
                                    <label className="custom-file-label" htmlFor="file">Upload a file.. </label>
                                    <div className="invalid-feedback">Invalid file feedback</div>
                            </div>

                        </label>
                        <br/>
                        <br/>

                        <button className="btn btn-link text-input" style={{color:"blue"}} type="submit">Submit</button><br/><br/>
                        </div>
                        </form>

            </div>
        )
    }

}
export default User
