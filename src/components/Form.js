import React from 'react'
import "./Form.css"


function Form(props) {
    return (

        <div className="container my-5">
            <div>{props.error?error():null}</div>
            <form onSubmit={props.loadWeather}
            >
                <div className="row flex__custom">
                    <div className="col-md-3 offset-md-3 my-3 input__class">
                        <input type="text" className="form-control"
                            name="city" autoComplete="off" />
                    </div>
                    <div className="col-md-3 my-3">

                        <input type="text" className="form-control" name="country" autoComplete="off" />
                    </div>

                    <div className="col-md-3 mt-md-0 text-md-left input__class">
                        <button className="btn btn-success">Get weather</button>
                    </div>
                </div>
            </form>
        </div>


)
}


function error() {
    return(
        <div className="alert alert-danger mx-5 "role="alert">
            Please Enter valid City and Country 
        </div>
    )
}

export default Form

