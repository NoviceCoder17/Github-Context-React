import React from "react";
import { useState } from "react";
import axios from "axios";
 function Contact(){
    const [formData, setFormdata]=useState({
        fname:"",
        lname:"",
        email:"",
        date:"",
        time:"",
        address:"",
        city:"",
        state:"",
        postalcode:""
    })

    function onChangeHandler(e){
        //change value of city
        setFormdata({...formData,
        [e.target.name]:e.target.value})
    }

    // function onSubmitHandler(e){
    //     console.log(e.formData)
    //     e.preventDefault()
    // }

    async function onSubmitHandler(e){
        try{
            e.preventDefault()
            const res= await axios.post("/contact", formData)
            console.log(res)
            alert("success")
        }
        catch(error){
            alert(error)
        }
    }
    return(
       
        <>
        <div className="container">
            <form>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="fname" placeholder="Your First name" value={formData.fname} onChange={onChangeHandler}/>

                <label htmlFor="lname">First Name</label>
                <input type="text" id="lname" name="lname" placeholder="Your Last name" value={formData.lname} onChange={onChangeHandler}/>

                <label htmlFor="email">email</label>
                <input type="email" id="email" name="email" placeholder="Your email" value={formData.email} onChange={onChangeHandler}/>

                <label htmlFor="date">Date</label>
                <input type="date" id="date" name="date" value={formData.date} onChange={onChangeHandler}/>

                <label htmlFor="time">time</label>
                <input type="time" id="time" name="time" value={formData.time} onChange={onChangeHandler}/>

                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" placeholder="Your address" value={formData.address} onChange={onChangeHandler}/>

                <label htmlFor="state">State</label>
                <input type="text" id="state" name="state" placeholder="Your state" value={formData.state} onChange={onChangeHandler}/>

                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" placeholder="Your city" value={formData.city} onChange={onChangeHandler}/>

                <label htmlFor="postalcode">Postal code</label>
                <input type="text" id="postalcode" name="postalcode" placeholder="Your postal code" value={formData.postalcode} onChange={onChangeHandler}/>

                <input type="submit" value="Submit" onClick={onSubmitHandler}/>

            </form>
        </div>
        </>
    )
}

export default Contact