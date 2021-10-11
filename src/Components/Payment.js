import React from 'react'
import{FaSistrix}from "react-icons/fa";
const Payment=()=> {
    return (
        <div>
            
    <div className="container-fluid">
        <div className="row nav d-sm-flex d-md-none align-right">
            <div className="col-6" style={{color:'grey'}}>
                Total Amount
            </div>
            <div className="col-6" style={{color:'grey'}}>
                $2499
            </div>
        </div>
        <div className="row status">
            <div className="col highlight top-change"><span className="status-active">Pending</span></div>
            <div className="col top-change" style={{color:'grey'}}>Completed</div>
            <div className="col d-none d-sm-block">
                <div className="main">
                    <div className="form-group has-search">
                        <span className=" form-control-feedback"><FaSistrix/></span>
                        <input type="text" className="form-control" placeholder="Search Order"/>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
        <div className="row card-view">
            <div className="col-sm-12 col-md-4">
                <div className=" card-display">
                    <div className="row">
                        <div className="col-4">
                            <img src="./Img/71E5zB1qbIL 5.png" style={{width:'100%',height:'100%'}}/>
                        </div>
                        <div className="col-4 padi-cg">
                            <div>Apple iphone 12</div>
                            <div style={{color:'grey'}} >Red</div>
                            <div style={{color:'grey'}}>1</div>
                        </div>
                        <div className="col-4">
                            <div>$999</div>
                            <div>$999</div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-6 abc">12 june,2021</div>
                        <div className="col-6">
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-4">
                <div className=" card-display">
                    <div className="row">
                        <div className="col-4">
                            <img src="./Img/71E5zB1qbIL 5.png" style={{width:'100%',height:'100%'}}/>
                        </div>
                        <div className="col-4 padi-cg">
                            <div>Apple iphone 12</div>
                            <div style={{color:'grey'}}>Red</div>
                            <div style={{color:'grey'}}>1</div>
                        </div>
                        <div className="col-4">
                            <div>$999</div>
                            <div>$999</div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-6 abc">12 june,2021</div>
                        <div className="col-6">
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-4">
                <div className=" card-display">
                    <div className="row">
                        <div className="col-4">
                            <img src="./Img/71E5zB1qbIL 5.png" style={{width:'100%',height:'100%'}}/>
                        </div>
                        <div className="col-4 padi-cg">
                            <div>Apple iphone 12</div>
                            <div style={{color:'grey'}}>Red</div>
                            <div style={{color:'grey'}}>1</div>
                        </div>
                        <div className="col-4">
                            <div>$999</div>
                            <div>$999</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 abc">12 june,2021</div>
                        <div className="col-6">
                        </div>
                    </div>
                </div>
            </div>
            <div className="row w-60 p-50 hide-bot" style={{fontSize: '23px', fontWeight: 700}}>
                <div className="col-6">
                    Total Amount
                </div>
                <div className="col-6 text-secondary" style={{right: '160px'}}>
                    $2499
                </div>
            </div>
        </div>
    </div>



        </div>
    )
}

export default Payment

