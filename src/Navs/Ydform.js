import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './../App.css';


function Ydform() {
  const navigate = useNavigate();

  // State variables for form fields
  const [fname, setFname] = React.useState(localStorage.getItem('fname') || '');
  const [lname, setLname] = React.useState(localStorage.getItem('lname') || '');
  const [cname, setCname] = React.useState(localStorage.getItem('cname') || '');
  const [emailAdd, setEmailAdd] = React.useState(localStorage.getItem('emailAdd') || '');
  const [phone, setPhone] = React.useState(localStorage.getItem('phone') || '');

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

  const [verr, setVerr] = React.useState('');

  const showError = () => {
    setVerr('Please fill the required fields');
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

    try {
      let response = await fetch("https://codetalkbackend.onrender.com/users/register/", {
        method: 'post',
        body: JSON.stringify({
          UserId:`${fname}${phone}`,
          FirstName: fname,
          LastName: lname,
          College: cname,
          Email: emailAdd,
          Phone: phone,
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

    navigate('/register/checkout');
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
                <input className='fiinput' id='fname'  value={fname} onChange={handleFNChange}></input>
            </div>
            <div className='fibox'>
                <label className='filabel' htmlFor='lname'>Last Name</label>
                <input className='fiinput' id='lname'value={lname} onChange={handleLNChange}></input>
            </div>
            <div className='fibox'>
                <label className='filabel' htmlFor='clname'>College Name<span className="fmandatory">*</span></label>
                <input className='fiinput' id='clname'value={cname} onChange={handleCNChange}></input>
            </div>
            <div className='fibox'>
                <label className='filabel' htmlFor='emailA'>Email Address<span className="fmandatory">*</span></label>
                <input className='fiinput' id='emailA' type='email'  value={emailAdd} onChange={handleEAChange}></input>
            </div>
            <div className='fibox'>
                <label className='filabel' htmlFor='phone'>Phone<span className="fmandatory">*</span></label>
                <input className='fiinput' id='phone' type='tel' value={phone} onChange={handlePChange}></input>
            </div>
        <span className="ferr filabel">{verr}</span>

              {/* Bottom Blue Submit Button */}
       <button className='BBSB' onClick={(!fname || !emailAdd  || !phone)?showError:collectData}>   
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