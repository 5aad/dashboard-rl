import React from 'react';
import './dashboard.scss';

class BtnBrand extends React.Component {
  render(){
  return (
    <>
    <div className="card grad">
        <div className="card-body ">
        {/* <h5 className="card-title text-white">Comming Soon</h5> */}


  {this.props.text ? (<span>{this.props.text}</span>):(        <img className={this.props.classNames} alt="#" src={this.props.imgs} height={this.props.hghts} />
) }
        </div>

    </div>
    </>
  );
}
}

export  class Cards extends React.Component {
  render(){
  return (
    <>
    <div className="card grad">
        <div className="card-body steam-group">
          
        <h5 className="card-title text-white float-left mr-5">Join our steam group<br/> +1000</h5>
        {/* add fontawsome script file in public folder html file */}
        <button type="button" className="btn btn-primary bb ml-4 mt-4" ><i className="fas fa-chevron-right "></i></button>
        
     
        </div>

    </div>
    </>
  );
}
}

export default BtnBrand;
