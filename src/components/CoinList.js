import { useState, useEffect, useMemo } from "react"
import { StyleSheet, Text, View , ScrollView} from 'react-native';
import { getCoinList } from "../api/index.js"
import { getCoinDetails } from "../api/index.js"
import {CoinRow} from "../components/CoinRow.js";

export const CoinList = () => {

    const [coins, setCoins] = useState([])

    const [search, setSearch] = useState("")

    const refreshData = async () =>{

        const coinsList = await getCoinList()
        setCoins(coinsList)
        console.log({coins})
    }   

    useEffect(()=>{refreshData()}, [])

    const filteredCoins = useMemo(()=>{
        const searched = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
        return searched.splice(0,100)
    },[coins, search])

    const onTextChange = (event) => {
        setSearch(event.target.value)
        console.log({search})
    }

    const onClickRow = async (currentCoin)=>{
        const currentCoinDetails = await getCoinDetails(currentCoin.id);

        console.log({currentCoinDetails})
    }

    const coinRow = (coin) => {
        return(<CoinRow coin={coin} key={coin.id} />)
    }
    
    return (

        <View style={styles.coinList}>
            <input placeholder={"Search"} onChange={onTextChange}></input>
            
            <ScrollView>
            {filteredCoins.map(coinRow)}
            </ScrollView>
            
        </View>
        
    )
}

const styles = StyleSheet.create({
    coinList: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
  });