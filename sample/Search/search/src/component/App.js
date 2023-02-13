import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import ProdDisplay from './ProductDisplay';
import Header from './Header';
import JSON from './product.json';

class App extends Component{

    constructor(){
        super()

        this.state={
            productData:JSON,
            filteredData:JSON
        }
    }

    filterData=(keyword)=>{
        let output=this.state.productData.filter((item)=>{
            return (item.product_name.toLowerCase().indexOf(keyword.toLowerCase())>-1)
        })
        this.setState({filteredData:output})
    }

    render(){

        return(
            <BrowserRouter>
            <Header userInput={(data)=>{this.filterData(data)}}/>

            <ProdDisplay prodData={this.state.filteredData}/>
            <h1>hello</h1>
            </BrowserRouter>
        )
    }

}

export default App;


