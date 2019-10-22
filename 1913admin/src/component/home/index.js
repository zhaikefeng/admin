import React,{Component} from 'react'
import  {Card} from 'antd'
import ReactEcharts from 'echarts-for-react';
class Home extends Component{
  constructor(){
    super()
    this.state={
      option:{
        title : {
          text: '城市集锦',
          subtext: '欢迎观看',
          x:'center'
        },
      tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
          orient: 'vertical',
          left: 'left',
      },
      series : [
          {
              name: '访问来源',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:[
                  
              ],
              itemStyle: {
                  emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
          }
      ]
      }
    }
  }
  componentDidMount(){
    this.$axios.get('/yapi/getData')
    .then((data)=>{
      console.log(data)
      let option = JSON.parse(JSON.stringify(this.state.option))
      // option = data.data.option
      option.series[0].data = data.data.option.data 
      console.log(option)
      this.setState({option})
      // console.log(option)
    })
  }
  render(){
    return(
      <Card className="home">
        <ReactEcharts option={this.state.option} />
        <hr/>
        <ReactEcharts option={
           {
            legend: {},
            tooltip: {},
            dataset: {
                dimensions: ['product', '2015', '2016', '2017'],
                source: [
                    {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
                    {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
                    {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
                    {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}
                ]
            },
            xAxis: {type: 'category'},
            yAxis: {},
            // Declare several bar series, each will be mapped
            // to a column of dataset.source by default.
            series: [
                {type: 'bar'},
                {type: 'bar'},
                {type: 'bar'}
            ]
        }


          
        } />
      </Card>
    )
  }
}
export default  Home