import './App.css';
import { AnalyticsBrowser } from '@segment/analytics-next';
import mixpanel from 'mixpanel-browser';

export const analytics = AnalyticsBrowser.load({ writeKey: 'DVSutAt6T6FoA2uCzdK1OLzhQMgIXuu2' })

function App() {
  mixpanel.init('f2132fd5fd2e78f2f12fc253ffa2e6a1', { debug: true, track_pageview: true, persistence: 'localStorage' });
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
          <button onClick={() => analytics.page("Retail Page", "Home")}>
            Page
          </button>
          <button onClick={() => analytics.screen("Home", { 'Feed Type': 'private' })}>
            Screen
          </button>
          <button onClick={() => analytics.group("groupID", {
            name: 'Big Corporation',
            industry: 'Marketing',
            employees: 47,
            plan: 'Enterprise',
            'total billed': 830
          })}>
            Group
          </button>
          <button onClick={() => analytics.alias("oldID")}>
            Alias
          </button>
          <button onClick={() => analytics.track("Context", {
            active: true,
            app: {
              name: 'segment',
              version: '1.0.0',
              build: '100',
            },
            campaign: {
              name: 'big ad campaign',
              source: 'google',
              medium: 'social',
              term: 'segment',
              content: 'yes',
            },
            device: {
              id: 123,
              advertisingId: 456,
              manufacturer: 'Apple Corporation',
              model: 'iPhone 11',
              name: 'big ted',
              type: 'no',
              version: '1.0.0',
            },
            ip: '127.0.0.1',
            library: {
              name: 'analytics.js',
              version: '1.0.0',
            },
            locale: 'en-us',
            network: {
              bluetooth: true,
              carrier: 'T-Mobile',
              cellular: true,
              wifi: true,
            },
            os: {
              name: 'iOS',
              version: '13.3.1',
            },
            page: {
              path: '/home',
              referrer: 'https://segment.com',
              search: '?q=analytics',
              title: 'Analytics',
              url: 'https://segment.com/docs/connections/sources/catalog/libraries/website/analytics.js/',
            },
            referrer: {
              type: 'search',
              name: 'Google',
              url: 'https://www.google.com/search?q=segment&oq=segment&aqs=chrome..69i57j69i60l3j69i65l2j69i60.1001j0j7&sourceid=chrome&ie=UTF-8',
              link: 'https://www.google.com/',
            },
            screen: {
              density: 2,
              width: 1920,
              height: 1080,
            },
            timezone: 'America/Los_Angeles',
            groupID: 'groupID',
            traits: {
              name: 'John Doe',
              email: 'test@email.com',
              plan: 'Enterprise',
              logins: 5,
              friends: 3,
              address: {
                city: 'San Francisco',
                state: 'CA',
                country: 'USA',
              },
            },
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko)',
            userAgentData: {
              brands: [
                { brand: 'Google Chrome', version: '80' },
                { brand: 'Chromium', version: '80' },
                { brand: 'Microsoft Edge', version: '80' },
                { brand: 'Microsoft Internet Explorer', version: '11' },
              ],
              mobile: false,
              platform: 'MacIntel',
              platformVersion: '10_15_3',
              architecture: 32,
              uaFullVersion: '80.0.3987.132',
              bitness: 32,
              model: 'Mac',
              fullVersionList: [
                '80.0.3987.132',
                '80.0.3987.132',
              ],
              wow64: false,
            },
            channel: 'web',
          })}>
            All the data
          </button>
        </section>

        <section>
          <h2>Mixpanel</h2>
          <button onClick={() => mixpanel.identify('JohnsID', {
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
