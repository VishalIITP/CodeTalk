import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../App.css';
import './../components/css/Ydform.css'

const API_PATH = process.env.REACT_APP_API_PATH;



function Ydform() {
  const navigate = useNavigate();

  // State variables for form fields
  const [fname, setFname] = useState(localStorage.getItem('fname') || '');
  const [lname, setLname] = useState(localStorage.getItem('lname') || '');
  const [cname, setCname] = useState(localStorage.getItem('cname') || '');
  const [emailAdd, setEmailAdd] = useState(localStorage.getItem('emailAdd') || '');
  const [phone, setPhone] = useState(localStorage.getItem('phone') || '');
  const [refrrcode, setRefrrcode] = useState('');
  const [rcvalidated, setRcvalidated] = useState(true);
  const [studdata, setStuddata] = useState({});

  const handleFNChange = (e) => {
    setFname(e.target.value);
  };
  const handleLNChange = (e) => {
    setLname(e.target.value);
  };
  const handleCNChange = (e) => {
    setCname(e.target.value);
  };
  const handleEAChange = (e) => {
    setEmailAdd(e.target.value);
  };
  const handlePChange = (e) => {
    setPhone(e.target.value);
  };
  const handleRCChange = async (e) => {
    setVerr('');
    const enteredReffCode = e.target.value;
    enteredReffCode.length === 0 ? setRcvalidated(true) : setRcvalidated(false);
    setRefrrcode(enteredReffCode);
    console.log(enteredReffCode);
    if (enteredReffCode.length === 7) {
      try {
        let response = await fetch(`${API_PATH}/${enteredReffCode}`)
        if (response.ok) {
          console.log("Response was Ok");
          console.log("Validated Referral Code: ", enteredReffCode)
          setRcvalidated(true);
          const data = await response.json();
          setStuddata(data);
        } else {
          console.log("Response was not Ok");
          setRcvalidated(false);
        }
      } catch (error) {
        console.log(error);
      }
    } else if (enteredReffCode.length >= 0 && enteredReffCode.length !== 7) {
      setRcvalidated(false);
    }
  };

  let userId = phone.slice(6, 7) + fname.slice(-2) + phone.slice(8, 9) + cname.slice(-1);   //7th of phone+ last 2 of fname+ 9th of phone+ last of college
  let uRC = "CT" + phone.slice(6, 7) + fname.slice(-2) + phone.slice(8, 9) + cname.slice(-1);   //7th of phone+ last 2 of fname+ 9th of phone+ last of college

  const [verr, setVerr] = useState('');

  const showError = () => {
    setVerr('Please fill the *required fields');
  };

  async function collectData(e) {
    setVerr('');
    e.preventDefault();

    // Save the form data to localStorage before making the API call
    localStorage.setItem('fname', fname);
    localStorage.setItem('lname', lname);
    localStorage.setItem('cname', cname);
    localStorage.setItem('emailAdd', emailAdd);
    localStorage.setItem('phone', phone);

    navigate(`/register/checkout/${userId}`);

    try {
      let response = await fetch(`${API_PATH}/register/`, {
        method: 'POST',
        body: JSON.stringify({
          UserId: userId,
          UserRefrralCode: uRC,
          FirstName: fname,
          LastName: lname,
          College: cname,
          Email: emailAdd,
          Phone: phone,
          RefrrelCodeApplied: rcvalidated && refrrcode.length > 0 ? refrrcode : '',
          ReferredBy: studdata ? studdata.ReferredBy : '',
          Time: Date().toLocaleString(),
          VPA: 'payment not done',
          PTime: 'payment not done',
        }),
        headers: {
          'content-type': 'Application/json',
        },
      });

      if (!response.ok) {
        console.log('Response was not ok');
      }
    } catch (error) {
      console.log('Not able to fetch', error);
    }
  }

  // useEffect to load form data from localStorage when the component mounts
  useEffect(() => {
    setFname(localStorage.getItem('fname') || '');
    setLname(localStorage.getItem('lname') || '');
    setCname(localStorage.getItem('cname') || '');
    setEmailAdd(localStorage.getItem('emailAdd') || '');
    setPhone(localStorage.getItem('phone') || '');
  }, []);
  return (
    <div>
      <div className='formInputs'>

        <div className='fit49'></div>
        <div className='fibox'>
          <label className='filabel' htmlFor='fname'>First Name<span className="fmandatory">*</span></label>
          <input className='fiinput' id='fname' value={fname} onChange={handleFNChange}></input>
        </div>
        <div className='fibox'>
          <label className='filabel' htmlFor='lname'>Last Name</label>
          <input className='fiinput' id='lname' value={lname} onChange={handleLNChange}></input>
        </div>
        <div className='fibox'>
          <label className='filabel' htmlFor='clname'>College Name<span className="fmandatory">*</span></label>
          <input className='fiinput' id='clname' value={cname} onChange={handleCNChange}></input>
        </div>
        <div className='fibox'>
          <label className='filabel' htmlFor='emailA'>Email Address<span className="fmandatory">*</span></label>
          <input className='fiinput' id='emailA' type='email' value={emailAdd} onChange={handleEAChange}></input>
        </div>
        <div className='fibox'>
          <label className='filabel' htmlFor='phone'>Phone<span className="fmandatory">*</span></label>
          <input className='fiinput' id='phone' type='tel' value={phone} onChange={handlePChange}></input>
        </div>
        <div className='fibox'>
          <label className='filabel' htmlFor='refrrcode'>Apply Referral Code</label>
          <input className='fiinput' id='refrrcode' type='text' value={refrrcode} onChange={handleRCChange}></input>
          <span className="ferr">{verr}</span>
          <span className="succRC" style={{ display: rcvalidated && refrrcode.length > 0 ? "inline" : "none" }}>Congratulations! You are eligible for flat 5% off</span>
          <span className="failRC" style={{ display: !rcvalidated && refrrcode.length > 0 ? "inline" : "none" }}>Invalid Referral Code</span>
        </div>

        {/* Bottom Blue Submit Button */}
        <button className='BBSB' onClick={(!fname || !emailAdd || !phone) ? showError : collectData}>
          <div className='bbsbtext'>
            <div className='bbsbta'></div>
            <div className='bbsbtt'>For this Special Offer Click Here</div>
          </div>
          <div className='bbsbbt'>Yes! I want this offer!</div>
        </button>
      </div>




    </div>
  )
}

export default Ydform