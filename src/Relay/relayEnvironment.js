import {Environment, Network, RecordSource, Store} from 'relay-runtime';
import {fetchGraphQL} from './fetchGraphQL'

const network = Network.create(fetchGraphQL);
const source = new RecordSource();
const store = new Store(source);

const env = new Environment({
  network,
  store,
});

export default env;

