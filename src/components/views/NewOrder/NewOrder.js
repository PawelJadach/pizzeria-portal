import React from 'react';
import products from './products';
import styles from './NewOrder.module.scss';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

console.log(products);

const renderParams = (params) => {
  let html = [];
  for (let param in params){
    for(let option in params[param].options){
      // console.log(option);
      // console.log(params[param].options[option].price);
      html.push(<Typography color="caption" gutterBottom>
        {option} {params[param].options[option].price}$
        <Checkbox
          checked='true'
          color="primary"
        />
      </Typography>);
    }
  }
  return html;
};

class NewOrder extends React.Component {
  state = {

  }



  render(){
    return (
      <div className={styles.wrapper}>
        {products.map(product => (
          <Card className={styles.card} key={product.id}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {product.id}
              </Typography>
              <Typography color="textPrimary" gutterBottom>
                {product.price}$
              </Typography>
              <Typography color="textSecondary">
                {product.name}
              </Typography>
              {renderParams(product.params)}
            </CardContent>
            <CardActions>
              <Button variant='contained' size="small" color='primary'>Dodaj do zamówienia</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    );
  }
}

export default NewOrder;

