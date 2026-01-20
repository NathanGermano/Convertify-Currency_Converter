import './style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getEmojiByCurrencyCode } from "country-currency-emoji-flags";
import useCurrencies from './hooks/useCurrencies';
import useInputEngine from './hooks/useInputsEngine';
import useSwitchTheme from './hooks/useSwitchTheme';
import useSwitchValues from './hooks/useSwitchValues';
import useConvertMoney from './hooks/useConvertMoney';

function App() {
  const {currencies, rates} = useCurrencies()
  const {inputValue, attValueInput} = useInputEngine()
  const {toggleTheme, isLightTheme} = useSwitchTheme()
  const {
          firstSelectValue, 
          secondSelectValue, 
          firstSelectSymbol, 
          attFirstSelectValue, 
          attSecondSelectValue, 
          switchButton
        } = useSwitchValues()

  const {result, convertMoney} = useConvertMoney({inputValue, firstSelectValue, secondSelectValue, rates})
  
  return (
    <>
      <main className="main d-flex justify-content-center align-items-center min-vh-100">
        <section className="container d-flex flex-column justify-content-center align-items-center">
          <div className="card col-12 col-md-8 col-lg-5 text-center p-3 p-md-4 ">
            
          <h1 className="text display-5 fw-bold">Convertify</h1>
          <p className="text mb-4">Your money, instantly converted</p>

          <div className="d-flex justify-content-center align-items-center mb-4">
            <input className="checkbox" type="checkbox" id="check" name="check" checked={isLightTheme} onChange={toggleTheme}/>
            <label htmlFor="check" className="label">
              <i className="fa-solid fa-moon"></i>
              <i className="fa-solid fa-sun"></i>
              <div className="circle"></div>
            </label>
          </div>
          
          <div className='mb-4 d-flex justify-content-center align-items-center'>
            <input type="text" value={result} className='form-control result-input' disabled />
          </div>

          <form className="d-flex flex-column text-center gap-4" onSubmit={(ev) => convertMoney(ev)}>

            <div className="input-group">
              <span className="symbol-wrapper custom-border input-group-text">{firstSelectSymbol}</span>
              <input type="text" className="form-control " aria-label="money-value" value={inputValue} onChange={(ev) => attValueInput(ev)}/>
            </div>
            
            <label>
              <div className="input-group">
                <select className="custom-border custom-select input-group-text" value={firstSelectValue} onChange={(ev) => attFirstSelectValue(ev)}>
                    {Object.entries(currencies).map(([code, name])=>{
                      const flag = getEmojiByCurrencyCode(code)
                      return <option key={code} value={code}>{flag} {name}</option>
                    })}
                </select>
              </div>
            </label>

            <div className="text-center">
              <button className="buttons w-50 p-2 rounded-5" type="button" onClick={switchButton}>
                <i className="fa-solid fa-arrows-rotate"></i>
              </button>
            </div>

            <label>
              <div className="input-group"> 
                <select className="custom-border custom-select input-group-text" value={secondSelectValue} onChange={(ev) => attSecondSelectValue(ev)}> 
                    {Object.entries(currencies).map(([code, name])=>{
                      const flag = getEmojiByCurrencyCode(code)
                      return <option key={code} value={code}>{flag} {name}</option>
                    })}
                </select>
              </div>
            </label>

            <div className="text-center">
              <button className="buttons fw-bold w-50 p-2 rounded-5" type="submit">
                Convert
              </button>
            </div>
          </form>
          </div>

        </section>
      </main>
    </>
  );
}

export default App;
