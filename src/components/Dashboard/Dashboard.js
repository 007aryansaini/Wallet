import { MenuOutlined } from '@ant-design/icons'
import React from 'react'
import './dashboard.css'
import scanner from '../../images/scanner1.png'
import receive from '../../images/receive.png'
import send from '../../images/sendmessage.png'
import card from '../../images/card.png'
import swap from '../../images/swap.png'
import ellipse from '../../images/Ellipse7.png'


function Dashboard() {
  return (
    <div className='main-div'>
      {/* <MainLayout /> */}
      <div className="upper-div">
          <MenuOutlined style={{ color: '#fff' }} />
          <div className='header'>
            <h2 className='heading'>Wallet</h2>
            <h4 className='currency'>Ethereum main network</h4>
          </div>
          <img className='scanner' src={scanner} />
         
      </div>

      <div className='seperating-line'></div>

      <div className='content'>
            <h2 className='content-heading'>Portfolio</h2>
            <h3 className='total-balance'>Total Balance</h3>
            <h2 className='total-balance-amount'>$100019272</h2>
            <div className='address-container'>
              <p className='address'>0dks0w78chsRFe0idl</p>
            </div>
        </div>

        <div className='button-container'>
          <div className='inside-button-container'>
            <img className='button-image' src={receive} />
          </div>
          <div className='inside-button-container'>
            <img className='button-image' src={send} />
          </div>
          <div className='inside-button-container'>
            <img className='button-image' src={card} />
          </div>
          <div className='inside-button-container'>
            <img className='button-image' src={swap} />
          </div>
        </div>

        <div className='data-container'>
          <div className='main-data'>
            <img className='data-image' src={ellipse} />
            <div className='inside-data-container'>
              <p className='data-currency'>Ethereum</p>
              <h4 className='data-heading'>0.2841ETH</h4>
            </div>
            <div className='right-container'>
              <p className='dollar-equivalent'>294$</p>
              <p className='percentile-container'>23456</p>
            </div>
           
          </div>
          <div className='main-data'>
            <img className='data-image' src={ellipse} />
            <div className='inside-data-container'>
              <p className='data-currency'>Ethereum</p>
              <h4 className='data-heading'>0.2841ETH</h4>
            </div>
            <div className='right-container'>
              <p className='dollar-equivalent'>294$</p>
              <p className='percentile-container'>23456</p>
            </div>
           
          </div>
          <div className='main-data'>
            <img className='data-image' src={ellipse} />
            <div className='inside-data-container'>
              <p className='data-currency'>Ethereum</p>
              <h4 className='data-heading'>0.2841ETH</h4>
            </div>
            <div className='right-container'>
              <p className='dollar-equivalent'>294$</p>
              <p className='percentile-container'>23456</p>
            </div>
           
          </div>
          <div className='main-data'>
            <img className='data-image' src={ellipse} />
            <div className='inside-data-container'>
              <p className='data-currency'>Ethereum</p>
              <h4 className='data-heading'>0.2841ETH</h4>
            </div>
            <div className='right-container'>
              <p className='dollar-equivalent'>294$</p>
              <p className='percentile-container'>23456</p>
            </div>
           
          </div>
          <div className='main-data'>
            <img className='data-image' src={ellipse} />
            <div className='inside-data-container'>
              <p className='data-currency'>Ethereum</p>
              <h4 className='data-heading'>0.2841ETH</h4>
            </div>
            <div className='right-container'>
              <p className='dollar-equivalent'>294$</p>
              <p className='percentile-container'>23456</p>
            </div>
           
          </div>
          <div className='main-data'>
            <img className='data-image' src={ellipse} />
            <div className='inside-data-container'>
              <p className='data-currency'>Ethereum</p>
              <h4 className='data-heading'>0.2841ETH</h4>
            </div>
            <div className='right-container'>
              <p className='dollar-equivalent'>294$</p>
              <p className='percentile-container'>23456</p>
            </div>
           
          </div>
          <div className='main-data'>
            <img className='data-image' src={ellipse} />
            <div className='inside-data-container'>
              <p className='data-currency'>Ethereum</p>
              <h4 className='data-heading'>0.2841ETH</h4>
            </div>
            <div className='right-container'>
              <p className='dollar-equivalent'>294$</p>
              <p className='percentile-container'>23456</p>
            </div>
           
          </div>
          <div className='main-data'>
            <img className='data-image' src={ellipse} />
            <div className='inside-data-container'>
              <p className='data-currency'>Ethereum</p>
              <h4 className='data-heading'>0.2841ETH</h4>
            </div>
            <div className='right-container'>
              <p className='dollar-equivalent'>294$</p>
              <p className='percentile-container'>23456</p>
            </div>
           
          </div>
          <div className='main-data'>
            <img className='data-image' src={ellipse} />
            <div className='inside-data-container'>
              <p className='data-currency'>Ethereum</p>
              <h4 className='data-heading'>0.2841ETH</h4>
            </div>
            <div className='right-container'>
              <p className='dollar-equivalent'>294$</p>
              <p className='percentile-container'>23456</p>
            </div>
           
          </div>
          

        </div>



    </div>
  )
}

export default Dashboard