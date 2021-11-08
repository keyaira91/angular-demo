(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkambmrxerdre_angular"] = self["webpackChunkambmrxerdre_angular"] || []).push([["main"], {
    /***/
    8255: function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    5041: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./top-bar/top-bar.component */
      4097);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);

      var _AppComponent = /*#__PURE__*/function () {
        var AppComponent = function AppComponent() {
          _classCallCheck(this, AppComponent);
        };

        AppComponent.ɵfac = function AppComponent_Factory(t) {
          return new (t || AppComponent)();
        };

        AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: AppComponent,
          selectors: [["app-root"]],
          decls: 3,
          vars: 0,
          consts: [[1, "container"]],
          template: function AppComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-top-bar");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
          },
          directives: [_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_0__.TopBarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBOzs7O0NBSUMiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4vKlxyXG5Db3B5cmlnaHQgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdFxyXG5jYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4qLyJdfQ== */"]
        });
        return AppComponent;
      }();
      /***/

    },

    /***/
    6747: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./top-bar/top-bar.component */
      4097);
      /* harmony import */


      var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./product-list/product-list.component */
      8415);
      /* harmony import */


      var _product_alerts_product_alerts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./product-alerts/product-alerts.component */
      6431);
      /* harmony import */


      var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./product-details/product-details.component */
      776);
      /* harmony import */


      var _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cart/cart.component */
      4918);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shipping/shipping.component */
      7306);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _AppModule = /*#__PURE__*/function () {
        var AppModule = function AppModule() {
          _classCallCheck(this, AppModule);
        };

        AppModule.ɵfac = function AppModule_Factory(t) {
          return new (t || AppModule)();
        };

        AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
          type: AppModule,
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
        });
        AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
          imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot([{
            path: '',
            component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__.ProductListComponent
          }, {
            path: 'products/:productId',
            component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__.ProductDetailsComponent
          }, {
            path: 'cart',
            component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__.CartComponent
          }, {
            path: 'shipping',
            component: _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_6__.ShippingComponent
          }])]]
        });
        return AppModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_1__.TopBarComponent, _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__.ProductListComponent, _product_alerts_product_alerts_component__WEBPACK_IMPORTED_MODULE_3__.ProductAlertsComponent, _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__.ProductDetailsComponent, _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__.CartComponent, _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_6__.ShippingComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    3705: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CartService": function CartService() {
          return (
            /* binding */
            _CartService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      1841);

      var _CartService = /*#__PURE__*/function () {
        var CartService = /*#__PURE__*/function () {
          function CartService(http) {
            _classCallCheck(this, CartService);

            this.http = http;
            this.items = [];
          }

          _createClass(CartService, [{
            key: "addToCart",
            value: function addToCart(product) {
              this.items.push(product);
            }
          }, {
            key: "getItems",
            value: function getItems() {
              return this.items;
            }
          }, {
            key: "clearCart",
            value: function clearCart() {
              this.items = [];
              return this.items;
            }
          }, {
            key: "getShippingPrices",
            value: function getShippingPrices() {
              return this.http.get('/assets/shipping.json');
            }
          }]);

          return CartService;
        }();

        CartService.ɵfac = function CartService_Factory(t) {
          return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
        };

        CartService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: CartService,
          factory: CartService.ɵfac,
          providedIn: 'root'
        });
        return CartService;
      }();
      /***/

    },

    /***/
    4918: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CartComponent": function CartComponent() {
          return (
            /* binding */
            _CartComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../cart.service */
      3705);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function CartComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, item_r1.price));
        }
      }

      var _CartComponent = /*#__PURE__*/function () {
        var CartComponent = /*#__PURE__*/function () {
          function CartComponent(cartService, formBuilder) {
            _classCallCheck(this, CartComponent);

            this.cartService = cartService;
            this.formBuilder = formBuilder;
            this.items = this.cartService.getItems();
            this.checkoutForm = this.formBuilder.group({
              name: '',
              address: ''
            });
          }

          _createClass(CartComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }, {
            key: "onSubmit",
            value: function onSubmit() {
              // Process checkout data here
              this.items = this.cartService.clearCart();
              console.warn('Your order has been submitted', this.checkoutForm.value);
              this.checkoutForm.reset();
            }
          }]);

          return CartComponent;
        }();

        CartComponent.ɵfac = function CartComponent_Factory(t) {
          return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
        };

        CartComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: CartComponent,
          selectors: [["app-cart"]],
          decls: 17,
          vars: 2,
          consts: [["routerLink", "/shipping"], ["class", "cart-item", 4, "ngFor", "ngForOf"], [3, "formGroup", "ngSubmit"], ["for", "name"], ["id", "name", "type", "text", "formControlName", "name"], ["for", "address"], ["id", "address", "type", "text", "formControlName", "address"], ["type", "submit", 1, "button"], [1, "cart-item"]],
          template: function CartComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Cart");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Shipping Prices");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CartComponent_div_5_Template, 6, 4, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CartComponent_Template_form_ngSubmit_6_listener() {
                return ctx.onSubmit();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Name ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Address ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Purchase");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.checkoutForm);
            }
          },
          directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LmNvbXBvbmVudC5jc3MifQ== */"]
        });
        return CartComponent;
      }();
      /***/

    },

    /***/
    6431: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductAlertsComponent": function ProductAlertsComponent() {
          return (
            /* binding */
            _ProductAlertsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function ProductAlertsComponent_p_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductAlertsComponent_p_0_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.notify.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Notify Me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProductAlertsComponent_p_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductAlertsComponent_p_1_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.sale.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "On Sale");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _ProductAlertsComponent = /*#__PURE__*/function () {
        var ProductAlertsComponent = function ProductAlertsComponent() {
          _classCallCheck(this, ProductAlertsComponent);

          this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.sale = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        };

        ProductAlertsComponent.ɵfac = function ProductAlertsComponent_Factory(t) {
          return new (t || ProductAlertsComponent)();
        };

        ProductAlertsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ProductAlertsComponent,
          selectors: [["app-product-alerts"]],
          inputs: {
            product: "product"
          },
          outputs: {
            notify: "notify",
            sale: "sale"
          },
          decls: 2,
          vars: 2,
          consts: [[4, "ngIf"], [3, "click"]],
          template: function ProductAlertsComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductAlertsComponent_p_0_Template, 3, 0, "p", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductAlertsComponent_p_1_Template, 3, 0, "p", 0);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product && ctx.product.price > 700);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product && ctx.product.price < 400);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWFsZXJ0cy5jb21wb25lbnQuY3NzIn0= */"]
        });
        return ProductAlertsComponent;
      }();
      /***/

    },

    /***/
    776: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductDetailsComponent": function ProductDetailsComponent() {
          return (
            /* binding */
            _ProductDetailsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../products */
      3351);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../cart.service */
      3705);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function ProductDetailsComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductDetailsComponent_div_2_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r1.addToCart(ctx_r1.product);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Buy");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.product.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 3, ctx_r0.product.price));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.product.description);
        }
      }

      var _ProductDetailsComponent = /*#__PURE__*/function () {
        var ProductDetailsComponent = /*#__PURE__*/function () {
          function ProductDetailsComponent(route, cartService) {
            _classCallCheck(this, ProductDetailsComponent);

            this.route = route;
            this.cartService = cartService;
          }

          _createClass(ProductDetailsComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              //First get the product id from the current route.
              var routeParams = this.route.snapshot.paramMap;
              var productIdFromRoute = Number(routeParams.get('productId')); //Find the product that correspond with the id provided in route.

              this.product = _products__WEBPACK_IMPORTED_MODULE_0__.products.find(function (product) {
                return product.id === productIdFromRoute;
              });
            }
          }, {
            key: "addToCart",
            value: function addToCart(product) {
              this.cartService.addToCart(product);
              window.alert('Your product has been added to the cart!');
            }
          }]);

          return ProductDetailsComponent;
        }();

        ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) {
          return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService));
        };

        ProductDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
          type: ProductDetailsComponent,
          selectors: [["app-product-details"]],
          decls: 3,
          vars: 1,
          consts: [[4, "ngIf"], [3, "click"]],
          template: function ProductDetailsComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Product Details");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProductDetailsComponent_div_2_Template, 10, 5, "div", 0);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.product);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"]
        });
        return ProductDetailsComponent;
      }();
      /***/

    },

    /***/
    8415: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductListComponent": function ProductListComponent() {
          return (
            /* binding */
            _ProductListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../products */
      3351);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _product_alerts_product_alerts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../product-alerts/product-alerts.component */
      6431);

      function ProductListComponent_div_2_p_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var product_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Description: ", product_r1.description, " ");
        }
      }

      var _c0 = function _c0(a1) {
        return ["/products", a1];
      };

      function ProductListComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ProductListComponent_div_2_p_4_Template, 2, 1, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductListComponent_div_2_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r4.share();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Share ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "app-product-alerts", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("notify", function ProductListComponent_div_2_Template_app_product_alerts_notify_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r6.onNotify();
          })("sale", function ProductListComponent_div_2_Template_app_product_alerts_sale_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r7.onSale();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var product_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", product_r1.name + " details")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, product_r1.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", product_r1.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", product_r1.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("product", product_r1);
        }
      }

      var _ProductListComponent = /*#__PURE__*/function () {
        var ProductListComponent = /*#__PURE__*/function () {
          function ProductListComponent() {
            _classCallCheck(this, ProductListComponent);

            this.products = _products__WEBPACK_IMPORTED_MODULE_0__.products;
          }

          _createClass(ProductListComponent, [{
            key: "share",
            value: function share() {
              window.alert('The product has been shared!');
            }
          }, {
            key: "onNotify",
            value: function onNotify() {
              window.alert('You will be notified when the product goes on sale');
            }
          }, {
            key: "onSale",
            value: function onSale() {
              window.alert('This is product is now on sale at a great price!');
            }
          }]);

          return ProductListComponent;
        }();

        ProductListComponent.ɵfac = function ProductListComponent_Factory(t) {
          return new (t || ProductListComponent)();
        };

        ProductListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
          type: ProductListComponent,
          selectors: [["app-product-list"]],
          decls: 3,
          vars: 1,
          consts: [[4, "ngFor", "ngForOf"], [3, "title", "routerLink"], [4, "ngIf"], [3, "click"], [3, "product", "notify", "sale"]],
          template: function ProductListComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Products");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProductListComponent_div_2_Template, 8, 7, "div", 0);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.products);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _product_alerts_product_alerts_component__WEBPACK_IMPORTED_MODULE_1__.ProductAlertsComponent],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7Ozs7Q0FJQyIsImZpbGUiOiJwcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLypcclxuQ29weXJpZ2h0IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcblVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXRcclxuY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuKi8iXX0= */"]
        });
        return ProductListComponent;
      }();
      /***/

    },

    /***/
    3351: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "products": function products() {
          return (
            /* binding */
            _products
          );
        }
        /* harmony export */

      });

      var _products = [{
        id: 1,
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens'
      }, {
        id: 2,
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras'
      }, {
        id: 3,
        name: 'Phone Standard',
        price: 299,
        description: ''
      }];
      /*
      Copyright Google LLC. All Rights Reserved.
      Use of this source code is governed by an MIT-style license that
      can be found in the LICENSE file at https://angular.io/license
      */

      /***/
    },

    /***/
    7306: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShippingComponent": function ShippingComponent() {
          return (
            /* binding */
            _ShippingComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../cart.service */
      3705);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function ShippingComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var shipping_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](shipping_r1.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, shipping_r1.price));
        }
      }

      var _ShippingComponent = /*#__PURE__*/function () {
        var ShippingComponent = /*#__PURE__*/function () {
          function ShippingComponent(cartService) {
            _classCallCheck(this, ShippingComponent);

            this.cartService = cartService;
            this.shippingCosts = this.cartService.getShippingPrices();
          }

          _createClass(ShippingComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return ShippingComponent;
        }();

        ShippingComponent.ɵfac = function ShippingComponent_Factory(t) {
          return new (t || ShippingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService));
        };

        ShippingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: ShippingComponent,
          selectors: [["app-shipping"]],
          decls: 4,
          vars: 3,
          consts: [["class", "shipping-item", 4, "ngFor", "ngForOf"], [1, "shipping-item"]],
          template: function ShippingComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Shipping Prices");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ShippingComponent_div_2_Template, 6, 4, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx.shippingCosts));
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGlwcGluZy5jb21wb25lbnQuY3NzIn0= */"]
        });
        return ShippingComponent;
      }();
      /***/

    },

    /***/
    4097: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TopBarComponent": function TopBarComponent() {
          return (
            /* binding */
            _TopBarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      9895);

      var _c0 = function _c0() {
        return ["/"];
      };

      var _TopBarComponent = /*#__PURE__*/function () {
        var TopBarComponent = function TopBarComponent() {
          _classCallCheck(this, TopBarComponent);
        };

        TopBarComponent.ɵfac = function TopBarComponent_Factory(t) {
          return new (t || TopBarComponent)();
        };

        TopBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: TopBarComponent,
          selectors: [["app-top-bar"]],
          decls: 7,
          vars: 2,
          consts: [[3, "routerLink"], ["routerLink", "/cart", 1, "button", "fancy-button"], [1, "material-icons"]],
          template: function TopBarComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Store");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "shopping_cart");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Checkout");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
            }
          },
          directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBOzs7O0NBSUMiLCJmaWxlIjoidG9wLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vKlxyXG5Db3B5cmlnaHQgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdFxyXG5jYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4qLyJdfQ== */"]
        });
        return TopBarComponent;
      }();
      /***/

    },

    /***/
    2340: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /*
      Copyright Google LLC. All Rights Reserved.
      Use of this source code is governed by an MIT-style license that
      can be found in the LICENSE file at https://angular.io/license
      */

      /***/
    },

    /***/
    4431: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /*
      Copyright Google LLC. All Rights Reserved.
      Use of this source code is governed by an MIT-style license that
      can be found in the LICENSE file at https://angular.io/license
      */

      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map