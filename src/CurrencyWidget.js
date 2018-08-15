import React, { Component } from 'react';

class CurrencyWidget extends Component {

  format_value(value) {
    const size = value.length;
    return {
      main: value.slice(0, size - 3),
      aux: value.substring(size - 3, size - 1),
      delta: value.substring(size - 1)
    };
  }

  render() {

    const data = this.props.data;
    const currency_name = data.pair.split(' ')[0];
    const currency_sell = this.format_value(data.sell.toString());
    const currency_buy = this.format_value(data.buy.toString());

    return (
      <div className='currency-widget'>
        <div className='currency-widget-header'>{data.pair}</div>
        <div className='currency-widget-body'>
          <div className='currency-widget-option sell'>
            <div className='currency-widget-option-wrapper'>
              <div className='currency-widget-caption'>Sell {currency_name}</div>
              <div className='currency-widget-value'>
                <span className='currency-widget-value-main'>{currency_sell.main}</span>
                <span className='currency-widget-value-aux'>{currency_sell.aux}</span>
                <sup className='currency-widget-value-delta'>{currency_sell.delta}</sup>
              </div>
            </div>
            <span className='currency-widget-option-arrow'></span>
          </div>
          <div className='currency-widget-option buy'>
            <div className='currency-widget-option-wrapper'>
              <div className='currency-widget-caption'>Buy {currency_name}</div>
              <div className='currency-widget-value'>
                <span className='currency-widget-value-main'>{currency_buy.main}</span>
                <span className='currency-widget-value-aux'>{currency_buy.aux}</span>
                <sup className='currency-widget-value-delta'>{currency_buy.delta}</sup>
              </div>
            </div>
            <span className='currency-widget-option-arrow'></span>
          </div>
          <span className="currency-widget-tendency"></span>
        </div>
      </div>
    );
  }
}

export default CurrencyWidget;
