import React, { Component } from 'react';
import '../style.scss';

import salad from '../../../assets/img/salad.png';

class CustomPriceParaisoPerdido extends Component {

  handleChecketParaisoPerdido = (e) => {
    console.log(e.target.value);
    const election = e.target.value;
     
    localStorage.setItem('paraisoperdido', JSON.stringify(election)); 
  }

  render(){
    return(
      <div className="price-custom">
        <figure className='figure-custom'>
          <img src={salad} alt="#"/>
        </figure>
        <div className="option-price">
          {/* <p>{this.props.data.classic}</p>
          <p>{this.props.data.combo}</p> */}
          <div>
            <label htmlFor="classic" name="check" >Sencilla</label>
            <input 
                name="check"
                id="classic" 
                type="radio" 
                value="Paraiso Perdido sencilla" 
                onChange={this.handleChecketParaisoPerdido}
            />
          </div>
          <div>
            <label htmlFor="combo" name="check" >Combo</label>
            <input 
                name="check"
                id="combo" 
                type="radio" 
                value="Paraiso Perdido combo" 
                onChange={this.handleChecketParaisoPerdido}
            />
          </div>

        </div>
      </div>
    )
  }
}

export default CustomPriceParaisoPerdido;