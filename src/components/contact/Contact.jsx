import React from "react"
import Back from "../common/back/Back"
import "./contact.css"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  const map_2 = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.210914675529!2d80.1598458!3d12.922708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f3cbe60b935%3A0xc7657d22095ad2d5!2sGarden%20Enclave!5e0!3m2!1sen!2sin!4v1687098210132!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  // const map = 'https://www.google.com/maps/place/Garden+Enclave/@12.9228617,80.1603983,15z/data=!4m6!3m5!1s0x3a525f3cbe60b935:0xc7657d22095ad2d5!8m2!3d12.9228617!4d80.1603983!16s%2Fg%2F11ffly2rq7?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    console.log(event.target.value)
    event.preventDefault();
    setResult("Pending");
    const formData = new FormData(event.target);
    // console.log(formData)

    formData.append("access_key", "829bc151-8cb9-4061-8379-1c3df70e71be");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Success");
      event.target.reset();
    } else {
      setResult("Error");
      console.log("Error", data);
      
    }
  };

  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map_2}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>No 5, F1- Garden enclave, Bajanai kovil 2nd Street, Sembakkam, Chennai
                </p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> admin@alphaprohire.com
                </p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +91 73059 25157 </p>
              </div>
            </div>

            <form onSubmit={onSubmit}>
              <div className='flexSB'>
                <input type='text' placeholder='Name' name="name" required/>
                <input type='email' placeholder='Email' name="email" required/>
              </div>
              <textarea cols='30' rows='10' name="message" placeholder="Message">
              </textarea>
          
             <button className='primary-btn contact-submit' type="submit">SEND MESSAGE <span >{result && result=== "Success" ? <CheckCircleOutlineIcon color="success"/> :  result === "Error" ? <CancelIcon color="error" ></CancelIcon> : ""  }</span> </button>
             
              
            </form>
           

          
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
