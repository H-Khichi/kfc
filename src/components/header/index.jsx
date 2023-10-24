import React, { useState } from 'react';
import { Button, Drawer, Switch } from 'antd';
import './header.css';
import img1 from '../../assets/kfc images/header-inner.jpg'
import img2 from '../../assets/kfc images/header-inner-2.jpg'
import img3 from '../../assets/kfc images/header-inner-3.jpg'
import logo from '../../assets/kfc images/logo.png'
import delivery from '../../assets/kfc images/delivery.png'
import pick from '../../assets/kfc images/pickup.png'
const Header = (props) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="header">
        <div className='header1 container'>
          <div class="header-logo">
            <Button className='menu-btn' onClick={showDrawer}>
              <div className="ham"></div>
              <div className="ham"></div>
              <div className="ham"></div>
            </Button>
            <a href="/"><img src={logo} alt="" /></a>
            <button className='deliver-btn'><img src={delivery} alt="" width={"30px%"} />  Delivery</button>
            <button className='pickup-btn'><img src={pick} alt="" width={"30px%"} />  Pick Up</button>
          </div>
          <Drawer className='menu-inner' placement="left" onClose={onClose} open={open}>
            <button className='inner-btn'>Login</button>
            <h1 className='switch'><Switch checkedChildren="Day" unCheckedChildren="Night" defaultunChecked /></h1>
            <hr />
            <h5><span><img src={img1} alt="" width={"20px"} /> Store Locator</span></h5>
            <h5><span><img src={img2} alt="" width={"20px"} />Track Order</span></h5>
            <h5><span><img src={img3} alt="" width={"20px"} />Explore menu</span></h5>
            <hr />
            <a href=""><h5>About Us</h5></a>
            <a href=""><h5>FeedBack</h5></a>
            <a href=""><h5>Terms & Conditions</h5></a>
            <a href=""><h5>Privacy Policy</h5></a>
            <a href=""><h5>Contact Us</h5></a>
            <a href=""><h5>Mitao Bhook</h5></a>
            <a href=""><h5>Mitao Bhook - Scholarship</h5></a>
            <a href=""><h5>Careers</h5></a>
          </Drawer>
          
          <div>
            <button className='bucket'>{props.quantity}</button>
            <button className='inner-btn'>Login</button>
          </div>
        </div>
        <div className="header2">
          <a href=''><button className='header-2-btn'>Everyday Value</button></a>
          <a href=''><button className='header-2-btn'>Ala-Carte-&-Combos</button></a>
          <a href=''><button className='header-2-btn'>Signature-Boxes</button></a>
          <a href=''><button className='header-2-btn'>Sharing</button></a>
          <a href=''><button className='header-2-btn'>Snacks-&-Beverages</button></a>
          <a href=''><button className='header-2-btn'>Midnight (Start at 12 am)</button></a>
        </div>
      </div>

    </>
  );
};
export default Header;