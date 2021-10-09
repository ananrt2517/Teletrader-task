import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchSymbolRequest, setLogin } from '../store/actions/actions';
import Table from '../components/Table';
import styled from 'styled-components';
import { IState } from '../components/Navigation';

let msg = (symbol: string) => JSON.stringify({ 
  event: 'subscribe', 
  channel: 'ticker', 
  symbol,
})

interface Message {
  data: string;
}

interface IStateSymbols {
  symbols: string[];
}

const Home = () => {
  const dispatch = useDispatch();
  const [btc, setbtc] = useState([]);
  const [ltcUsd, setltcUsd] = useState([]);
  const [ltcBtc, setltcBtc] = useState([]);
  const [ethUsd, setethUsd] = useState([]);
  const [ethBtc, setethBtc] = useState([]);

  const { symbols } = useSelector((state: IStateSymbols) => state);
  const login = useSelector((state: IState) => state?.login);

  useEffect(() => {
    const ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
    ws.onopen = () => ws.send(msg('BTCUSD'));

    ws.onmessage = (message: Message) => {
      const data = JSON.parse(message.data);
      setbtc(data[1]);
    };
    return () => ws.close();
  }, []);

  useEffect(() => {
    const ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
    ws.onopen = () => ws.send(msg('LTCUSD'));

    ws.onmessage = (message: Message) => {
      const data = JSON.parse(message.data);
      setltcUsd(data[1]);
    };
    return () => ws.close();
  }, []);

  useEffect(() => {
    const ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
    ws.onopen = () => ws.send(msg('LTCBTC'));

    ws.onmessage = (message: Message) => {
      const data = JSON.parse(message.data);
      setltcBtc(data[1]);
    };
    return () => ws.close();
  }, []);

  useEffect(() => {
    const ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
    ws.onopen = () => ws.send(msg('ETHUSD'));

    ws.onmessage = (message: Message) => {
      const data = JSON.parse(message.data);
      setethUsd(data[1]);
    };
    return () => ws.close();
  }, []);

  useEffect(() => {
    const ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
    ws.onopen = () => ws.send(msg('ETHBTC'));

    ws.onmessage = (message: Message) => {
      const data = JSON.parse(message.data);
      setethBtc(data[1]);
    };
    return () => ws.close();
  }, []);

  useEffect(() => {
    dispatch(fetchSymbolRequest())
  }, [dispatch]);

  return (
    <>
      <StyledDiv>
        <StyledButton onClick={() => dispatch(setLogin())}>Log In</StyledButton>
      </StyledDiv>
      <Table data={symbols} btcusd={btc} ltcbtc={ltcBtc} ltcusd={ltcUsd} ethbtc={ethBtc} ethusd={ethUsd} />
      {login ? <FavoriteButton>Add to favorites</FavoriteButton> : null}
    </>
  )
}

export default Home;

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  background: #51CACE;
  color: white;
  border-radius: 5px;
  margin: 10px 10px 10px 0;
  font-size: 16px;
`
const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`
const FavoriteButton = styled.button`
  padding: 20px 20px;
  border: none;
  background: #51CACE;
  color: white;
  border-radius: 5px;
  margin: 10px;
  font-size: 16px;
`