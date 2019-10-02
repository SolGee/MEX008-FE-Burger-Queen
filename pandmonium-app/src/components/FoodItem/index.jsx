import React, {Component} from 'react';
import '../MenuItem/styles.css';

class FoodItem extends Component {
    render(){
        const {icons} = this.props
        console.log(icons)
        const iconItem = icons.filter(i => {
            console.log(`icons id:${i.id}|item: ${this.props.item.type}`)
        return i.id === this.props.item.type
        })[0];
        const src = (process.env.REACT_APP_PATH_IMAGES ? process.env.REACT_APP_PATH_IMAGES: '/MEX008-FE-Burger-Queen')+ (iconItem  && iconItem.icon);
        return(
            <button className="cuadro" >
                <img className="iconFood"
                src={src}
                alt={this.props.item.name}
                />
                {this.props.item.name} 
            </button>
        );
    }
}

export default FoodItem;
