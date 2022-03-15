import React, { useState } from 'react'
import submitFormStyle from "./SubmitForm.module.css"

const initialstate = {
    name: '',
    email: '',
    phone: 123,
    interestedTopic: ''
}

export default function SubmitForm() {
    const [data, setData] = useState(initialstate)
    var inputStyles = {
        border: '1px solid #cbcbcb',
        color: '#525252',
    };
    var placeholderStyles = {
        ...inputStyles,
        color: '#999999',
    };

    const interestData = (maindata) => {
        return fetch('https://api2.metvy.com/api/learn/user-interest', {
            method: 'POST',
            // body: JSON.stringify(data),
            body: JSON.stringify(maindata),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(response);
            // if (response.status >= 200 && response.status < 300) {
            //     return response;
            //     console.log(response);
            //     // window.location.reload();
            // } else {
            //     console.log('Somthing happened wrong');
            // }
        }).catch(err => err);
    }

    const handleChange = (e) => {
        if (e.target.id === 'name') {
            console.log(e.target.value);
            setData({
                ...data, name: e.target.value,
            }
            );
        } else if (e.target.id === 'email') {
            console.log(e.target.value);
            setData({
                ...data, email: e.target.value,
            });
        } else if (e.target.id === 'phone') {
            console.log(e.target.value);
            setData({
                ...data, phone: e.target.value,
            });
        }
    }

    const handleSubmitData = () => {
        var maindata = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            interestedTopic: "Applied Science"
        }
        interestData(maindata);
    }
    return (
        <form style={{
            display: 'flex', flexDirection: 'column', background: '#FFFFFF',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05), 0px 18px 166px rgba(0, 0, 0, 0.05)',
            borderRadius: '36px', height: '100%',
            padding: '5%',
            marginTop: '630px'
        }} id="submitForm">
            <input id='name' onChange={handleChange} placeholder='Name' required type='text'
                style={{
                    backgroundColor: '#F8F8F8', borderRadius: '26px', padding: '10px', marginBottom: '15px', fontFamily: 'Poppins', fontStyle: 'italic', fontWeight: 'normal', fontSize: '16px', lineHeight: '150.5%', display: 'flex', alignItems: 'center', color: 'black', textAlign: 'start'
                }} />
            <input id='email' onChange={handleChange} placeholder='Email ID' required type='email' style={{
                backgroundColor: '#F8F8F8', borderRadius: '26px', padding: '10px', marginBottom: '15px', fontFamily: 'Poppins', fontStyle: 'italic', fontWeight: 'normal', fontSize: '16px', lineHeight: '150.5%', display: 'flex', alignItems: 'center', color: 'black', textAlign: 'start'
            }} />
            <input id='phone' onChange={handleChange} placeholder='Phone Number' required type='tel' style={{
                backgroundColor: '#F8F8F8', borderRadius: '26px', padding: '10px', marginBottom: '15px', fontFamily: 'Poppins', fontStyle: 'italic', fontWeight: 'normal', fontSize: '16px', lineHeight: '150.5%', display: 'flex', alignItems: 'center', color: 'black', textAlign: 'start'
            }} />
            <div style={{
                background: '#FFFFFF',
                boxShadow: ' 0px 17px 117px rgba(0, 0, 0, 0.05)',
                borderRadius: '26px',
                marginTop: '10%',
                padding: '2%'
            }}>
                <div style={{
                    background: '#FFFFFF',
                    boxShadow: '0px 17px 117px rgba(0, 0, 0, 0.05)',
                    borderRadius: '26px',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontSize: '16px',
                    color: '#000000',
                    fontWeight: 800,
                }}>What do you want to learn ?</div>
                <div style={{ padding: '5px', marginTop: '5%' }}>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{
                        marginRight: '15px', background: '#F8F8F8',
                        border: '1px solid rgba(0, 0, 0, 0.26)',
                        boxSizing: 'border-box',
                        borderRadius: '5px'
                    }} />
                    <label style={{
                        fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 'normal',
                        alignItems: 'center',
                        color: '#000000'
                    }}> {'Business & Entrepreneurship'}</label><br /><br />
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{
                        marginRight: '15px', background: '#F8F8F8',
                        border: '1px solid rgba(0, 0, 0, 0.26)',
                        boxSizing: 'border-box',
                        borderRadius: '5px'
                    }} />
                    <label style={{
                        fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 'normal',
                        alignItems: 'center',
                        color: '#000000'
                    }}> {'Academic & Market Research'}</label><br /><br />
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{
                        marginRight: '15px', background: '#F8F8F8',
                        border: '1px solid rgba(0, 0, 0, 0.26)',
                        boxSizing: 'border-box',
                        borderRadius: '5px'
                    }} />
                    <label style={{
                        fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 'normal',
                        alignItems: 'center',
                        color: '#000000'
                    }}> {'Graphic Design & UI/UX'}</label><br /><br />
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{
                        marginRight: '15px', background: '#F8F8F8',
                        border: '1px solid rgba(0, 0, 0, 0.26)',
                        boxSizing: 'border-box',
                        borderRadius: '5px'
                    }} />
                    <label style={{
                        fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 'normal',
                        alignItems: 'center',
                        color: '#000000'
                    }}> {'AI & Machine Learning'}</label><br /><br />
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{
                        marginRight: '15px', background: '#F8F8F8',
                        border: '1px solid rgba(0, 0, 0, 0.26)',
                        boxSizing: 'border-box',
                        borderRadius: '5px'
                    }} />
                    <label style={{
                        fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 'normal',
                        alignItems: 'center',
                        color: '#000000'
                    }}> {"Consultancies & Big 3's"}</label><br /><br />
                </div>
            </div>
            {/* <input type="submit" className={submitFormStyle.submitButton}>SUBMIT</input> */}
            <input type="submit" value="SUBMIT" className={submitFormStyle.submitButton} onClick={handleSubmitData}></input>
        </form >
    )
}
