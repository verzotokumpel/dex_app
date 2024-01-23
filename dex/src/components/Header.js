import React from 'react'
import Eth from "../eth.svg"
import {Link} from "react-router-dom"

function Header() {
  return (
    <header>
      <div className='leftH'>
        <h2>DEX</h2>
        <Link to="/" className='link'>
          <div className='headerItem'>Swap</div>
        </Link>
        <Link to="/tokens" className='link'>
          <div className='headerItem'>Tokens</div>
        </Link>
      </div>
      <div className='rightH'>
        <div className='headerItem'>
          <img src={Eth} alt="eth" className='eth'/>
          Ethereum
        </div>
        <div className='connectButton'>
          Connect
        </div>
      </div>
    </header>
  )
}

export default Header