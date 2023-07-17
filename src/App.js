import './App.css';
import { AnalyticsBrowser } from '@segment/analytics-next';
import mixpanel from 'mixpanel-browser';

export const analytics = AnalyticsBrowser.load({ writeKey: 'DVSutAt6T6FoA2uCzdK1OLzhQMgIXuu2' })

function App() {
  mixpanel.init('f2132fd5fd2e78f2f12fc253ffa2e6a1' , { debug: true, track_pageview: true, persistence: 'localStorage' });
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <h2>Segment</h2>
          <button onClick={() => analytics.identify('JohnsID', {
            name: 'John Doe',
            email: 'test@email.com'
          })}>
            Set user ID
          </button>
          <button onClick={() => analytics.track('Signed In')}>
            Signed In [Tracked Event] (Segment)
          </button>
          <button onClick={() => analytics.track('Signed Up', { plan: 'Enterprise' })}>
            Signed Up [Tracked Event w/ metadata] (Segment)
          </button>
        </section>

        <section>
          <h2>Mixpanel</h2>
          <button onClick={() => mixpanel.identify('JohnsID' , {
            name: 'John Doe',
            email: 'test@email.com'
          })}>
            Set User ID (Mixpanel)
          </button>
          <button onClick={() => mixpanel.track('Signed In')}>
            Signed In [Tracked Event] (Mixpanel)
          </button>
          <button onClick={() => mixpanel.track('Signed Up', { plan: 'Enterprise' })}>
            Signed Up [Tracked Event w/ metadata] (Mixpanel)
          </button>
        </section>
      </header>
    </div>
  );
}

export default App;
