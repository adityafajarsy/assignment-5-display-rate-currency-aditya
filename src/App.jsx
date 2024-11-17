import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardName from './components/CardName'
import ButtonChange from './components/ButtonChange'

export default function App() {
  const [data, setData] = useState([])
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiURL = import.meta.env.VITE_API_URL;
  
  useEffect(() => {
    fetch(apiURL)
    .then(response => response.json())
    .then(result => {
      console.log(result.rates)
      let rates = [
        {
        currency: "CAD",
        exchange_rate: result.rates.CAD,
        we_buy: 1.05 * result.rates.CAD,
        we_sell: 0.95 * result.rates.CAD
      },
      {
        currency: "IDR",
        exchange_rate: result.rates.IDR,
        we_buy : 1.05 * result.rates.IDR,
        we_sell: 0.95 * result.rates.IDR
        },
      {
        currency: "JPY",
        exchange_rate: result.rates.JPY,
        we_buy : 1.05 * result.rates.JPY,
        we_sell: 0.95 * result.rates.JPY
        },
      {
        currency: "CHF",
        exchange_rate: result.rates.CHF,
        we_buy : 1.05 * result.rates.CHF,
        we_sell: 0.95 * result.rates.CHF
        },
      {
        currency: "EUR",
        exchange_rate: result.rates.EUR,
        we_buy : 1.05 * result.rates.EUR,
        we_sell: 0.95 * result.rates.EUR
        },
      {
        currency: "GBP",
        exchange_rate: result.rates.GBP,
        we_buy : 1.05 * result.rates.GBP,
        we_sell: 0.95 * result.rates.GBP
        },
      ]

      setData(rates)
    })
  }, [])

return (
  <div>
    <h2>Display Rate Currency</h2>
  <table className='table-form'>
    <tr>
      <th>Currency</th>
      <th>We Buy</th>
      <th>Exchange Rate</th>
      <th>We Sell</th>
    </tr>
    {
      data.map((rate, index) => {
        return(
          <tr key={index}>
            <td>{rate.currency}</td>
            <td>{rate.we_buy}</td>
            <td>{rate.exchange_rate}</td>
            <td>{rate.we_sell}</td>
          </tr>
        )
      })
    }
  </table>
  </div>
)
}



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// class AppClass extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       name : "John Doe"
//     }
// }

//   changeName = () => {
//     this.setState({
//      name: "Jane Doe" 
//     })
//   }


//   componentDidMount() {
//     console.log("component did mount");
//   }

//   componentDidUpdate(_, prevState) {
//     if(prevState.name !== this.state.name) {
//     console.log("component did update")
//   }
// }

//   shouldComponentUpdate(_, nextState) {
//     if (nextState.name === "Jane Doe") {
//       console.log("component should update")
//       return false 
//     }
//     return true
//   }

//   render() {
//     return (
//       <div>
//         <p>ini Paragraf</p>
//         <h1>Hello {this.state.name}!</h1>
//         <CardName name={this.state.name}></CardName>
//         <ButtonChange changeEventListener={this.changeName}></ButtonChange>
//         {/* <button onClick={this.changeName}>Click Me!</button> */}
        
//       </div>
//     );
//   }
// }


