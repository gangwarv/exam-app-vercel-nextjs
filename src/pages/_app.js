import '../styles/globals.css';
// import '../styles/navbar.css';
// import "./sidebar.css";
import '../configureAmplify'

import 'semantic-ui-css/semantic.min.css'
import Main from '../components/Main'

import "jsuites/dist/jsuites.basic.css";
import "jexcel/dist/jexcel.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Main(MyApp)
