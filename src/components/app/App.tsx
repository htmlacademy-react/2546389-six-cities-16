import MainScreen from '../../pages/main-screen/main-screen';

type AppProps = {
    countCard: number;
};

function App({countCard} : AppProps): JSX.Element {
  return (
    <MainScreen countCard= {countCard}/>
  );
}

export default App;
