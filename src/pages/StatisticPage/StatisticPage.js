import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Chart from '../../components/Chart/Chart';

import {BitcoinService} from '../../services/BitcoinService'
// import axios from 'axios';
import './StatisticPage.css'

@inject('store')
@observer
class StatisticPage extends Component {
  
  // state = {bitcoinRate: 0, bitcoinTitle: '', data: [], description: '' }

  state = {chartsData: []}

  async componentDidMount() {

    const chartsData = await BitcoinService.getChartsData()
    this.setState({chartsData})
    // axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
    //   .then(res => res.data)
    //   .then(res => {
    //     this.setState({
    //       title: res.name,
    //       data: res.values.map(point => point.y), 
    //       description: res.description
    //     })
    //   })


      // https://api.blockchain.info/charts/n-transactions?format=json
  }

  renderChart(chart, color) {
    const {title, data, description} = chart
    return (
      
        <Chart title={title} 
              data={data} 
              description={description} 
              color={color} />
      
    )
  }

  render() {
    const colors = ['blue', 'green']
    return (
      <div className="statistic-page">
        <ul>
        {
          this.state.chartsData.map( (chart, idx) => 
            <li className="statistic-chart" key={idx}>{this.renderChart(chart, colors[idx])}</li>
          )
        }
        </ul>
      </div>
    );
  }
}

export default StatisticPage;
