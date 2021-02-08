import '../App.css';
import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import OrderStatus from "./OrderStatus";

export default function MainMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    let [orderDetails] = React.useState([]);
    let [error] = React.useState('');
    let [isOrderStatusClicked] = React.useState()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOrderById = (orderNumber) => {
        setAnchorEl(null);
    };

    const handleOrderStatus = () => {
        setAnchorEl(null);
        return (<OrderStatus/>)
    }

    return (
        <div>
            <header className='navbar'>
                <div className='menuOption'>
                    <button className='buttonOrderStatus'>
                        Product
                    </button>
                    <select className='selectOptions'/>
                </div>
                <div className='menuOption'>
                    <button className='buttonOrderStatus'>
                        Brands
                    </button>
                    <select className='selectOptions'/>
                </div>
                <div className='menuOption'>
                    <button className='buttonOrderStatus'>
                        Deals
                    </button>
                    <select className='selectOptions'/>
                </div>
                <div className='menuOption lastLeftOption'>
                    <button className='buttonOrderStatus'>
                        Services
                    </button>
                    <select className='selectOptions'/>
                </div>
                <div className='menuRightOption'>
                    <button className='buttonOrderStatus'>
                        Account
                    </button>
                    <select className='selectOptions'/>
                </div>
                <div className='menuRightOption'>
                    <button className='buttonOrderStatus'>
                        Recently Viewed
                    </button>
                    <select className='selectOptions'/>
                </div>
                <div className='menuRightOption'>
                    <button className='buttonOrderStatus' aria-controls="order-status" aria-haspopup="true" onClick={handleClick}>
                        Order Status
                    </button>
                    <Menu
                        id="order-status"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}>
                        <MenuItem onClick={() => handleOrderById(1234)}>Order-1</MenuItem>
                        <MenuItem onClick={() => handleOrderById(12344)}>Order-2</MenuItem>
                        <MenuItem onClick={() => handleOrderStatus()}>Order Status</MenuItem>
                    </Menu>
                    <select className='selectOptions'/>
                </div>
                <div className='menuRightOption'>
                    <button className='buttonOrderStatus'>
                        Saved Items
                    </button>
                    <select className='selectOptions'/>
                </div>
            </header>
            {
                !orderDetails.length < 1 &&
                <main>My Shop</main>
            }
            {
                !orderDetails.length > 0 &&
                <OrderStatus/>
            }
        </div>
    );
}


