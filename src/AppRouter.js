import  React  from "react";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import PrivateRoute from "./components/PrivateRoute";
import Cart from "./containers/Cart";
import ProductList from "./containers/ProductList";
import TestForm from "./containers/TestForm";
import Demo from "./Demo";



function AppRouter(props){

const LazyProductDetail = React.lazy(() =>
  import("./containers/ProductDetails")
);

  return (
    <React.Suspense fallback={<div>...Loading</div>}>
    <Switch>
      <Route path="/" component={Demo} exact={true}/>
      <Route path="/products" component={ProductList} />
      <Route path="/product-detail/:id" component={LazyProductDetail}/>
      <PrivateRoute path="/forms" component={TestForm}></PrivateRoute>
      <Route path="/cart" component={Cart}/>
      <Route component={ErrorPage} />
    </Switch>
    </React.Suspense>
  )
}
export default AppRouter;
