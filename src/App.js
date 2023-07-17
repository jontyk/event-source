import logo from './logo.svg';
import './App.css';
import { AnalyticsBrowser } from '@segment/analytics-next';

export const analytics = AnalyticsBrowser.load({ writeKey: 'DVSutAt6T6FoA2uCzdK1OLzhQMgIXuu2' })

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => analytics.identify('JohnsID', {
          name: 'John Doe',
          email: 'test@email.com'
        })}>
          Set user ID
        </button>
        <button onClick={() => analytics.track('Hello World')}>
          Track with Segment
        </button>
      </header>
    </div>
  );
}

export default App;
