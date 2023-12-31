import * as React from "react";
import styled, { css } from "styled-components";
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import Loader from "../../components/LoaderComponent/LoaderComponent"
import ServerDown from "../../components/ServerDown/ServerDown"
import apiConfig from "../../api-services/apiConfig";

const MyComponent = (props) => {
  const router = useRouter()
  const { course_uuid } = router.query


  const [courseFetched, setCourseFetched] = useState(false)

  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState(false);


  const [userEmail, setUserEmail] = useState('');
  const [userEmailError, setUserEmailError] = useState(false);



  const [mobile, setMobile] = useState('');
  const [mobileError, setMobileError] = useState(false);

  const [couponCode, setCouponCode] = useState('');

  const [serverDown, setServerDown] = useState(false)


  const [payableAmount, setPayableAmount] = useState(0);
  const [courseName, setCourseName] = useState('');

  const getCourse = async () => {
    try {
      if (course_uuid) {
        console.log(`Fetching course with uuid ${course_uuid}`)
        const { data } = await apiConfig.get(`/api/muzoclass/courses?course_uuid=${course_uuid}`);
        // data will be an array of course
        // fetch first object and set its prince and name
        const course = data[0]
        setPayableAmount(parseInt(course.coursePrice, 10))
        setCourseName(course.programName)
        setCourseFetched(true)
        setServerDown(false)
      }

    } catch (error) {
      console.log(`Error While Fetching data from server ${error}`)
      setCourseFetched(true)
      setServerDown(true)
    }
  };


  useEffect(() => {
    getCourse()
  }, [course_uuid]);



  const onProceedClicked = async () => {
    if (username === '') {
      setUsernameError(true)
    }
    if (userEmail === '' || !isEmailValid(userEmail)) {
      setUserEmailError(true)
    }
    if (mobile === '' || !isPhoneNumberValid(mobile)) {
      setMobileError(true)
    }
    if (username !== '' && userEmail !== '' && mobile !== '') {
      // Proceed to checkout
      // make an api call, get razorpay link and redirect user window to that link
      try {
        console.log(`Enrolling to course with uuid ${course_uuid}`)
        setCourseFetched(false)
        // setCourse fetched it just a flag  to show loader
        const enroll_payload = {
          "name": username,
          "email": userEmail,
          "phone": mobile,
          "discountCoupon": couponCode,
          "course_uuid": course_uuid
        }
        const { data } = await apiConfig.post(`/api/muzoclass/courses/pay`,enroll_payload);
        const payment_link = data.paymentLink
        window.location.href = payment_link
      } catch (error) {
        console.log(`Error While Enrolling user to course => error ${error}`)
        setCourseFetched(true)
        setServerDown(true)
      }
    }
  }

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPhoneNumberValid = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  if (serverDown) {
    return (
      <ServerDown />
    )
  }

  if (!courseFetched) {
    return (
      <Loader />
    )
  }


  return (
    <Div>
      <Div2>
        <Img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/04b03be6d407dc3e73dfa704fb60c4619340f921bf04017adf0b3ebec6e18b4c?"
        />
        <Div3>
          <Div4> {courseName} </Div4>
          <Div5>
            <Div6>Order Summary</Div6>
            <Div7 />
            <Div8>
              <Div9>
                <Div10>Amount</Div10>
                {/* <Div11>Discount Applied</Div11> */}
                {/* <Div12>Net Payable</Div12> */}
              </Div9>
              <Div13>
                <Div14>&#8377; {payableAmount}</Div14>
                {/* <Div15>--$ discount</Div15> */}
                {/* <Div16>$ payable</Div16> */}
              </Div13>
            </Div8>
          </Div5>
          <Div17>
            <Div18>Your Details</Div18>
            <Div19 />
            <Div20>Name </Div20>
            <Div25 error={usernameError} >
              <Div26>
                <Div27>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    value={username}
                    onChange={(e) => {
                      if (usernameError) {
                        setUsernameError(false)
                      }
                      setUsername(e.target.value)
                    }}
                    style={{ width: '100%' }}
                  />
                </Div27>
                {usernameError && (
                  <Img2
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ccc26304400869a3509df6d480bda813e2e3cff19daf767d13e5b5c60863a0b?"
                  />
                )}
              </Div26>
            </Div25>
            {usernameError && (
              <Div28>Please enter a valid name</Div28>
            )}
            <Div22>E-mail Id </Div22>
            <Div25 error={userEmailError} >
              <Div26>
                <Div27>
                  <input
                    type="text"
                    placeholder="Enter Email"
                    value={userEmail}
                    onChange={(e) => {
                      if (userEmailError) {
                        setUserEmailError(false)
                      }
                      setUserEmail(e.target.value)
                    }}
                    style={{ width: '100%' }}
                  />
                </Div27>
                {userEmailError && (
                  <Img2
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ccc26304400869a3509df6d480bda813e2e3cff19daf767d13e5b5c60863a0b?"
                  />
                )}
              </Div26>
            </Div25>
            {userEmailError && (
              <Div28>Please enter a valid email</Div28>
            )}
            <Div24>Mobile Number</Div24>
            <Div25 error={mobileError} >
              <Div26>
                <Div27>
                  <input
                    type="text"
                    placeholder="Enter Mobile Number"
                    value={mobile}
                    onChange={(e) => {
                      if (mobileError) {
                        setMobileError(false)
                      }
                      setMobile(e.target.value)
                    }}
                    style={{ width: '100%' }}
                  />
                </Div27>
                {mobileError && (
                  <Img2
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ccc26304400869a3509df6d480bda813e2e3cff19daf767d13e5b5c60863a0b?"
                  />
                )}
              </Div26>
            </Div25>
            {mobileError && (
              <Div28>Please enter a valid phone no.</Div28>
            )}
            <Div29>Coupon Code</Div29>
            <Div30>
              <input
                type="text"
                placeholder="Enter Coupon Code"
                value={couponCode}
                onChange={(e) => {
                  setCouponCode(e.target.value)
                }}
                style={{ width: '100%' }}
              />
            </Div30>
            <Div31 onClick={onProceedClicked} >
              <Div32>Proceed to checkout </Div32>
            </Div31>
          </Div17>
        </Div3>
      </Div2>
    </Div>
  );
}


interface DivProps {
  error?: boolean;
}

const Div = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Div2 = styled.div`
  disply: flex;
  flex-direction: column;
  fill: rgba(243, 243, 243, 0.4);
  overflow: hidden;
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 50px 60px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const Img = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const Div3 = styled.div`
  position: relative;
  display: flex;
  width: 624px;
  max-width: 100%;
  flex-direction: column;
  align-items: center;
`;

const Div4 = styled.div`
  justify-content: center;
  color: #000;
  letter-spacing: -1.44px;
  text-align: center;
  font: 800 48px/106% Manrope, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
    margin-top: 42px;
  }
`;

const Div5 = styled.div`
  border-radius: 10px;
  box-shadow: 0px 4px 40px 0px rgba(74, 74, 74, 0.11);
  background-color: #fff;
  align-self: stretch;
  display: flex;
  margin-top: 77px;
  flex-direction: column;
  padding: 37px 37px 37px 30px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
    padding-bottom: 20px;
  }
`;

const Div6 = styled.div`
  color: #000;
  letter-spacing: -0.96px;
  font: 800 32px/160% Manrope, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div7 = styled.div`
  background-color: #000;
  margin-top: 11px;
  height: 2px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div8 = styled.div`
  display: flex;
  margin-top: 23px;
  align-items: start;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div9 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Div10 = styled.div`
  color: #666;
  white-space: nowrap;
  font: 400 20px/120% Manrope, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div11 = styled.div`
  color: #666;
  margin-top: 26px;
  white-space: nowrap;
  font: 400 20px/120% Manrope, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div12 = styled.div`
  color: #666;
  margin-top: 23px;
  font: 400 20px/120% Manrope, sans-serif;
`;

const Div13 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Div14 = styled.div`
  color: #666;
  text-align: right;
  font: 700 20px/120% Manrope, sans-serif;
`;

const Div15 = styled.div`
  color: #d91c1c;
  text-align: right;
  margin-top: 23px;
  white-space: nowrap;
  font: 400 20px/120% Manrope, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div16 = styled.div`
  color: #000;
  text-align: right;
  margin-top: 25px;
  white-space: nowrap;
  font: 700 20px/120% Manrope, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div17 = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 4px 40px 0px rgba(74, 74, 74, 0.11);
  background-color: #fff;
  align-self: stretch;
  display: flex;
  margin-top: 28px;
  flex-direction: column;
  padding: 37px 30px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
    padding-bottom: 20px;
  }
`;

const Div18 = styled.div`
  color: #000;
  letter-spacing: -0.96px;
  align-self: stretch;
  font: 800 32px/160% Manrope, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div19 = styled.div`
  background-color: #000;
  align-self: stretch;
  margin-top: 18px;
  height: 2px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div20 = styled.div`
  align-self: stretch;
  color: #666;
  margin-top: 36px;
  font: 600 16px/112.5% Manrope, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div21 = styled.div<DivProps>`
  color: #666;
  white-space: nowrap;
  align-items: start;
  align-self: stretch;
  border: 1px solid #000;
  box-shadow: 3px 3px 0px 0px #000;
  background-color: var(--W-Background, #fff);
  margin-top: 8px;
  justify-content: center;
  padding: 16px 60px 16px 16px;
  font: 400 20px/120% Manrope, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    max-width: 100%;
    padding-right: 20px;
  }
  /* Add a conditional style based on the error flag */
  ${(props) =>
    props.error &&
    css`
        border: 2px solid #eb5757;
        box-shadow: 3px 3px 0px 0px #fd6262;
    `}
`;

const Div22 = styled.div`
  align-self: stretch;
  color: #666;
  margin-top: 36px;
  font: 600 16px/112.5% Manrope, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div23 = styled.div`
  color: #666;
  white-space: nowrap;
  align-items: start;
  align-self: stretch;
  border: 1px solid #000;
  box-shadow: 3px 3px 0px 0px #000;
  background-color: var(--W-Background, #fff);
  margin-top: 8px;
  justify-content: center;
  padding: 16px 60px 16px 16px;
  font: 400 20px/120% Manrope, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    max-width: 100%;
    padding-right: 20px;
  }
`;

const Div24 = styled.div`
  align-self: stretch;
  color: #666;
  margin-top: 36px;
  font: 600 16px/112.5% Manrope, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div25 = styled.div<DivProps>`
  align-self: stretch;
  border: 2px solid black;
  box-shadow: 3px 3px 0px 0px black;
  background-color: var(--W-Background, #fff);
  display: flex;
  margin-top: 8px;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  @media (max-width: 991px) {
    max-width: 100%;
  }

  /* Add a conditional style based on the error flag */
  ${(props) =>
    props.error &&
    css`
        border: 2px solid #eb5757;
        box-shadow: 3px 3px 0px 0px #fd6262;
    `}
`;

const Div26 = styled.div`
  justify-content: space-between;
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div27 = styled.div`
  color: #333;
  flex-grow: 1;
  flex-basis: auto;
  font: 400 20px/120% Noto Sans, sans-serif;
`;

const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  overflow: hidden;
  max-width: 100%;
`;

const Div28 = styled.div`
  align-self: stretch;
  color: var(--Red, #eb5757);
  margin-top: 8px;
  font: 400 12px/150% Noto Sans, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div29 = styled.div`
  align-self: stretch;
  color: #666;
  margin-top: 36px;
  font: 600 16px/112.5% Manrope, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div30 = styled.div`
  color: #666;
  white-space: nowrap;
  align-items: start;
  align-self: stretch;
  border: 1px solid #000;
  box-shadow: 3px 3px 0px 0px #000;
  background-color: var(--W-Background, #fff);
  margin-top: 8px;
  justify-content: center;
  padding: 16px 60px 16px 16px;
  font: 400 20px/120% Manrope, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    max-width: 100%;
    padding-right: 20px;
  }
`;

const Div31 = styled.div`
  border-radius: 74px;
  background-color: var(--MusoBalck, #000);
  align-self: center;
  display: flex;
  margin-top: 36px;
  width: 301px;
  max-width: 100%;
  flex-direction: column;
  padding: 0 1px 6px;
`;

const Div32 = styled.div`
  color: var(--White, #fff);
  letter-spacing: -0.48px;
  white-space: nowrap;
  justify-content: center;
  align-items: start;
  border-radius: 68px;
  border: 2px solid var(--MusoBalck, #000);
  background-color: var(--MusoPurple, #5f57ff);
  padding: 15px 60px 15px 29px;
  font: 700 16px Manrope, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export default MyComponent;



