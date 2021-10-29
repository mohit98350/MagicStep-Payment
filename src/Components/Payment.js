import React from 'react'
import Navbar from './Navbar'
const Payment=()=> {
    return (
        <div>
            
        <div className="container-fluid">
            <div className="row nav d-sm-flex d-md-none align-right">
                <div className="col-6 upper" >
                    Total Amount
                </div>
                <div className="col-6 upper">
                    $2599
                </div>
            </div>
            <Navbar/>
            <div class="container-fluid">
            <div className="row card-view ">
                <div className="col-sm-12 col-md-4">
                    <div className=" card-display">
                        <div className="row">
                            <div className="col-4 ">
                                <img src="./img/71E5zB1qbIL 7.png" width="100px" height="100px" />
                            </div>
                            <div className="col-4 padi-cg">
                                <div className="left">Apple iphone 12</div>
                                <div className="left  red" >Red</div>
                                <div className="left red">1</div>
                            </div>
                            <div className="col-4">
                                <div>$999</div>
                                <div className="Tprice">$999</div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-6 date">12 june,2021</div>
                            <div className="col-6">
                            </div>
                        
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                    <div className=" card-display">
                        <div className="row">
                            <div className="col-4">
                                <img src="./img/71E5zB1qbIL 7.png" width="100px" height="100px" />
                            </div>
                            <div className="col-4 padi-cg">
                                <div className="left">Apple iphone 12</div>
                                <div className="left red" >Red</div>
                                <div className="left red">1</div>
                            </div>
                            <div className="col-4">
                                <div>$999</div>
                                <div className="Tprice">$999</div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-6 date">12 june,2021</div>
                            <div className="col-6">
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                    <div className=" card-display">
                        <div className="row">
                            <div className="col-4">
                                <img src="./img/71E5zB1qbIL 7.png" width="100px" height="100px" />
                            </div>
                            <div className="col-4 padi-cg">
                                <div className="left">Apple iphone 12</div>
                                <div className="left red">Red</div>
                                <div className="left red">1</div>
                            </div>
                            <div className="col-4">
                                <div>$999</div>
                                <div className="Tprice">$999</div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-6 date" >12 june,2021</div>
                            <div className="col-6">
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="row w-100 p-130 hide-bot">
                    <div className="col-6 bottom1" style={{fontSize:'23px',fontWeight:'700'}}>
                        Total Amount
                    </div>
                    <div className="col-6 bottom2" style={{right:'-80px',fontSize:'23px',fontWeight:'700'}}>
                        $2499
                    </div>
                </div>
            </div>
        </div>
        </div>
    
    
    
            </div>
    )
}

export default Payment

