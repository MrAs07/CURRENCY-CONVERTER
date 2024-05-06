import React,{useId} from 'react'



// defining state or method for our
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
     currencyOption =[],//by default empty array so that app doest not crash if value do not pass through it
    selectCurrency="usd",// which currency you want to select from list
    amountDisabled=false,
    currencyDisabled= false,
    className="",

   

}) {
    // useId() hooks used to generate unique id
   const amountId=useId();

    return (
        // write the custom css if user want to give css
        // we put the css through className
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label
                  htmlFor={amountId}
                  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id ={amountId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                    // possible chance of crash 
                    // so we use checker in it 
                    // kai baar jo event k andar value kos treat link string in javascript so we used number
                    // ye choti si galti ko bahut time lagta h debug karne m
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    onChange={(e) =>  
                         onCurrencyChange && onCurrencyChange(e.target.value)
                         
                    
                    }
                    value={selectCurrency}
                    disabled={currencyDisabled}
                    // we want string so we can't change
                >
                 {/* always remember agar appko performance lane loop k andar elements ko loop karne k liye toh appko  key pass karni hee chaiye 
                 rember the key in loops in react
                 
                 id's are more preferable if you are using database
                 */}
                 {currencyOption.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;

