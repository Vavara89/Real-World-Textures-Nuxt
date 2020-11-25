export default {
  getCatalogRoutes(arrayOfCatalogRoutes) {
    const catalogRoutes = arrayOfCatalogRoutes;
    catalogRoutes.map(route => {
      catalogRoutes.push(route + '-slug')
    });
    return catalogRoutes;
  },
  isCatalogRoute() {
    const catalogRoutes = this.getCatalogRoutes();
    return catalogRoutes.indexOf(this.route) >= 0;
  },

}
