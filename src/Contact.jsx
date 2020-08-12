import React, { useState } from "react";

const Contact = () => {
    const [finalData, GetData] = useState({
        fname: "",
        lname:"",
    });
    const changeEvent = (event) => {
        const {name,value}= event.target;
        GetData((prev) => {
           return{
            ...prev,
            [name]:value
           }
        })
    }

    const trigger = (event) => {
        event.preventDefault()
        alert(
            `My First Name is ${finalData.fname} and My last name is ${finalData.lname}`
        )
    }

    return(
        <>
            <div className="container text-center mt-5">
                <div className="row">
                    <div className="col-4 m-auto">
                    <form>
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" name="fname" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={changeEvent} value={finalData.fname} />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" name="lname" className="form-control" id="exampleInputPassword1" onChange={changeEvent} value={finalData.lname} />
                        </div>
                        <button type="submit" onClick={trigger} className="btn btn-primary">Submit</button>
                    </form>
                    </div>
                </div>
           </div>
        </>
    )
}

export default Contact