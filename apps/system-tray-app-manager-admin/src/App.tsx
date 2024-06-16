import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ShortcutList } from "./shortcut/ShortcutList";
import { ShortcutCreate } from "./shortcut/ShortcutCreate";
import { ShortcutEdit } from "./shortcut/ShortcutEdit";
import { ShortcutShow } from "./shortcut/ShortcutShow";
import { AppModelList } from "./appModel/AppModelList";
import { AppModelCreate } from "./appModel/AppModelCreate";
import { AppModelEdit } from "./appModel/AppModelEdit";
import { AppModelShow } from "./appModel/AppModelShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SystemTrayAppManager"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Shortcut"
          list={ShortcutList}
          edit={ShortcutEdit}
          create={ShortcutCreate}
          show={ShortcutShow}
        />
        <Resource
          name="AppModel"
          list={AppModelList}
          edit={AppModelEdit}
          create={AppModelCreate}
          show={AppModelShow}
        />
      </Admin>
    </div>
  );
};

export default App;
