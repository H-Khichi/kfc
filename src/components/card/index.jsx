import React, { useState } from 'react';
import './card.css'
import menu1 from './../carddata/cardsData';
import Header from '../header';
import menu2 from '../carddata/menu2';
import drink from '../carddata/drinks';
import addMore from '../carddata/addmore';
const Card = () => {
    const [quantity, setQuantity] = useState(0)
    const [addQuantity, setAddQuantity] = useState(1)
    const [addItem, setAddItem] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [innerTotalPrice, setinnerTotalPrice] = useState(0)
    const [addPrice, setAddPrice] = useState(0)
    const [cartState, setCartState] = useState({
        id: "",
        name: "",
        image: "",
        price: "",
    })
    const [cState, setCState] = useState({
        id: "",
        price: "",
    })
    const [innerCard, setInnerCard] = useState(false);
    const [innerAddBtn, setInnerAddBtn] = useState(false);
    const [isCartVisible, setCartVisible] = useState(false)
    const decrement = (price) => {
        const updateQuantity = quantity - 1;
        const updatedPrice = totalPrice - price;
        if (quantity <= 0) {
            return setCartVisible(false);
        }
        else {
            setQuantity(updateQuantity)
            setTotalPrice(updatedPrice)

        }

    }
    const increment = (price) => {
        const updateQuantity = quantity + 1;
        setQuantity(updateQuantity)
        setTotalPrice(totalPrice + price)
    }
    const onHandleCart = (price, id) => {
        setCartVisible(true);
        const updateQuantity = quantity + 1;
        setQuantity(updateQuantity)
        setTotalPrice(totalPrice + price);
        const item = menu1.find(menuItem => menuItem.id === id);
        if (item ) {
            setCartState({
                id: item.id,
                name: item.name,
                image: item.image,
                price: item.price,
            })
        } else {
            console.log("Item not found");
        }
    }
    const innerDecBtn=(price)=>{
        
            if (addQuantity <1) {
                return setInnerAddBtn(false)
            }
            else {
                setAddQuantity(addQuantity - 1)
                setAddPrice(addPrice-price)
            }
    }
    const innerIncBtn = (price,id) => {
        setAddQuantity(addQuantity + 1)
        setAddPrice(addPrice+price)
        
    }
    const handleCard = (id,price) => {
        setInnerCard(true);
        setAddItem(1)
        setinnerTotalPrice(price)
        const item = menu1.find(menuItem => menuItem.id === id);

        if (item) {
            setCartState({
                id: item.id,
                name: item.name,
                image: item.image,
                price: item.price,
            })
        } else {
            console.log("Item not found");
        }
    }
    const onHandleClose = () => {
        setInnerCard(false)
    }
    const HandleInnerCard = (price,id) => {
        setInnerAddBtn(true);
        setAddQuantity(addQuantity )
        setAddPrice(addPrice+price);
        const innerItem = menu1.find(menuInnerItem => menuInnerItem.id === id);
        if (innerItem ) {
       
            setCState({
                id: innerItem.id,
                price: innerItem.price,
            })
        }
        
    }
    const decItemBtn=(price)=>{
        if(addItem > 1){
            setAddItem(addItem-1)
            setinnerTotalPrice(innerTotalPrice-price)
            
        }
        
    }
    const incItemBtn=(price)=>{
        setAddItem(addItem+1)
        setinnerTotalPrice(innerTotalPrice+price)
         
    }
    return (
        <>
            <Header quantity={quantity} />
            <div id="menu-page">
                <div className="container " >

                    <div className="row ">
                        <div className="col-md-8">
                            <div className="card-wrapper">
                                <div className="row">
                                    <div className='menu-title'>
                                        <h1>EveryDay Value <br />
                                            <div className='title-bar'></div></h1>
                                    </div>
                                    {
                                        menu1.map((p, index) => (
                                            <>
                                                <div className="col-md-4">
                                                    <div className="card-dec">
                                                        <div className="img-p">
                                                        <img src={p.image} alt="" width={"100%"} id='imghvr' onClick={() => handleCard(p.id,p.price)} />
                                                        </div>
                                                        <h5>{p.name}</h5>
                                                        <p>{p.content}</p>
                                                        <p><b>RS:{p.price}</b></p>
                                                        <button className='card-btn' key={index} onClick={() => onHandleCart(p.price, p.id)} >Add to bucket</button>
                                                    </div>
                                                </div >
                                            </>
                                        )

                                        )
                                    }
                                    <div className='menu-title'>
                                        <h1>Ala-Carte-&-Combos <br />
                                            <div className='title-bar'></div></h1>
                                    </div>
                                    {
                                        menu2.map((p, index) => (
                                            <>
                                                <div className="col-md-4">
                                                    <div className="card-dec">
                                                        <img src={p.image} alt="" width={"100%"} />
                                                        <h5>{p.name}</h5>
                                                        <p>{p.content}</p>
                                                        <p><b>RS:{p.price}</b></p>
                                                        <button className='card-btn' key={index} onClick={() => onHandleCart(p.price, p.id)} >Add to bucket</button>
                                                    </div>
                                                </div >
                                            </>
                                        )

                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='cart-sec'>
                                <h6 id='items-count'>{quantity} Items Added</h6>
                                <div className="cart-style " >
                                    <div className="dec"></div>
                                    <div className="dec"></div>
                                    <div className="dec"></div>
                                </div>

                                {isCartVisible && <div className="card-p">
                                    <div><img src={cartState.image} alt="" width={"80px"} /></div>
                                    <div className='cart-set'>
                                        <h5>{cartState.name}</h5>
                                        <button onClick={() => decrement(cartState.price)} >-</button>
                                        <h5 style={{ display: "inline-block" }}>{quantity}</h5>
                                        <button onClick={() => increment(cartState.price)}>+</button>
                                    </div>
                                    <div className='cart-price'>
                                        <p id='cart-price'><b>Rs:{cartState.price}</b></p>
                                    </div>
                                </div>


                                }

                                <div className="card-total-price">
                                    <h6 className='car-price'>{quantity} total Items </h6>
                                    <p className='cart-pr'><b className='car-price'> | RS:{totalPrice }</b></p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div >
            {innerCard && <div className="card-inner">

                <div className="row">
                    <div className="card-inner-data">
                        <div className="col-md-7" >
                            <div className='accordion accordion-flush' id="accordionFlushExample">
                                <div className='accordion-item bg-black' style={{ border: "none" }} >
                                    <h2 className='accordion-header' style={{ backgroundColor: "#1c1816" }}>
                                        <button className='accordion-button collapsed' id='acc' type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" >
                                            Choose an Option
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className='accordion-collapse collapse' data-bs-parent="#accordionFlushExample">
                                        <div className='accordion-body text-start' ><input type="radio" /><h5>{cartState.name}</h5></div>
                                    </div>
                                </div>
                                <div className='accordion-item bg-black ' style={{ border: "none" }}>
                                    <h2 className='accordion-header' style={{ backgroundColor: "#1c1816" }}>
                                        <button className='accordion-button collapsed' id='acc' type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Add a soft drink
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className='accordion-collapse collapse' data-bs-parent="#accordionFlushExample">
                                        <div className='accordion-body' id='drink-wrapper'>
                                            {
                                                drink.map((d, index) => (
                                                    <>
                                                        <div className="drink-wrapper">
                                                            <div className="d-img"><img src={d.image} alt="" width={"100%"} style={{ display: "inline-block" }} />

                                                            </div>
                                                            <div className="d-name text-start">
                                                                <h6>{d.name}<br /> <h6 id=''>{d.content}</h6></h6>
                                                            </div>
                                                            {!innerAddBtn && <div className="d-button">
                                                                <button className='d-btn' key={index} onClick={() => HandleInnerCard(d.price,d.id)}>Add</button>
                                                            </div> }
                                                            
                                                            {innerAddBtn && <div style={{display:"flex"}}>
                                                                <button className='inner-dec-btn' onClick={()=>innerDecBtn(d.price)} >-</button>
                                                                {addQuantity}
                                                                <button className='inner-inc-btn' onClick={()=>innerIncBtn(d.price,d.id)}>+</button>
                                                            </div>
                                                            }

                                                        </div>

                                                    </>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item bg-black' >
                                    <h2 className='accordion-header' style={{ backgroundColor: "#1c1816" }}>
                                        <button className='accordion-button collapsed' id='acc' type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Add Ons
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className='accordion-collapse collapse' data-bs-parent="#accordionFlushExample">
                                        <div className='accordion-body' id="addmore">
                                            {
                                                addMore.map(a => (
                                                    <>
                                                        <div className="add-wrapper">
                                                            <div className="a-img"><img src={a.image} alt="" width={"100%"} style={{ display: "inline-block" }} />

                                                            </div>
                                                            <div className="a-name text-start">
                                                                <h6>{a.name}<br /> <h6>{a.content}</h6></h6>
                                                            </div>
                                                            {!innerAddBtn &&                                        
                                                            <div className="a-button">
                                                                <button className='a-btn' onClick={() => HandleInnerCard(a.price,a.id)}>Add</button>
                                                            </div>}
                                                            {innerAddBtn && <div style={{display:"flex"}}>
                                                                <button className='inner-dec-btn' onClick={()=>innerDecBtn(a.price)} >-</button>
                                                                {addQuantity}
                                                                <button className='inner-inc-btn' onClick={()=>innerIncBtn(a.price)}>+</button>
                                                            </div>
                                                            }
                                                        </div>

                                                    </>

                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="close-card" onClick={onHandleClose}>
                                <div className="close"></div>
                                <div className="close1"></div>
                            </div>
                            {

                                <div className="card-inner-2">
                                    <div className="inner-img">
                                        <img src={cartState.image} alt="" width={"80%"} />
                                    </div>
                                    <h4>{cartState.name}</h4>
                                    <p>{cartState.content}</p>
                                    <button className='inner-dec-btn' onClick={()=>decItemBtn(cartState.price)}>-</button>
                                    {addItem}
                                    <button className='inner-inc-btn' onClick={()=>incItemBtn(cartState.price)}>+</button><br />
                                    <button className='inner-cart-btn'><b>Rs:{Number(innerTotalPrice) + Number(cState.price)} </b>    Add to card</button>


                                </div>

                            }

                        </div>
                    </div>
                </div>
            </div>

            }

        </>
    )
}

export default Card;