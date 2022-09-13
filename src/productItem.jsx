import React, { Component } from 'react'

 class ProductItem extends Component {
    constructor(props){
        super(props);
        this.more=this.more.bind(this);
        this.less=this.less.bind(this);
        this.state={
            n: 0
        }
    }
    more(){
        this.setState({
            n: this.state.n + 1
        })
    }
    less(){
        this.setState({
            n: this.state.n - 1
        })
    }


  render() {
    return (
      <>
      <div className="card" style={{width: '18rem'}}>
        <img src={this.props.sekil} w="180" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">{this.props.basliq}</h5>
          <p className="card-text text-center">{this.props.qiymet}</p>
        
        </div>
      <div className='text-center mb-2'>
        <button className='btn btn-danger mx-2' onClick={this.less}>-1</button>
        <span>{this.state.n}</span>
        <button className='btn btn-success mx-2' onClick={this.more}>+1</button>
      </div>
      </div>

      </>
    )
  }
}

export default ProductItem;