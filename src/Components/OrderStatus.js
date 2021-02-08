import React, {Component} from 'react';
import './OrderStatus.css';
import moment from 'moment';

class OrderStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderDetails: [
                {
                    "id": 10,
                    "orderId": 198772,
                    "items": [
                        {
                            "id": 100000,
                            "name": "Apple Iphone XR",
                            "plan": "AT&T Unlimited Extra",
                            "skuId": "sku1234",
                            "skuAttributes": {
                                "model": "Iphone XR",
                                "manufacturer": "Apple",
                                "color": "Yellow",
                                "size": "64 GB"
                            },
                            "quantity": 1,
                            "telephoneNumber": "409.406.3322",
                            "status": "ordered",
                            "complete": true,
                            "estimatedShipDateRange": {
                                "fromDate": "2020-09-06T13:39:52.774-05:00",
                                "toDate": "2020-09-08T13:39:52.774-05:00"
                            },
                            "newEstimatedShipDateRange": {
                                "fromDate": "2020-10-02T13:39:52.774-05:00",
                                "toDate": "2020-10-06T13:39:52.774-05:00"
                            },
                            "userAcceptedDelay": true
                        }
                    ],
                    "status": "ordered",
                    "complete": true,
                    "shipingAddress": {
                        "street": "437 Lytton Blvd",
                        "city": "Palo Alto",
                        "state": "CA",
                        "zip": "94301"
                    },
                    "shipments": [
                        {
                            "id": 1,
                            "items": [
                                100000
                            ],
                            "carrier": "USPS",
                            "trackingNumber": "9400100000000000000000",
                            "trackingUrl": "https://tools.usps.com/go/TrackConfirmAction?tRef=fullpage&tLc=2&text28777=&tLabels=9400100000000000000000%2C",
                            "estimatedDeliveryDate": "2020-10-06T13:39:52.774-05:00",
                            "shipDate": "2020-10-02T13:39:52.774-05:00"
                        }
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <main>Order Details</main>
                {
                    this.state.orderDetails.map(itemDetails => {
                        return <div>
                            {itemDetails.items.map(items => {
                                return <div>
                                    {
                                        items.userAcceptedDelay ?
                                            <p className={'p'}>We Apologize for the delay</p> :
                                            <div>
                                                <p className='p bold'>Get Excited!</p>
                                                <p className='p italic smallFont'>Fun Stuff is headed your way.</p>
                                            </div>
                                    }
                                    <div>
                                        <p className='p'><span className={'bold'}>Items shipped:</span> {items.quantity}</p>
                                        <p className='p bold'>New estimated ship date<p className={'italic customColor smallFont'}> {moment(items.newEstimatedShipDateRange.fromDate).format('ll')} - {moment(items.newEstimatedShipDateRange.toDate).format('ll')}</p></p>
                                        <p className='p bold'>Actual estimated ship date<p className={'italic customColor smallFont'}> {moment(items.estimatedShipDateRange.fromDate).format('ll')} - {moment(items.estimatedShipDateRange.toDate).format('ll')}</p></p>
                                    </div>
                                </div>
                            })}
                            {itemDetails.shipments.map(shipment => {
                                return <div>
                                    {
                                        <div>
                                            <p className='p bold'>Tracking information: <span
                                                className='trackingNumber'>{shipment.trackingNumber}</span></p>
                                            <p className='p'><span
                                                className={'bold'}>Estimated delivery date:</span> {moment(shipment.estimatedDeliveryDate).format('ll')}
                                            </p>
                                        </div>
                                    }
                                </div>
                            })}
                            <p className='p customColor'><span
                                className={'bold blackColor'}>Address:</span> {itemDetails.shipingAddress.street + '. ' + itemDetails.shipingAddress.city + ', ' + itemDetails.shipingAddress.state + ' ' + itemDetails.shipingAddress.zip}
                            </p>
                            <div>
                               <button className={'primaryButton'}>
                                   Accept new ship date
                               </button>
                                <button className={'secondaryButton'}>
                                    Cancel your order
                                </button>
                            </div>
                            {itemDetails.items.map(items => {
                                return <div id={'item description'}>
                                    <div className={'p float-left-child'}>
                                        <img src={require('../images/11.jpeg')} alt={'item'}/>
                                    </div>
                                    <div className={'p float-left-child'}>
                                        <h2>{items.name}</h2>
                                        <p>{items.plan}</p>
                                        <p>{items.telephoneNumber}</p>
                                    </div>
                                </div>
                            })}
                        </div>
                    })
                }
            </div>
        );
    }
}

export default OrderStatus;
