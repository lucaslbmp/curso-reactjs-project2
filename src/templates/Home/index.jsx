import { useEffect } from 'react';
import { useCounterContext } from '../../contexts/CounterContext/index.jsx';
import './style.css';
import { Button } from '../../components/Button/index.jsx';
import { Heading } from '../../components/Heading/index.jsx';

export const Home = () => {
  const [state, actions] = useCounterContext();

  // useEffect(() => {
  //   actions.increase(); // Simulando uma açao dispara logo ao renderizar o componente
  // }, [actions])

  const handleError = () => {
    actions
    .asyncError()
    .then(r => console.log(r))
    .catch(err => console.log(err.name, ':', err.message))
  }

  return (
    <>
      {/* <h1 onClick={() => actions.increase()}>{state.counter}</h1> */}
      <Heading />
      <div>
        <Button onButtonClicked={actions.increase}>Increase</Button>
        <Button onButtonClicked={actions.decrease}>Decrease</Button>
        <Button onButtonClicked={actions.reset}>Reset</Button>
        <Button onButtonClicked={() => actions.setCounter({counter: 10})}>set 10</Button>
        <Button onButtonClicked={() => actions.setCounter({counter: 100})}>set 100</Button>
        <Button disabled={state.loading} onButtonClicked={actions.asyncIncrease}>Async increase</Button>
        <Button disabled={state.loading} onButtonClicked={handleError}>Async error</Button>
      </div>
    </>
  )
}
