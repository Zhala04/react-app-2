import React, { Component } from 'react'
import ProductItem from './productItem';
import data from './data/ProductData';

class App extends Component {
    constructor(props){
        super(props);
        this.dia=this.dia.bind(this);
        this.gld=this.gld.bind(this);
        this.brz=this.brz.bind(this);
        this.slv=this.slv.bind(this);
    
        
        this.state={
            mod: data.gold
        }
    }
    dia(){
        this.setState({
            mod: data.diamond
        })
       
        
    }
    gld(){
        this.setState({
            mod:data.gold
        })
    }
    brz(){
        this.setState({
            mod:data.bronze
        })
    }
    slv(){
        this.setState({
            mod:data.silver
        })
    }
   

  render() {
    return (
        <>
        <div className='container'>
            <div className="buttons mt-5 d-flex justify-content-center">
            <a href="#" className="btn btn-light mx-2" onClick={this.gld}>Gold</a>
            <button href="#" className="btn btn-light mx-2" onClick={this.dia}>Diamond</button>
            <a href="#" className="btn btn-light mx-2" onClick={this.brz}>Bronze</a>
            <a href="#" className="btn btn-light mx-2" onClick={this.slv}>Silver</a>
            </div>
        <div className='row mt-5  gap-4 '>
            {this.state.mod.map((a,index)=>{
                return (
                    <>
                    <ProductItem key={index} sekil={a.img} basliq={a.title} qiymet={a.price} />
                    </>
                )
            })

            }

    
        </div>
        </div>
        </>
    )
  }
}

export default App