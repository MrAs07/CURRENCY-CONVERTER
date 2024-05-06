import { useState } from 'react'
import {InputBox} from './components'
import UseCurrency from './hooks/UseCurrency'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');

  // to display final result
  const[convertedAmount ,setConvertedAmount] = useState(0);

  // calling our custom hooks
  const currencyInfo =UseCurrency(from);
   
  //get all keys from object 
  const options = Object.keys(currencyInfo ||{});


  // for swpping the from and to 
  const swap = ()=>{
    setFrom(to)
    setTo(from)
    // this is optional just for enchancing the functionality
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  // now we make convert functionality

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]) 
    // multiply the user value to output currency and currencyInfo[to] taking value from this object
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1549421263-5ec394a5ad4c?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();

                        // calling convert function
                        convert();
                       
                    }}
                >
               <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOption={options}
                            onCurrencyChange={(currency) => setFrom(currency)} // jo bhi naya amount aya ho woh update ho jaaye with the the help of setAmount()
                  selectCurrency={from}

                  onAmountChange={
                    (amount)=>setAmount(amount)
                  }
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            
                            amount={convertedAmount}
                            currencyOption={options}
                            onCurrencyChange={(currency) => setTo(currency)} //// jo bhi naya amount aya ho woh update ho jaaye with the the help of setAmount()
                  selectCurrency={to}
                  amountDisabled
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
