import axios from "axios";
import { useState } from "react";
import "./currency.css";
let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let key = "fca_live_gCvvu09TTdWfu7TlKBo2ww1tUJsXQiTqn0pRwokI";

function Currency() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFrom] = useState("USD");
  const [toCurrency, setTo] = useState("TRY");
  const [result, setResult] = useState(0);

  const app = async () => {
    const post = await axios.get(
      `${BASE_URL}?apikey=${key}&base_currency${fromCurrency}`
    );
    const res = post.data.data[toCurrency] * amount;
    setResult(res);
  };

  return (
    <div className="currency-body">
      <div className="currency-title">
        <h1>Hosgeldiniz</h1>
      </div>
      <div className="currency-content">
        <div className="from-currency">
          <div className="input">
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type="number"
            />
          </div>
          <div className="section">
            <select onChange={(e) => setFrom(e.target.value)}>
              <option value="">EUR</option>
              <option value="">USD</option>
              <option value="">TRY</option>
            </select>
          </div>
        </div>
        <div className="btn">
          <button onClick={app}>Çevir</button>
        </div>
        <div className="to currency">
          <div className="input">
            <input
              value={result}
              onChange={(e) => setResult(e.target.value)}
              type="number"
            />
          </div>
          <div className="section">
            <select onChange={(e) => setTo(e.target.value)} name="" id="">
              <option value="">TRY</option>
              <option value="">EUR</option>
              <option value="">USD</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Currency;
