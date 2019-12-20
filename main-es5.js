(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/aplikacja-wycieczki.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aplikacja-wycieczki.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"aplikacja-wycieczki\">\r\n  <ngx-spinner></ngx-spinner>\r\n  <header-component></header-component>\r\n\r\n  <div class=\"container main-content\">\r\n<!--    <lista-wycieczek-component-->\r\n<!--      [wycieczki]=\"items\"-->\r\n<!--    ></lista-wycieczek-component>-->\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n\r\n  <footer class=\"page-footer font-small blue\">\r\n    <div class=\"footer-copyright text-center py-3\">SadovSky© 2019 Copyright:\r\n      <a href=\"#page-top\"> Szymon Sadowski</a>\r\n    </div>\r\n  </footer>\r\n\r\n</div>\r\n\r\n\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-panel/admin-panel.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-panel/admin-panel.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"admin-panel\">\r\n  <h1>Admin panel</h1>\r\n\r\n  <div class=\"shadow trips-management\">\r\n    <h2 class=\"mt-2 mb-2\">Zarządzanie wycieczkami</h2>\r\n\r\n    <table class=\"table\">\r\n      <thead class=\"thead-dark\">\r\n      <tr>\r\n        <th scope=\"col\">Zaznaczenie</th>\r\n        <th scope=\"col\">ID</th>\r\n        <th scope=\"col\">Nazwa</th>\r\n        <th scope=\"col\">Kraj docelowy</th>\r\n        <th scope=\"col\">Data rozpoczecia</th>\r\n        <th scope=\"col\">Data zakonczenia</th>\r\n        <th scope=\"col\">Cena</th>\r\n        <th scope=\"col\">Akcje</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr\r\n        *ngFor=\"let wycieczka of this.wycieczki\"\r\n      >\r\n        <td scope=\"row\">\r\n          <div class=\"form-check\">\r\n            <input [(ngModel)]=\"checkedTripsForPromotion[wycieczka[this.IDKEY]]\" class=\"form-check-input checkbox-2x\" type=\"checkbox\" value=\"\" name=\"checkForPromotion\">\r\n          </div>\r\n        </td>\r\n        <td>{{wycieczka[this.IDKEY]}}</td>\r\n        <td><a [routerLink]=\"['/wycieczka', wycieczka[this.IDKEY]]\">{{wycieczka.nazwa}}</a></td>\r\n        <td>{{wycieczka.docelowyKrajWycieczki}}</td>\r\n        <td>{{wycieczka.dataRozpoczecia}}</td>\r\n        <td>{{wycieczka.dataZakonczenia}}</td>\r\n        <td>{{wycieczka.cenaJednostkowa}}</td>\r\n        <td>\r\n          <div class=\"btn-group actions-group\" role=\"group\" aria-label=\"Basic example\">\r\n            <button\r\n              class=\"btn remove-button\"\r\n              mwlConfirmationPopover\r\n              [popoverMessage]=\"'Na pewno chcesz usunąć tą wycieczkę?'\"\r\n              (confirm)=\"this.removeTrip(wycieczka)\"\r\n            >\r\n              <i class=\"fa fa-times\"></i>\r\n            </button>\r\n\r\n            <button\r\n              class=\"btn update-button\"\r\n              [routerLink]=\"['/edit-trip', wycieczka[this.IDKEY]]\"\r\n            >\r\n              <i class=\"fa fa-edit\"></i>\r\n            </button>\r\n\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <hr>\r\n\r\n    <h3>Zdefiniuj promocję: </h3>\r\n\r\n    <div class=\"promotion-section\">\r\n      <form>\r\n        <div class=\"form-group\">\r\n          <label for=\"czasTrwania\">Czas trwania (w minutach):</label>\r\n          <input type=\"number\" min=\"1\" max=\"1000\" step=\"1\" class=\"form-control\" id=\"czasTrwania\" name=\"czasTrwania\" [(ngModel)]=\"czasTrwania\" [value]=\"czasTrwania\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"poziomObnizki\">Poziom obniżki w procentach:</label>\r\n          <input type=\"number\" min=\"1\" max=\"100\" step=\"1\" class=\"form-control\" id=\"poziomObnizki\" name=\"poziomObnizki\" [(ngModel)]=\"poziomObnizki\" [value]=\"poziomObnizki\">\r\n        </div>\r\n      </form>\r\n\r\n      <button\r\n        class=\"btn btn-primary\"\r\n        tooltip=\"Promocja dodana!\" placement=\"bottom\" trigger=\"click\"\r\n        (click)=\"addPromotion()\"\r\n      >\r\n        Zatwierdź promocję\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <new-wycieczka-component></new-wycieczka-component>\r\n\r\n\r\n  <div class=\"additional-actions mt-3 mb-3\">\r\n    <button class=\"btn btn-primary mr-3\" (click)=\"this.addExampleTrips()\">Add example trips</button>\r\n    <button class=\"btn btn-danger\" (click)=\"this.removeAllTrips()\">Remove all trips</button>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/after-order/after-order.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/after-order/after-order.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <h1 class=\"mt-5 thank-you-for-order-msg\">Thank you for making order: {{orderId}}</h1>\r\n</div>\r\n\r\n<button class=\"btn btn-outline-success btn-lg btn-block mt-4 mb-4 go-back-to-main-page-btn\" type=\"button\" routerLink=\"/wycieczki\">Wróć do strony głównej</button>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/drop-file-component/drop.file.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/drop-file-component/drop.file.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"center\">\r\n  <ngx-file-drop dropZoneLabel=\"Drop files here\" (onFileDrop)=\"dropped($event)\"\r\n                 (onFileOver)=\"fileOver($event)\" (onFileLeave)=\"fileLeave($event)\" multiple=\"true\">\r\n    <ng-template ngx-file-drop-content-tmp let-openFileSelector=\"openFileSelector\">\r\n      <div>Upuść pliki do galerii tutaj:&nbsp;&nbsp;</div>\r\n      <br>\r\n      <button class=\"btn btn-primary\" (click)=\"openFileSelector()\">Wybierz pliki</button>\r\n    </ng-template>\r\n  </ngx-file-drop>\r\n  <div class=\"upload-table\">\r\n    <table class=\"table\">\r\n      <thead>\r\n      <tr>\r\n        <th>Nazwa pliku:</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody class=\"upload-name-style\">\r\n      <tr *ngFor=\"let item of files; let i=index\">\r\n        <td><strong>{{ item.relativePath }}</strong></td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-wycieczka/edit-wycieczka.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-wycieczka/edit-wycieczka.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"edit-wycieczka pt-3 shadow\">\r\n  <button type=\"button\" class=\"btn btn-outline-primary mb-3\" [routerLink]=\"['/admin-panel']\">Wróć do panelu</button>\r\n\r\n  <h3>Edytujesz wycieczkę: {{this.wycieczkaId}}</h3>\r\n\r\n  <form [formGroup]=\"modelForm\" (ngSubmit)=\"onSubmit(modelForm)\">\r\n    <div class=\"form-group\">\r\n      <label>nazwa:</label><input name=\"nazwa\" formControlName=\"nazwa\" class=\"form-control\">\r\n      <label>docelowyKrajWycieczki:</label><input name=\"docelowyKrajWycieczki\" formControlName=\"docelowyKrajWycieczki\"\r\n                                                  class=\"form-control\">\r\n      <label>dataRozpoczecia:</label><input name=\"dataRozpoczecia\" formControlName=\"dataRozpoczecia\" class=\"form-control\">\r\n      <label>dataZakonczenia:</label><input name=\"dataZakonczenia\" formControlName=\"dataZakonczenia\" class=\"form-control\">\r\n      <label>cenaJednostkowa:</label><input name=\"cenaJednostkowa\" formControlName=\"cenaJednostkowa\" class=\"form-control\">\r\n      <label>maxIloscMiejsc:</label><input name=\"maxIloscMiejsc\" formControlName=\"maxIloscMiejsc\" class=\"form-control\">\r\n      <label>opis:</label><input name=\"opis\" formControlName=\"opis\" class=\"form-control\">\r\n      <label>linkDoZdj:</label><input name=\"linkDoZdj\" formControlName=\"linkDoZdj\" class=\"form-control\">\r\n    </div>\r\n\r\n    <button class=\"btn btn-primary\" type=\"submit\" tooltip=\"Wycieczka zedytowana!\" placement=\"top\" trigger=\"click\">Edytuj wycieczkę</button>\r\n  </form>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark fixed-top\" id=\"mainNav\">\r\n  <div class=\"container-fluid padded\">\r\n    <a class=\"navbar-brand js-scroll-trigger site-title-bar\" routerLink=\"/wycieczki\">Biuro Podróży SadovSky</a>\r\n    <img src=\"http://reseller-hosting.pl/wp-content/uploads/2018/12/travel.jpg\" width=\"100\" height=\"50\" class=\"ml-3 d-inline-block align-top\" alt=\"\">\r\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\"\r\n            data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\"\r\n            aria-label=\"Toggle navigation\">\r\n      Menu\r\n      <i class=\"fas fa-bars\"></i>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n      <ul class=\"navbar-nav text-uppercase\">\r\n        <li class=\"nav-item dropdown open-cart-toggle\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            Koszyk\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\" onclick=\"event.stopPropagation();\">\r\n            <koszyk-component></koszyk-component>\r\n          </div>\r\n        </li>\r\n\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link go-to-cart-button\" routerLink=\"/koszyk\">Przejdź do koszyka</a>\r\n        </li>\r\n\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/login\">Rejestracja lub logowanie</a>\r\n        </li>\r\n\r\n        <li class=\"nav-item\">\r\n\r\n        </li>\r\n\r\n        <li class=\"nav-item dropdown login-item\">\r\n          <a class=\"nav-link dropdown-toggle logged-user-button\" href=\"#\" id=\"navbarDropdown2\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <span class=\"logged-user\">👤 {{this.getUser()}}</span>\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown2\">\r\n            <div class=\"dropdown-item show-my-orders-button\">\r\n              <button class=\"btn btn-block\" routerLink=\"/view-my-orders\">Pokaż zamówienia</button>\r\n            </div>\r\n            <div\r\n              class=\"dropdown-item admin-panel-button\"\r\n              *ngIf=\"this.isAdmin\"\r\n            >\r\n              <button class=\"btn btn-block\" routerLink=\"/admin-panel\">Panel administratora</button>\r\n            </div>\r\n            <div class=\"dropdown-item\">\r\n              <button class=\"btn btn-block\" (click)=\"this.logout()\">Wyloguj</button>\r\n            </div>\r\n          </div>\r\n        </li>\r\n\r\n\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/koszyk/koszyk.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/koszyk/koszyk.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"koszyk-wrapper\">\r\n  <h5>Koszyk</h5>\r\n\r\n  <div class=\"koszyk\">\r\n    <!--Stwórz nowy komponent, niepowiązany z pozostałymi zawierający informacje o wybranych-->\r\n    <!--wycieczkach, ich ilości oraz sumie całego zamówienia. Zaimplementuj potrzebne elementy-->\r\n    <!--kodu ( komponenty, usługę?) które pozwolą na realizacje powyższego.-->\r\n  </div>\r\n\r\n  <div class=\"container koszyk\">\r\n    <table id=\"cart\" class=\"table table-hover table-condensed\">\r\n      <thead>\r\n      <tr>\r\n        <th style=\"width:50%\">Product</th>\r\n        <th style=\"width:10%\">Price</th>\r\n        <th style=\"width:8%\">Quantity</th>\r\n        <th style=\"width:22%\" class=\"text-center\">Subtotal</th>\r\n        <th style=\"width:10%\"></th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n\r\n\r\n      <tr\r\n        *ngFor=\"let product of this.products\"\r\n      >\r\n        <td\r\n          data-th=\"Product\"\r\n        >\r\n          <div class=\"row\">\r\n            <div class=\"col-2 hidden-sm\">\r\n              <img src=\"{{product.trip.linkDoZdj+'?v='+product.trip.docelowyKrajWycieczki}}\" alt=\"...\" class=\"img-responsive\" width=\"40\"/>\r\n            </div>\r\n            <div class=\"col-10\">\r\n              <h4 class=\"nomargin\">{{product.trip.nazwa}}</h4>\r\n              <p>{{product.trip.opis}}</p>\r\n              <p>Preferowana data: {{product.preferredDate | date}}</p>\r\n            </div>\r\n          </div>\r\n        </td>\r\n        <td data-th=\"Price\">{{product.trip.cenaJednostkowa | currency: 'EUR'}}</td>\r\n        <td data-th=\"Quantity\">\r\n          <input type=\"number\" min=\"0\" class=\"form-control text-center quantity-input\" value=\"{{product.count}}\"\r\n                 (change)=\"this.countChanged($event, product)\">\r\n        </td>\r\n        <td data-th=\"Subtotal\"\r\n            class=\"text-center\">{{product.trip.cenaJednostkowa * product.count | currency: 'EUR'}}</td>\r\n        <td class=\"actions\" data-th=\"\">\r\n          <!--        <button class=\"btn btn-info btn-sm\"><i class=\"fa fa-refresh\"></i></button>-->\r\n          <button\r\n            class=\"btn btn-danger btn-sm remove-item-from-cart-button\"\r\n            (click)=\"onDeleteProduct(product)\"\r\n          >\r\n            <i class=\"fa fa-trash-o\"></i>\r\n          </button>\r\n        </td>\r\n      </tr>\r\n\r\n\r\n      </tbody>\r\n      <tfoot>\r\n      <tr>\r\n        <td><a href=\"#\" class=\"btn btn-warning\"><i class=\"fa fa-angle-left\"></i> Continue Shopping</a></td>\r\n        <td colspan=\"2\" class=\"hidden-xs\"></td>\r\n        <td class=\"hidden-xs text-center\"><strong>Total: {{this.getTotal() | currency: 'EUR'}}</strong></td>\r\n        <td>\r\n          <button\r\n            class=\"btn btn-success btn-block checkout-button\"\r\n            mwlConfirmationPopover\r\n            [popoverMessage]=\"'Na pewno chcesz to zrobic?'\"\r\n            (confirm)=\"this.submitOrder()\"\r\n            *ngIf=\"products.length > 0\"\r\n          >Checkout <i class=\"fa fa-angle-right\"></i>\r\n          </button>\r\n\r\n        </td>\r\n      </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/lista-wycieczek/lista-wycieczek.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/lista-wycieczek/lista-wycieczek.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lista-wycieczek\">\r\n  <h1 class=\"mb-4\">Lista dostępnych wycieczek</h1>\r\n\r\n  <div class=\"row itemsBlock\">\r\n    <div class=\"col-2 filter-section\">\r\n\r\n      <form\r\n        [formGroup]=\"filterForm\"\r\n      >\r\n        <div class=\"form-group\">\r\n          <label>Docelowy kraj wycieczki:</label>\r\n\r\n          <angular2-multiselect [data]=\"this.dropdownList\"\r\n                                formControlName=\"docelowyKrajWycieczki\"\r\n                                [settings]=\"{text: 'Wybierz'}\"\r\n                                [(ngModel)]=\"selectedItems\"\r\n          >\r\n\r\n          </angular2-multiselect>\r\n\r\n          <hr/>\r\n\r\n          <label>Cena minimalna:</label>\r\n          <input name=\"priceMin\" formControlName=\"priceMin\" class=\"form-control\" type=\"number\" min=\"0\"\r\n                 max=\"100000\"/>\r\n\r\n          <label>Cena maksymalna:</label>\r\n          <input name=\"priceMax\" formControlName=\"priceMax\" class=\"form-control\" type=\"number\" min=\"0\"\r\n                 max=\"100000\"/>\r\n\r\n          <hr>\r\n\r\n          <label class=\"d-none d-md-block\">Przedział cenowy:</label>\r\n\r\n          <ng5-slider\r\n            [(value)]=\"this.filterForm.get('priceMin').value\"\r\n            [(highValue)]=\"this.filterForm.get('priceMax').value\"\r\n            [options]=\"priceRangeOptions\"\r\n            (valueChange)=\"this.refreshFormGroup()\"\r\n            (highValueChange)=\"this.refreshFormGroup()\"\r\n            class=\"d-none d-md-block\"\r\n          ></ng5-slider>\r\n\r\n          <hr/>\r\n\r\n          <label>Średnia ocena:</label>\r\n\r\n          <input name=\"avgRating\" formControlName=\"avgRating\" class=\"form-control\" type=\"number\" min=\"0\" max=\"5\"\r\n                 step=\"1\"/>\r\n\r\n\r\n          <div class=\"mt-4\">\r\n            <ng5-slider\r\n              [(value)]=\"this.filterForm.get('avgRating').value\"\r\n              [options]=\"this.tickOptions\"\r\n              (valueChange)=\"this.refreshFormGroup()\"\r\n              class=\"d-none d-md-block\"\r\n            ></ng5-slider>\r\n          </div>\r\n        </div>\r\n      </form>\r\n\r\n\r\n    </div>\r\n    <div class=\"col-10\">\r\n      <div class=\"row\">\r\n\r\n        <wycieczka-component\r\n          class=\"col-lg-4 col-md-6 col-sm-12 col-12 single-wycieczka\"\r\n          *ngFor=\"let item of wycieczki  | equityfilter: getFilteringCriteria() | paginate: { itemsPerPage: this.specifiedItemsPerPage, currentPage: page }\"\r\n          [wycieczka]=\"item\"\r\n          [isCheapest]=\"(item[this.IDKEY]==minPriceTrip[this.IDKEY])\"\r\n          [isMostExpensive]=\"(item[this.IDKEY]==maxPriceTrip[this.IDKEY])\"\r\n          (reservationChanged)=\"calculateSumOfReservedTrips($event)\"\r\n          (tripAddedToCart)=\"addTripToCart($event)\"\r\n        ></wycieczka-component>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"pagination-wrapper pb-5\">\r\n  <div class=\"pagination-controls-wrappers mb-5\">\r\n    <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\r\n  </div>\r\n\r\n  Ile wyświetlać na stronę?: <input type=\"number\" min=\"1\" step=\"1\" id=\"ileNaStrone\" name=\"ileNaStrone\"\r\n                                    [(ngModel)]=\"this.specifiedItemsPerPage\" [value]=\"this.specifiedItemsPerPage\">\r\n</div>\r\n\r\n\r\n<div\r\n  class=\"total-trips shadow mb-4\"\r\n  [ngClass]=\"{\r\n        'low-sum': (sum <10),\r\n        'high-sum': (sum >=10)\r\n      }\"\r\n>\r\n  Suma zarezerwowanych wycieczek: {{sum}}\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/new-wycieczka/new-wycieczka.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/new-wycieczka/new-wycieczka.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nowa-wycieczka pt-3 shadow mt-3\">\r\n  <h3>Dodaj nową wycieczkę</h3>\r\n\r\n  <form [formGroup]=\"modelForm\" (ngSubmit)=\"onSubmit(modelForm)\">\r\n    <div class=\"form-group\">\r\n      <label>nazwa:</label><input name=\"nazwa\" formControlName=\"nazwa\" class=\"form-control\">\r\n      <label>docelowyKrajWycieczki:</label><input name=\"docelowyKrajWycieczki\" formControlName=\"docelowyKrajWycieczki\"\r\n                                                  class=\"form-control\">\r\n      <label>dataRozpoczecia:</label><input name=\"dataRozpoczecia\" formControlName=\"dataRozpoczecia\" class=\"form-control\">\r\n      <label>dataZakonczenia:</label><input name=\"dataZakonczenia\" formControlName=\"dataZakonczenia\" class=\"form-control\">\r\n      <label>cenaJednostkowa:</label><input name=\"cenaJednostkowa\" formControlName=\"cenaJednostkowa\" class=\"form-control\">\r\n      <label>maxIloscMiejsc:</label><input name=\"maxIloscMiejsc\" formControlName=\"maxIloscMiejsc\" class=\"form-control\">\r\n      <label>opis:</label><input name=\"opis\" formControlName=\"opis\" class=\"form-control\">\r\n      <label>linkDoZdj:</label><input name=\"linkDoZdj\" formControlName=\"linkDoZdj\" class=\"form-control\">\r\n    </div>\r\n\r\n    <drop-file></drop-file>\r\n\r\n    <hr>\r\n\r\n    <button class=\"btn btn-primary add-new-trip-btn\" type=\"submit\" tooltip=\"Wycieczka dodana!\" placement=\"top\" trigger=\"click\">Dodaj wycieczkę</button>\r\n  </form>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ocena/ocena.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ocena/ocena.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <star-rating\r\n    value=\"0\"\r\n    checkedcolor=\"gold\"\r\n    uncheckedcolor=\"gray\"\r\n    size=\"24px\"\r\n    readonly=\"{{this.readonly}}\"\r\n    (rate)=\"onRate($event)\"\r\n  >\r\n  </star-rating>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-in/sign-in.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-in/sign-in.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section class=\"container py-4\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <ul id=\"tabsJustified\" class=\"nav nav-tabs\">\r\n        <li class=\"nav-item\"><a href=\"\" data-target=\"#home1\" data-toggle=\"tab\" class=\"nav-link small text-uppercase\">Rejestracja</a>\r\n        </li>\r\n        <li class=\"nav-item\"><a href=\"\" data-target=\"#profile1\" data-toggle=\"tab\"\r\n                                class=\"nav-link small text-uppercase active\">Logowanie</a></li>\r\n      </ul>\r\n      <br>\r\n      <div id=\"tabsJustifiedContent\" class=\"tab-content\">\r\n        <div id=\"home1\" class=\"tab-pane fade\">\r\n\r\n\r\n          <div class=\"card\">\r\n            <div class=\"card-block\">\r\n              <h2 class=\"mt-2 ml-2\">Rejestracja</h2>\r\n              <!--<ul class=\"list-inline text-center\">-->\r\n                <!--<li class=\"list-inline-item\"><a class=\"btn btn-lg\" href=\"\" title=\"Twitter\"><i-->\r\n                  <!--class=\"fa fa-2x fa-twitter\"></i></a>&nbsp;-->\r\n                <!--</li>-->\r\n                <!--<li class=\"list-inline-item\"><a class=\"btn btn-lg\" href=\"\" title=\"\"><i-->\r\n                  <!--class=\"fa fa-2x fa-google-plus\"></i></a>&nbsp;-->\r\n                <!--</li>-->\r\n                <!--<li class=\"list-inline-item\"><a class=\"btn btn-lg\" href=\"\" title=\"Facebook\"><i-->\r\n                  <!--class=\"fa fa-2x fa-facebook\"></i></a></li>-->\r\n              <!--</ul>-->\r\n              <form role=\"form\" [formGroup]=\"modelFormRegister\" (ngSubmit)=\"onSubmitRegister()\">\r\n                <div class=\"form-group row\">\r\n                  <label for=\"input2EmailForm\" class=\"sr-only control-label\">email</label>\r\n                  <div class=\"offset-sm-2 col-sm-8\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"input2EmailForm\" placeholder=\"email\" required=\"\" formControlName=\"email\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label for=\"input2PasswordForm\" class=\"sr-only control-label\">password</label>\r\n                  <div class=\"offset-sm-2 col-sm-8\">\r\n                    <input type=\"password\" class=\"form-control\" id=\"input2PasswordForm\" placeholder=\"password\" required=\"\" formControlName=\"password\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label for=\"input2Password2Form\" class=\"sr-only control-label\">verify</label>\r\n                  <div class=\"offset-sm-2 col-sm-8\">\r\n                    <input type=\"password\" class=\"form-control\" id=\"input2Password2Form\" placeholder=\"verify password\"\r\n                           required=\"\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <div class=\"offset-sm-2 col-sm-8 pb-3 pt-2\">\r\n                    <button type=\"submit\" class=\"btn btn-outline-secondary btn-lg btn-block\">Zarejestruj</button>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div id=\"profile1\" class=\"tab-pane fade active show\">\r\n\r\n\r\n          <div class=\"card\">\r\n            <div class=\"card-block\">\r\n              <h2 class=\"mt-2 ml-2\">Logowanie</h2>\r\n              <!--<ul class=\"list-inline text-center\">-->\r\n                <!--<li class=\"list-inline-item\"><a class=\"btn btn-lg\" href=\"\" title=\"Twitter\"><i-->\r\n                  <!--class=\"fa fa-2x fa-twitter\"></i></a>&nbsp;-->\r\n                <!--</li>-->\r\n                <!--<li class=\"list-inline-item\"><a class=\"btn btn-lg\" href=\"\" title=\"\"><i-->\r\n                  <!--class=\"fa fa-2x fa-google-plus\"></i></a>&nbsp;-->\r\n                <!--</li>-->\r\n                <!--<li class=\"list-inline-item\"><a class=\"btn btn-lg\" href=\"\" title=\"Facebook\"><i-->\r\n                  <!--class=\"fa fa-2x fa-facebook\"></i></a></li>-->\r\n              <!--</ul>-->\r\n              <form role=\"form\" [formGroup]=\"modelFormLogin\" (ngSubmit)=\"onSubmitLogin()\">\r\n                <div class=\"form-group row\">\r\n                  <label for=\"inputEmailForm\" class=\"sr-only control-label\">Email</label>\r\n                  <div class=\"offset-sm-2 col-sm-8\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"inputEmailForm\" placeholder=\"email\" required=\"\" formControlName=\"email\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label for=\"inputPasswordForm\" class=\"sr-only control-label\">Password</label>\r\n                  <div class=\"offset-sm-2 col-sm-8\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"inputPasswordForm\" placeholder=\"password\" required=\"\" formControlName=\"password\" type=\"password\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <div class=\"offset-sm-2 col-sm-8\">\r\n                    <div class=\"checkbox small\">\r\n                      <label>\r\n                        <input type=\"checkbox\"> Remember me\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <div class=\"offset-sm-2 col-sm-8 pb-3 pt-2\">\r\n                    <button type=\"submit\" class=\"btn btn-outline-secondary btn-lg btn-block\" trigger=\"click\" id=\"login-button\">Zaloguj</button>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-my-orders/view-my-orders.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-my-orders/view-my-orders.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container main\">\r\n  <h1>Showing orders:</h1>\r\n\r\n  <div\r\n    *ngFor=\"let item of this.filteredOrders\"\r\n    class=\"order-summary shadow\"\r\n  >\r\n    <h5>order {{item[this.IDKEY]}} made on {{item.creationDate | date}}</h5>\r\n\r\n    <div class=\"container mt-3 koszyk\">\r\n      <table id=\"cart\" class=\"table table-hover table-condensed\">\r\n        <thead>\r\n        <tr>\r\n          <th style=\"width:50%\">Product</th>\r\n          <th style=\"width:10%\">Price</th>\r\n          <th style=\"width:8%\">Quantity</th>\r\n          <th style=\"width:22%\" class=\"text-center\">Subtotal</th>\r\n          <th style=\"width:10%\"></th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n\r\n        <tr\r\n          *ngFor=\"let product of item.products\"\r\n        >\r\n          <td\r\n            data-th=\"Product\"\r\n          >\r\n            <div class=\"row\">\r\n              <div class=\"col-2 hidden-sm\">\r\n                <img src=\"{{product.trip.linkDoZdj+'?v='+product.trip.docelowyKrajWycieczki}}\" alt=\"...\"\r\n                     class=\"img-responsive\" width=\"40\"/>\r\n              </div>\r\n              <div class=\"col-10\">\r\n                <h4 class=\"nomargin\">{{product.trip.nazwa}}</h4>\r\n                <p>{{product.trip.opis}}</p>\r\n                <p>Wybrana preferowana data: {{product.preferredDate | date}}</p>\r\n              </div>\r\n            </div>\r\n          </td>\r\n          <td data-th=\"Price\">{{product.trip.cenaJednostkowa | currency: 'EUR'}}</td>\r\n          <td data-th=\"Quantity\" class=\"quantity\">\r\n            {{product.count}}\r\n          </td>\r\n          <td data-th=\"Subtotal\"\r\n              class=\"text-center\">{{product.trip.cenaJednostkowa * product.count | currency: 'EUR'}}</td>\r\n        </tr>\r\n\r\n        </tbody>\r\n        <tfoot>\r\n        <tr>\r\n          <td class=\"hidden-xs text-center\"><strong>Total: {{this.getTotal(item.products) | currency: 'EUR'}}</strong>\r\n          </td>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/wycieczka-detal/wycieczka-detal.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/wycieczka-detal/wycieczka-detal.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wycieczka-detal-wrapper\">\r\n  <div class=\"card mb-4 shadow-lg wycieczka-detail\">\r\n    <div>\r\n      <button\r\n        class=\"btn add-to-cart-button\"\r\n        tooltip=\"Wycieczka dodana do koszyka!\" placement=\"bottom\" trigger=\"click\"\r\n        (click)=\"this.koszykService.addProduct(this.wycieczka, this.preferredDate)\"\r\n      >\r\n        <i class=\"fa fa-plus\"></i>\r\n      </button>\r\n    </div>\r\n\r\n\r\n    <img src=\"{{this.wycieczka.linkDoZdj}}\" class=\"detail-img\"/>\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">{{this.wycieczka.nazwa | uppercase}}</h5>\r\n      <p class=\"card-text\">{{this.wycieczka.opis}}</p>\r\n    </div>\r\n    <ul class=\"list-group list-group-flush\">\r\n      <li class=\"list-group-item\">Kraj docelowy: {{this.wycieczka.docelowyKrajWycieczki | uppercase}}</li>\r\n      <li class=\"list-group-item\">\r\n        📅 {{this.wycieczka.dataRozpoczecia}} - {{this.wycieczka.dataZakonczenia}}\r\n        📅\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        💶 Cena: {{this.wycieczka.cenaJednostkowa | currency: 'EUR'}}\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        ⚠️Max ilość miejsc: {{this.wycieczka.maxIloscMiejsc}}\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <div *ngIf=\"this.wycieczka.ileZarezerwowano == this.wycieczka.maxIloscMiejsc; else availablePlaces\">\r\n          Brak dostępnych miejsc!\r\n        </div>\r\n\r\n        <ng-template #availablePlaces>\r\n          Ile zarezerwowano: {{this.wycieczka.ileZarezerwowano}}\r\n        </ng-template>\r\n      </li>\r\n    </ul>\r\n    <div class=\"card-body\">\r\n      <h6>Preferowana data wycieczki</h6>\r\n      <div class=\"date-picker-wrapper mb-2\">\r\n        <angular2-date-picker [(ngModel)]=\"preferredDate\" [settings]=\"settings\"></angular2-date-picker>\r\n      </div>\r\n\r\n\r\n      <button\r\n        class=\"btn btn-primary plus-button\"\r\n        [ngClass]=\"{'hidden-button': this.wycieczka.ileZarezerwowano == this.wycieczka.maxIloscMiejsc}\"\r\n        (click)=\"onClickPlusButton(this.wycieczka)\"\r\n      >\r\n        <i class=\"fa fa-plus\"></i>\r\n      </button>\r\n\r\n      <button\r\n        class=\"btn btn-warning minus-button\"\r\n        [ngClass]=\"{'hidden-button': this.wycieczka.ileZarezerwowano == 0}\"\r\n        (click)=\"onClickMinusButton(this.wycieczka)\"\r\n      >\r\n        <i class=\"fa fa-minus\"></i>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"card-body\">\r\n      <h6>Galeria zdjęć</h6>\r\n\r\n      <!--<gallery-->\r\n        <!--[flexBorderSize]=\"4\"-->\r\n        <!--[flexImageSize]=\"11\"-->\r\n        <!--[maxRowsPerPage]=\"100\"-->\r\n      <!--&gt;-->\r\n      <!--</gallery>-->\r\n      <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\r\n    </div>\r\n\r\n    <div class=\"card-body\">\r\n      <h6>Oceń tą wycieczkę</h6>\r\n\r\n      <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"!this.didUserReserveTrip\">\r\n        You need to have at least one reservation in order to rate this trip!\r\n      </div>\r\n\r\n      <div *ngIf=\"this.alreadyRated\">\r\n        Nie można ocenić! Już oceniłeś!\r\n      </div>\r\n\r\n      <ocena-component\r\n        (ratingAdded)=\"addRating($event)\"\r\n        [readonly]=\"!this.didUserReserveTrip || (this.alreadyRated)\"\r\n      ></ocena-component>\r\n\r\n      <hr>\r\n\r\n      <h6\r\n        *ngIf=\"this.ratings.length > 0\"\r\n      >Zestawienie ocen</h6>\r\n\r\n\r\n\r\n      <div\r\n        *ngFor=\"let item of this.ratings\"\r\n      >\r\n        <div>\r\n          <div style=\"width:10%; line-height:1;\">\r\n            <div style=\"height:9px; margin:5px 0;\">{{item[0]}} <span class=\"glyphicon glyphicon-star\"></span></div>\r\n          </div>\r\n          <div style=\"width:80%;\">\r\n            <div class=\"row\">\r\n              <div class=\"col-10\">\r\n                <div class=\"progress\" style=\"height:9px; margin:8px 0;\">\r\n                  <div class=\"progress-bar progress-bar-primary\" role=\"progressbar\" [attr.aria-valuenow]=\"item[0]\" aria-valuemin=\"0\" aria-valuemax=\"5\" [style.width]=\"item[0]*20+'%'\">\r\n                    <span class=\"sr-only\">80% Complete (danger)</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-2\">\r\n                <span>{{item[1]}}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card-body\">\r\n      <h6>Mapa wycieczki:</h6>\r\n\r\n      <div id=\"mapa\" class=\"map\"></div>\r\n    </div>\r\n\r\n    <div class=\"card-body\">\r\n      <h6>Dodaj swoją opinię:</h6>\r\n\r\n      <div class=\"form-group\">\r\n      <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"4\"\r\n                [attr.disabled]=\"this.didUserReserveTrip ? null : true\"\r\n      >\r\n      </textarea>\r\n      </div>\r\n\r\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/wycieczka/wycieczka.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/wycieczka/wycieczka.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mb-4 shadow-lg wycieczka-card\" style=\"width: 18rem;\"\r\n     [ngClass]=\"{\r\n                'low-available-places': (wycieczka.maxIloscMiejsc - wycieczka.ileZarezerwowano) <= 3,\r\n                'cheapest': isCheapest,\r\n                'most-expensive': isMostExpensive\r\n             }\"\r\n>\r\n  <div>\r\n    <button\r\n      class=\"btn add-to-cart-button\"\r\n      tooltip=\"Wycieczka dodana do koszyka!\" placement=\"bottom\" trigger=\"click\"\r\n      (click)=\"onTripAddedToCart(wycieczka)\"\r\n    >\r\n      <i class=\"fa fa-plus\"></i>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"main-section\" [routerLink]=\"['/wycieczka', wycieczka[this.IDKEY]]\">\r\n    <img src=\"{{wycieczka.linkDoZdj+'?v='+wycieczka.docelowyKrajWycieczki}}\" class=\"rounded-circle card-img\"/>\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">{{wycieczka.nazwa | uppercase}}</h5>\r\n    </div>\r\n  </div>\r\n\r\n  <ul class=\"list-group list-group-flush\">\r\n    <li class=\"list-group-item\">Kraj docelowy: {{wycieczka.docelowyKrajWycieczki | uppercase}}</li>\r\n    <li class=\"list-group-item\">\r\n      📅 {{wycieczka.dataRozpoczecia}} - {{wycieczka.dataZakonczenia}}\r\n      📅\r\n    </li>\r\n    <li class=\"list-group-item\">\r\n      💶 Cena: {{wycieczka.cenaJednostkowa | currency: 'EUR'}}\r\n    </li>\r\n    <li class=\"list-group-item\">\r\n      ⚠️ Max ilość miejsc: {{wycieczka.maxIloscMiejsc}}\r\n    </li>\r\n    <li class=\"list-group-item\">\r\n      <div *ngIf=\"wycieczka.ileZarezerwowano == wycieczka.maxIloscMiejsc; else availablePlaces\">\r\n        Brak dostępnych miejsc!\r\n      </div>\r\n\r\n      <ng-template #availablePlaces>\r\n        Ile zarezerwowano: {{wycieczka.ileZarezerwowano}}\r\n      </ng-template>\r\n    </li>\r\n    <li class=\"list-group-item\" *ngIf=\"(wycieczka && wycieczka.oceny && wycieczka.oceny.length > 0)\">\r\n      <div>⭐ Średnia ocena: {{this.getTripAvgRating(wycieczka) | number}}</div>\r\n    </li>\r\n  </ul>\r\n  <div class=\"card-body\">\r\n      <button\r\n        class=\"btn btn-primary plus-button\"\r\n        [ngClass]=\"{'hidden-button': wycieczka.ileZarezerwowano == wycieczka.maxIloscMiejsc}\"\r\n        (click)=\"onClickPlusButton(wycieczka)\"\r\n      >\r\n      <i class=\"fa fa-plus\"></i>\r\n    </button>\r\n\r\n    <button\r\n      class=\"btn btn-warning minus-button\"\r\n      [ngClass]=\"{'hidden-button': wycieczka.ileZarezerwowano == 0}\"\r\n      (click)=\"onClickMinusButton(wycieczka)\"\r\n    >\r\n      <i class=\"fa fa-minus\"></i>\r\n    </button>\r\n  </div>\r\n  <div class=\"card-body oceny-section\">\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/aplikacja-wycieczki.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/aplikacja-wycieczki.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".main-content {\r\n  margin-top: 5rem;\r\n}\r\n\r\n.page-footer {\r\n  background-color: #212529;\r\n  color: #45ADA8;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBsaWthY2phLXd5Y2llY3praS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcGxpa2FjamEtd3ljaWVjemtpLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250ZW50IHtcclxuICBtYXJnaW4tdG9wOiA1cmVtO1xyXG59XHJcblxyXG4ucGFnZS1mb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XHJcbiAgY29sb3I6ICM0NUFEQTg7XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/aplikacja-wycieczki.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/aplikacja-wycieczki.component.ts ***!
          \**************************************************/
        /*! exports provided: AplikacjaWycieczkiComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AplikacjaWycieczkiComponent", function () { return AplikacjaWycieczkiComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            /* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
            /* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/forEach */ "./node_modules/lodash/forEach.js");
            /* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(lodash_forEach__WEBPACK_IMPORTED_MODULE_5__);
            var AplikacjaWycieczkiComponent = /** @class */ (function () {
                function AplikacjaWycieczkiComponent(socket, toastr) {
                    var _this = this;
                    this.socket = socket;
                    this.toastr = toastr;
                    this.socket.on('message', function (event) {
                        console.dir(event);
                        console.log(lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default()(event.currentPromotions, {}));
                        if (('currentPromotions' in event) && !lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default()(event.currentPromotions, {})) {
                            var message_1 = '';
                            lodash_forEach__WEBPACK_IMPORTED_MODULE_5___default()(event.currentPromotions, function (value, key) {
                                message_1 += "<a href=\"/wycieczka/" + key + "\">" + key + "</a>: " + value + "%<br>";
                            });
                            _this.toastr.success(message_1, '🔥 Nowe promocje 🔥 Kliknij id aby sprawdzić 🔥', {
                                positionClass: 'toast-bottom-right',
                                enableHtml: true,
                                disableTimeOut: true
                            });
                        }
                        else if ('finishedPromotions' in event) {
                            var message_2 = '';
                            event.finishedPromotions.forEach(function (value) {
                                message_2 += value + "<br>";
                            });
                            _this.toastr.error(message_2, 'Zakończyły się promocje', { positionClass: 'toast-bottom-right', enableHtml: true, disableTimeOut: true });
                        }
                        else if (lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default()(event.currentPromotions, {})) {
                            _this.toastr.clear();
                            console.log('here');
                            _this.toastr.success('🔥 Bądź uważny! Nowe promocje pojawią się tutaj 🔥', '🔥 Polowanie na promocje', {
                                positionClass: 'toast-bottom-right',
                                enableHtml: true,
                                disableTimeOut: true
                            });
                        }
                    });
                }
                return AplikacjaWycieczkiComponent;
            }());
            AplikacjaWycieczkiComponent.ctorParameters = function () { return [
                { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
            ]; };
            AplikacjaWycieczkiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'aplikacja-wycieczki',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./aplikacja-wycieczki.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/aplikacja-wycieczki.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./aplikacja-wycieczki.component.css */ "./src/app/aplikacja-wycieczki.component.css")).default]
                })
            ], AplikacjaWycieczkiComponent);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_lista_wycieczek_lista_wycieczek_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/lista-wycieczek/lista-wycieczek.component */ "./src/app/components/lista-wycieczek/lista-wycieczek.component.ts");
            /* harmony import */ var _components_koszyk_koszyk_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/koszyk/koszyk.component */ "./src/app/components/koszyk/koszyk.component.ts");
            /* harmony import */ var _components_wycieczka_detal_wycieczka_detal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/wycieczka-detal/wycieczka-detal.component */ "./src/app/components/wycieczka-detal/wycieczka-detal.component.ts");
            /* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/components/sign-in/sign-in.component.ts");
            /* harmony import */ var _guards_loggedin_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/loggedin.auth.guard */ "./src/app/guards/loggedin.auth.guard.ts");
            /* harmony import */ var _components_new_wycieczka_new_wycieczka_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/new-wycieczka/new-wycieczka.component */ "./src/app/components/new-wycieczka/new-wycieczka.component.ts");
            /* harmony import */ var _components_after_order_after_order_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/after-order/after-order.component */ "./src/app/components/after-order/after-order.component.ts");
            /* harmony import */ var _components_view_my_orders_view_my_orders_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/view-my-orders/view-my-orders.component */ "./src/app/components/view-my-orders/view-my-orders.component.ts");
            /* harmony import */ var _components_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/admin-panel/admin-panel.component */ "./src/app/components/admin-panel/admin-panel.component.ts");
            /* harmony import */ var _components_edit_wycieczka_edit_wycieczka_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/edit-wycieczka/edit-wycieczka.component */ "./src/app/components/edit-wycieczka/edit-wycieczka.component.ts");
            /* harmony import */ var _guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guards/admin.auth.guard */ "./src/app/guards/admin.auth.guard.ts");
            var routes = [
                { path: '', redirectTo: '/wycieczki', pathMatch: 'full' },
                { path: 'wycieczki', component: _components_lista_wycieczek_lista_wycieczek_component__WEBPACK_IMPORTED_MODULE_4__["ListaWycieczekComponent"], canActivate: [_guards_loggedin_auth_guard__WEBPACK_IMPORTED_MODULE_8__["LoggedInAuthGuard"]] },
                { path: 'koszyk', component: _components_koszyk_koszyk_component__WEBPACK_IMPORTED_MODULE_5__["KoszykComponent"], canActivate: [_guards_loggedin_auth_guard__WEBPACK_IMPORTED_MODULE_8__["LoggedInAuthGuard"]] },
                { path: 'wycieczka/:id', component: _components_wycieczka_detal_wycieczka_detal_component__WEBPACK_IMPORTED_MODULE_6__["WycieczkaDetalComponent"], canActivate: [_guards_loggedin_auth_guard__WEBPACK_IMPORTED_MODULE_8__["LoggedInAuthGuard"]] },
                { path: 'login', component: _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__["SignInComponent"] },
                { path: 'add-trip', component: _components_new_wycieczka_new_wycieczka_component__WEBPACK_IMPORTED_MODULE_9__["NewWycieczkaComponent"], canActivate: [_guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AdminAuthGuard"]] },
                { path: 'after-order/:id', component: _components_after_order_after_order_component__WEBPACK_IMPORTED_MODULE_10__["AfterOrderComponent"], canActivate: [_guards_loggedin_auth_guard__WEBPACK_IMPORTED_MODULE_8__["LoggedInAuthGuard"]] },
                { path: 'view-my-orders', component: _components_view_my_orders_view_my_orders_component__WEBPACK_IMPORTED_MODULE_11__["ViewMyOrdersComponent"], canActivate: [_guards_loggedin_auth_guard__WEBPACK_IMPORTED_MODULE_8__["LoggedInAuthGuard"]] },
                { path: 'admin-panel', component: _components_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_12__["AdminPanelComponent"], canActivate: [_guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AdminAuthGuard"]] },
                { path: 'edit-trip/:id', component: _components_edit_wycieczka_edit_wycieczka_component__WEBPACK_IMPORTED_MODULE_13__["EditWycieczkaComponent"], canActivate: [_guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AdminAuthGuard"]] },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
                    ],
                    exports: [
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
                    ]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _aplikacja_wycieczki_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aplikacja-wycieczki.component */ "./src/app/aplikacja-wycieczki.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
            /* harmony import */ var _components_lista_wycieczek_lista_wycieczek_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/lista-wycieczek/lista-wycieczek.component */ "./src/app/components/lista-wycieczek/lista-wycieczek.component.ts");
            /* harmony import */ var _components_wycieczka_wycieczka_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/wycieczka/wycieczka.component */ "./src/app/components/wycieczka/wycieczka.component.ts");
            /* harmony import */ var _components_ocena_ocena_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ocena/ocena.component */ "./src/app/components/ocena/ocena.component.ts");
            /* harmony import */ var ng_starrating__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-starrating */ "./node_modules/ng-starrating/fesm2015/ng-starrating.js");
            /* harmony import */ var _components_new_wycieczka_new_wycieczka_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/new-wycieczka/new-wycieczka.component */ "./src/app/components/new-wycieczka/new-wycieczka.component.ts");
            /* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm2015/ng2-tooltip-directive.js");
            /* harmony import */ var _components_wycieczka_detal_wycieczka_detal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/wycieczka-detal/wycieczka-detal.component */ "./src/app/components/wycieczka-detal/wycieczka-detal.component.ts");
            /* harmony import */ var _components_koszyk_koszyk_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/koszyk/koszyk.component */ "./src/app/components/koszyk/koszyk.component.ts");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _pipes_equity_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/equity-filter.pipe */ "./src/app/pipes/equity-filter.pipe.ts");
            /* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/fesm2015/angular2-multiselect-dropdown.js");
            /* harmony import */ var angular2_image_gallery__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular2-image-gallery */ "./node_modules/angular2-image-gallery/fesm2015/angular2-image-gallery.js");
            /* harmony import */ var angular2_datetimepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular2-datetimepicker */ "./node_modules/angular2-datetimepicker/index.js");
            /* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/components/sign-in/sign-in.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            /* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
            /* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
            /* harmony import */ var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! angular-confirmation-popover */ "./node_modules/angular-confirmation-popover/fesm2015/angular-confirmation-popover.js");
            /* harmony import */ var _components_after_order_after_order_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/after-order/after-order.component */ "./src/app/components/after-order/after-order.component.ts");
            /* harmony import */ var _components_view_my_orders_view_my_orders_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/view-my-orders/view-my-orders.component */ "./src/app/components/view-my-orders/view-my-orders.component.ts");
            /* harmony import */ var _components_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/admin-panel/admin-panel.component */ "./src/app/components/admin-panel/admin-panel.component.ts");
            /* harmony import */ var _components_edit_wycieczka_edit_wycieczka_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/edit-wycieczka/edit-wycieczka.component */ "./src/app/components/edit-wycieczka/edit-wycieczka.component.ts");
            /* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm2015/ng5-slider.js");
            /* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm2015/ngx-file-drop.js");
            /* harmony import */ var _components_drop_file_component_drop_file_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/drop-file-component/drop.file.component */ "./src/app/components/drop-file-component/drop.file.component.ts");
            /* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
            /* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/ __webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_34__);
            /* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
            /* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./const */ "./src/app/const.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            /* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    providers: [
                        { provide: 'Window', useValue: window }
                    ],
                    declarations: [
                        _aplikacja_wycieczki_component__WEBPACK_IMPORTED_MODULE_3__["AplikacjaWycieczkiComponent"],
                        _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                        _components_lista_wycieczek_lista_wycieczek_component__WEBPACK_IMPORTED_MODULE_6__["ListaWycieczekComponent"],
                        _components_wycieczka_wycieczka_component__WEBPACK_IMPORTED_MODULE_7__["WycieczkaComponent"],
                        _components_ocena_ocena_component__WEBPACK_IMPORTED_MODULE_8__["OcenaComponent"],
                        _components_new_wycieczka_new_wycieczka_component__WEBPACK_IMPORTED_MODULE_10__["NewWycieczkaComponent"],
                        _components_koszyk_koszyk_component__WEBPACK_IMPORTED_MODULE_13__["KoszykComponent"],
                        _pipes_equity_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["EquityFilterPipe"],
                        _components_wycieczka_detal_wycieczka_detal_component__WEBPACK_IMPORTED_MODULE_12__["WycieczkaDetalComponent"],
                        _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_19__["SignInComponent"],
                        _components_after_order_after_order_component__WEBPACK_IMPORTED_MODULE_27__["AfterOrderComponent"],
                        _components_view_my_orders_view_my_orders_component__WEBPACK_IMPORTED_MODULE_28__["ViewMyOrdersComponent"],
                        _components_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_29__["AdminPanelComponent"],
                        _components_edit_wycieczka_edit_wycieczka_component__WEBPACK_IMPORTED_MODULE_30__["EditWycieczkaComponent"],
                        _components_drop_file_component_drop_file_component__WEBPACK_IMPORTED_MODULE_33__["DropFileComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                        ng_starrating__WEBPACK_IMPORTED_MODULE_9__["RatingModule"],
                        ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                        angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__["AngularMultiSelectModule"],
                        angular2_image_gallery__WEBPACK_IMPORTED_MODULE_17__["Angular2ImageGalleryModule"],
                        angular2_datetimepicker__WEBPACK_IMPORTED_MODULE_18__["AngularDateTimePickerModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
                        _angular_fire__WEBPACK_IMPORTED_MODULE_22__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].firebaseConfig),
                        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_23__["AngularFireAuthModule"],
                        ngx_spinner__WEBPACK_IMPORTED_MODULE_24__["NgxSpinnerModule"],
                        _angular_fire_database__WEBPACK_IMPORTED_MODULE_25__["AngularFireDatabaseModule"],
                        angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_26__["ConfirmationPopoverModule"].forRoot({
                            confirmButtonType: 'danger' // set defaults here
                        }),
                        ng5_slider__WEBPACK_IMPORTED_MODULE_31__["Ng5SliderModule"],
                        ngx_file_drop__WEBPACK_IMPORTED_MODULE_32__["NgxFileDropModule"],
                        ngx_gallery__WEBPACK_IMPORTED_MODULE_34__["NgxGalleryModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_37__["BrowserAnimationsModule"],
                        ngx_toastr__WEBPACK_IMPORTED_MODULE_38__["ToastrModule"].forRoot({
                        // maxOpened: 3,
                        // autoDismiss: true
                        }),
                        ngx_socket_io__WEBPACK_IMPORTED_MODULE_35__["SocketIoModule"].forRoot({ url: _const__WEBPACK_IMPORTED_MODULE_36__["SOCKET_IO_URL"], options: {} }),
                        ngx_pagination__WEBPACK_IMPORTED_MODULE_39__["NgxPaginationModule"],
                    ],
                    bootstrap: [_aplikacja_wycieczki_component__WEBPACK_IMPORTED_MODULE_3__["AplikacjaWycieczkiComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/admin-panel/admin-panel.component.css": 
        /*!******************************************************************!*\
          !*** ./src/app/components/admin-panel/admin-panel.component.css ***!
          \******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".admin-panel {\r\n  margin-top: 7rem;\r\n}\r\n\r\n.trips-management {\r\n  padding: 1rem;\r\n}\r\n\r\n.actions-group .btn:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.checkbox-1x {\r\n  transform: scale(1.5);\r\n  -webkit-transform: scale(1.5);\r\n}\r\n\r\n.checkbox-2x {\r\n  transform: scale(2);\r\n  -webkit-transform: scale(2);\r\n}\r\n\r\n.form-check {\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1wYW5lbC9hZG1pbi1wYW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiw2QkFBNkI7QUFDL0I7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1wYW5lbC9hZG1pbi1wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkbWluLXBhbmVsIHtcclxuICBtYXJnaW4tdG9wOiA3cmVtO1xyXG59XHJcblxyXG4udHJpcHMtbWFuYWdlbWVudCB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLmFjdGlvbnMtZ3JvdXAgLmJ0bjpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2hlY2tib3gtMXgge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxufVxyXG4uY2hlY2tib3gtMngge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMik7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG59XHJcblxyXG4uZm9ybS1jaGVjayB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/admin-panel/admin-panel.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/components/admin-panel/admin-panel.component.ts ***!
          \*****************************************************************/
        /*! exports provided: AdminPanelComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelComponent", function () { return AdminPanelComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
            /* harmony import */ var _data_fake_dane__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/fake.dane */ "./src/app/data/fake.dane.ts");
            /* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
            /* harmony import */ var src_app_const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/const */ "./src/app/const.ts");
            /* harmony import */ var _services_promotion_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/promotion.service */ "./src/app/services/promotion.service.ts");
            /* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
            /* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_9__);
            /* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/filter */ "./node_modules/lodash/filter.js");
            /* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_10__);
            var AdminPanelComponent = /** @class */ (function () {
                function AdminPanelComponent(authService, router, spinner, firebaseService, promotionService) {
                    this.authService = authService;
                    this.router = router;
                    this.spinner = spinner;
                    this.firebaseService = firebaseService;
                    this.promotionService = promotionService;
                    this.wycieczki = [];
                    this.IDKEY = src_app_const__WEBPACK_IMPORTED_MODULE_7__["IDKEY"];
                    this.checkedTripsForPromotion = {};
                    this.czasTrwania = 5;
                    this.poziomObnizki = 5;
                }
                AdminPanelComponent.prototype.ngOnInit = function () {
                    this.refreshTrips();
                };
                AdminPanelComponent.prototype.addExampleTrips = function () {
                    var _this = this;
                    _data_fake_dane__WEBPACK_IMPORTED_MODULE_5__["fakeWycieczki"].forEach(function (wycieczka) {
                        _this.firebaseService.addTrip(wycieczka);
                    });
                };
                AdminPanelComponent.prototype.removeAllTrips = function () {
                    this.firebaseService.deleteTrips();
                };
                AdminPanelComponent.prototype.refreshTrips = function () {
                    var _this = this;
                    this.spinner.show();
                    this.firebaseService.getAllTrips().subscribe(function (products) {
                        _this.wycieczki = products;
                        products.forEach(function (wycieczka) {
                            _this.checkedTripsForPromotion[wycieczka[src_app_const__WEBPACK_IMPORTED_MODULE_7__["IDKEY"]]] = false;
                        });
                        _this.spinner.hide();
                    });
                };
                AdminPanelComponent.prototype.removeTrip = function (wycieczka) {
                    var observable = this.firebaseService.deleteTrip(wycieczka);
                };
                AdminPanelComponent.prototype.addPromotion = function () {
                    var checkedTrips = lodash_filter__WEBPACK_IMPORTED_MODULE_10___default()(lodash_map__WEBPACK_IMPORTED_MODULE_9___default()(this.checkedTripsForPromotion, function (value, key) {
                        return value ? key : null;
                    }), function (val) { return val !== null; });
                    console.dir(checkedTrips);
                    this.promotionService.addPromotion(checkedTrips, this.czasTrwania, this.poziomObnizki);
                };
                return AdminPanelComponent;
            }());
            AdminPanelComponent.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
                { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"] },
                { type: _services_promotion_service__WEBPACK_IMPORTED_MODULE_8__["PromotionService"] }
            ]; };
            AdminPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'admin-panel-component',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-panel/admin-panel.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-panel.component.css */ "./src/app/components/admin-panel/admin-panel.component.css")).default]
                })
            ], AdminPanelComponent);
            /***/ 
        }),
        /***/ "./src/app/components/after-order/after-order.component.css": 
        /*!******************************************************************!*\
          !*** ./src/app/components/after-order/after-order.component.css ***!
          \******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container {\r\n  margin-top: 8rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZnRlci1vcmRlci9hZnRlci1vcmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZnRlci1vcmRlci9hZnRlci1vcmRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogOHJlbTtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/after-order/after-order.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/components/after-order/after-order.component.ts ***!
          \*****************************************************************/
        /*! exports provided: AfterOrderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterOrderComponent", function () { return AfterOrderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AfterOrderComponent = /** @class */ (function () {
                function AfterOrderComponent(route) {
                    this.route = route;
                }
                AfterOrderComponent.prototype.ngOnInit = function () {
                    var orderId = this.route.snapshot.paramMap.get('id');
                    this.orderId = orderId;
                };
                return AfterOrderComponent;
            }());
            AfterOrderComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
            ]; };
            AfterOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'after-order-component',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./after-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/after-order/after-order.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./after-order.component.css */ "./src/app/components/after-order/after-order.component.css")).default]
                })
            ], AfterOrderComponent);
            /***/ 
        }),
        /***/ "./src/app/components/drop-file-component/drop.file.component.css": 
        /*!************************************************************************!*\
          !*** ./src/app/components/drop-file-component/drop.file.component.css ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZHJvcC1maWxlLWNvbXBvbmVudC9kcm9wLmZpbGUuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/drop-file-component/drop.file.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/components/drop-file-component/drop.file.component.ts ***!
          \***********************************************************************/
        /*! exports provided: DropFileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropFileComponent", function () { return DropFileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_file_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/file.upload.service */ "./src/app/services/file.upload.service.ts");
            var DropFileComponent = /** @class */ (function () {
                function DropFileComponent(fileUploadService) {
                    this.fileUploadService = fileUploadService;
                    this.files = [];
                }
                DropFileComponent.prototype.dropped = function (files) {
                    this.files = files;
                    this.fileUploadService.addFiles(files);
                    this.fileUploadService.uploadFiles();
                };
                DropFileComponent.prototype.fileOver = function (event) {
                    console.log(event);
                };
                DropFileComponent.prototype.fileLeave = function (event) {
                    console.log(event);
                };
                return DropFileComponent;
            }());
            DropFileComponent.ctorParameters = function () { return [
                { type: _services_file_upload_service__WEBPACK_IMPORTED_MODULE_2__["FileUploadService"] }
            ]; };
            DropFileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'drop-file',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./drop.file.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/drop-file-component/drop.file.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./drop.file.component.css */ "./src/app/components/drop-file-component/drop.file.component.css")).default]
                })
            ], DropFileComponent);
            /***/ 
        }),
        /***/ "./src/app/components/edit-wycieczka/edit-wycieczka.component.css": 
        /*!************************************************************************!*\
          !*** ./src/app/components/edit-wycieczka/edit-wycieczka.component.css ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".edit-wycieczka {\r\n  margin-top: 7rem;\r\n  padding: 3rem;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LXd5Y2llY3prYS9lZGl0LXd5Y2llY3prYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC13eWNpZWN6a2EvZWRpdC13eWNpZWN6a2EuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0LXd5Y2llY3prYSB7XHJcbiAgbWFyZ2luLXRvcDogN3JlbTtcclxuICBwYWRkaW5nOiAzcmVtO1xyXG59XHJcblxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/edit-wycieczka/edit-wycieczka.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/components/edit-wycieczka/edit-wycieczka.component.ts ***!
          \***********************************************************************/
        /*! exports provided: EditWycieczkaComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWycieczkaComponent", function () { return EditWycieczkaComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _services_wycieczki_serwis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/wycieczki-serwis.service */ "./src/app/services/wycieczki-serwis.service.ts");
            /* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
            /* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../const */ "./src/app/const.ts");
            var EditWycieczkaComponent = /** @class */ (function () {
                function EditWycieczkaComponent(wycieczkiService, firebaseService, route, spinner) {
                    this.wycieczkiService = wycieczkiService;
                    this.firebaseService = firebaseService;
                    this.route = route;
                    this.spinner = spinner;
                    // INITIAL MODEL FORM
                    this.modelForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        nazwa: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                        docelowyKrajWycieczki: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                        dataRozpoczecia: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                        dataZakonczenia: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                        cenaJednostkowa: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                        maxIloscMiejsc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                        opis: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                        linkDoZdj: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                    });
                }
                EditWycieczkaComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var wycieczkaId = this.route.snapshot.paramMap.get('id');
                    this.wycieczkaId = wycieczkaId;
                    this.spinner.show();
                    this.firebaseService.getTrip(wycieczkaId).subscribe(function (wycieczka) {
                        _this.modelForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                            nazwa: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](wycieczka.nazwa),
                            docelowyKrajWycieczki: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](wycieczka.docelowyKrajWycieczki),
                            dataRozpoczecia: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](wycieczka.dataRozpoczecia),
                            dataZakonczenia: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](wycieczka.dataZakonczenia),
                            cenaJednostkowa: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](wycieczka.cenaJednostkowa),
                            maxIloscMiejsc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](wycieczka.maxIloscMiejsc),
                            opis: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](wycieczka.opis),
                            linkDoZdj: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](wycieczka.linkDoZdj),
                        });
                        _this.spinner.hide();
                    });
                };
                EditWycieczkaComponent.prototype.onSubmit = function (form) {
                    var _a;
                    var newWycieczka = Object.assign({}, form.value, (_a = {}, _a[_const__WEBPACK_IMPORTED_MODULE_7__["IDKEY"]] = this.wycieczkaId, _a));
                    this.firebaseService.updateTrip(newWycieczka);
                };
                return EditWycieczkaComponent;
            }());
            EditWycieczkaComponent.ctorParameters = function () { return [
                { type: _services_wycieczki_serwis_service__WEBPACK_IMPORTED_MODULE_3__["WycieczkiSerwisService"] },
                { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
                { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
            ]; };
            EditWycieczkaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'edit-wycieczka-component',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-wycieczka.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-wycieczka/edit-wycieczka.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-wycieczka.component.css */ "./src/app/components/edit-wycieczka/edit-wycieczka.component.css")).default]
                })
            ], EditWycieczkaComponent);
            /***/ 
        }),
        /***/ "./src/app/components/header/header.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/components/header/header.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#mainNav {\r\n  /*background-color: #212529;*/\r\n  /*background-image: linear-gradient(45deg, #93278f, #00a99d);*/\r\n  background-image: linear-gradient(45deg, #312a6c, #852d91);\r\n}\r\n\r\n.padded {\r\n  /*padding-left: 10rem;*/\r\n}\r\n\r\n.nav-item {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n\r\n#mainNav .navbar-toggler {\r\n  font-size: 12px;\r\n  right: 0;\r\n  padding: 13px;\r\n  text-transform: uppercase;\r\n  color: white;\r\n  border: 0;\r\n  background-color: #45ADA8;\r\n}\r\n\r\n#mainNav .navbar-brand {\r\n  color: #fff;\r\n  font-weight: bold;\r\n}\r\n\r\n#mainNav .navbar-nav .nav-item .nav-link {\r\n  font-size: 90%;\r\n  font-weight: 400;\r\n  padding: 0.75em 0;\r\n  letter-spacing: 1px;\r\n  color: white;\r\n}\r\n\r\n#mainNav .navbar-nav .nav-item {\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\n#mainNav .navbar-brand.active,\r\n#mainNav .navbar-brand:active,\r\n#mainNav .navbar-brand:focus,\r\n#mainNav .navbar-brand:hover,\r\n#mainNav .navbar-nav .nav-item .nav-link.active,\r\n#mainNav .navbar-nav .nav-item .nav-link:hover\r\n{\r\n  color: #45ADA8;\r\n}\r\n\r\n#mainNav .navbar-nav .nav-item .dropdown-toggle:hover span {\r\n  color: #45ADA8 !important;\r\n}\r\n\r\n.logged-user {\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7RUFDN0IsOERBQThEO0VBQzlELDBEQUEwRDtBQUM1RDs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFNBQVM7RUFDVCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7Ozs7Ozs7RUFPRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbk5hdiB7XHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5OyovXHJcbiAgLypiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM5MzI3OGYsICMwMGE5OWQpOyovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMzEyYTZjLCAjODUyZDkxKTtcclxufVxyXG5cclxuLnBhZGRlZCB7XHJcbiAgLypwYWRkaW5nLWxlZnQ6IDEwcmVtOyovXHJcbn1cclxuXHJcbi5uYXYtaXRlbSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbiNtYWluTmF2IC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NUFEQTg7XHJcbn1cclxuXHJcbiNtYWluTmF2IC5uYXZiYXItYnJhbmQge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4jbWFpbk5hdiAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIHtcclxuICBmb250LXNpemU6IDkwJTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHBhZGRpbmc6IDAuNzVlbSAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jbWFpbk5hdiAubmF2YmFyLW5hdiAubmF2LWl0ZW0ge1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4jbWFpbk5hdiAubmF2YmFyLWJyYW5kLmFjdGl2ZSxcclxuI21haW5OYXYgLm5hdmJhci1icmFuZDphY3RpdmUsXHJcbiNtYWluTmF2IC5uYXZiYXItYnJhbmQ6Zm9jdXMsXHJcbiNtYWluTmF2IC5uYXZiYXItYnJhbmQ6aG92ZXIsXHJcbiNtYWluTmF2IC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZlLFxyXG4jbWFpbk5hdiAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVyXHJcbntcclxuICBjb2xvcjogIzQ1QURBODtcclxufVxyXG5cclxuI21haW5OYXYgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5kcm9wZG93bi10b2dnbGU6aG92ZXIgc3BhbiB7XHJcbiAgY29sb3I6ICM0NUFEQTggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvZ2dlZC11c2VyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/header/header.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/header/header.component.ts ***!
          \*******************************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
            /* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
            /* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
            /* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent(authService, fireAuth, firebaseService, router, spinner) {
                    this.authService = authService;
                    this.fireAuth = fireAuth;
                    this.firebaseService = firebaseService;
                    this.router = router;
                    this.spinner = spinner;
                    this.isAdmin = false;
                }
                HeaderComponent.prototype.ngOnInit = function () {
                    this.checkIsUserAnAdministrator();
                };
                HeaderComponent.prototype.getUser = function () {
                    return this.authService.getUser();
                };
                HeaderComponent.prototype.logout = function () {
                    var _this = this;
                    this.spinner.show();
                    this.authService.logout().then(function () {
                        _this.spinner.hide();
                        _this.router.navigate(['/login']);
                    });
                };
                HeaderComponent.prototype.checkIsUserAnAdministrator = function () {
                    var _this = this;
                    this.fireAuth.auth.onAuthStateChanged(function (user) {
                        _this.firebaseService.getRole(user.email).subscribe(function (roles) {
                            console.log(lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(roles, '[0].role'));
                            _this.isAdmin = (lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(roles, '[0].role') === 'admin');
                        });
                    });
                };
                return HeaderComponent;
            }());
            HeaderComponent.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"] },
                { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
            ]; };
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'header-component',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/components/koszyk/koszyk.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/components/koszyk/koszyk.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".table>tbody>tr>td, .table>tfoot>tr>td{\r\n  vertical-align: middle;\r\n}\r\n@media screen and (max-width: 600px) {\r\n  table#cart tbody td .form-control{\r\n    width:20%;\r\n    display: inline !important;\r\n  }\r\n  .actions .btn{\r\n    width:36%;\r\n    margin:1.5em 0;\r\n  }\r\n\r\n  .actions .btn-info{\r\n    float:left;\r\n  }\r\n  .actions .btn-danger{\r\n    float:right;\r\n  }\r\n\r\n  table#cart thead { display: none; }\r\n  table#cart tbody td { display: block; padding: .6rem; min-width:320px;}\r\n  table#cart tbody tr td:first-child { background: #333; color: #fff; }\r\n  table#cart tbody td:before {\r\n    content: attr(data-th); font-weight: bold;\r\n    display: inline-block; width: 8rem;\r\n  }\r\n\r\n\r\n\r\n  table#cart tfoot td{display:block; }\r\n  table#cart tfoot td .btn{display:block;}\r\n\r\n}\r\nh5 {\r\n  text-align: center;\r\n}\r\n.koszyk {\r\n  max-height: 500px;\r\n  overflow-y: scroll\r\n}\r\n.koszyk-wrapper {\r\n  margin-top: 7rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9rb3N6eWsva29zenlrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFO0lBQ0UsU0FBUztJQUNULDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsU0FBUztJQUNULGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFdBQVc7RUFDYjs7RUFFQSxtQkFBbUIsYUFBYSxFQUFFO0VBQ2xDLHNCQUFzQixjQUFjLEVBQUUsY0FBYyxFQUFFLGVBQWUsQ0FBQztFQUN0RSxxQ0FBcUMsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFO0VBQ3BFO0lBQ0Usc0JBQXNCLEVBQUUsaUJBQWlCO0lBQ3pDLHFCQUFxQixFQUFFLFdBQVc7RUFDcEM7Ozs7RUFJQSxvQkFBb0IsYUFBYSxFQUFFO0VBQ25DLHlCQUF5QixhQUFhLENBQUM7O0FBRXpDO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQjtBQUNGO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2tvc3p5ay9rb3N6eWsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZT50Ym9keT50cj50ZCwgLnRhYmxlPnRmb290PnRyPnRke1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICB0YWJsZSNjYXJ0IHRib2R5IHRkIC5mb3JtLWNvbnRyb2x7XHJcbiAgICB3aWR0aDoyMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmFjdGlvbnMgLmJ0bntcclxuICAgIHdpZHRoOjM2JTtcclxuICAgIG1hcmdpbjoxLjVlbSAwO1xyXG4gIH1cclxuXHJcbiAgLmFjdGlvbnMgLmJ0bi1pbmZve1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICB9XHJcbiAgLmFjdGlvbnMgLmJ0bi1kYW5nZXJ7XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICB9XHJcblxyXG4gIHRhYmxlI2NhcnQgdGhlYWQgeyBkaXNwbGF5OiBub25lOyB9XHJcbiAgdGFibGUjY2FydCB0Ym9keSB0ZCB7IGRpc3BsYXk6IGJsb2NrOyBwYWRkaW5nOiAuNnJlbTsgbWluLXdpZHRoOjMyMHB4O31cclxuICB0YWJsZSNjYXJ0IHRib2R5IHRyIHRkOmZpcnN0LWNoaWxkIHsgYmFja2dyb3VuZDogIzMzMzsgY29sb3I6ICNmZmY7IH1cclxuICB0YWJsZSNjYXJ0IHRib2R5IHRkOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtdGgpOyBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgd2lkdGg6IDhyZW07XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHRhYmxlI2NhcnQgdGZvb3QgdGR7ZGlzcGxheTpibG9jazsgfVxyXG4gIHRhYmxlI2NhcnQgdGZvb3QgdGQgLmJ0bntkaXNwbGF5OmJsb2NrO31cclxuXHJcbn1cclxuXHJcbmg1IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5rb3N6eWsge1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbFxyXG59XHJcblxyXG4ua29zenlrLXdyYXBwZXIge1xyXG4gIG1hcmdpbi10b3A6IDdyZW07XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/koszyk/koszyk.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/koszyk/koszyk.component.ts ***!
          \*******************************************************/
        /*! exports provided: KoszykComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KoszykComponent", function () { return KoszykComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_koszyk_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/koszyk.service */ "./src/app/services/koszyk.service.ts");
            var KoszykComponent = /** @class */ (function () {
                function KoszykComponent(koszykService) {
                    this.products = [];
                    this.koszykService = koszykService;
                    this.getProducts();
                }
                KoszykComponent.prototype.getProducts = function () {
                    this.products = this.koszykService.getProducts();
                };
                KoszykComponent.prototype.getTotal = function () {
                    return this.koszykService.getTotal();
                };
                KoszykComponent.prototype.onDeleteProduct = function (product) {
                    this.koszykService.deleteTrip(product.trip);
                    this.getProducts();
                };
                KoszykComponent.prototype.countChanged = function (event, product) {
                    var newCount = parseInt(event.target.value);
                    console.log(newCount);
                    if (newCount >= 0) {
                        product.count = parseInt(event.target.value);
                    }
                    else {
                        event.stopPropagation();
                    }
                };
                KoszykComponent.prototype.submitOrder = function () {
                    this.koszykService.submitOrder();
                };
                return KoszykComponent;
            }());
            KoszykComponent.ctorParameters = function () { return [
                { type: _services_koszyk_service__WEBPACK_IMPORTED_MODULE_2__["KoszykService"] }
            ]; };
            KoszykComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'koszyk-component',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./koszyk.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/koszyk/koszyk.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./koszyk.component.css */ "./src/app/components/koszyk/koszyk.component.css")).default]
                })
            ], KoszykComponent);
            /***/ 
        }),
        /***/ "./src/app/components/lista-wycieczek/lista-wycieczek.component.css": 
        /*!**************************************************************************!*\
          !*** ./src/app/components/lista-wycieczek/lista-wycieczek.component.css ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".low-sum {\r\n  background-color: rgb(255,81,83, .7);\r\n  border-radius: 4rem;\r\n}\r\n\r\n.high-sum {\r\n  background-color: #24ff82;\r\n  border-radius: 4rem\r\n}\r\n\r\n.total-trips {\r\n  padding: 1rem;\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n  margin-bottom: 4rem;\r\n  display: inline-block;\r\n}\r\n\r\n.lista-wycieczek {\r\n  padding-bottom: 2rem;\r\n  margin-top: 7rem;\r\n}\r\n\r\n.filter-section {\r\n  background: rgba(255,255,255,1);\r\n  background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255,255,255,1)), color-stop(47%, rgba(246,246,246,1)), color-stop(100%, rgba(237,237,237,1)));\r\n  background: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ededed', GradientType=1 );\r\n  font-size: 18px;\r\n  height: 700px;\r\n}\r\n\r\n.filter-section form {\r\n  margin-top: 1rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0YS13eWNpZWN6ZWsvbGlzdGEtd3ljaWVjemVrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7RUFDcEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLCtCQUErQjtFQUUvQixtS0FBbUs7RUFJbkssZ0hBQWdIO0VBQ2hILG9IQUFvSDtFQUNwSCxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saXN0YS13eWNpZWN6ZWsvbGlzdGEtd3ljaWVjemVrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG93LXN1bSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSw4MSw4MywgLjcpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XHJcbn1cclxuXHJcbi5oaWdoLXN1bSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0ZmY4MjtcclxuICBib3JkZXItcmFkaXVzOiA0cmVtXHJcbn1cclxuXHJcbi50b3RhbC10cmlwcyB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5saXN0YS13eWNpZWN6ZWsge1xyXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG4gIG1hcmdpbi10b3A6IDdyZW07XHJcbn1cclxuXHJcbi5maWx0ZXItc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwxKTtcclxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI0NiwyNDYsMjQ2LDEpIDQ3JSwgcmdiYSgyMzcsMjM3LDIzNywxKSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkpLCBjb2xvci1zdG9wKDQ3JSwgcmdiYSgyNDYsMjQ2LDI0NiwxKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgyMzcsMjM3LDIzNywxKSkpO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjQ2LDI0NiwyNDYsMSkgNDclLCByZ2JhKDIzNywyMzcsMjM3LDEpIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI0NiwyNDYsMjQ2LDEpIDQ3JSwgcmdiYSgyMzcsMjM3LDIzNywxKSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjQ2LDI0NiwyNDYsMSkgNDclLCByZ2JhKDIzNywyMzcsMjM3LDEpIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDYsMjQ2LDI0NiwxKSA0NyUsIHJnYmEoMjM3LDIzNywyMzcsMSkgMTAwJSk7XHJcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZmZmZmYnLCBlbmRDb2xvcnN0cj0nI2VkZWRlZCcsIEdyYWRpZW50VHlwZT0xICk7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGhlaWdodDogNzAwcHg7XHJcbn1cclxuXHJcbi5maWx0ZXItc2VjdGlvbiBmb3JtIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/lista-wycieczek/lista-wycieczek.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/components/lista-wycieczek/lista-wycieczek.component.ts ***!
          \*************************************************************************/
        /*! exports provided: ListaWycieczekComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaWycieczekComponent", function () { return ListaWycieczekComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_koszyk_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/koszyk.service */ "./src/app/services/koszyk.service.ts");
            /* harmony import */ var _services_wycieczki_serwis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/wycieczki-serwis.service */ "./src/app/services/wycieczki-serwis.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
            /* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
            /* harmony import */ var src_app_const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/const */ "./src/app/const.ts");
            /* harmony import */ var _utils_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils.module */ "./src/app/utils.module.ts");
            /* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            var ListaWycieczekComponent = /** @class */ (function () {
                function ListaWycieczekComponent(koszykService, wycieczkiService, firebaseService, spinner, socket, toastr) {
                    this.koszykService = koszykService;
                    this.wycieczkiService = wycieczkiService;
                    this.firebaseService = firebaseService;
                    this.spinner = spinner;
                    this.socket = socket;
                    this.toastr = toastr;
                    this.dropdownList = [];
                    this.sum = 0;
                    this.IDKEY = src_app_const__WEBPACK_IMPORTED_MODULE_7__["IDKEY"];
                    this.priceRangeOptions = {
                        floor: 0,
                        ceil: 10000
                    };
                    this.tickOptions = {
                        floor: 0,
                        ceil: 5,
                        step: 1,
                        showTicks: true,
                        showTicksValues: true
                    };
                    this.filterPriceMin = 1;
                    this.filterPriceMax = 1;
                    this.page = 1;
                    this.specifiedItemsPerPage = 9;
                }
                ListaWycieczekComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.spinner.show();
                    this.firebaseService.getAllTrips().subscribe(function (products) {
                        _this.wycieczki = products;
                        var countries = products.map(function (wycieczka) { return wycieczka.docelowyKrajWycieczki; });
                        var uniqCountries = new Set(countries).slice();
                        _this.dropdownList = uniqCountries.map(function (country, index) {
                            return {
                                id: index,
                                itemName: country
                            };
                        });
                        _this.findMinElement();
                        _this.findMaxElement();
                        _this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                            docelowyKrajWycieczki: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]([]),
                            priceMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.minPriceTrip.cenaJednostkowa),
                            priceMax: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.maxPriceTrip.cenaJednostkowa),
                            avgRating: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](4.0),
                        });
                        _this.filterPriceMin = _this.minPriceTrip.cenaJednostkowa;
                        _this.filterPriceMax = _this.maxPriceTrip.cenaJednostkowa;
                        _this.priceRangeOptions.ceil = _this.filterPriceMax;
                        _this.initializeSum();
                        _this.spinner.hide();
                    });
                    this.filterForm = this.getInitialFormGroup();
                    this.selectedItems = [];
                };
                ListaWycieczekComponent.prototype.calculateSumOfReservedTrips = function (message) {
                    console.log(message);
                    this.sum = this.wycieczki.reduce(function (a, b) {
                        return a + b.ileZarezerwowano;
                    }, 0);
                };
                ListaWycieczekComponent.prototype.addTripToCart = function (trip) {
                    this.koszykService.addProduct(trip);
                };
                ListaWycieczekComponent.prototype.findMinElement = function () {
                    this.minPriceTrip = this.wycieczki.reduce(function (prev, current) {
                        return (prev.cenaJednostkowa < current.cenaJednostkowa) ? prev : current;
                    });
                };
                ListaWycieczekComponent.prototype.findMaxElement = function () {
                    this.maxPriceTrip = this.wycieczki.reduce(function (prev, current) {
                        return (prev.cenaJednostkowa > current.cenaJednostkowa) ? prev : current;
                    });
                };
                ListaWycieczekComponent.prototype.getFilteringCriteria = function () {
                    var criteria = [];
                    var searchedCountries = this.filterForm.get('docelowyKrajWycieczki').value.map(function (value) { return value.itemName.toLowerCase(); });
                    var priceMin = this.filterForm.get('priceMin').value;
                    var priceMax = this.filterForm.get('priceMax').value;
                    var avgRating = this.filterForm.get('avgRating').value;
                    if (searchedCountries && searchedCountries.length > 0) {
                        var searchedCountryCriteria = (function (item) {
                            return searchedCountries.includes(item['docelowyKrajWycieczki'].toLowerCase());
                        });
                        criteria.push(searchedCountryCriteria);
                    }
                    if ((priceMin != '') && (priceMax != '')) {
                        var priceMinInt_1 = parseInt(priceMin);
                        var priceMaxInt_1 = parseInt(priceMax);
                        var priceCriteria = (function (item) {
                            var isAboveBottom = item.cenaJednostkowa >= priceMinInt_1;
                            var isBelowTop = item.cenaJednostkowa <= priceMaxInt_1;
                            return isAboveBottom && isBelowTop;
                        });
                        criteria.push(priceCriteria);
                    }
                    if (avgRating != '') {
                        var ratingCriteria = (function (item) {
                            if (!item.oceny || item.oceny.length === 0) {
                                return true;
                            }
                            else {
                                return (!item.oceny || item.oceny.length === 0) || Object(_utils_module__WEBPACK_IMPORTED_MODULE_8__["getTripAverageRating"])(item) >= avgRating;
                            }
                        });
                        criteria.push(ratingCriteria);
                    }
                    return criteria;
                };
                ListaWycieczekComponent.prototype.getInitialFormGroup = function () {
                    return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                        docelowyKrajWycieczki: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]([]),
                        priceMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](0),
                        priceMax: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](0),
                        avgRating: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](4.0),
                    });
                };
                ListaWycieczekComponent.prototype.refreshFormGroup = function () {
                    this.filterForm.patchValue({
                        priceMin: this.filterForm.get('priceMin').value,
                        priceMax: this.filterForm.get('priceMax').value,
                        avgRating: this.filterForm.get('avgRating').value
                    });
                };
                ListaWycieczekComponent.prototype.initializeSum = function () {
                    var sum = 0;
                    this.wycieczki.forEach(function (wycieczka) {
                        sum += wycieczka.ileZarezerwowano;
                    });
                    this.sum = sum;
                };
                return ListaWycieczekComponent;
            }());
            ListaWycieczekComponent.ctorParameters = function () { return [
                { type: _services_koszyk_service__WEBPACK_IMPORTED_MODULE_2__["KoszykService"] },
                { type: _services_wycieczki_serwis_service__WEBPACK_IMPORTED_MODULE_3__["WycieczkiSerwisService"] },
                { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"] },
                { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
                { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__["Socket"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] }
            ]; };
            ListaWycieczekComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'lista-wycieczek-component',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lista-wycieczek.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/lista-wycieczek/lista-wycieczek.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lista-wycieczek.component.css */ "./src/app/components/lista-wycieczek/lista-wycieczek.component.css")).default]
                })
            ], ListaWycieczekComponent);
            /***/ 
        }),
        /***/ "./src/app/components/new-wycieczka/new-wycieczka.component.css": 
        /*!**********************************************************************!*\
          !*** ./src/app/components/new-wycieczka/new-wycieczka.component.css ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".nowa-wycieczka {\r\n  padding: 3rem;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXctd3ljaWVjemthL25ldy13eWNpZWN6a2EuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3LXd5Y2llY3prYS9uZXctd3ljaWVjemthLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm93YS13eWNpZWN6a2Ege1xyXG4gIHBhZGRpbmc6IDNyZW07XHJcbn1cclxuXHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/new-wycieczka/new-wycieczka.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/components/new-wycieczka/new-wycieczka.component.ts ***!
          \*********************************************************************/
        /*! exports provided: NewWycieczkaComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewWycieczkaComponent", function () { return NewWycieczkaComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _services_wycieczki_serwis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/wycieczki-serwis.service */ "./src/app/services/wycieczki-serwis.service.ts");
            /* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
            /* harmony import */ var _services_file_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/file.upload.service */ "./src/app/services/file.upload.service.ts");
            var NewWycieczkaComponent = /** @class */ (function () {
                function NewWycieczkaComponent(wycieczkiService, firebaseService, fileUploadService) {
                    this.wycieczkiService = wycieczkiService;
                    this.firebaseService = firebaseService;
                    this.fileUploadService = fileUploadService;
                }
                NewWycieczkaComponent.prototype.ngOnInit = function () {
                    this.modelForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        nazwa: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Dwutygodniowa wycieczka do Ukrainy'),
                        docelowyKrajWycieczki: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Ukraina'),
                        dataRozpoczecia: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('2020-01-01'),
                        dataZakonczenia: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('2020-01-14'),
                        cenaJednostkowa: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1000),
                        maxIloscMiejsc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](5),
                        opis: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Lorem Ipsum'),
                        linkDoZdj: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('https://via.placeholder.com/100/09f/fff.png'),
                    });
                };
                NewWycieczkaComponent.prototype.onSubmit = function (form) {
                    var newWycieczka = Object.assign({}, form.value, { ileZarezerwowano: 0, oceny: [], galleryImgs: this.fileUploadService.getFilenames() });
                    this.fileUploadService.reset();
                    this.firebaseService.addTrip(newWycieczka);
                };
                return NewWycieczkaComponent;
            }());
            NewWycieczkaComponent.ctorParameters = function () { return [
                { type: _services_wycieczki_serwis_service__WEBPACK_IMPORTED_MODULE_3__["WycieczkiSerwisService"] },
                { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] },
                { type: _services_file_upload_service__WEBPACK_IMPORTED_MODULE_5__["FileUploadService"] }
            ]; };
            NewWycieczkaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'new-wycieczka-component',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-wycieczka.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/new-wycieczka/new-wycieczka.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-wycieczka.component.css */ "./src/app/components/new-wycieczka/new-wycieczka.component.css")).default]
                })
            ], NewWycieczkaComponent);
            /***/ 
        }),
        /***/ "./src/app/components/ocena/ocena.component.css": 
        /*!******************************************************!*\
          !*** ./src/app/components/ocena/ocena.component.css ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb2NlbmEvb2NlbmEuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/ocena/ocena.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/components/ocena/ocena.component.ts ***!
          \*****************************************************/
        /*! exports provided: OcenaComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OcenaComponent", function () { return OcenaComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var OcenaComponent = /** @class */ (function () {
                function OcenaComponent() {
                    this.ratingAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                OcenaComponent.prototype.onRate = function ($event) {
                    this.ratingAdded.emit($event.newValue);
                };
                return OcenaComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], OcenaComponent.prototype, "ratingAdded", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OcenaComponent.prototype, "readonly", void 0);
            OcenaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'ocena-component',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ocena.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ocena/ocena.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ocena.component.css */ "./src/app/components/ocena/ocena.component.css")).default]
                })
            ], OcenaComponent);
            /***/ 
        }),
        /***/ "./src/app/components/sign-in/sign-in.component.css": 
        /*!**********************************************************!*\
          !*** ./src/app/components/sign-in/sign-in.component.css ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/sign-in/sign-in.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/components/sign-in/sign-in.component.ts ***!
          \*********************************************************/
        /*! exports provided: SignInComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function () { return SignInComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
            var SignInComponent = /** @class */ (function () {
                function SignInComponent(authService, router, spinner) {
                    this.authService = authService;
                    this.router = router;
                    this.spinner = spinner;
                }
                SignInComponent.prototype.onSubmitLogin = function () {
                    var _this = this;
                    this.spinner.show();
                    this.authService.login({
                        email: this.modelFormLogin.value.email,
                        password: this.modelFormLogin.value.password,
                    }).then(function () {
                        _this.spinner.hide();
                        _this.router.navigate(['/wycieczki']);
                    }).catch(function (e) {
                        _this.spinner.hide();
                        alert(e.message);
                    });
                };
                SignInComponent.prototype.ngOnInit = function () {
                    this.modelFormLogin = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                        password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                    });
                    this.modelFormRegister = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                        password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                    });
                };
                SignInComponent.prototype.onSubmitRegister = function () {
                    var _this = this;
                    this.spinner.show();
                    this.authService.register({
                        email: this.modelFormRegister.value.email,
                        password: this.modelFormRegister.value.password,
                    }).then(function () {
                        _this.spinner.hide();
                        _this.router.navigate(['/wycieczki']);
                    }).catch(function (e) {
                        _this.spinner.hide();
                        alert(e.message);
                    });
                };
                return SignInComponent;
            }());
            SignInComponent.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] }
            ]; };
            SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'sign-in-component',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-in.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-in/sign-in.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-in.component.css */ "./src/app/components/sign-in/sign-in.component.css")).default]
                })
            ], SignInComponent);
            /***/ 
        }),
        /***/ "./src/app/components/view-my-orders/view-my-orders.component.css": 
        /*!************************************************************************!*\
          !*** ./src/app/components/view-my-orders/view-my-orders.component.css ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".table>tbody>tr>td, .table>tfoot>tr>td{\r\n  vertical-align: middle;\r\n}\r\n@media screen and (max-width: 600px) {\r\n  table#cart tbody td .form-control{\r\n    width:20%;\r\n    display: inline !important;\r\n  }\r\n  .actions .btn{\r\n    width:36%;\r\n    margin:1.5em 0;\r\n  }\r\n\r\n  .actions .btn-info{\r\n    float:left;\r\n  }\r\n  .actions .btn-danger{\r\n    float:right;\r\n  }\r\n\r\n  table#cart thead { display: none; }\r\n  table#cart tbody td { display: block; padding: .6rem; min-width:320px;}\r\n  table#cart tbody tr td:first-child { background: #333; color: #fff; }\r\n  table#cart tbody td:before {\r\n    content: attr(data-th); font-weight: bold;\r\n    display: inline-block; width: 8rem;\r\n  }\r\n\r\n\r\n\r\n  table#cart tfoot td{display:block; }\r\n  table#cart tfoot td .btn{display:block;}\r\n\r\n}\r\nh5 {\r\n  text-align: center;\r\n}\r\n.koszyk {\r\n  max-height: 500px;\r\n  overflow-y: scroll\r\n}\r\n.main {\r\n  margin-top: 8rem;\r\n}\r\n.order-summary {\r\n  border-radius: 10px;\r\n  margin-top: 3rem;\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3LW15LW9yZGVycy92aWV3LW15LW9yZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRTtJQUNFLFNBQVM7SUFDVCwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLFNBQVM7SUFDVCxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7O0VBRUEsbUJBQW1CLGFBQWEsRUFBRTtFQUNsQyxzQkFBc0IsY0FBYyxFQUFFLGNBQWMsRUFBRSxlQUFlLENBQUM7RUFDdEUscUNBQXFDLGdCQUFnQixFQUFFLFdBQVcsRUFBRTtFQUNwRTtJQUNFLHNCQUFzQixFQUFFLGlCQUFpQjtJQUN6QyxxQkFBcUIsRUFBRSxXQUFXO0VBQ3BDOzs7O0VBSUEsb0JBQW9CLGFBQWEsRUFBRTtFQUNuQyx5QkFBeUIsYUFBYSxDQUFDOztBQUV6QztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakI7QUFDRjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlldy1teS1vcmRlcnMvdmlldy1teS1vcmRlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZT50Ym9keT50cj50ZCwgLnRhYmxlPnRmb290PnRyPnRke1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICB0YWJsZSNjYXJ0IHRib2R5IHRkIC5mb3JtLWNvbnRyb2x7XHJcbiAgICB3aWR0aDoyMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmFjdGlvbnMgLmJ0bntcclxuICAgIHdpZHRoOjM2JTtcclxuICAgIG1hcmdpbjoxLjVlbSAwO1xyXG4gIH1cclxuXHJcbiAgLmFjdGlvbnMgLmJ0bi1pbmZve1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICB9XHJcbiAgLmFjdGlvbnMgLmJ0bi1kYW5nZXJ7XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICB9XHJcblxyXG4gIHRhYmxlI2NhcnQgdGhlYWQgeyBkaXNwbGF5OiBub25lOyB9XHJcbiAgdGFibGUjY2FydCB0Ym9keSB0ZCB7IGRpc3BsYXk6IGJsb2NrOyBwYWRkaW5nOiAuNnJlbTsgbWluLXdpZHRoOjMyMHB4O31cclxuICB0YWJsZSNjYXJ0IHRib2R5IHRyIHRkOmZpcnN0LWNoaWxkIHsgYmFja2dyb3VuZDogIzMzMzsgY29sb3I6ICNmZmY7IH1cclxuICB0YWJsZSNjYXJ0IHRib2R5IHRkOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtdGgpOyBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgd2lkdGg6IDhyZW07XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHRhYmxlI2NhcnQgdGZvb3QgdGR7ZGlzcGxheTpibG9jazsgfVxyXG4gIHRhYmxlI2NhcnQgdGZvb3QgdGQgLmJ0bntkaXNwbGF5OmJsb2NrO31cclxuXHJcbn1cclxuXHJcbmg1IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5rb3N6eWsge1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbFxyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgbWFyZ2luLXRvcDogOHJlbTtcclxufVxyXG5cclxuLm9yZGVyLXN1bW1hcnkge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogM3JlbTtcclxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/view-my-orders/view-my-orders.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/components/view-my-orders/view-my-orders.component.ts ***!
          \***********************************************************************/
        /*! exports provided: ViewMyOrdersComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMyOrdersComponent", function () { return ViewMyOrdersComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
            /* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
            /* harmony import */ var src_app_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/const */ "./src/app/const.ts");
            var ViewMyOrdersComponent = /** @class */ (function () {
                function ViewMyOrdersComponent(authService, firebaseService, 
                // private router: Router,
                spinner) {
                    this.authService = authService;
                    this.firebaseService = firebaseService;
                    this.spinner = spinner;
                    this.orders = [];
                    this.filteredOrders = [];
                    this.IDKEY = src_app_const__WEBPACK_IMPORTED_MODULE_5__["IDKEY"];
                }
                ViewMyOrdersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.spinner.show();
                    this.firebaseService.getAllOrders().subscribe(function (orders) {
                        _this.orders = orders;
                        _this.getFilteredOrders();
                        _this.spinner.hide();
                    });
                };
                ViewMyOrdersComponent.prototype.getFilteredOrders = function () {
                    var _this = this;
                    this.filteredOrders = this.orders.filter(function (order) {
                        return ("whoOrdered" in order) && order.whoOrdered == _this.authService.getUser();
                    });
                };
                ViewMyOrdersComponent.prototype.getTotal = function (produkty) {
                    if (!produkty) {
                        return 0;
                    }
                    else {
                        var sum = 0;
                        for (var _i = 0, produkty_1 = produkty; _i < produkty_1.length; _i++) {
                            var product = produkty_1[_i];
                            sum += product.trip.cenaJednostkowa * product.count;
                        }
                        return sum;
                    }
                };
                return ViewMyOrdersComponent;
            }());
            ViewMyOrdersComponent.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] },
                { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
            ]; };
            ViewMyOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'view-my-orders-component',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-my-orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-my-orders/view-my-orders.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-my-orders.component.css */ "./src/app/components/view-my-orders/view-my-orders.component.css")).default]
                })
            ], ViewMyOrdersComponent);
            /***/ 
        }),
        /***/ "./src/app/components/wycieczka-detal/wycieczka-detal.component.css": 
        /*!**************************************************************************!*\
          !*** ./src/app/components/wycieczka-detal/wycieczka-detal.component.css ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".cheapest {\r\n  border: 6px solid rgba(117, 255, 198, .5);\r\n}\r\n\r\n.most-expensive {\r\n  border: 6px solid rgba(255, 122, 139, .5);\r\n}\r\n\r\n.plus-button, .minus-button {\r\n  width: 50%;\r\n}\r\n\r\n.hidden-button {\r\n  visibility: hidden;\r\n}\r\n\r\n.card-img {\r\n  width: 100px;\r\n  height: 100px;\r\n  display: block;\r\n  margin: 1rem auto 0;\r\n}\r\n\r\n.remove-button {\r\n  width: 50px;\r\n  height: 50px;\r\n  background-color: #ff7e8d;\r\n  margin-top: .2rem;\r\n  margin-left: .2rem;\r\n}\r\n\r\n.remove-button:hover{\r\n  background-color: #ff3d46;\r\n}\r\n\r\n.add-to-cart-button {\r\n  width: 50px;\r\n  height: 50px;\r\n  background-color: #adffc4;\r\n  margin-top: .2rem;\r\n  margin-left: .2rem;\r\n}\r\n\r\n.add-to-cart-button:hover {\r\n  background-color: #5bff75;\r\n}\r\n\r\n.low-available-places h5 {\r\n  color: #ff7b3d;\r\n}\r\n\r\nh5 {\r\n  text-align: center;\r\n}\r\n\r\n.wycieczka-detail {\r\n  margin-top: 1rem;\r\n}\r\n\r\n.detail-img {\r\n  height: 400px;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  /*object-fit: contain;*/\r\n  -o-object-fit: fill;\r\n     object-fit: fill;\r\n}\r\n\r\n.date-picker-wrapper {\r\n  height: 50px;\r\n}\r\n\r\n.wycieczka-detal-wrapper {\r\n  margin-top: 7rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93eWNpZWN6a2EtZGV0YWwvd3ljaWVjemthLWRldGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQWdCO0tBQWhCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd3ljaWVjemthLWRldGFsL3d5Y2llY3prYS1kZXRhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWFwZXN0IHtcclxuICBib3JkZXI6IDZweCBzb2xpZCByZ2JhKDExNywgMjU1LCAxOTgsIC41KTtcclxufVxyXG5cclxuLm1vc3QtZXhwZW5zaXZlIHtcclxuICBib3JkZXI6IDZweCBzb2xpZCByZ2JhKDI1NSwgMTIyLCAxMzksIC41KTtcclxufVxyXG5cclxuLnBsdXMtYnV0dG9uLCAubWludXMtYnV0dG9uIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uaGlkZGVuLWJ1dHRvbiB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uY2FyZC1pbWcge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMXJlbSBhdXRvIDA7XHJcbn1cclxuXHJcbi5yZW1vdmUtYnV0dG9uIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmN2U4ZDtcclxuICBtYXJnaW4tdG9wOiAuMnJlbTtcclxuICBtYXJnaW4tbGVmdDogLjJyZW07XHJcbn1cclxuXHJcbi5yZW1vdmUtYnV0dG9uOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjNkNDY7XHJcbn1cclxuXHJcbi5hZGQtdG8tY2FydC1idXR0b24ge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRmZmM0O1xyXG4gIG1hcmdpbi10b3A6IC4ycmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAuMnJlbTtcclxufVxyXG5cclxuLmFkZC10by1jYXJ0LWJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzViZmY3NTtcclxufVxyXG5cclxuLmxvdy1hdmFpbGFibGUtcGxhY2VzIGg1IHtcclxuICBjb2xvcjogI2ZmN2IzZDtcclxufVxyXG5cclxuaDUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnd5Y2llY3prYS1kZXRhaWwge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi5kZXRhaWwtaW1nIHtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAvKm9iamVjdC1maXQ6IGNvbnRhaW47Ki9cclxuICBvYmplY3QtZml0OiBmaWxsO1xyXG59XHJcblxyXG4uZGF0ZS1waWNrZXItd3JhcHBlciB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4ud3ljaWVjemthLWRldGFsLXdyYXBwZXIge1xyXG4gIG1hcmdpbi10b3A6IDdyZW07XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/wycieczka-detal/wycieczka-detal.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/components/wycieczka-detal/wycieczka-detal.component.ts ***!
          \*************************************************************************/
        /*! exports provided: WycieczkaDetalComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WycieczkaDetalComponent", function () { return WycieczkaDetalComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_wycieczki_serwis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/wycieczki-serwis.service */ "./src/app/services/wycieczki-serwis.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_koszyk_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/koszyk.service */ "./src/app/services/koszyk.service.ts");
            /* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
            /* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../const */ "./src/app/const.ts");
            /* harmony import */ var _services_lon_lat_coordinates_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/lon.lat.coordinates.service */ "./src/app/services/lon.lat.coordinates.service.ts");
            /* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
            /* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_10__);
            var WycieczkaDetalComponent = /** @class */ (function () {
                function WycieczkaDetalComponent(wycieczkiService, koszykService, route, firebaseService, authService, spinner, coordinatesService) {
                    this.wycieczkiService = wycieczkiService;
                    this.koszykService = koszykService;
                    this.route = route;
                    this.firebaseService = firebaseService;
                    this.authService = authService;
                    this.spinner = spinner;
                    this.coordinatesService = coordinatesService;
                    this.preferredDate = new Date();
                    this.settings = {
                        bigBanner: true,
                        timePicker: false,
                        format: 'dd-MM-yyyy',
                        defaultOpen: false
                    };
                    this.didUserReserveTrip = false;
                    this.wycieczkaId = null;
                    this.ratings = [];
                    this.lon = 4.402464;
                    this.lat = 51.219448;
                    this.galleryOptions = [
                        {
                            width: '800px',
                            height: '600px',
                            thumbnailsColumns: 4,
                        },
                        // max-width 800
                        {
                            breakpoint: 800,
                            width: '100%',
                            height: '600px',
                            imagePercent: 80,
                            thumbnailsPercent: 20,
                            thumbnailsMargin: 20,
                            thumbnailMargin: 20
                        },
                        // max-width 400
                        {
                            breakpoint: 400,
                            preview: false
                        }
                    ];
                    this.galleryImages = [
                        {
                            small: 'https://images.unsplash.com/photo-1550399504-8953e1a6ac87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80',
                            medium: 'https://images.unsplash.com/photo-1550399504-8953e1a6ac87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
                            big: 'https://images.unsplash.com/photo-1550399504-8953e1a6ac87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1487&q=80',
                        },
                        {
                            small: 'https://images.unsplash.com/photo-1452784444945-3f422708fe5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80',
                            medium: 'https://images.unsplash.com/photo-1452784444945-3f422708fe5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
                            big: 'https://images.unsplash.com/photo-1452784444945-3f422708fe5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1487&q=80',
                        },
                        {
                            small: 'https://images.unsplash.com/photo-1470010762743-1fa2363f65ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80',
                            medium: 'https://images.unsplash.com/photo-1470010762743-1fa2363f65ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
                            big: 'https://images.unsplash.com/photo-1470010762743-1fa2363f65ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1487&q=80',
                        },
                    ];
                    this.reservationChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.tripRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.tripAddedToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.wycieczka = this.getInitialBlankObject();
                }
                WycieczkaDetalComponent.prototype.checkIfPersonReserveTrip = function (trip) {
                    var _this = this;
                    this.firebaseService.getAllOrders().subscribe(function (orders) {
                        var filteredOrders = orders.filter(function (order) {
                            if (order.products) {
                                var tripsIds = order.products.map(function (product) { return product.trip[_const__WEBPACK_IMPORTED_MODULE_8__["IDKEY"]]; });
                                return ("whoOrdered" in order) && (order.whoOrdered == _this.authService.getUser()) && (tripsIds.includes(_this.wycieczkaId));
                            }
                            else {
                                return false;
                            }
                        });
                        _this.didUserReserveTrip = filteredOrders.length > 0;
                    });
                };
                WycieczkaDetalComponent.prototype.initializeMap = function () {
                    var markerSource = new ol.source.Vector();
                    var markerStyle = new ol.style.Style({
                        image: new ol.style.Icon(({
                            anchor: [0.5, 46],
                            anchorXUnits: 'fraction',
                            anchorYUnits: 'pixels',
                            opacity: 1,
                            src: 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/32/map-marker-icon.png'
                        }))
                    });
                    var mapLayer = new ol.layer.Tile({
                        source: new ol.source.OSM()
                    });
                    this.map = new ol.Map({
                        target: 'mapa',
                        layers: [
                            mapLayer,
                            new ol.layer.Vector({
                                source: markerSource,
                                style: markerStyle,
                            }),
                        ],
                        view: new ol.View({
                            center: ol.proj.fromLonLat([this.lon, this.lat]),
                            zoom: 8
                        })
                    });
                    function addMarker(lon, lat) {
                        var iconFeature = new ol.Feature({
                            geometry: new ol.geom.Point(ol.proj.transform([lon, lat], 'EPSG:4326', 'EPSG:3857')),
                            name: 'Miejsce wycieczki',
                            population: 4000,
                        });
                        markerSource.addFeature(iconFeature);
                    }
                    addMarker(this.lon, this.lat);
                };
                WycieczkaDetalComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var wycieczkaId = this.route.snapshot.paramMap.get('id');
                    this.wycieczkaId = wycieczkaId;
                    this.spinner.show();
                    this.firebaseService.getTrip(wycieczkaId).subscribe(function (response) {
                        var lonLat = _this.coordinatesService.getCoordinates(lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(response, 'docelowyKrajWycieczki'));
                        _this.lon = lonLat[0];
                        _this.lat = lonLat[1];
                        _this.initializeMap();
                        _this.wycieczka = response;
                        _this.checkIfPersonReserveTrip(_this.wycieczka);
                        _this.countRatings();
                        _this.alreadyRated = _this.userAlreadyRated();
                        if ('galleryImgs' in _this.wycieczka) {
                            _this.galleryImages = _this.wycieczka.galleryImgs.map(function (imageName) {
                                return {
                                    small: _const__WEBPACK_IMPORTED_MODULE_8__["GALLERY_SERVE_URL"] + "/" + imageName,
                                    medium: _const__WEBPACK_IMPORTED_MODULE_8__["GALLERY_SERVE_URL"] + "/" + imageName,
                                    big: _const__WEBPACK_IMPORTED_MODULE_8__["GALLERY_SERVE_URL"] + "/" + imageName,
                                };
                            });
                        }
                        _this.spinner.hide();
                    });
                };
                WycieczkaDetalComponent.prototype.onClickPlusButton = function (item) {
                    if (item.ileZarezerwowano < item.maxIloscMiejsc) {
                        item.ileZarezerwowano += 1;
                        console.log("Zarezerwowano miejsce na wycieczk\u0119 " + item.nazwa);
                    }
                    else {
                        console.log("Max ilosc miejsc na wycieczk\u0119 " + item.nazwa + " zostala osiagnieta");
                    }
                    this.reservationChanged.emit('added');
                };
                WycieczkaDetalComponent.prototype.onClickMinusButton = function (item) {
                    if (item.ileZarezerwowano > 0) {
                        item.ileZarezerwowano -= 1;
                        console.log("Zrezygnowano z miejsca na wycieczk\u0119 " + item.nazwa);
                    }
                    else {
                        console.log("Nie mozna zrezygnowac z wycieczki " + item.nazwa);
                    }
                    this.reservationChanged.emit('removed');
                };
                WycieczkaDetalComponent.prototype.onTripRemoved = function (trip) {
                    this.tripRemoved.emit(trip);
                };
                WycieczkaDetalComponent.prototype.onTripAddedToCart = function (trip) {
                    this.tripAddedToCart.emit(trip);
                };
                WycieczkaDetalComponent.prototype.addRating = function (newRating) {
                    this.firebaseService.addRating(this.wycieczka, newRating);
                };
                WycieczkaDetalComponent.prototype.userAlreadyRated = function () {
                    try {
                        var ratedBy = this.wycieczka.oceny.map(function (ocena) { return ocena.ratedBy; });
                        return ratedBy.includes(this.authService.getUser());
                    }
                    catch (error) {
                        return false;
                    }
                };
                WycieczkaDetalComponent.prototype.countRatings = function () {
                    if (this.wycieczka.oceny) {
                        var oceny = this.wycieczka.oceny.map(function (ocena) { return ocena.rating; });
                        this.ratings = ((oceny != undefined) && (oceny.length > 0)) ? Object.entries(oceny.reduce(function (acc, curr) {
                            if (typeof acc[curr] == 'undefined') {
                                acc[curr] = 1;
                            }
                            else {
                                acc[curr] += 1;
                            }
                            return acc;
                        }, {})) : [];
                    }
                    else {
                        return [];
                    }
                };
                WycieczkaDetalComponent.prototype.getInitialBlankObject = function () {
                    return {
                        id: 1,
                        nazwa: "",
                        docelowyKrajWycieczki: "",
                        dataRozpoczecia: "",
                        dataZakonczenia: "",
                        cenaJednostkowa: 0,
                        maxIloscMiejsc: 0,
                        opis: "",
                        linkDoZdj: "",
                        ileZarezerwowano: 0,
                        oceny: [],
                    };
                };
                return WycieczkaDetalComponent;
            }());
            WycieczkaDetalComponent.ctorParameters = function () { return [
                { type: _services_wycieczki_serwis_service__WEBPACK_IMPORTED_MODULE_2__["WycieczkiSerwisService"] },
                { type: _services_koszyk_service__WEBPACK_IMPORTED_MODULE_4__["KoszykService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"] },
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
                { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
                { type: _services_lon_lat_coordinates_service__WEBPACK_IMPORTED_MODULE_9__["LonLatCoordinatesService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], WycieczkaDetalComponent.prototype, "reservationChanged", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], WycieczkaDetalComponent.prototype, "tripRemoved", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], WycieczkaDetalComponent.prototype, "tripAddedToCart", void 0);
            WycieczkaDetalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'wycieczka-detal-component',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wycieczka-detal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/wycieczka-detal/wycieczka-detal.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wycieczka-detal.component.css */ "./src/app/components/wycieczka-detal/wycieczka-detal.component.css")).default]
                })
            ], WycieczkaDetalComponent);
            /***/ 
        }),
        /***/ "./src/app/components/wycieczka/wycieczka.component.css": 
        /*!**************************************************************!*\
          !*** ./src/app/components/wycieczka/wycieczka.component.css ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".cheapest {\r\n  border: 6px solid rgba(117, 255, 198, .5);\r\n}\r\n\r\n.most-expensive {\r\n  border: 6px solid rgba(255, 122, 139, .5);\r\n}\r\n\r\n.plus-button, .minus-button {\r\n  width: 50%;\r\n}\r\n\r\n.hidden-button {\r\n  visibility: hidden;\r\n}\r\n\r\n.card-img {\r\n  width: 100px;\r\n  height: 100px;\r\n  display: block;\r\n  margin: 1rem auto 0;\r\n}\r\n\r\n.remove-button {\r\n  width: 50px;\r\n  height: 50px;\r\n  background-color: #ff7e8d;\r\n  margin-top: .2rem;\r\n  margin-left: .2rem;\r\n}\r\n\r\n.remove-button:hover{\r\n  background-color: #ff3d46;\r\n}\r\n\r\n.add-to-cart-button {\r\n  width: 50px;\r\n  height: 50px;\r\n  background-color: #adffc4;\r\n  margin-top: .2rem;\r\n  margin-left: .2rem;\r\n}\r\n\r\n.add-to-cart-button:hover {\r\n  background-color: #5bff75;\r\n}\r\n\r\n.low-available-places h5 {\r\n  color: #ff7b3d;\r\n}\r\n\r\nh5 {\r\n  text-align: center;\r\n}\r\n\r\n.main-section:hover {\r\n  cursor: pointer;\r\n  background: rgba(237,237,237,.6);\r\n  transition: background .5s;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93eWNpZWN6a2Evd3ljaWVjemthLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd3ljaWVjemthL3d5Y2llY3prYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWFwZXN0IHtcclxuICBib3JkZXI6IDZweCBzb2xpZCByZ2JhKDExNywgMjU1LCAxOTgsIC41KTtcclxufVxyXG5cclxuLm1vc3QtZXhwZW5zaXZlIHtcclxuICBib3JkZXI6IDZweCBzb2xpZCByZ2JhKDI1NSwgMTIyLCAxMzksIC41KTtcclxufVxyXG5cclxuLnBsdXMtYnV0dG9uLCAubWludXMtYnV0dG9uIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uaGlkZGVuLWJ1dHRvbiB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uY2FyZC1pbWcge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMXJlbSBhdXRvIDA7XHJcbn1cclxuXHJcbi5yZW1vdmUtYnV0dG9uIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmN2U4ZDtcclxuICBtYXJnaW4tdG9wOiAuMnJlbTtcclxuICBtYXJnaW4tbGVmdDogLjJyZW07XHJcbn1cclxuXHJcbi5yZW1vdmUtYnV0dG9uOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjNkNDY7XHJcbn1cclxuXHJcbi5hZGQtdG8tY2FydC1idXR0b24ge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRmZmM0O1xyXG4gIG1hcmdpbi10b3A6IC4ycmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAuMnJlbTtcclxufVxyXG5cclxuLmFkZC10by1jYXJ0LWJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzViZmY3NTtcclxufVxyXG5cclxuLmxvdy1hdmFpbGFibGUtcGxhY2VzIGg1IHtcclxuICBjb2xvcjogI2ZmN2IzZDtcclxufVxyXG5cclxuaDUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1haW4tc2VjdGlvbjpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM3LDIzNywyMzcsLjYpO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjVzO1xyXG59XHJcblxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/wycieczka/wycieczka.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/components/wycieczka/wycieczka.component.ts ***!
          \*************************************************************/
        /*! exports provided: WycieczkaComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WycieczkaComponent", function () { return WycieczkaComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
            /* harmony import */ var src_app_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/const */ "./src/app/const.ts");
            /* harmony import */ var _utils_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils.module */ "./src/app/utils.module.ts");
            var WycieczkaComponent = /** @class */ (function () {
                function WycieczkaComponent(firebaseService) {
                    this.firebaseService = firebaseService;
                    this.reservationChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.tripAddedToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.IDKEY = src_app_const__WEBPACK_IMPORTED_MODULE_3__["IDKEY"];
                }
                WycieczkaComponent.prototype.onClickPlusButton = function (item) {
                    if (item.ileZarezerwowano < item.maxIloscMiejsc) {
                        item.ileZarezerwowano += 1;
                        console.log("Zarezerwowano miejsce na wycieczk\u0119 " + item.nazwa);
                    }
                    else {
                        console.log("Max ilosc miejsc na wycieczk\u0119 " + item.nazwa + " zostala osiagnieta");
                    }
                    this.reservationChanged.emit('added');
                };
                WycieczkaComponent.prototype.onClickMinusButton = function (item) {
                    if (item.ileZarezerwowano > 0) {
                        item.ileZarezerwowano -= 1;
                        console.log("Zrezygnowano z miejsca na wycieczk\u0119 " + item.nazwa);
                    }
                    else {
                        console.log("Nie mozna zrezygnowac z wycieczki " + item.nazwa);
                    }
                    this.reservationChanged.emit('removed');
                };
                WycieczkaComponent.prototype.onTripAddedToCart = function (trip) {
                    this.tripAddedToCart.emit(trip);
                };
                WycieczkaComponent.prototype.getTripAvgRating = function (item) {
                    return Object(_utils_module__WEBPACK_IMPORTED_MODULE_4__["getTripAverageRating"])(item);
                };
                return WycieczkaComponent;
            }());
            WycieczkaComponent.ctorParameters = function () { return [
                { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], WycieczkaComponent.prototype, "wycieczka", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], WycieczkaComponent.prototype, "isCheapest", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], WycieczkaComponent.prototype, "isMostExpensive", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], WycieczkaComponent.prototype, "reservationChanged", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], WycieczkaComponent.prototype, "tripAddedToCart", void 0);
            WycieczkaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'wycieczka-component',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wycieczka.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/wycieczka/wycieczka.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wycieczka.component.css */ "./src/app/components/wycieczka/wycieczka.component.css")).default]
                })
            ], WycieczkaComponent);
            /***/ 
        }),
        /***/ "./src/app/const.ts": 
        /*!**************************!*\
          !*** ./src/app/const.ts ***!
          \**************************/
        /*! exports provided: IDKEY, IS_REST, GALLERY_UPLOAD_URL, GALLERY_SERVE_URL, PROMOTION_API_ENDPOINT, PROMOTION_API_URL, SOCKET_IO_URL */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDKEY", function () { return IDKEY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_REST", function () { return IS_REST; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GALLERY_UPLOAD_URL", function () { return GALLERY_UPLOAD_URL; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GALLERY_SERVE_URL", function () { return GALLERY_SERVE_URL; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROMOTION_API_ENDPOINT", function () { return PROMOTION_API_ENDPOINT; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROMOTION_API_URL", function () { return PROMOTION_API_URL; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCKET_IO_URL", function () { return SOCKET_IO_URL; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var IDKEY = 'id';
            var IS_REST = false;
            var GALLERY_UPLOAD_URL = 'http://ec2-18-184-171-99.eu-central-1.compute.amazonaws.com:5052/upload';
            var GALLERY_SERVE_URL = 'http://ec2-18-184-171-99.eu-central-1.compute.amazonaws.com:5052/get';
            // export const GALLERY_UPLOAD_URL = 'http://localhost:5052/upload';
            // export const GALLERY_SERVE_URL = 'http://localhost:5052/get';
            var PROMOTION_API_ENDPOINT = 'registerPromotion';
            // export const PROMOTION_API_URL = 'http://localhost:8080/';
            // export const SOCKET_IO_URL = 'http://localhost:8080/';
            var PROMOTION_API_URL = 'http://ec2-18-184-171-99.eu-central-1.compute.amazonaws.com:8080/';
            var SOCKET_IO_URL = 'http://ec2-18-184-171-99.eu-central-1.compute.amazonaws.com:8080/';
            /***/ 
        }),
        /***/ "./src/app/data/fake.dane.ts": 
        /*!***********************************!*\
          !*** ./src/app/data/fake.dane.ts ***!
          \***********************************/
        /*! exports provided: fakeWycieczki */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeWycieczki", function () { return fakeWycieczki; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var fakeWycieczki = [
                {
                    nazwa: "Dwutygodniowa wycieczka do Belgii",
                    docelowyKrajWycieczki: "Belgia",
                    dataRozpoczecia: "2019-12-12",
                    dataZakonczenia: "2019-12-26",
                    cenaJednostkowa: 1000,
                    maxIloscMiejsc: 10,
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel velit nulla. Nam malesuada efficitur maximus. Vestibulum eu maximus dolor. Cras commodo tortor aliquam lobortis pellentesque.",
                    linkDoZdj: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                    ileZarezerwowano: 0,
                    oceny: [],
                },
                {
                    nazwa: "Dwutygodniowa wycieczka do Austrii",
                    docelowyKrajWycieczki: "Austria",
                    dataRozpoczecia: "2019-12-12",
                    dataZakonczenia: "2019-12-26",
                    cenaJednostkowa: 2000.5,
                    maxIloscMiejsc: 15,
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel velit nulla. Nam malesuada efficitur maximus. Vestibulum eu maximus dolor. Cras commodo tortor aliquam lobortis pellentesque.",
                    linkDoZdj: "https://images.unsplash.com/photo-1520503922584-590e8f7a90d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                    ileZarezerwowano: 0,
                    oceny: [],
                },
                {
                    nazwa: "Dwutygodniowa wycieczka do Anglii",
                    docelowyKrajWycieczki: "Anglia",
                    dataRozpoczecia: "2019-12-12",
                    dataZakonczenia: "2019-12-26",
                    cenaJednostkowa: 3000,
                    maxIloscMiejsc: 5,
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel velit nulla. Nam malesuada efficitur maximus. Vestibulum eu maximus dolor. Cras commodo tortor aliquam lobortis pellentesque.",
                    linkDoZdj: "https://images.unsplash.com/photo-1488747279002-c8523379faaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                    ileZarezerwowano: 5,
                    oceny: [],
                },
                {
                    nazwa: "Tygodniowa wycieczka do Hiszpanii",
                    docelowyKrajWycieczki: "Hiszpania",
                    dataRozpoczecia: "2019-12-12",
                    dataZakonczenia: "2019-12-19",
                    cenaJednostkowa: 1100.5,
                    maxIloscMiejsc: 7,
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel velit nulla. Nam malesuada efficitur maximus. Vestibulum eu maximus dolor. Cras commodo tortor aliquam lobortis pellentesque.",
                    linkDoZdj: "https://images.unsplash.com/photo-1512753360435-329c4535a9a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                    ileZarezerwowano: 0,
                    oceny: [{ ratedBy: "szymonsadowski3@gmail.com", rating: 5 }],
                },
                {
                    nazwa: "Tygodniowa wycieczka do Rosji",
                    docelowyKrajWycieczki: "Rosja",
                    dataRozpoczecia: "2019-12-12",
                    dataZakonczenia: "2019-12-19",
                    cenaJednostkowa: 3000,
                    maxIloscMiejsc: 9,
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel velit nulla. Nam malesuada efficitur maximus. Vestibulum eu maximus dolor. Cras commodo tortor aliquam lobortis pellentesque.",
                    linkDoZdj: "https://picsum.photos/100/100",
                    ileZarezerwowano: 5,
                    oceny: [],
                },
                {
                    nazwa: "Tygodniowa wycieczka do USA",
                    docelowyKrajWycieczki: "USA",
                    dataRozpoczecia: "2019-12-12",
                    dataZakonczenia: "2019-12-19",
                    cenaJednostkowa: 3000,
                    maxIloscMiejsc: 4,
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel velit nulla. Nam malesuada efficitur maximus. Vestibulum eu maximus dolor. Cras commodo tortor aliquam lobortis pellentesque.",
                    linkDoZdj: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1375&q=80",
                    ileZarezerwowano: 0,
                    oceny: [{ ratedBy: "szymonsadowski3@gmail.com", rating: 2 }, { ratedBy: "szymonsadowski3@gmail.com", rating: 3 }],
                },
                {
                    nazwa: "Dwudniowa wycieczka do Nigerii",
                    docelowyKrajWycieczki: "Nigeria",
                    dataRozpoczecia: "2019-12-12",
                    dataZakonczenia: "2019-12-14",
                    cenaJednostkowa: 3000,
                    maxIloscMiejsc: 6,
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel velit nulla. Nam malesuada efficitur maximus. Vestibulum eu maximus dolor. Cras commodo tortor aliquam lobortis pellentesque.",
                    linkDoZdj: "https://images.unsplash.com/photo-1537372023620-37161b1ad8ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                    ileZarezerwowano: 0,
                    oceny: [],
                },
                {
                    nazwa: "Dwudniowa wycieczka do Czech",
                    docelowyKrajWycieczki: "Czechy",
                    dataRozpoczecia: "2019-12-12",
                    dataZakonczenia: "2019-12-14",
                    cenaJednostkowa: 5000,
                    maxIloscMiejsc: 11,
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel velit nulla. Nam malesuada efficitur maximus. Vestibulum eu maximus dolor. Cras commodo tortor aliquam lobortis pellentesque.",
                    linkDoZdj: "https://images.unsplash.com/photo-1527001825348-e9b873d49c01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                    ileZarezerwowano: 0,
                    oceny: [],
                },
            ];
            /***/ 
        }),
        /***/ "./src/app/guards/admin.auth.guard.ts": 
        /*!********************************************!*\
          !*** ./src/app/guards/admin.auth.guard.ts ***!
          \********************************************/
        /*! exports provided: AdminAuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthGuard", function () { return AdminAuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            /* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
            /* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_6__);
            var AdminAuthGuard = /** @class */ (function () {
                function AdminAuthGuard(authService, router, firebaseService, fireAuth) {
                    this.authService = authService;
                    this.router = router;
                    this.firebaseService = firebaseService;
                    this.fireAuth = fireAuth;
                }
                AdminAuthGuard.prototype.canActivate = function () {
                    var _this = this;
                    var router = this.router;
                    return new Promise(function (resolve) {
                        _this.fireAuth.auth.onAuthStateChanged(function (user) {
                            _this.firebaseService.getRole(user.email).subscribe(function (roles) {
                                if (lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(roles, '[0].role') === 'admin') {
                                    resolve(true);
                                }
                                else {
                                    router.navigate(['/wycieczki']);
                                    resolve(false);
                                }
                            });
                        });
                    });
                };
                return AdminAuthGuard;
            }());
            AdminAuthGuard.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] },
                { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] }
            ]; };
            AdminAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AdminAuthGuard);
            /***/ 
        }),
        /***/ "./src/app/guards/loggedin.auth.guard.ts": 
        /*!***********************************************!*\
          !*** ./src/app/guards/loggedin.auth.guard.ts ***!
          \***********************************************/
        /*! exports provided: LoggedInAuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInAuthGuard", function () { return LoggedInAuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
            var LoggedInAuthGuard = /** @class */ (function () {
                function LoggedInAuthGuard(authService, router) {
                    this.authService = authService;
                    this.router = router;
                }
                LoggedInAuthGuard.prototype.canActivate = function (next, state) {
                    var _this = this;
                    return this.authService.authState$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (state) {
                        if (state !== null) {
                            return true;
                        }
                        _this.router.navigate(['/login']);
                        return false;
                    }));
                };
                return LoggedInAuthGuard;
            }());
            LoggedInAuthGuard.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            LoggedInAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], LoggedInAuthGuard);
            /***/ 
        }),
        /***/ "./src/app/pipes/equity-filter.pipe.ts": 
        /*!*********************************************!*\
          !*** ./src/app/pipes/equity-filter.pipe.ts ***!
          \*********************************************/
        /*! exports provided: EquityFilterPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquityFilterPipe", function () { return EquityFilterPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var EquityFilterPipe = /** @class */ (function () {
                function EquityFilterPipe() {
                }
                EquityFilterPipe.prototype.transform = function (items, criteria) {
                    if (!items || !criteria || criteria.length == 0) {
                        return items;
                    }
                    return criteria.reduce(function (prev, curr) {
                        return prev.filter(curr);
                    }, items);
                };
                return EquityFilterPipe;
            }());
            EquityFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'equityfilter',
                    pure: false
                })
            ], EquityFilterPipe);
            /***/ 
        }),
        /***/ "./src/app/services/auth.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/auth.service.ts ***!
          \******************************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            /* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
            /* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
            /* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
            var AuthService = /** @class */ (function () {
                function AuthService(fireAuth) {
                    this.fireAuth = fireAuth;
                    this.authState$ = this.fireAuth.authState;
                }
                Object.defineProperty(AuthService.prototype, "user", {
                    get: function () {
                        return this.fireAuth.auth.currentUser;
                    },
                    enumerable: true,
                    configurable: true
                });
                AuthService.prototype.login = function (_a) {
                    var _this = this;
                    var email = _a.email, password = _a.password;
                    if (this.fireAuth.user != null) {
                        return this.fireAuth.auth.setPersistence(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].Auth.Persistence.SESSION).then(function () {
                            return _this.fireAuth.auth.signInWithEmailAndPassword(email, password);
                        });
                    }
                    else {
                        return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
                    }
                };
                AuthService.prototype.register = function (_a) {
                    var email = _a.email, password = _a.password;
                    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
                };
                AuthService.prototype.logout = function () {
                    return this.fireAuth.auth.signOut();
                };
                AuthService.prototype.getUser = function () {
                    return this.user ? this.user.email : '';
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/services/file.upload.service.ts": 
        /*!*************************************************!*\
          !*** ./src/app/services/file.upload.service.ts ***!
          \*************************************************/
        /*! exports provided: FileUploadService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadService", function () { return FileUploadService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const */ "./src/app/const.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var FileUploadService = /** @class */ (function () {
                function FileUploadService(http) {
                    this.http = http;
                    this.files = [];
                    this.uploadedFilenames = [];
                }
                FileUploadService.prototype.addFiles = function (files) {
                    this.files = files;
                };
                FileUploadService.prototype.getFiles = function (files) {
                    return this.files;
                };
                FileUploadService.prototype.getFilenames = function () {
                    return this.uploadedFilenames;
                    return this.files.map(function (fileObj) { return fileObj.fileEntry.file(function (file) { return file.name; }); });
                };
                FileUploadService.prototype.reset = function () {
                    this.files = [];
                };
                FileUploadService.prototype.uploadFiles = function () {
                    var client = this.http;
                    var uploadedFilenames = this.uploadedFilenames;
                    var _loop_1 = function (droppedFile) {
                        // Is it a file?
                        if (droppedFile.fileEntry.isFile) {
                            var fileEntry = droppedFile.fileEntry;
                            fileEntry.file(function (file) {
                                // Here you can access the real file
                                console.log(droppedFile.relativePath, file);
                                console.dir(file);
                                var reader = new FileReader();
                                reader.readAsArrayBuffer(file);
                                reader.onload = function () {
                                    client.post(_const__WEBPACK_IMPORTED_MODULE_2__["GALLERY_UPLOAD_URL"] + "/" + file.name, file).subscribe(function (results) {
                                        console.dir(results);
                                        uploadedFilenames.push(file.name);
                                    });
                                };
                                reader.onerror = function () {
                                    console.log(reader.error);
                                };
                            });
                        }
                        else {
                            // It was a directory (empty directories are added, otherwise only files)
                            var fileEntry = droppedFile.fileEntry;
                            console.log(droppedFile.relativePath, fileEntry);
                        }
                    };
                    for (var _i = 0, _a = this.files; _i < _a.length; _i++) {
                        var droppedFile = _a[_i];
                        _loop_1(droppedFile);
                    }
                };
                return FileUploadService;
            }());
            FileUploadService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            FileUploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], FileUploadService);
            /***/ 
        }),
        /***/ "./src/app/services/firebase.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/services/firebase.service.ts ***!
          \**********************************************/
        /*! exports provided: FirebaseService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function () { return FirebaseService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
            /* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/forEach */ "./node_modules/lodash/forEach.js");
            /* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(lodash_forEach__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../const */ "./src/app/const.ts");
            var FirebaseService = /** @class */ (function () {
                function FirebaseService(db, authService) {
                    this.db = db;
                    this.authService = authService;
                }
                FirebaseService.prototype.getAllTrips = function () {
                    return this.db.list('/wycieczki').valueChanges();
                };
                FirebaseService.prototype.deleteTrips = function () {
                    return this.db.list('/wycieczki').remove();
                };
                FirebaseService.prototype.getTrip = function (id) {
                    return this.db.object("/wycieczki/" + id + "/").valueChanges();
                };
                FirebaseService.prototype.deleteTrip = function (trip) {
                    return this.db.object("/wycieczki/" + trip.id).remove();
                };
                FirebaseService.prototype.addTrip = function (trip) {
                    var pushId = this.db.createPushId();
                    trip.id = pushId;
                    console.log(pushId);
                    console.log(trip);
                    this.db.object("/wycieczki/" + pushId).set(trip).then(function (what) {
                        console.dir(what);
                    }).catch(function (error) {
                        alert(error.code);
                        console.dir(error);
                    });
                };
                FirebaseService.prototype.addOrder = function (order) {
                    var _this = this;
                    lodash_forEach__WEBPACK_IMPORTED_MODULE_5___default()(lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(order, 'products'), function (product) {
                        _this.partialUpdate(product.trip[_const__WEBPACK_IMPORTED_MODULE_6__["IDKEY"]], { ileZarezerwowano: product.trip.ileZarezerwowano });
                    });
                    var pushId = this.db.createPushId();
                    order.id = pushId;
                    console.log(pushId);
                    this.db.object("/orders/" + pushId).set(order);
                    return pushId;
                };
                FirebaseService.prototype.getAllOrders = function () {
                    return this.db.list('/orders').valueChanges();
                };
                FirebaseService.prototype.addRating = function (trip, newRating) {
                    if (!('oceny' in trip)) {
                        trip['oceny'] = [];
                    }
                    trip['oceny'].push({
                        ratedBy: this.authService.getUser(),
                        rating: newRating
                    });
                    console.dir(trip);
                    this.db.object("/wycieczki/" + trip.id).set(trip);
                };
                FirebaseService.prototype.updateTrip = function (newWycieczka) {
                    this.db.object("/wycieczki/" + newWycieczka.id).update(newWycieczka);
                };
                FirebaseService.prototype.partialUpdate = function (tripId, partialUpdate) {
                    this.db.object("/wycieczki/" + tripId).update(partialUpdate);
                };
                FirebaseService.prototype.getRole = function (email) {
                    console.log(email);
                    return this.db.list('/roles', function (ref) { return ref.orderByChild('email').equalTo(email); }).valueChanges();
                };
                return FirebaseService;
            }());
            FirebaseService.ctorParameters = function () { return [
                { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
            ]; };
            FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], FirebaseService);
            /***/ 
        }),
        /***/ "./src/app/services/koszyk.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/services/koszyk.service.ts ***!
          \********************************************/
        /*! exports provided: KoszykService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KoszykService", function () { return KoszykService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firebase.service */ "./src/app/services/firebase.service.ts");
            /* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../const */ "./src/app/const.ts");
            var KoszykService = /** @class */ (function () {
                function KoszykService(firebaseService, spinner, authService, router) {
                    this.firebaseService = firebaseService;
                    this.spinner = spinner;
                    this.authService = authService;
                    this.router = router;
                    this.produkty = [];
                }
                KoszykService.prototype.getProducts = function () {
                    return this.produkty;
                };
                KoszykService.prototype.getTotal = function () {
                    var sum = 0;
                    for (var _i = 0, _a = this.produkty; _i < _a.length; _i++) {
                        var product = _a[_i];
                        sum += product.trip.cenaJednostkowa * product.count;
                    }
                    return sum;
                };
                KoszykService.prototype.addProduct = function (product, preferredDate) {
                    if (preferredDate === void 0) { preferredDate = new Date(); }
                    console.dir(product);
                    var foundProduct = this.produkty.filter(function (item) { return item.trip[_const__WEBPACK_IMPORTED_MODULE_6__["IDKEY"]] === product[_const__WEBPACK_IMPORTED_MODULE_6__["IDKEY"]]; });
                    if (foundProduct.length === 0) {
                        this.produkty.push({ trip: product, count: product.ileZarezerwowano, preferredDate: preferredDate }); // TODO: implement preferredDate
                    }
                    else {
                        foundProduct[0].count += 1;
                    }
                };
                KoszykService.prototype.deleteTrip = function (product) {
                    this.produkty = this.produkty.filter(function (item) { return item.trip != product; });
                };
                KoszykService.prototype.submitOrder = function () {
                    var orderToMake = {
                        products: this.produkty,
                        whoOrdered: this.authService.getUser(),
                        creationDate: new Date().toISOString()
                    };
                    console.dir(orderToMake);
                    var orderId = this.firebaseService.addOrder(orderToMake);
                    this.router.navigate(["/after-order/" + orderId]);
                };
                return KoszykService;
            }());
            KoszykService.ctorParameters = function () { return [
                { type: _firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
                { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ]; };
            KoszykService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], KoszykService);
            /***/ 
        }),
        /***/ "./src/app/services/lon.lat.coordinates.service.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/services/lon.lat.coordinates.service.ts ***!
          \*********************************************************/
        /*! exports provided: LonLatCoordinatesService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LonLatCoordinatesService", function () { return LonLatCoordinatesService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var lodash_sample__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/sample */ "./node_modules/lodash/sample.js");
            /* harmony import */ var lodash_sample__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(lodash_sample__WEBPACK_IMPORTED_MODULE_2__);
            var LonLatCoordinatesService = /** @class */ (function () {
                function LonLatCoordinatesService() {
                    this.lonLatCoordinates = {
                        BELGIA: [4.402464, 51.219448],
                        AUSTRIA: [16.373819, 48.208176],
                        ANGLIA: [-0.127758, 51.507351],
                        HISZPANIA: [-3.703790, 40.416775],
                        EGIPT: [31.235291, 30.043489],
                        NIGERIA: [3.379206, 6.524379],
                        ROSJA: [37.617298, 55.755825]
                    };
                }
                LonLatCoordinatesService.prototype.getCoordinates = function (country) {
                    var countryUpper = country.toUpperCase();
                    return (countryUpper in this.lonLatCoordinates) ? this.lonLatCoordinates[countryUpper] : lodash_sample__WEBPACK_IMPORTED_MODULE_2___default()(this.lonLatCoordinates);
                };
                return LonLatCoordinatesService;
            }());
            LonLatCoordinatesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], LonLatCoordinatesService);
            /***/ 
        }),
        /***/ "./src/app/services/promotion.service.ts": 
        /*!***********************************************!*\
          !*** ./src/app/services/promotion.service.ts ***!
          \***********************************************/
        /*! exports provided: PromotionService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionService", function () { return PromotionService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const */ "./src/app/const.ts");
            var PromotionService = /** @class */ (function () {
                function PromotionService(http) {
                    this.http = http;
                }
                PromotionService.prototype.addPromotion = function (checkedTripsForPromotion, czasTrwania, poziomObnizki) {
                    var objToPost = {
                        checkedTripsForPromotion: checkedTripsForPromotion,
                        czasTrwania: czasTrwania,
                        poziomObnizki: poziomObnizki
                    };
                    return this.http.post("" + _const__WEBPACK_IMPORTED_MODULE_3__["PROMOTION_API_URL"] + _const__WEBPACK_IMPORTED_MODULE_3__["PROMOTION_API_ENDPOINT"], objToPost).subscribe(function (resp) {
                        console.log(resp);
                    });
                };
                return PromotionService;
            }());
            PromotionService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            PromotionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], PromotionService);
            /***/ 
        }),
        /***/ "./src/app/services/wycieczki-serwis.service.ts": 
        /*!******************************************************!*\
          !*** ./src/app/services/wycieczki-serwis.service.ts ***!
          \******************************************************/
        /*! exports provided: WycieczkiSerwisService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WycieczkiSerwisService", function () { return WycieczkiSerwisService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var WycieczkiSerwisService = /** @class */ (function () {
                function WycieczkiSerwisService(http) {
                    this.http = http;
                    this.fetchProducts();
                }
                WycieczkiSerwisService.prototype.fetchProducts = function () {
                    var apiUrl = "api/data";
                    return this.http.get(apiUrl);
                };
                WycieczkiSerwisService.prototype.getProduct = function (id) {
                    var apiUrl = "api/data/" + id;
                    return this.http.get(apiUrl);
                };
                WycieczkiSerwisService.prototype.addProduct = function (product) {
                    this.wycieczki.push(product);
                };
                WycieczkiSerwisService.prototype.deleteProduct = function (product) {
                    this.wycieczki = this.wycieczki.filter(function (item) { return item !== product; });
                };
                return WycieczkiSerwisService;
            }());
            WycieczkiSerwisService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            WycieczkiSerwisService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], WycieczkiSerwisService);
            /***/ 
        }),
        /***/ "./src/app/utils.module.ts": 
        /*!*********************************!*\
          !*** ./src/app/utils.module.ts ***!
          \*********************************/
        /*! exports provided: checkAdminRole, average, getTripAverageRating */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAdminRole", function () { return checkAdminRole; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "average", function () { return average; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTripAverageRating", function () { return getTripAverageRating; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
            /* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
            function checkAdminRole(router_) {
                return function (roles) {
                    console.log(roles);
                    if (lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(roles, '[0].role') === 'admin') {
                        return true;
                    }
                    else {
                        router_.navigate(['/wycieczki']);
                        return false;
                    }
                };
            }
            var average = function (arr) { return arr.reduce(function (p, c) { return p + c; }, 0) / arr.length; };
            function getTripAverageRating(item) {
                if (!item || !item.oceny || item.oceny.length === 0) {
                    return 0;
                }
                else {
                    return average(item.oceny.map(function (ratingObj) { return ratingObj.rating; }));
                }
            }
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                firebaseConfig: {
                    apiKey: 'AIzaSyCbgRoJQDs-yRUPApBXhkXyV4SiUrLd87o',
                    authDomain: 'zpwangular.firebaseapp.com',
                    databaseURL: 'https://zpwangular.firebaseio.com',
                    projectId: 'zpwangular',
                    storageBucket: 'zpwangular.appspot.com',
                    messagingSenderId: '438753092877',
                    appId: '1:438753092877:web:cd4e450d3e0e6c52bafc44'
                }
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\Szymon\PycharmProjects\ZPW_Angular\src\main.ts */ "./src/main.ts");
            /***/ 
        }),
        /***/ 1: 
        /*!********************!*\
          !*** ws (ignored) ***!
          \********************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /* (ignored) */
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map