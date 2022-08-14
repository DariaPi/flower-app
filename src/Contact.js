function Contacts () {
	return (
		<div className="container">
            <h1 className="heading">Contact us</h1>
            <div className="contactBox">
                <div className="timeTxt">
                    <h3>BUSINESS HOURS</h3>
                    <ul>
                        <li><b>Mon:</b> 8:30 AM - 5:00 PM</li>
                        <li><b>Tue:</b> 8:30 AM - 5:00 PM</li>
                        <li><b>Wed:</b> 8:30 AM - 5:00 PM</li>
                        <li><b>Thu:</b> 8:30 AM - 5:00 PM</li>
                        <li><b>Fri:</b> 8:30 AM - 5:00 PM</li>
                        <li><b>Sat:</b> 8:30 AM - 5:00 PM</li>
                        <li><b>Sun:</b> Closed</li>
                    </ul>
                    <p>(Eastern Standard Time)</p>
                </div>
                <div className="contactTxt">
                    <a href="mailto:SomeFlowers@gmail.com"><b>Email:</b> SomeFlowers@gmail.com</a>
                    <a href="tel:+31234567890"><b>Our telephone:</b> +31234567890</a>
                    <p><b>Adress:</b> 3087 Kingston Rd, Toronto, ON, M1M 1P1</p>
                </div>
            </div>
            <div className="aboutPicBox">
                <img src="https://images.unsplash.com/photo-1496661415325-ef852f9e8e7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1227&q=80" alt="flowers" width="50%" height="auto" className="aboutPic"/>
            </div>
		</div>
    )
}
export default Contacts;
