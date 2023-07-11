import "./App.css";
import Router from "./shared/Router";
import GlobalStyle from "./GlobalStyle";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";
import GlobalModal from "./components/modal/GlobalModal";

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <GlobalModal />

        <Router />
      </Provider>
    </>
  );
}

export default App;
