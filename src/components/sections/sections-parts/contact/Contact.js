import React, {useState} from 'react';
import axios from "axios"
import { Fade } from 'react-awesome-reveal';

const Contact = () => {

    const [Name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [send, setSend] = useState(false);
    const [notif,setNotif]=useState(false);

    const [menu,setMenu]= useState(false)

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const message = {
          Name: Name,
          Email: email,
          message: msg,
        };
        console.log(message);
       // TODO: change the url to api.borntobein.com/...
        axios.post(`http://localhost:3002/SendMessage`, message).then((res) => {
          setSend(true);
          setTimeout(function () {
            setSend(false);
            setNotif(true)
          }, 3000);
          console.log('done')
        });
        
      };
    return (
        <section id="contact">
        <div className={menu? "contact-container active" : "contact-container"}>
          
          <div className= "contact-part1">
          <Fade>
            <h5 className="contact-bg">CONTACT</h5>
              <div className="contact-part1-container">
            <h5 className="contact-part1-title">Customer Service</h5>
            <h2 className="contact-part1-intro">Contact</h2>
            <p className="contact-part1-desc">
              For questions about our company and products found on our stores.
            </p>
            <div className="adress-container">
              <div className="adress-container-card">
                <h4 className="adress-container-title">Contact</h4>
                <p className="adress-container-info">
                  Email: <span className="email-info">contact@bbi-connexion.com</span>
                </p>
              </div>
              <div className="adress-container-card">
                <h4 className="adress-container-title">Address</h4>
                <p className="adress-container-info">
                  BBI CONNEXION LTD <br />
                  27 Hillier Street <br /> Central, Hong Kong
                </p>
              </div>
            </div>
            <a onClick={()=>setMenu(!menu)} className="send-btn" href="#!">
              Send Message
            </a>
          </div>
          </Fade>
          </div>
          <div className= "contact-part2">
            <div className="contact-part2-b1">
              <h5 className="contact-part1-title">Customer Service</h5>
              <h2 className="contact-part1-intro">Email Us</h2>
              <p className="contact-part1-desc margin-p">
                For questions about our company and products found on our
                stores.
              </p>
              <a onClick={()=>setMenu(!menu)}  className="send-btn" href="#!">
                Information
              </a>
            </div>
            <div className="contact-part2-b2">
              <form onSubmit={handleSubmit} className="contact-p2-box2-form">
                {send === true ? (
                  <h2>Thanks for text me we will reply as fast as possible</h2>
                ) : null}
                <label for="name">Name :</label>
                <input
                  className="email-inp"
                  name="name"
                  id="name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <label for="email">Email :</label>
                <input
                  className="email-inp"
                  type="email"
                  id="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label for="message">Message </label>
                <textarea
                  className="email-msg"
                  type="text"
                  id="message"
                  onChange={(e) => setMsg(e.target.value)}
                />
                <button type="submit" className="email-btn">
                  Send
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </section>
    )
}

export default Contact
