import { Provider } from "react-redux";
import { MainNavigation } from "./src/nav/MainNavigation";
import store from "./src/store/index"

export default function App() {
  return (
    <>
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    </>
  );
}
