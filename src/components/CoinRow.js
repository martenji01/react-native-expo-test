import { useState, useEffect } from "react"
import { StyleSheet, Text, View } from 'react-native';
import { getCoinDetails } from "../api/index.js"
import { getCoinChart } from "../api/index.js"
import Chart from "react-apexcharts"
import CircularProgress from "@mui/material/CircularProgress"
export const CoinRow = ({coin}) => {

    const [showDetails, setShowDetails] = useState(false);
    const [showChart, setShowChart] = useState(false);  
    const [showLoader, setShowLoader] = useState(false);    
    
      const defaultChart = {
        options:  {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
          } 
        ,series:[
            {
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
          ]}
      const [coinChart, setCoinChart] = useState([]);
      const [coinChartSettings, setCoinChartSettings] = useState(defaultChart);
      const chartEffect = ()=>{
          
      }
      
    useEffect(()=>{
        console.log({showDetails})
        console.log({showChart})
    }, [showDetails,showChart])
    useEffect(async ()=>{
        console.log({coinChart})
        
    }, [coinChart])
    useEffect(async ()=>{
        console.log({coinChartSettings})
        
    }, [coinChartSettings])

    const onClickRow = async (currentCoin)=>{
        const currentCoinDetails = await getCoinDetails(currentCoin.id);
        console.log({currentCoinDetails})
        const currentCoinChart = await getCoinChart(currentCoin.id);
        setCoinChart(currentCoinChart);
        
        
        //console.log({categories})
        const newChartSettings = {
            options: {
                chart: {
                  id: "basic-bar"
                },
                xaxis: {
                  categories: currentCoinChart.prices.map(price=>price[0])
                }
              },
            series:{
                name: "series-1",
                data: currentCoinChart.prices.map(price=>price[1])
            }
        }
        console.log({newChartSettings})
        //setCoinChartSettings(newChartSettings);
    }
    const chartLoad = async (currentCoin)=>{
        if(showChart===true){
            setShowChart(false)
        } else {
            setShowLoader(true)
            const currentCoinChart = await getCoinChart(currentCoin.id);
            const newChartSettings ={
                options:  {
                    chart: {
                      id: "basic-bar"
                    },
                    xaxis: {
                      categories: currentCoinChart.prices.map(price=>price[0])
                    }
                  } 
                ,series:[
                    {
                      name: "series-1",
                      data: currentCoinChart.prices.map(price=>price[1])
                    }
                  ]}
            console.log({newChartSettings})
            setCoinChartSettings(newChartSettings);
            setShowLoader(false)
            setShowChart(true)
        }
       
        
    }
    
    return (
        <View style={styles.containerRow}>
          
            <View style={styles.rowItem} onClick={()=> onClickRow(coin)}
            onMouseEnter={()=>{setShowDetails(true)}}
            onMouseLeave={()=> setShowDetails(false)}>
              <View style={styles.rowItemFeat}> <image src={coin.image.small}/></View>
              <View style={styles.rowItemFeat}><Text>{coin.name}</Text></View>
              <View style={styles.rowItemFeat}> <Text>{coin.symbol}</Text> </View>
            <button type="button" onClick={()=>chartLoad(coin)}><Text>Show Chart</Text></button>
            </View>
            
            {showLoader
            &&
            <View style={styles.bgWhite}>
              <CircularProgress color="secondary"/>
            </View>
            
            }
            
            {showChart &&
            <Chart style={styles.chartSet} className="chart-set" options={coinChartSettings.options} series={coinChartSettings.series} type="line" height={380} width={500}/>
            }
            {showDetails &&
            <View style={styles.rowDetails}><Text >{coin.market_data.circulating_supply} Pezzi</Text></View>
            }
        </View>
        
        
    )
}

const styles = StyleSheet.create({
  containerRow: {
    width: 500,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgWhite: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    marginTop: 5,
    backgroundColor:'white'
  },
  rowItem:{
    padding: 5,
    backgroundColor: 'white',
    width: 500,
    marginTop: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    flexDirection: "row",
  },
  rowItemFeat:{
    padding: 5,
    width: 100,
    
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowDetails:{
    backgroundColor: 'grey',
    width: 500,
    padding: 5,
  borderRadius: 7,
  marginTop: 5,
  flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center'
  },
  chartSet:{
    marginTop: 4,
  }
});