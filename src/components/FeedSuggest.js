import React from "react";
import './css/FeedSuggest.css'

const API_PATH=process.env.REACT_APP_API_PATH

const FeedSuggest = () => {

    const [fname, setFname] = React.useState(localStorage.getItem("fname") || '');
    const [cname, setCname] = React.useState(localStorage.getItem("cname") || '');
    const [feed, setFeed] = React.useState();

    const [feedsub, setFeedsub] = React.useState(false);

    const handleNAMEChange = (e) => {
        setFname(e.target.value);
    }
    const handleCOLLEGEChange = (e) => {
        setCname(e.target.value);
    }
    const handleFEEDChange = (e) => {
        setFeed(e.target.value);
    }

    if (feedsub) {
        setTimeout(() => {
            setFeedsub(false);
        }, 2000);
    }


    const submitFeedback = async (e) => {
        e.preventDefault();
        localStorage.setItem('fname', fname);
        localStorage.setItem('cname', cname);
        setFname('');
        setCname('');
        setFeed('');
        setFeedsub(true);

        try {
            const feedresponse = await fetch(`${API_PATH}/feedback`,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        Name: fname,
                        College: cname,
                        Feedback: feed
                    }),
                    headers: {
                        'content-type': 'Application/json'
                    }
                }
            )
            if (!feedresponse.ok) {
                console.log("feedresponse was not Ok")
            }

        } catch (error) {
            console.log("Error in publishing feedback: ", error)
        }


    }


    return (
        <>
            <div className="feedBox">
                <div className="enrollNowH">
                    <div className="byah">Suggestions / <span>Feedback</span></div>
                    <div className="byat">Your feedback guides us toward continuous improvement.</div>
                </div>

                <div className='feedInputs'>

                    <div className='fit49'></div>
                    <div className='feedinputbox'>
                        <label className='feedinplabel' htmlFor='fname'>Name</label>
                        <input className='feedinp' id='fname' value={fname} onChange={handleNAMEChange}></input>
                    </div>
                    <div className='feedinputbox'>
                        <label className='feedinplabel' htmlFor='lname'>College Name</label>
                        <input className='feedinp' id='lname' value={cname} onChange={handleCOLLEGEChange}></input>
                    </div>
                    <div className='feedinputbox'>
                        <label className='feedinplabel' htmlFor='clname'>Suggestions or Feedback</label>
                        <textarea className='feedtextarea' type="textarea" id='clname' value={feed} onChange={handleFEEDChange}></textarea>
                    </div>
                    <div className='feedinputbox'><button className='feedsubbutton' onClick={submitFeedback}>Submit</button></div>
                    <div className='feedinputbox'><div className="thanksff" style={{ display: feedsub ? "block" : "none" }}>Thank You for sharing you insights!</div></div>

                </div>

            </div>

        </>
    )
}


export default FeedSuggest;