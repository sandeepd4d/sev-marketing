"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(8121);
;// CONCATENATED MODULE: external "@mui/lab/LocalizationProvider"
const LocalizationProvider_namespaceObject = require("@mui/lab/LocalizationProvider");
var LocalizationProvider_default = /*#__PURE__*/__webpack_require__.n(LocalizationProvider_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
;// CONCATENATED MODULE: external "@mui/lab/AdapterDateFns"
const AdapterDateFns_namespaceObject = require("@mui/lab/AdapterDateFns");
var AdapterDateFns_default = /*#__PURE__*/__webpack_require__.n(AdapterDateFns_namespaceObject);
// EXTERNAL MODULE: ./lib/styles/theme.tsx
var theme = __webpack_require__(8447);
// EXTERNAL MODULE: ./lib/state/booking-flow/types.ts
var types = __webpack_require__(469);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./lib/state/booking-flow/index.ts
var booking_flow = __webpack_require__(6750);
;// CONCATENATED MODULE: ./lib/utils/stepUtils.ts

const getStepFromPath = (pathname, initialStep) => {
  const parts = pathname.split('#');
  let step = initialStep;

  if (parts.length > 1) {
    const hash = parts.pop();
    step = types/* Step */.h[hash];
  }

  return step ? step : initialStep;
};
// EXTERNAL MODULE: ./lib/state/cart/index.ts + 1 modules
var cart = __webpack_require__(1601);
;// CONCATENATED MODULE: ./lib/state/flow-routing/index.ts







const useFlowRouting = () => {
  const router = (0,router_.useRouter)();
  const {
    setRecoilStep
  } = (0,booking_flow/* useFlowStep */.c8)();
  const currentFlowStep = (0,external_recoil_.useRecoilValue)(booking_flow/* default */.ZP);
  const {
    getCartDataLoadedState
  } = (0,cart/* useCartMethods */.ei)();

  const handleHash = pathname => {
    if (!getCartDataLoadedState()) {
      return;
    }

    let step = getStepFromPath(pathname, types/* initialStep */.L);

    if (step !== undefined) {
      if (currentFlowStep.step !== step) {
        setRecoilStep(step);
      }
    }
  };

  const handlePath = pathname => {
    if (!getCartDataLoadedState()) {
      return;
    }

    if (pathname === '/' || pathname === '' || pathname === '/#') {
      if (currentFlowStep.step !== types/* initialStep */.L) {
        setRecoilStep(types/* initialStep */.L);
      }
    } else {
      handleHash(pathname);
    }
  };

  (0,external_react_.useEffect)(() => {
    let cancel = false;

    const onRouteChange = async pathname => {
      handlePath(pathname);
    };

    router.events.on('routeChangeComplete', onRouteChange);
    return () => {
      cancel = true;
      router.events.off('routeChangeComplete', onRouteChange);
    }; // eslint-disable-next-line
  }, [currentFlowStep]);
  (0,external_react_.useEffect)(() => {
    let cancel = false;

    const onRouteChange = async pathname => {
      handleHash(pathname);
    };

    router.events.on('hashChangeComplete', onRouteChange);
    return () => {
      cancel = true;
      router.events.off('hashChangeComplete', onRouteChange);
    }; // eslint-disable-next-line
  }, [currentFlowStep]);
};
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/molecules/FlowRouting.tsx



const FlowRouting = () => {
  useFlowRouting();
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
};
// EXTERNAL MODULE: ./lib/sdk/blvd.ts
var blvd = __webpack_require__(2799);
// EXTERNAL MODULE: ./lib/state/personal-info/index.ts
var personal_info = __webpack_require__(8289);
;// CONCATENATED MODULE: external "query-string"
const external_query_string_namespaceObject = require("query-string");
var external_query_string_default = /*#__PURE__*/__webpack_require__.n(external_query_string_namespaceObject);
;// CONCATENATED MODULE: ./lib/sdk/hooks/useUrlParams.ts


const useUrlParams = () => {
  const router = (0,router_.useRouter)();

  const getUrlParams = () => {
    const parsedUrl = external_query_string_default().parseUrl(`https://anydomain.com${router.asPath}`, {
      parseFragmentIdentifier: true
    });
    const {
      ref,
      storeId,
      shopperId
    } = parsedUrl.query;
    return {
      ref,
      storeId,
      shopperId
    };
  };

  return {
    getUrlParams: getUrlParams
  };
};
// EXTERNAL MODULE: ./lib/state/staffTime/index.ts
var staffTime = __webpack_require__(8647);
// EXTERNAL MODULE: ./lib/sdk/hooks/useStores.ts + 1 modules
var useStores = __webpack_require__(6212);
// EXTERNAL MODULE: ./lib/state/config/index.ts
var config = __webpack_require__(6312);
;// CONCATENATED MODULE: ./components/molecules/CartInitializer/Flow.ts

const getAvailableStepBase = (cart, selectedItems, selectedServicesStep, chooseDateStep, personalInfoStep, all) => {
  let availableStep = selectedServicesStep;

  if (selectedItems.filter(x => x.selectedStaffVariant == undefined).length > 0) {
    return availableStep;
  }

  availableStep = chooseDateStep;

  if (cart.startTime === undefined || cart.startTime === null) {
    return availableStep;
  }

  availableStep = personalInfoStep;

  for (let question of cart.bookingQuestions) {
    if (question.required && question.answer == undefined) {
      return availableStep;
    }
  }

  if (cart.clientInformation == null || !cart.clientInformation.email || !cart.clientInformation.phoneNumber || !cart.clientInformation.firstName || !cart.clientInformation.lastName) {
    return availableStep;
  }

  return all;
};
const getMaxAvailableStepBase = (availableStep, personalInfoStep, chooseDateStep, selectedServicesStep, payAndConfirmStep) => {
  if ((availableStep & payAndConfirmStep) === payAndConfirmStep) {
    return types/* Step.PayAndConfirm */.h.PayAndConfirm;
  } // if ((availableStep & personalInfoStep) === personalInfoStep) {
  //     return Step.PersonalInfo
  // }


  if ((availableStep & chooseDateStep) === chooseDateStep) {
    return types/* Step.ChooseDate */.h.ChooseDate;
  } // if ((availableStep & selectedServicesStep) === selectedServicesStep) {
  //     return Step.SelectedServices
  // }


  return undefined;
};
;// CONCATENATED MODULE: ./components/molecules/CartInitializer/LocationFirst.ts


var AvailableSteps;

(function (AvailableSteps) {
  AvailableSteps[AvailableSteps["ChooseLocation"] = 0] = "ChooseLocation";
  AvailableSteps[AvailableSteps["SelectService"] = 1] = "SelectService";
  AvailableSteps[AvailableSteps["SelectedServices"] = 2] = "SelectedServices";
  AvailableSteps[AvailableSteps["ChooseDate"] = 8] = "ChooseDate";
  AvailableSteps[AvailableSteps["PersonalInfo"] = 16] = "PersonalInfo";
  AvailableSteps[AvailableSteps["PayAndConfirm"] = 32] = "PayAndConfirm";
  AvailableSteps[AvailableSteps["All"] = 63] = "All";
})(AvailableSteps || (AvailableSteps = {}));

const useLocationFirst = () => {
  const getAvailableStep = (cart, location, selectedItems) => {
    let availableStep = AvailableSteps.ChooseLocation;

    if (location === undefined) {
      return availableStep;
    }

    availableStep = AvailableSteps.SelectService;

    if (!selectedItems || selectedItems.length === 0) {
      return availableStep;
    }

    return getAvailableStepBase(cart, selectedItems, AvailableSteps.SelectedServices, AvailableSteps.ChooseDate, AvailableSteps.PersonalInfo, AvailableSteps.All);
  };

  const getMaxAvailableStepInternal = availableStep => {
    const step = getMaxAvailableStepBase(availableStep, AvailableSteps.PersonalInfo, AvailableSteps.ChooseDate, AvailableSteps.SelectedServices, AvailableSteps.PayAndConfirm);

    if (step) {
      return step;
    }

    if ((availableStep & AvailableSteps.SelectService) === AvailableSteps.SelectService) {
      return types/* Step.SelectService */.h.SelectService;
    }

    return types/* Step.ChooseLocation */.h.ChooseLocation;
  };

  const getMaxAvailableStep = (cart, location, selectedServices) => {
    const availableStep = getAvailableStep(cart, location, selectedServices);
    return getMaxAvailableStepInternal(availableStep);
  };

  const getInitialStep = (location, selectedServices) => {
    return location ? types/* Step.SelectService */.h.SelectService : types/* Step.ChooseLocation */.h.ChooseLocation;
  };

  const isCreateEmptyCart = () => {
    return false;
  };

  return {
    getMaxAvailableStep: getMaxAvailableStep,
    getInitialStep: getInitialStep,
    isCreateEmptyCart: isCreateEmptyCart
  };
};
;// CONCATENATED MODULE: ./components/molecules/CartInitializer/ServiceFirst.ts


var ServiceFirst_AvailableSteps;

(function (AvailableSteps) {
  AvailableSteps[AvailableSteps["SelectService"] = 0] = "SelectService";
  AvailableSteps[AvailableSteps["ChooseLocation"] = 1] = "ChooseLocation";
  AvailableSteps[AvailableSteps["SelectedServices"] = 2] = "SelectedServices";
  AvailableSteps[AvailableSteps["ChooseDate"] = 8] = "ChooseDate";
  AvailableSteps[AvailableSteps["PersonalInfo"] = 16] = "PersonalInfo";
  AvailableSteps[AvailableSteps["PayAndConfirm"] = 32] = "PayAndConfirm";
  AvailableSteps[AvailableSteps["All"] = 63] = "All";
})(ServiceFirst_AvailableSteps || (ServiceFirst_AvailableSteps = {}));

const useServiceFirst = () => {
  const getAvailableStep = (cart, location, selectedItems) => {
    let availableStep = ServiceFirst_AvailableSteps.SelectService;

    if (!selectedItems || selectedItems.length === 0) {
      return availableStep;
    }

    availableStep = ServiceFirst_AvailableSteps.ChooseLocation;

    if (location === undefined) {
      return availableStep;
    }

    return getAvailableStepBase(cart, selectedItems, ServiceFirst_AvailableSteps.SelectedServices, ServiceFirst_AvailableSteps.ChooseDate, ServiceFirst_AvailableSteps.PersonalInfo, ServiceFirst_AvailableSteps.All);
  };

  const getMaxAvailableStepInternal = availableStep => {
    const step = getMaxAvailableStepBase(availableStep, ServiceFirst_AvailableSteps.PersonalInfo, ServiceFirst_AvailableSteps.ChooseDate, ServiceFirst_AvailableSteps.SelectedServices, ServiceFirst_AvailableSteps.PayAndConfirm);

    if (step) {
      return step;
    }

    if ((availableStep & ServiceFirst_AvailableSteps.ChooseLocation) === ServiceFirst_AvailableSteps.ChooseLocation) {
      return types/* Step.ChooseLocation */.h.ChooseLocation;
    }

    return types/* Step.SelectService */.h.SelectService;
  };

  const getMaxAvailableStep = (cart, location, selectedServices) => {
    const availableStep = getAvailableStep(cart, location, selectedServices);
    return getMaxAvailableStepInternal(availableStep);
  };

  const getInitialStep = (location, selectedServices) => {
    return selectedServices && selectedServices.length > 0 ? types/* Step.ChooseLocation */.h.ChooseLocation : types/* Step.SelectService */.h.SelectService;
  };

  const isCreateEmptyCart = () => {
    return true;
  };

  return {
    getMaxAvailableStep: getMaxAvailableStep,
    getInitialStep: getInitialStep,
    isCreateEmptyCart: isCreateEmptyCart
  };
};
;// CONCATENATED MODULE: ./components/molecules/CartInitializer/FlowFactory.ts



const useFlowFactory = () => {
  const {
    getFlowType
  } = (0,config/* useAppConfig */.MG)();
  const flowType = getFlowType();
  const locationFirst = useLocationFirst();
  const serviceFirst = useServiceFirst();

  const getFlow = () => {
    if (flowType === config/* FlowType.SelectLocationFirst */.MK.SelectLocationFirst) {
      return locationFirst;
    }

    return serviceFirst;
  };

  const getMaxAvailableStep = (cart, location, selectedServices) => {
    return getFlow().getMaxAvailableStep(cart, location, selectedServices);
  };

  const getInitialStep = (location, selectedServices) => {
    return getFlow().getInitialStep(location, selectedServices);
  };

  const isCreateEmptyCart = () => {
    return getFlow().isCreateEmptyCart();
  };

  return {
    getMaxAvailableStep: getMaxAvailableStep,
    getInitialStep: getInitialStep,
    isCreateEmptyCart: isCreateEmptyCart
  };
};
;// CONCATENATED MODULE: ./components/molecules/CartInitializer/CartDefinition.tsx














const CartDefinition = () => {
  const router = (0,router_.useRouter)();
  const cartState = (0,cart/* useCartState */.KO)();
  const cartIdState = (0,cart/* useCartIdState */.TN)();
  const {
    setStepForce,
    setRecoilStep
  } = (0,booking_flow/* useFlowStep */.c8)();
  const setPersonalInformationState = (0,personal_info/* useSetPersonalInformationState */.TY)();
  const setCartDataLoadedState = (0,cart/* useSetCartDataLoadedState */.il)();
  const {
    getUrlParams
  } = useUrlParams();
  const setDefaultBlvdLocationState = (0,cart/* useSetDefaultBlvdLocationState */.u4)();
  const {
    setLocations
  } = (0,useStores/* useStores */.m)();
  const {
    createCart,
    setCartCommonState,
    // getPersonalInformation,
    forceLoadSelectedServices,
    loadSelectedStaff,
    loadBookingAnswers
  } = (0,cart/* useCartMethods */.ei)();
  const {
    loadDatesAndTimes
  } = (0,staffTime/* useStaffTimes */.VH)();
  const {
    getMaxAvailableStep,
    getInitialStep,
    isCreateEmptyCart
  } = useFlowFactory();

  const setDefaultLocation = async (cartLocation, locations) => {
    const urlParams = getUrlParams();
    let result;

    if (!blvd/* defaultLocationExternalId */.$q && cartLocation && cartLocation.externalId === urlParams.storeId) {
      result = cartLocation;
    } else if (locations && (blvd/* defaultLocationExternalId */.$q || urlParams.storeId)) {
      const defaultBlvdLocation = locations.find(x => x.externalId === blvd/* defaultLocationExternalId */.$q);
      const storeIdLocation = locations.find(x => x.externalId === urlParams.storeId);
      result = defaultBlvdLocation !== null && defaultBlvdLocation !== void 0 ? defaultBlvdLocation : storeIdLocation;
    }

    if (result) {
      setDefaultBlvdLocationState(result);
    }

    return result;
  };

  const getAndSetLocations = async () => {
    const locations = await blvd/* Blvd.locations.list */.a1.locations.list();
    setLocations(locations);
    return locations;
  };

  const initFlow = async () => {
    const locations = await getAndSetLocations();
    const location = await setDefaultLocation(undefined, locations);

    if (location || isCreateEmptyCart()) {
      const cart = await createCart(location, undefined);
      return {
        cartLocation: {
          cart: cart,
          location: location
        },
        locations: locations
      };
    }

    return {
      locations: locations
    };
  };

  const getRouteStep = async (cart, location, selectedServices) => {
    const initialStep = getInitialStep(location, selectedServices);
    const routeStep = getStepFromPath(router.asPath, initialStep);
    const maxAvailableStep = getMaxAvailableStep(cart, location, selectedServices);

    if (routeStep > maxAvailableStep) {
      return maxAvailableStep;
    } else {
      return routeStep;
    }
  };

  const loadCartInternal = async () => {
    var _await$cart$getLocati;

    const urlParams = getUrlParams();
    const cart = await blvd/* Blvd.carts.get */.a1.carts.get(cartIdState); // setPersonalInformationState(getPersonalInformation(cart))

    loadBookingAnswers(cart);
    const location = (_await$cart$getLocati = await cart.getLocation()) !== null && _await$cart$getLocati !== void 0 ? _await$cart$getLocati : undefined;

    if (location && urlParams && urlParams.storeId && urlParams.storeId !== location.externalId || location === undefined && urlParams.storeId !== undefined) {
      throw new Error('StoreId mismatch');
    }

    await setDefaultLocation(location, undefined);
    const availableCategories = await setCartCommonState(cart, location, undefined);
    const selectedItems = await forceLoadSelectedServices(cart, availableCategories);
    await loadSelectedStaff(selectedItems);
    return {
      cartLocation: {
        cart,
        location
      },
      selectedServices: selectedItems
    };
  };

  const loadCart = async () => {
    try {
      return await loadCartInternal();
    } catch (ex) {
      return await initFlow();
    }
  };

  const manageFlow = async () => {
    if (cartState !== undefined) {
      return;
    }

    let locations;
    let cartLocation;
    let info;

    if (cartIdState === undefined) {
      info = await initFlow();
    } else {
      info = await loadCart();
    }

    cartLocation = info.cartLocation;
    locations = info.locations;
    const selectedServices = info.selectedServices;
    let step;

    if (cartLocation) {
      const {
        cart,
        location
      } = cartLocation;
      step = await getRouteStep(cart, location, selectedServices);

      if (step === types/* Step.ChooseDate */.h.ChooseDate && location) {
        await loadDatesAndTimes(cart, location, new Date());
      }
    } else {
      step = getInitialStep(undefined, selectedServices);
    }

    if (!locations) {
      await getAndSetLocations();
    }

    return step;
  };

  (0,external_react_.useEffect)(() => {
    manageFlow().then(async step => {
      if (step === undefined) {
        return;
      }

      await setStepForce(step);
      setRecoilStep(step);
    }).finally(() => setCartDataLoadedState(true)); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
};
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./config/brand.json
const brand_namespaceObject = JSON.parse('{"u2":"Create-Booking-Flow","WL":"Create-Booking-Flow","qv":"/images/icon.png"}');
// EXTERNAL MODULE: ./lib/analytics-api/googleAnalyticsUtils.ts
var googleAnalyticsUtils = __webpack_require__(5597);
// EXTERNAL MODULE: ./lib/sdk/hooks/useConfig.ts
var useConfig = __webpack_require__(6087);
;// CONCATENATED MODULE: ./components/atoms/AppHead.tsx









const AppHead = () => {
  const googleAnalytics = (0,googleAnalyticsUtils/* useGoogleAnalytics */.o)();
  const googleAnalyticsKey = googleAnalytics.googleAnalyticsKey;
  const router = (0,router_.useRouter)();
  const {
    googleMapsApiAccessToken,
    mapboxApiAccessToken
  } = (0,useConfig/* useConfig */.Z)();
  const {
    getMapType
  } = (0,config/* useAppConfig */.MG)();
  const mapType = getMapType();
  const googlePlacesApiUrl = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiAccessToken}&libraries=places`;
  const isMapBox = !!mapboxApiAccessToken && mapType === config/* MapType.MapBox */.T.MapBox;
  (0,external_react_.useEffect)(() => {
    var _jssStyles$parentElem;

    const jssStyles = document.querySelector('#jss-server-side');
    jssStyles === null || jssStyles === void 0 ? void 0 : (_jssStyles$parentElem = jssStyles.parentElement) === null || _jssStyles$parentElem === void 0 ? void 0 : _jssStyles$parentElem.removeChild(jssStyles);
  }, []); // Google Analytics: log page views

  (0,external_react_.useEffect)(() => {
    const handleRouteChange = url => {
      googleAnalytics.pageView(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [googleAnalytics, router.events]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
      children: "Salon - Booking"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      itemProp: "name",
      content: brand_namespaceObject.u2
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      itemProp: "description",
      content: brand_namespaceObject.WL
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "icon",
      type: "image/x-icon",
      href: brand_namespaceObject.qv
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "shortcut icon",
      type: "image/x-icon",
      href: brand_namespaceObject.qv
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "shortcut icon",
      type: "image/x-icon",
      href: brand_namespaceObject.qv
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: brand_namespaceObject.qv
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "prefetch",
      href: '/assets/Roboto-Bold.ttf',
      as: "font",
      crossOrigin: ""
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "prefetch",
      href: '/assets/Roboto-Medium.ttf',
      as: "font",
      crossOrigin: ""
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "prefetch",
      href: '/assets/Roboto-Regular.ttf',
      as: "font",
      crossOrigin: ""
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "viewport",
      content: "minimum-scale=1, initial-scale=1, width=device-width"
    }), mapType === config/* MapType.Google */.T.Google && googleMapsApiAccessToken && /*#__PURE__*/jsx_runtime_.jsx("script", {
      async: true,
      src: googlePlacesApiUrl
    }), googleAnalyticsKey && /*#__PURE__*/jsx_runtime_.jsx("script", {
      async: true,
      src: `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsKey}`
    }), googleAnalyticsKey && /*#__PURE__*/jsx_runtime_.jsx("script", {
      dangerouslySetInnerHTML: {
        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${googleAnalyticsKey}', {
                              page_path: window.location.pathname,
                            });
                        `
      }
    }), isMapBox && /*#__PURE__*/jsx_runtime_.jsx("link", {
      href: 'https://api.mapbox.com/mapbox-gl-js/v2.6.0/mapbox-gl.css',
      rel: "stylesheet"
    }), isMapBox && /*#__PURE__*/jsx_runtime_.jsx("script", {
      async: true,
      src: 'https://api.mapbox.com/mapbox-gl-js/v2.6.0/mapbox-gl.js'
    })]
  });
};
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












/**
 * A custom App in Next.js gives us the ability to customize global
 * elements like Nav, global context providers, and meta tagging +more.
 * @see https://nextjs.org/docs/advanced-features/custom-app
 */



function App({
  Component,
  pageProps
}) {
  // MUI<->Next compatibility: Clears out MUI server-side generated CSS
  // https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_app.js
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_recoil_.RecoilRoot, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(AppHead, {}), /*#__PURE__*/jsx_runtime_.jsx(theme/* ThemeProvider */.f, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((LocalizationProvider_default()), {
        dateAdapter: (AdapterDateFns_default()),
        children: [/*#__PURE__*/jsx_runtime_.jsx((CssBaseline_default()), {}), /*#__PURE__*/jsx_runtime_.jsx(FlowRouting, {}), /*#__PURE__*/jsx_runtime_.jsx(CartDefinition, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "background-container",
          style: {
            flex: 1
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
        })]
      })
    })]
  });
}

/***/ }),

/***/ 8035:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 1683:
/***/ ((module) => {

module.exports = require("cross-fetch");

/***/ }),

/***/ 3879:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 8083:
/***/ ((module) => {

module.exports = require("date-fns-tz");

/***/ }),

/***/ 2801:
/***/ ((module) => {

module.exports = require("detect-node");

/***/ }),

/***/ 7435:
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ 1517:
/***/ ((module) => {

module.exports = require("haversine");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5508:
/***/ ((module) => {

module.exports = require("react-map-gl");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8121:
/***/ ((module) => {

module.exports = require("recoil");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [308,472], () => (__webpack_exec__(9466)));
module.exports = __webpack_exports__;

})();