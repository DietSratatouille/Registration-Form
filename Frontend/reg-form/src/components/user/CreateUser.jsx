import React,{Component, useState} from 'react';
import UserDataServices from "../../services-HTTP/UserDataServices";
import  '../../bootstrap.css'
import '../../CreateUser.css'
import Select from "react-dropdown-select";

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
            major:'',
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
            schools:[],
            majors:[]


        }


        // handler bindings go below
        this.handleChange = this.handleChange.bind(this)
        this.createUser = this.createUser.bind(this)
        this.handleChangeSchools = this.handleChangeSchools.bind(this)
        this.handleChangeMajors = this.handleChangeMajors.bind(this)

    }

    //component mount

componentDidMount() {
    UserDataServices.listOfSchools().then(response => {

        for (const [index, value] of response.data.entries()) {
        this.state.schools.push({ value:value,label:value})

        }


    })
    UserDataServices.listOfMajors().then(response => {

    for (const [index, value] of response.data.entries()) {
    this.state.majors.push({value:value,label:value})

    }


})

}

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
    handleChangeSchools=option=>{
        option.valueOf().map(result=>{
            this.setState({edu: result.value},function (){console.log(this.state.edu)})
        })

    }
    handleChangeMajors=option=>{
        option.valueOf().map(result=>{
            this.setState({major: result.value},function (){console.log(this.state.edu)})

        })

    }





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
                major:this.state.major,
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
                referral: this.state.referral

            }
            // data service call goes here
            UserDataServices.createUser(user).then(r => console.log("Success"))
                .then(
                    response => {
                        this.setState({user: response.data})
                        console.log(this.state.user)
                    }
                )


    }

    render() {

        //console.log(this.state.schoolOptions)
        return(
            <div>
                <h1 style={{textAlign:"center", alignContent:"40%"}}>Pyramid Academy Registration</h1>
                <br/>

                    <form onSubmit={this.createUser}>
                        {/*<div className="jumbotron table" style={{textAlign:"left"}}>*/}
                        <div className="container">
                        <div className="form-group" style={{backgroundColor:"#202429", color:'white', textAlign:'left', paddingLeft:'25px', padding:'30px'}}>
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

                        <label className="form-check-label">1. First Name*
                            <br/>
                            <input
                                className="form-control "
                                type="text"
                                value={this.state.firstName}
                                name="firstName"
                                placeholder="Enter your answer"
                                onChange={this.handleChange}
                                required={true}
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
                                required={true}
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
                                required={true}
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
                                required={true}
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
                                required={true}
                            />
                        </label>
                        <br />
                        <br/>

                        <label className="form-check-label">6. What gender do you identify as? (if any)
                            <br/>
                            <input
                                // className="
                                className="Radio-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="radio"
                                name="gender"
                                value="Woman"
                                checked={this.state.gender === "Woman"}
                                onChange={this.handleChange}
                            /> Woman
                            <br/>
                            <input
                                //className="
                                className="Radio-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="radio"
                                name="gender"
                                value="Man"
                                checked={this.state.gender === "Man"}
                                onChange={this.handleChange}
                            /> Man
                            <br/>
                            <input
                                className="Radio-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="radio"
                                name="gender"
                                value="Non-binary"
                                checked={this.state.gender === "Non-binary"}
                                onChange={this.handleChange}
                            /> Non-Binary
                            <br/>
                            <input
                                className="Radio-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
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
                                className="Radio-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="radio"
                                name="hls"
                                value="Yes"
                                checked={this.state.hls === "Yes"}
                                onChange={this.handleChange}
                            /> Yes
                            <br/>
                            <input
                                className="Radio-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="radio"
                                name="hls"
                                value="No"
                                checked={this.state.hls === "No"}
                                onChange={this.handleChange}
                            /> No
                            <br/>
                            <input
                                className="Radio-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
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
                                className="Check-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="checkbox"
                                name="americanIndian"
                                checked={this.state.americanIndian}
                                onChange={this.handleChange}
                            />American Indian
                            <br/>
                            <input
                                className="Check-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="checkbox"
                                name="asian"
                                checked={this.state.asian}
                                onChange={this.handleChange}
                            />Asian
                            <br/>
                            <input
                                className="Check-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="checkbox"
                                name="black"
                                checked={this.state.black}
                                onChange={this.handleChange}
                            />Black
                            <br/>
                            <input
                                className="Check-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="checkbox"
                                name="pacific"
                                checked={this.state.pacific}
                                onChange={this.handleChange}
                            />Native Hawaiian or other Pacific Islander
                            <br/>
                            <input
                                className="Check-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="checkbox"
                                name="white"
                                checked={this.state.white}
                                onChange={this.handleChange}
                            />White
                            <br/>
                            <input
                                className="Check-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
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
                                className="Radio-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="radio"
                                name="veteran"
                                value="Yes"
                                checked={this.state.veteran === "Yes"}
                                onChange={this.handleChange}
                                required={true}
                            />Yes
                            <br/>
                            <input
                                className="Radio-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="radio"
                                name="veteran"
                                value="No"
                                checked={this.state.veteran === "No"}
                                onChange={this.handleChange}
                                required={true}
                            />No
                        </label>
                        <br/>
                        <br/>

                        <label className="form-check-label">10. Highest completed degree of education*
                            <br/>
                            <input
                                className="Radio-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="radio"
                                name="degree"
                                value="Associates"
                                checked={this.state.degree === "Associates"}
                                onChange={this.handleChange}
                                required={true}
                            />Associate's
                            <br/>
                            <input
                                className="Radio-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="radio"
                                name="degree"
                                value="Bachelors"
                                checked={this.state.degree === "Bachelors"}
                                onChange={this.handleChange}
                                required={true}
                            />Bachelor's
                            <br/>
                            <input
                                className="Radio-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="radio"
                                name="degree"
                                value="Masters"
                                checked={this.state.degree === "Masters"}
                                onChange={this.handleChange}
                                required={true}
                            />Master's
                            <br/>
                            <input
                                className="Radio-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="radio"
                                name="degree"
                                value="Post-Graduate"
                                checked={this.state.degree === "Post-Graduate"}
                                onChange={this.handleChange}
                                required={true}
                            />Post-Graduate
                        </label>
                        <br/>
                        <br/>


                        <label className="form-check-label">11. Major*
                            <br/>

                            <Select
                                options={this.state.majors}
                                name="major"
                                value={this.state.major}
                                searchable={true}
                                dropdownHandle={true}
                                input={{color:"white"}}
                                style={{color:"black",backgroundColor:"white"}}
                                closeOnSelect={true}
                                onChange={this.handleChangeMajors}
                                emptyMessage="Major Not Found"
                                placeholder="Select your Major"
                                required={true}
                            />

                        </label>

                        <br/>
                        <br/>

                        <label className="form-check-label">12. School/University name*
                            <br/>

                            <Select
                                options={this.state.schools}
                                name="edu"
                                type="text"
                                value={this.state.edu}
                                searchable={true}
                                dropdownHandle={true}
                                input={{color:"white"}}
                                style={{color:"black",backgroundColor:"white"}}
                                closeOnSelect="true"
                                onChange={this.handleChangeSchools}
                                emptyMessage="School Not Found"
                                placeholder="Select your School"
                                required={true}
                            />


                        </label>

                            <br/>
                            <br/>

                        <label className="form-check-label">13. Graduation Date/Expected Graduation Date*
                            <br/>
                            <input
                                className="form-control datepicker"
                                type="date"

                                value={this.state.graduationDate.toString()}
                                name="graduationDate"
                                //placeholder="m/d/yyyy"
                                onChange={this.handleChange}
                                required={true}
                            />
                        </label>
                        <br/>
                        <br/>

                        <label className="form-check-label">14. What programming languages do you have experience with, if any?*
                            <br/>
                            <input
                                className="Check-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="checkbox"
                                name="cPlusPlus"
                                checked={this.state.cPlusPlus}
                                onChange={this.handleChange}
                            />C++
                            <br/>
                            <input
                                className="Check-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="checkbox"
                                name="cSharp"
                                checked={this.state.cSharp}
                                onChange={this.handleChange}
                            />C#
                            <br/>
                            <input
                                className="Check-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="checkbox"
                                name="java"
                                checked={this.state.java}
                                onChange={this.handleChange}
                            />Java
                            <br/>
                            <input
                                className="Check-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="checkbox"
                                name="javascript"
                                checked={this.state.javascript}
                                onChange={this.handleChange}
                            />JavaScript
                            <br/>
                            <input
                                className="Check-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="checkbox"
                                name="python"
                                checked={this.state.python}
                                onChange={this.handleChange}
                            />Python
                            <br/>
                            <input
                                className="Check-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="checkbox"
                                name="php"
                                checked={this.state.php}
                                onChange={this.handleChange}
                            />PHP
                            <br/>
                            <input
                                className="Check-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="checkbox"
                                name="r"
                                checked={this.state.r}
                                onChange={this.handleChange}
                            />R
                            <br/>
                            <input
                                className="Check-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="checkbox"
                                name="ruby"
                                checked={this.state.ruby}
                                onChange={this.handleChange}
                            />Ruby
                            <br/>
                            <input
                                className="Check-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="checkbox"
                                name="swift"
                                checked={this.state.swift}
                                onChange={this.handleChange}
                            />Swift
                            <br/>
                            <input
                                className="Check-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="checkbox"
                                name="other"
                                checked={this.state.other}
                                onChange={this.handleChange}
                            />Other
                            <br/>
                            <input
                                className="Check-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="checkbox"
                                name="none"
                                checked={this.state.none}
                                onChange={this.handleChange}
                            />None
                            <br/>
                        </label>
                        <br/>
                        <br/>

                        <label className="form-check-label">15. Are you willing to relocate anywhere within the US for customer based engagements?*
                            <br/>
                            <input
                                className="Radio-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="radio"
                                name="relocate"
                                value="Yes"
                                checked={this.state.relocate === "Yes"}
                                onChange={this.handleChange}
                                required={true}
                            /> Yes
                            <br/>
                            <input
                                className="Radio-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="radio"
                                name="relocate"
                                value="No"
                                checked={this.state.relocate === "No"}
                                onChange={this.handleChange}
                                required={true}
                            /> No
                            <br/>
                            <input
                                className="Radio-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="radio"
                                name="relocate"
                                value="Maybe"
                                checked={this.state.relocate === "Maybe"}
                                onChange={this.handleChange}
                                required={true}
                            /> Maybe/unsure
                        </label>
                        <br/>
                        <br/>

                        <label className="form-check-label">16. Are you authorized to work lawfully in the United States for Pyramid Academy?*
                            <br/>
                            <input
                                className="Radio-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="radio"
                                name="workAuthorization"
                                value="Yes"
                                checked={this.state.workAuthorization === "Yes"}
                                onChange={this.handleChange}
                                required={true}
                            /> Yes
                            <br/>
                            <input
                                className="Radio-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="radio"
                                name="workAuthorization"
                                value="No"
                                checked={this.state.workAuthorization === "No"}
                                onChange={this.handleChange}
                                required={true}
                            /> No
                        </label>
                        <br/>
                        <br/>

                        <label className="form-check-label">17. Will you now or in the future require Pyramid Academy to commence (“sponsor”)
                            an immigration case in order to employ you (for example, H-1B or other employment-based immigration case)?
                            This is sometimes called “sponsorship” for an employment-based visa status.*
                            <br/>
                            <input
                                className="Radio-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="radio"
                                name="sponsorship"
                                value="Yes"
                                checked={this.state.sponsorship === "Yes"}
                                onChange={this.handleChange}
                                required={true}
                            />Yes
                            <br/>
                            <input
                                className="Radio-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="radio"
                                name="sponsorship"
                                value="No"
                                checked={this.state.sponsorship === "No"}
                                onChange={this.handleChange}
                                required={true}
                            />No
                        </label>
                        <br/>
                        <br/>

                        <label className="form-check-label">18. What is the earliest date you are available or interested in joining Pyramid Academy?*
                            <br/>
                            <input
                                className="form-control "
                                type="date"
                                value={this.state.startDate.toString()}
                                name="startDate"
                                //placeholder="m/d/yyyy"
                                onChange={this.handleChange}
                                required={true}
                            />
                        </label>
                        <br/>
                        <br/>

                        <label className="form-check-label">19. How did you hear about us?*
                            <br/>
                            <input
                                className="Radio-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="radio"
                                name="ad"
                                value="University hosted event"
                                checked={this.state.ad === "University hosted event"}
                                onChange={this.handleChange}
                                required={true}
                            />University hosted event (virtual or in-person)
                            <br/>
                            <input
                                className="Radio-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="radio"
                                name="ad"
                                value="Handshake"
                                checked={this.state.ad === "Handshake"}
                                onChange={this.handleChange}
                                required={true}
                            />Handshake
                            <br/>
                            <input
                                className="Radio-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="radio"
                                name="ad"
                                value="Pyramid hosted info session"
                                checked={this.state.ad === "Pyramid hosted info session"}
                                onChange={this.handleChange}
                                required={true}
                            />Pyramid Academy hosted info session
                            <br/>
                            <input
                                className="Radio-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="radio"
                                name="ad"
                                value="Referral"
                                checked={this.state.ad === "Referral"}
                                onChange={this.handleChange}
                                required={true}
                            />Referral (personal referral)
                            <br/>
                            <input
                                className="Radio-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="radio"
                                name="ad"
                                value="Search engine"
                                checked={this.state.ad === "Search engine"}
                                onChange={this.handleChange}
                                required={true}
                            />Search Engine (Google, AskJeeves, DuckDuckGo etc.)
                            <br/>
                            <input
                                className="Radio-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="radio"
                                name="ad"
                                value="Social media"
                                checked={this.state.ad === "Social media"}
                                onChange={this.handleChange}
                                required={true}
                            />Social Media (Facebook, LinkedIn, Twitter, etc.))
                            <br/>
                            <input
                                className="Radio-Input"
                                style={{verticalAlign:"baseline", padding:"10px", margin:"10px" }}
                                type="radio"
                                value="Other"
                                checked={this.state.ad === "Other"}
                                //value={this.state.ad}
                                name="ad"
                                //placeholder="Other"
                                onChange={this.handleChange}
                                required={true}
                            />Other
                        </label>
                        <br/>
                        <br/>

                        <label>20. If someone referred you, what is their name?
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

                        <label>21. [WIP] Upload your updated resume.*
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

                        <button className="btn btn-link" style={{}} type="submit">Submit</button>
                            <br/>
                            <br/>
                        </div>
                        </div>
                        </form>

            </div>
        )
    }

}
export default User
