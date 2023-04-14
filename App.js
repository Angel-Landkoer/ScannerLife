import { Provider } from "react-redux";
import { MainNavigation } from "./src/nav/MainNavigation";
import { store, storePersisted } from "./src/store/index"
import { PersistGate } from 'redux-persist/integration/react'

export default function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={storePersisted} >
          <MainNavigation />
        </PersistGate>
      </Provider>
    </>
  );
}
