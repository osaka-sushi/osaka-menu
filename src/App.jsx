import { Layout } from './styles/appStyles'
import Location from './pages/SetLocation';

function App() {

  return (
    <>
      <Layout innetHeight={window.innerHeight}>
        <Location />
      </Layout>
    </>
  );
}

export default App;
