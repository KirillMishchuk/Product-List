import { ApolloProvider } from "@apollo/client";
import { UIManager } from "@app/providers/UIManager";
import { store } from "@app/store";
import { apolloClient } from "@shared/api/apollo/client";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";

const Layout = () => (
    <ApolloProvider client={apolloClient}>
        <Provider store={store}>
            <div>
                <Outlet />
                <UIManager />
            </div>
        </Provider>
    </ApolloProvider>
);

export default Layout;
