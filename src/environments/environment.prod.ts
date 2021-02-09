const productionUrl = "https://dry-reef-08166.herokuapp.com/";
export const environment = {
  production: true,
  productRoutes: `${productionUrl}api/v1/products`,
  recommedRoute: `${productionUrl}api/v1/products?recommend=true`,
  loginRoute: `${productionUrl}api/v1/users/login`,
  logoutRoute: `${productionUrl}api/v1/users/logout`,
};
