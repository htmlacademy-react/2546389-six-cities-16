import MainScreen from '../../pages/main-screen/main-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import Page404 from '../../pages/page404/page-not-found';
import PrivateRoute from '../../components/private-route/private-route';
import {CityMap } from '../../const';
import {OFFERS} from '../../mocks/offers';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainScreen offers={OFFERS} locations={CityMap}/>} />
        <Route path= {AppRoute.Login} element={<LoginScreen/>} />
        <Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus = {AuthorizationStatus.NoAuth}><FavoritesScreen offers={OFFERS}/></PrivateRoute>}/>
        <Route path={`${AppRoute.Offer}/:offerId`} element={<OfferScreen/>} />
        <Route path={AppRoute.NotFound} element={<Page404/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
