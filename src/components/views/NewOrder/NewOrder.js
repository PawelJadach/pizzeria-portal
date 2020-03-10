import React from 'react';
import products from './products';
import styles from './NewOrder.module.scss';

import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import { api } from '../../../settings';
import axios from 'axios';

// console.log(products);



class NewOrder extends React.Component {
  state = {
    options: [],
    table: '1',
  }

renderParams = (params, product) => {
  let html = [];
  for (let param in params){
    for(let option in params[param].options){
      // console.log(param);
      // console.log(params[param].options[option].price);
      html.push(<Typography color="caption" gutterBottom>
        {option} {params[param].options[option].price}$
        <Checkbox
          checked={this.state.options.includes(`${product.id}-${option}-${params[param].options[option].price}`)}
          color="primary"
          onChange={this.handleChange}
          value={`${product.id}-${option}-${params[param].options[option].price}`}
        />
      </Typography>);
    }
  }
  return html;
};

handleChange = (e) => {
  // console.log(this.state.options);
  if(this.state.options.includes(e.target.value)){
    let newArray = this.state.options.filter(el => el !== e.target.value);
    switch(e.target.value) {
      case 'pizza-Nonna Albas Pizza-20':
        newArray = newArray.filter(el => el.indexOf('pizza') !== 0);
        break;
      case 'breakfast-Zia Giulias Breakfast-9':
        newArray = newArray.filter(el => el.indexOf('breakfast') !== 0);
        break;
      case 'salad-Nonno Albertos Salad-9':
        newArray = newArray.filter(el => el.indexOf('salad') !== 0);
        break;

      default: break;
    }
    this.setState({
      options: newArray,
    });
  } else {
    let newOptions = this.state.options.concat(e.target.value);
    switch(e.target.value.slice(0, e.target.value.indexOf('-'))){
      case 'pizza':
        if(!this.state.options.includes('pizza-Nonna Albas Pizza-20') && e.target.value !== 'pizza-Nonna Albas Pizza-20') {
          newOptions.push('pizza-Nonna Albas Pizza-20');
        }
        break;
      case 'breakfast':
        if(!this.state.options.includes('breakfast-Zia Giulias Breakfast-9') && e.target.value !== 'breakfast-Zia Giulias Breakfast-9') {
          newOptions.push('breakfast-Zia Giulias Breakfast-9');
        }
        break;
      case 'salad':
        // console.log(!this.state.options.includes('salad-Nonno Albertos Salad-9'));
        if(!this.state.options.includes('salad-Nonno Albertos Salad-9') && e.target.value !== 'salad-Nonno Albertos Salad-9') {
          newOptions.push('salad-Nonno Albertos Salad-9');
        }
        break;

      default: break;
    }
    // console.log(newOptions);
    this.setState({
      options: newOptions,
    });
  }
}

price = () => {
  let price = 0;
  this.state.options.map(option => {
    price += Number(option.slice(option.lastIndexOf('-')+1));
    return null;
  });
  return price;
}

handleTableChange = (e) => {
  // console.log(e.target.value);
  this.setState({
    table: e.target.value,
  });
}

handleSubmit = (e) => {
  e.preventDefault();
  const products = [];

  if(this.state.options.length > 0){
    this.state.options.map(option => {

      if(option === 'pizza-Nonna Albas Pizza-20') {

        const params = [];
        this.state.options.map(option => {
          if(option.slice(0, option.indexOf('-')) === 'pizza' && option !== 'pizza-Nonna Albas Pizza-20') return params.push(option.slice(option.indexOf('-') + 1, option.lastIndexOf('-')));
          else return null;
        });

        products.push({
          id: 'pizza',
          params,
        });

      }
      if(option === 'salad-Nonno Albertos Salad-9'){

        const params = [];
        this.state.options.map(option => {
          if(option.slice(0, option.indexOf('-')) === 'salad' && option !== 'salad-Nonno Albertos Salad-9') return params.push(option.slice(option.indexOf('-') + 1, option.lastIndexOf('-')));
          else return null;
        });

        products.push({
          id: 'salad',
          params,
        });
      }
      if(option === 'breakfast-Zia Giulias Breakfast-9'){
        const params = [];
        this.state.options.map(option => {
          if(option.slice(0, option.indexOf('-')) === 'breakfast' && option !== 'breakfast-Zia Giulias Breakfast-9') return params.push(option.slice(option.indexOf('-') + 1, option.lastIndexOf('-')));
          else return null;
        });
        products.push({
          id: 'breakfast',
          params,
        });
      }

      if(option === 'cake-Zio Stefanos Doughnut-9') products.push({
        id: 'cake',
      });

      return null;
    });
  }

  axios
    .post(`${api.url}/${api.order}`, {products, price: this.price, table: this.state.table})
    .then(res => {
      window.alert('Zamówienie złożone!');
      this.setState({
        table: 0,
        options: [],
      });
    })
    .catch(err => {
      console.log(err);
    });
}

render(){
  // console.log(this.state);
  return (
    <div className={styles.wrapper}>
      <TextField
        fullWidth
        id="standard-select-currency"
        select
        value={this.state.table}
        onChange={this.handleTableChange}
        helperText="Wybierz stolik"
      >
        <MenuItem key={1} value={'1'}>
          1
        </MenuItem>
        <MenuItem key={2} value={'2'}>
          2
        </MenuItem>
        <MenuItem key={3} value={'3'}>
          3
        </MenuItem>
      </TextField>
      {products.map(product => (
        <Card className={styles.card} key={product.id}>
          <CardContent>
            <Typography color="caption" variant='h6'>
              {product.name} {product.price}$
              <Checkbox
                checked={this.state.options.includes(`${product.id}-${product.name}-${product.price}`)}
                color="primary"
                onChange={this.handleChange}
                value={`${product.id}-${product.name}-${product.price}`}

              />
            </Typography>
            {this.renderParams(product.params, product)}
          </CardContent>
          {/* <CardActions>
            <Button variant='contained' size="small" color='primary'>Dodaj do zamówienia</Button>
          </CardActions> */}
        </Card>
      ))}
      <Card className={styles.order}>
        <Typography color="primary" variant='body1' className={styles.price}>
            Stolik: {this.state.table}
        </Typography>
        {this.state.options.map(option => (
          <Typography color="primary" variant='body2' key={option}>
            {option}
          </Typography>
        ))}

        <Typography color="primary" variant='h5' className={styles.price}>
            Wartość zamówienia: {this.price()}$
        </Typography>
        <Button color="primary" variant='contained' size='large' className={styles.new} fullWidth onClick={this.handleSubmit}>
          Złóż zamówienie
        </Button>
      </Card>
    </div>
  );
}
}

export default NewOrder;

