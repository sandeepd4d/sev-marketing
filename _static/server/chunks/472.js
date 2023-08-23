"use strict";
exports.id = 472;
exports.ids = [472];
exports.modules = {

/***/ 5597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ useGoogleAnalytics)
/* harmony export */ });
const useGoogleAnalytics = () => {
  const googleAnalyticsKey = process.env.GOOGLE_ANALYTICS_KEY;

  const pageView = url => {
    if (!googleAnalyticsKey) {
      return;
    }

    window.gtag('config', googleAnalyticsKey, {
      page_path: url
    });
  };

  const event = async (action, label) => {
    if (!googleAnalyticsKey) {
      return;
    }

    window.gtag('event', action, {
      event_category: 'BLVD',
      event_label: label
    });
  };

  const appointmentLocationSelected = storeName => {
    return event('Store Selected ', `Store: ${storeName}`);
  };

  const appointmentTimeSelected = storeName => {
    return event('Time Selected ', `Store: ${storeName}`);
  };

  const appointmentBookingConfirmed = serviceName => {
    return event('Appointment Confirmed ', `Service: ${serviceName}`);
  };

  return {
    pageView: pageView,
    googleAnalyticsKey: googleAnalyticsKey,
    appointmentLocationSelected: appointmentLocationSelected,
    appointmentTimeSelected: appointmentTimeSelected,
    appointmentBookingConfirmed: appointmentBookingConfirmed
  };
};

/***/ }),

/***/ 2799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$q": () => (/* binding */ defaultLocationExternalId),
/* harmony export */   "a1": () => (/* binding */ client)
/* harmony export */ });
/* unused harmony export live */
/* harmony import */ var _boulevard_blvd_book_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5308);

const businessId = "6cfde29c-5d6b-4576-87d4-ee359f23480b";
const apiKey = "3fd2a200-4100-4bb9-a2b7-ac8280738665";
const live = 'live';
const defaultLocationExternalId = process.env.NEXT_PUBLIC_BLVD_DEFAULT_LOCATION_EXTERNAL_ID; // safety net for misconfiguration

if (!businessId || !apiKey) {
  throw new Error('Either NEXT_PUBLIC_BLVD_BUSINESS_ID or NEXT_PUBLIC_BLVD_API_KEY are undefined');
}

const client = process.env.NEXT_PUBLIC_BLVD_PLATFORM === live ? new _boulevard_blvd_book_sdk__WEBPACK_IMPORTED_MODULE_0__/* .Blvd */ .a(apiKey, businessId, _boulevard_blvd_book_sdk__WEBPACK_IMPORTED_MODULE_0__/* .PlatformTarget.Live */ .C.Live) : new _boulevard_blvd_book_sdk__WEBPACK_IMPORTED_MODULE_0__/* .Blvd */ .a(apiKey, businessId);


/***/ }),

/***/ 6087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useConfig)
/* harmony export */ });
/* harmony import */ var lib_state_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6312);

const useConfig = () => {
  var _process$env$NEXT_PUB;

  const mapboxApiAccessToken = "";
  const googleMapsApiAccessToken = (_process$env$NEXT_PUB = "") !== null && _process$env$NEXT_PUB !== void 0 ? _process$env$NEXT_PUB : '';
  const mapType = process.env.NEXT_PUBLIC_MAP_TYPE === 'Google' ? lib_state_config__WEBPACK_IMPORTED_MODULE_0__/* .MapType.Google */ .T.Google : process.env.NEXT_PUBLIC_MAP_TYPE === 'None' ? lib_state_config__WEBPACK_IMPORTED_MODULE_0__/* .MapType.None */ .T.None : lib_state_config__WEBPACK_IMPORTED_MODULE_0__/* .MapType.MapBox */ .T.MapBox;
  const flowType = process.env.NEXT_PUBLIC_FLOW_TYPE === 'SelectServiceFirst' ? lib_state_config__WEBPACK_IMPORTED_MODULE_0__/* .FlowType.SelectServiceFirst */ .MK.SelectServiceFirst : lib_state_config__WEBPACK_IMPORTED_MODULE_0__/* .FlowType.SelectLocationFirst */ .MK.SelectLocationFirst;
  const dateTimeType = process.env.NEXT_PUBLIC_DATE_TIME_TYPE === 'ShowTimeForManyDays' ? lib_state_config__WEBPACK_IMPORTED_MODULE_0__/* .DateTimeType.ShowTimeForManyDays */ .Vf.ShowTimeForManyDays : lib_state_config__WEBPACK_IMPORTED_MODULE_0__/* .DateTimeType.ShowTimeForOneDay */ .Vf.ShowTimeForOneDay;
  const displayAppSettings =  true ? lib_state_config__WEBPACK_IMPORTED_MODULE_0__/* .DisplayAppSettingsPopup.Yes */ .Nf.Yes : 0;
  return {
    mapboxApiAccessToken: mapboxApiAccessToken,
    googleMapsApiAccessToken: googleMapsApiAccessToken,
    mapType: mapType,
    flowType: flowType,
    dateTimeType: dateTimeType,
    displayAppSettings: displayAppSettings
  };
};

/***/ }),

/***/ 6212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "m": () => (/* binding */ useStores)
});

// EXTERNAL MODULE: ./lib/state/store/index.ts
var store = __webpack_require__(9639);
// EXTERNAL MODULE: external "haversine"
var external_haversine_ = __webpack_require__(1517);
var external_haversine_default = /*#__PURE__*/__webpack_require__.n(external_haversine_);
;// CONCATENATED MODULE: ./lib/utils/numberUtils.ts
function roundNumber(num, decimalPlaces = 0) {
  const p = Math.pow(10, decimalPlaces);
  return Math.round((num + Number.EPSILON) * p) / p;
}
// EXTERNAL MODULE: ./lib/state/currentPosition/index.ts
var state_currentPosition = __webpack_require__(1846);
;// CONCATENATED MODULE: ./lib/sdk/hooks/useStores.ts




const useStores = () => {
  const currentPosition = (0,state_currentPosition/* useCurrentPosition */.OQ)();
  const stores = (0,store/* useStoresState */.n_)();
  const setStores = (0,store/* useSetStoresState */.pA)(); //const round

  const getDistanceByPosition = (userPosition, storePosition) => {
    const distance = external_haversine_default()(userPosition, storePosition, {
      unit: 'mile'
    });
    return roundNumber(distance, 1);
  };

  const getDistance = storePosition => {
    return getDistanceByPosition(currentPosition, storePosition);
  };

  const getStoreFromLocation = location => {
    var _location$coordinates, _location$coordinates2;

    let lat = 0;
    let lng = 0;

    if ((_location$coordinates = location.coordinates) !== null && _location$coordinates !== void 0 && _location$coordinates.latitude && (_location$coordinates2 = location.coordinates) !== null && _location$coordinates2 !== void 0 && _location$coordinates2.longitude) {
      var _location$coordinates3, _location$coordinates4;

      lat = (_location$coordinates3 = location.coordinates) === null || _location$coordinates3 === void 0 ? void 0 : _location$coordinates3.latitude;
      lng = (_location$coordinates4 = location.coordinates) === null || _location$coordinates4 === void 0 ? void 0 : _location$coordinates4.longitude;
    }

    const distance = getDistance({
      latitude: lat,
      longitude: lng
    });
    return {
      distance: distance,
      lng: lng,
      lat: lat,
      location: location
    };
  };

  const setLocations = locations => {
    const result = locations.map(l => getStoreFromLocation(l)); //sort stores by distance asc

    result.sort((a, b) => a.distance > b.distance ? 1 : b.distance > a.distance ? -1 : 0);
    setStores(result);
  };

  return {
    stores: stores,
    getStoreFromLocation: getStoreFromLocation,
    setLocations: setLocations,
    getDistanceByPosition: getDistanceByPosition
  };
};

/***/ }),

/***/ 3417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Um": () => (/* binding */ useBookingAnswersState),
/* harmony export */   "GZ": () => (/* binding */ useBookingAnswers),
/* harmony export */   "RM": () => (/* binding */ useSetBookingAnswersState)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8121);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const bookingAnswersState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'bookingAnswersState',
  default: []
});
const useBookingAnswersState = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilState)(bookingAnswersState);
const useBookingAnswers = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(bookingAnswersState);
const useSetBookingAnswersState = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(bookingAnswersState);

/***/ }),

/***/ 6750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "c8": () => (/* binding */ useFlowStep)
/* harmony export */ });
/* unused harmony exports useFlowStepState, useSetFlowStepState */
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8121);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_state_booking_flow_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(469);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const defaultFlowStep = {
  step: lib_state_booking_flow_types__WEBPACK_IMPORTED_MODULE_1__/* .Step.LoadingStep */ .h.LoadingStep
};
const flowStepState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'flowStep',
  default: defaultFlowStep
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (flowStepState);
const useFlowStepState = () => useRecoilValue(flowStepState);
const useSetFlowStepState = () => useSetRecoilState(flowStepState);
const useFlowStep = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const currentFlowStep = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(flowStepState);
  const setRecoilStep = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilCallback)(({
    set
  }) => step => {
    set(flowStepState, oldValue => {
      return _objectSpread(_objectSpread({}, oldValue), {}, {
        step: step
      });
    });
  }, []);

  const setStepForce = async step => {
    if (step === lib_state_booking_flow_types__WEBPACK_IMPORTED_MODULE_1__/* .initialStep */ .L) {
      await router.push(`#`);
    } else {
      await router.push(`#${lib_state_booking_flow_types__WEBPACK_IMPORTED_MODULE_1__/* .Step */ .h[step]}`);
    }
  };

  const setStep = async step => {
    if (currentFlowStep.step === step) {
      return;
    }

    await setStepForce(step);
  };

  return {
    currentFlowStep,
    setStep: setStep,
    setRecoilStep,
    setStepForce: setStepForce
  };
};

/***/ }),

/***/ 469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Step),
/* harmony export */   "L": () => (/* binding */ initialStep)
/* harmony export */ });
let Step;

(function (Step) {
  Step[Step["LoadingStep"] = 0] = "LoadingStep";
  Step[Step["ChooseLocation"] = 1] = "ChooseLocation";
  Step[Step["SelectService"] = 2] = "SelectService";
  Step[Step["SelectOptions"] = 3] = "SelectOptions";
  Step[Step["ChooseDate"] = 4] = "ChooseDate";
  Step[Step["ConsentForm"] = 5] = "ConsentForm";
  Step[Step["PayAndConfirm"] = 6] = "PayAndConfirm";
  Step[Step["BookingSuccess"] = 7] = "BookingSuccess";
})(Step || (Step = {}));

const initialStep = Step.LoadingStep;

/***/ }),

/***/ 1601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "TN": () => (/* binding */ useCartIdState),
  "ei": () => (/* binding */ useCartMethods),
  "KO": () => (/* binding */ useCartState),
  "no": () => (/* binding */ useDefaultBlvdLocationState),
  "il": () => (/* binding */ useSetCartDataLoadedState),
  "Nj": () => (/* binding */ useSetCartIdState),
  "Po": () => (/* binding */ useSetCartState),
  "u4": () => (/* binding */ useSetDefaultBlvdLocationState),
  "XG": () => (/* binding */ useSetSuccessBookingCartInfoState)
});

// UNUSED EXPORTS: cartDataLoaded, cartIdState, defaultBlvdLocationState, useCartDataLoadedState, useSuccessBookingCartInfoState

// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(8121);
// EXTERNAL MODULE: ./lib/state/persistence.ts
var persistence = __webpack_require__(8038);
// EXTERNAL MODULE: ./lib/sdk/blvd.ts
var blvd = __webpack_require__(2799);
// EXTERNAL MODULE: ./lib/state/booking-answers/index.ts
var booking_answers = __webpack_require__(3417);
// EXTERNAL MODULE: ./lib/state/personal-info/index.ts
var personal_info = __webpack_require__(8289);
// EXTERNAL MODULE: ./lib/sdk/hooks/useStores.ts + 1 modules
var useStores = __webpack_require__(6212);
// EXTERNAL MODULE: ./lib/state/store/index.ts
var store = __webpack_require__(9639);
// EXTERNAL MODULE: ./lib/utils/formatDateFns.ts
var formatDateFns = __webpack_require__(8053);
// EXTERNAL MODULE: ./lib/analytics-api/googleAnalyticsUtils.ts
var googleAnalyticsUtils = __webpack_require__(5597);
;// CONCATENATED MODULE: ./lib/analytics-api/analyticsService.ts

const useAnalyticsService = () => {
  const ga = (0,googleAnalyticsUtils/* useGoogleAnalytics */.o)();
  const gaAppointmentLocationSelected = ga.appointmentLocationSelected;
  const gaAppointmentTimeSelected = ga.appointmentTimeSelected;
  const gaAppointmentBookingConfirmed = ga.appointmentBookingConfirmed;

  const appointmentLocationSelected = async appointmentLocationSelected => {
    var _appointmentLocationS;

    Promise.all([gaAppointmentLocationSelected((_appointmentLocationS = appointmentLocationSelected.location) === null || _appointmentLocationS === void 0 ? void 0 : _appointmentLocationS.name)]).catch();
  };

  const appointmentTimeSelected = async appointmentTimeSelected => {
    var _appointmentTimeSelec;

    Promise.all([gaAppointmentTimeSelected((_appointmentTimeSelec = appointmentTimeSelected.location) === null || _appointmentTimeSelec === void 0 ? void 0 : _appointmentTimeSelec.name)]).catch();
  };

  const appointmentBookingConfirmed = async appointmentBookingConfirmed => {
    Promise.all([gaAppointmentBookingConfirmed(appointmentBookingConfirmed.serviceName)]).catch();
  };

  return {
    appointmentLocationSelected: appointmentLocationSelected,
    appointmentTimeSelected: appointmentTimeSelected,
    appointmentBookingConfirmed: appointmentBookingConfirmed
  };
};
// EXTERNAL MODULE: ./lib/state/staffDate/index.ts
var staffDate = __webpack_require__(937);
// EXTERNAL MODULE: ./lib/state/staffTime/index.ts
var staffTime = __webpack_require__(8647);
// EXTERNAL MODULE: ./lib/state/location/index.ts
var state_location = __webpack_require__(1886);
// EXTERNAL MODULE: ./lib/utils/locationUtils.ts
var locationUtils = __webpack_require__(8754);
// EXTERNAL MODULE: ./lib/state/services/index.ts
var services = __webpack_require__(4226);
// EXTERNAL MODULE: ./lib/state/staff/index.ts
var staff = __webpack_require__(734);
;// CONCATENATED MODULE: ./lib/state/cart/index.ts
var _getPersistedState;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const CART_ID_KEY = 'CART_ID';
const cartState = (0,external_recoil_.atom)({
  key: 'cartState',
  default: undefined
});
const successBookingCartInfoState = (0,external_recoil_.atom)({
  key: 'successBookingCartInfoState',
  default: undefined
});
const cartIdState = (0,external_recoil_.atom)({
  key: 'cartIdState',
  default: (_getPersistedState = (0,persistence/* getPersistedState */.wU)(CART_ID_KEY)) !== null && _getPersistedState !== void 0 ? _getPersistedState : undefined
});
const defaultBlvdLocationState = (0,external_recoil_.atom)({
  key: 'defaultBlvdLocationState',
  default: undefined
});
const cartDataLoaded = (0,external_recoil_.atom)({
  key: 'cartDataLoaded',
  default: false
});
const useCartState = () => (0,external_recoil_.useRecoilValue)(cartState);
const useSetCartState = () => (0,external_recoil_.useSetRecoilState)(cartState);
const useCartIdState = () => (0,external_recoil_.useRecoilValue)(cartIdState);
const useSetCartIdState = (0,persistence/* makePersistedSetRecoilState */.GC)(CART_ID_KEY, cartIdState);
const useDefaultBlvdLocationState = () => (0,external_recoil_.useRecoilValue)(defaultBlvdLocationState);
const useSetDefaultBlvdLocationState = () => (0,external_recoil_.useSetRecoilState)(defaultBlvdLocationState);
const useSuccessBookingCartInfoState = () => useRecoilValue(successBookingCartInfoState);
const useSetSuccessBookingCartInfoState = () => (0,external_recoil_.useSetRecoilState)(successBookingCartInfoState);
const useCartMethods = () => {
  const setCart = useSetCartState();
  const setCartIdState = useSetCartIdState();
  const setBookingAnswers = (0,booking_answers/* useSetBookingAnswersState */.RM)();
  const setPersonalInformationState = (0,personal_info/* useSetPersonalInformationState */.TY)();
  const {
    getStoreFromLocation,
    setLocations
  } = (0,useStores/* useStores */.m)();
  const setCartStoreState = (0,store/* useSetCartStoreState */.fz)();
  const resetCartStoreState = (0,store/* useResetCartStoreState */.rH)();
  const setLocationSelectedStoreState = (0,state_location/* useSetLocationSelectedStoreState */.zS)();
  const resetLocationSelectedStoreState = (0,state_location/* useResetLocationSelectedStoreState */.Z$)();
  const {
    appointmentTimeSelected
  } = useAnalyticsService();
  const resetStaffDatesStore = (0,staffDate/* useResetStaffDatesStore */.IV)();
  const resetStaffTimesState = (0,staffTime/* useResetStaffTimesState */.Wk)();
  const resetSelectedStaffTimeState = (0,staffTime/* useResetSelectedStaffTimeState */.Lv)();
  const {
    getMapViewportState
  } = (0,state_location/* useMapView */.GZ)();
  const setViewport = (0,state_location/* useSetMapViewportState */.hM)();
  const setAvailableCategories = (0,services/* useSetAvailableCategories */.UK)();
  const {
    loadSelectedServicesFromCart,
    reverseSelectedServices,
    selectedCartAvailableItemsStateValue,
    setSelectedCartAvailableItemsState
  } = (0,services/* useSelectedServices */.bI)();
  const setActiveSelectedService = (0,services/* useSetActiveSelectedService */.qI)();
  const setBookableStaffVariants = (0,staff/* useSetBookableStaffVariants */.OB)();
  const setAllowChooseStaffError = (0,staff/* useSetAllowChooseStaffError */.JR)();
  const setCartBookableItemListStaff = (0,staff/* useSetCartBookableItemListStaff */.tM)();
  const availableBookableItemStores = (0,store/* useAvailableBookableItemStoresState */.WJ)();
  const setAvailableBookableItemStores = (0,store/* useSetAvailableBookableItemStoresState */.sQ)();
  const setSelectedCartAvailableCategory = (0,services/* useSetSelectedCartAvailableCategory */.OT)();
  const resetSelectedCartAvailableCategory = (0,services/* useResetSelectedCartAvailableCategory */.IY)();

  const isCartAvailableBookableItem = availableItem => {
    return availableItem && availableItem["__typename"] === 'CartAvailableBookableItem';
  };

  const isCartAvailablePurchasableItem = availableItem => {
    return availableItem && availableItem["__typename"] === 'CartAvailablePurchasableItem';
  };

  const addRemoveServiceCommon = async (cart, selectedCartAvailableItems) => {
    setCart(cart);
    const services = await loadSelectedServicesFromCart(cart, selectedCartAvailableItems);
    resetStaffDatesStore();
    resetStaffTimesState();
    resetSelectedStaffTimeState();
    return {
      cart,
      services
    };
  };

  const addService = async (cart, availableItem) => {
    if (isCartAvailablePurchasableItem(availableItem)) {
      cart = await cart.addPurchasableItem(availableItem);
    } else {
      cart = await cart.addBookableItem(availableItem);
    }

    const selectedCartAvailableItems = selectedCartAvailableItemsStateValue.concat(availableItem);
    setSelectedCartAvailableItemsState(selectedCartAvailableItems);
    return await addRemoveServiceCommon(cart, selectedCartAvailableItems);
  };

  const removeService = async (cart, bookableItem) => {
    cart = await cart.removeSelectedItem(bookableItem);
    const selectedCartAvailableItems = [];
    let wasFound = false;

    for (let item of selectedCartAvailableItemsStateValue) {
      if (!wasFound && item.id === bookableItem.id) {
        wasFound = true;
        continue;
      }

      selectedCartAvailableItems.push(item);
    }

    setSelectedCartAvailableItemsState(selectedCartAvailableItems);
    return await addRemoveServiceCommon(cart, selectedCartAvailableItems);
  };

  const addAddon = async (cart, bookableItem, option) => {
    const options = bookableItem.selectedOptions;
    cart = await bookableItem.update({
      options: [...options, option],
      staffVariant: bookableItem.selectedStaffVariant
    });
    return await addRemoveServiceCommon(cart, selectedCartAvailableItemsStateValue);
  };

  const removeAddon = async (cart, bookableItem, option) => {
    const options = bookableItem.selectedOptions;
    cart = await bookableItem.update({
      options: [...options.filter(opt => opt.id !== option.id)]
    });
    return await addRemoveServiceCommon(cart, selectedCartAvailableItemsStateValue);
  };

  const selectStaff = async (cart, bookableItem, staff) => {
    var _staff$staffVariant;

    cart = await bookableItem.update({
      options: bookableItem.selectedOptions,
      staffVariant: (_staff$staffVariant = staff === null || staff === void 0 ? void 0 : staff.staffVariant) !== null && _staff$staffVariant !== void 0 ? _staff$staffVariant : {
        id: null
      }
    });
    return await addRemoveServiceCommon(cart, selectedCartAvailableItemsStateValue);
  };

  const setLocationBasedElements = async (location, store) => {
    var _locationStore$locati, _locationStore$locati2, _locationStore$locati3, _locationStore$locati4;

    if (location === undefined) {
      resetCartStoreState();
      resetLocationSelectedStoreState();
      return;
    }

    let locationStore = store;

    if (locationStore === undefined) {
      locationStore = await getStoreFromLocation(location);
    }

    setCartStoreState(locationStore);
    setLocationSelectedStoreState(locationStore);
    const viewport = getMapViewportState();

    const updatedViewPort = _objectSpread(_objectSpread({}, viewport), {
      longitude: (_locationStore$locati = (_locationStore$locati2 = locationStore.location.coordinates) === null || _locationStore$locati2 === void 0 ? void 0 : _locationStore$locati2.longitude) !== null && _locationStore$locati !== void 0 ? _locationStore$locati : 0,
      latitude: (_locationStore$locati3 = (_locationStore$locati4 = locationStore.location.coordinates) === null || _locationStore$locati4 === void 0 ? void 0 : _locationStore$locati4.latitude) !== null && _locationStore$locati3 !== void 0 ? _locationStore$locati3 : 0,
      zoom: locationUtils/* defaultZoom */.de,
      transitionDuration: locationUtils/* mapBoxTransitionDuration */.ND,
      transitionInterpolator: locationUtils/* mapBoxFlyToInterpolator */.fm
    });

    setViewport(updatedViewPort);
  };

  const setCartCommonState = async (cart, location, store) => {
    setCart(cart);
    const cartCategories = (await cart.getAvailableCategories()).filter(x => x.name !== 'Gift Cards');
    setAvailableCategories(cartCategories);
    await setLocationBasedElements(location, store);

    if (cartCategories !== null && cartCategories !== void 0 && cartCategories.length) {
      setSelectedCartAvailableCategory(cartCategories[0]);
    }

    return cartCategories;
  };

  const createCart = async (location, store) => {
    const cart = await blvd/* Blvd.carts.create */.a1.carts.create(location);
    setCartIdState(cart.id);
    setBookingAnswers([]); // setPersonalInformationState({
    //     firstName: '',
    //     email: '',
    //     lastName: '',
    //     phone: '',
    // })

    resetStaffDatesStore();
    resetStaffTimesState();
    await setCartCommonState(cart, location, store);
    return cart;
  };

  const getCartDataLoadedState = (0,external_recoil_.useRecoilCallback)(({
    snapshot
  }) => () => {
    let loadable = snapshot.getLoadable(cartDataLoaded);
    return loadable.valueMaybe();
  }, []);

  const reserveBookableTime = async (cart, cartBookableTime, cartStoreState) => {
    if (!cart || !cartBookableTime) {
      return;
    }

    const updatedCart = await (cart === null || cart === void 0 ? void 0 : cart.reserveBookableItems(cartBookableTime));
    setCart(updatedCart);
    appointmentTimeSelected({
      location: cartStoreState === null || cartStoreState === void 0 ? void 0 : cartStoreState.location
    }).then(); //don't wait for op to be completed
  };

  const getAnswer = bookingQuestion => {
    let answer = bookingQuestion.answer;

    if (bookingQuestion.valueType === 'SELECT') {
      var _bookingQuestion$answ;

      answer = (_bookingQuestion$answ = bookingQuestion.answer) === null || _bookingQuestion$answ === void 0 ? void 0 : _bookingQuestion$answ.option;
    }

    if (bookingQuestion.valueType === 'BOOLEAN') {
      var _bookingQuestion$answ2;

      answer = (_bookingQuestion$answ2 = bookingQuestion.answer) === null || _bookingQuestion$answ2 === void 0 ? void 0 : _bookingQuestion$answ2.booleanValue;
    }

    if (bookingQuestion.valueType === 'DATETIME') {
      var _bookingQuestion$answ3;

      answer = (0,formatDateFns/* cartTimeToDate */.gv)((_bookingQuestion$answ3 = bookingQuestion.answer) === null || _bookingQuestion$answ3 === void 0 ? void 0 : _bookingQuestion$answ3.datetimeValue);
    }

    if (bookingQuestion.valueType === 'TEXT') {
      var _bookingQuestion$answ4;

      answer = (_bookingQuestion$answ4 = bookingQuestion.answer) === null || _bookingQuestion$answ4 === void 0 ? void 0 : _bookingQuestion$answ4.textValue;
    }

    return answer === null ? undefined : answer;
  };

  const loadBookingAnswers = cart => {
    for (let question of cart.bookingQuestions) {
      if (!question.answer) {
        continue;
      }

      setBookingAnswers(bookingAnswers => [...bookingAnswers.filter(q => q.questionId !== question.id), {
        questionId: question.id,
        answer: getAnswer(question)
      }]);
    }
  }; // const getPersonalInformation = (cart: Cart): PersonalInformation => {
  //     return {
  //         email: cart.clientInformation?.email ?? '',
  //         phone: cart.clientInformation?.phoneNumber.substring(2) ?? '',
  //         firstName: cart.clientInformation?.firstName ?? '',
  //         lastName: cart.clientInformation?.lastName ?? '',
  //     }
  // }


  const resetCategories = async () => {
    resetSelectedCartAvailableCategory();
  };

  const loadSelectedServices = async (cart, servicesFromCart, selectedCartAvailableCategory) => {
    const services = reverseSelectedServices(servicesFromCart);

    if (services.length === 0) {
      return;
    }

    const activeService = services[0];
    setActiveSelectedService(activeService);

    if (isCartAvailableBookableItem(activeService.item)) {
      const staffs = await activeService.item.getStaffVariants();
      setBookableStaffVariants(staffs.flatMap(z => (0,staff/* cartAvailableBookableItemStaffVariantToStaff */.Wk)(z)));
    } else {
      setBookableStaffVariants([]);
    }

    setAllowChooseStaffError(false);

    if (selectedCartAvailableCategory) {
      setSelectedCartAvailableCategory(selectedCartAvailableCategory);
    }
  };

  const getSelectedCartAvailableCategoryFromSelectedServices = (servicesFromCart, availableCategories) => {
    let selectedCartAvailableCategory = undefined;

    if (servicesFromCart.length === 0) {
      return {
        selectedCartAvailableCategory: selectedCartAvailableCategory
      };
    }

    selectedCartAvailableCategory = availableCategories.find(pc => pc.availableItems.some(i => i.id === servicesFromCart[0].item.id));
    return {
      selectedCartAvailableCategory: selectedCartAvailableCategory
    };
  };

  const forceLoadSelectedServices = async (cart, availableCategories) => {
    const servicesFromCart = await loadSelectedServicesFromCart(cart, []);
    const {
      selectedCartAvailableCategory
    } = getSelectedCartAvailableCategoryFromSelectedServices(servicesFromCart, availableCategories);
    await loadSelectedServices(cart, servicesFromCart, selectedCartAvailableCategory);
    return servicesFromCart;
  };

  const loadSelectedStaff = async servicesFromCart => {
    const staffs = [];

    for (let selectedItem of servicesFromCart) {
      if (selectedItem.selectedStaffVariant) {
        staffs.push({
          cartBookableItemId: selectedItem.id,
          staff: (0,staff/* cartAvailableBookableItemStaffVariantToStaff */.Wk)(selectedItem.selectedStaffVariant)
        });
      }
    }

    setCartBookableItemListStaff(staffs);
  };

  const loadStoresForCartBookableItems = async (selectedBookableItems, lastSelectedItem) => {
    let locations = undefined;
    const cartAvailableBookableItems = selectedBookableItems.map(i => i.item);
    if (lastSelectedItem) cartAvailableBookableItems.push(lastSelectedItem);
    const localAvailableBookableItemStores = availableBookableItemStores.concat();

    for (let availableBookableItem of cartAvailableBookableItems) {
      const filteredAvailableBookableItemStores = localAvailableBookableItemStores.filter(x => x.availableBookableItemId == availableBookableItem.id);
      let itemLocationVariants = filteredAvailableBookableItemStores.flatMap(x => x.cartAvailableBookableItemLocationVariant);

      if (itemLocationVariants.length == 0) {
        itemLocationVariants = await availableBookableItem.getLocationVariants();
        localAvailableBookableItemStores.push({
          availableBookableItemId: availableBookableItem.id,
          cartAvailableBookableItemLocationVariant: itemLocationVariants
        });
      }

      if (locations === undefined) {
        locations = itemLocationVariants;
      } else {
        locations = locations.filter(l => itemLocationVariants.some(v => v.location.id === l.location.id));
      }
    }

    setAvailableBookableItemStores(localAvailableBookableItemStores);

    if (locations) {
      setLocations(locations.map(l => l.location));
    } else {
      setLocations([]);
    }
  };

  const setCartLocation = async (cart, selectedStore, cartStore, lastSelectedItem, selectedBookableItems) => {
    if (!cart) {
      return selectedBookableItems;
    }

    let newCart = cart; // if new location distinguish from previous selected location, replace cart with new one

    if (!cartStore || cartStore.location.id !== selectedStore.location.id) {
      newCart = await createCart(selectedStore.location, selectedStore);

      for (let item of selectedBookableItems) {
        const cartBookableItem = item;
        const cartAvailableBookableItem = cartBookableItem.item;

        if (cartAvailableBookableItem) {
          newCart = await newCart.addBookableItem(cartAvailableBookableItem);
        }
      }
    }

    if (!cartStore) {
      newCart = await newCart.setLocation(selectedStore.location);
    }

    let selectedCartAvailableItems = selectedCartAvailableItemsStateValue;

    if (lastSelectedItem) {
      newCart = await newCart.addBookableItem(lastSelectedItem);
      selectedCartAvailableItems = selectedCartAvailableItems.concat(lastSelectedItem);
      setSelectedCartAvailableItemsState(selectedCartAvailableItems);
    }

    return await loadSelectedServicesFromCart(newCart, selectedCartAvailableItems);
  };

  return {
    createCart: createCart,
    setCartCommonState: setCartCommonState,
    getCartDataLoadedState: getCartDataLoadedState,
    reserveBookableTime: reserveBookableTime,
    // getPersonalInformation: getPersonalInformation,
    loadBookingAnswers: loadBookingAnswers,
    resetCategories: resetCategories,
    addService: addService,
    removeService: removeService,
    addAddon: addAddon,
    removeAddon: removeAddon,
    selectStaff: selectStaff,
    loadSelectedServices: loadSelectedServices,
    forceLoadSelectedServices: forceLoadSelectedServices,
    loadSelectedStaff: loadSelectedStaff,
    loadStoresForCartBookableItems: loadStoresForCartBookableItems,
    setCartLocation: setCartLocation,
    isCartAvailableBookableItem: isCartAvailableBookableItem,
    isCartAvailablePurchasableItem: isCartAvailablePurchasableItem
  };
};
const useCartDataLoadedState = () => useRecoilValue(cartDataLoaded);
const useSetCartDataLoadedState = () => (0,external_recoil_.useSetRecoilState)(cartDataLoaded);

/***/ }),

/***/ 6312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ MapType),
/* harmony export */   "Vf": () => (/* binding */ DateTimeType),
/* harmony export */   "MK": () => (/* binding */ FlowType),
/* harmony export */   "Nf": () => (/* binding */ DisplayAppSettingsPopup),
/* harmony export */   "MG": () => (/* binding */ useAppConfig)
/* harmony export */ });
/* unused harmony exports mapTypeState, dateTimeTypeState, flowTypeState, useMapTypeState, useSetMapTypeState, useDateTimeTypeState, useSetDateTimeTypeState, useFlowTypeState, useSetFlowTypeState */
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8121);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_state_persistence__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var lib_sdk_hooks_useConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6087);
var _getPersistedState, _getPersistedState2, _getPersistedState3;




const MAP_TYPE = 'MAP_TYPE';
const DATETIME_TYPE = 'DATETIME_TYPE';
const FLOW_TYPE = 'FLOW_TYPE';
const mapTypeState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'mapTypeState',
  default: (_getPersistedState = (0,lib_state_persistence__WEBPACK_IMPORTED_MODULE_1__/* .getPersistedState */ .wU)(MAP_TYPE)) !== null && _getPersistedState !== void 0 ? _getPersistedState : undefined
});
const dateTimeTypeState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'dateTimeTypeState',
  default: (_getPersistedState2 = (0,lib_state_persistence__WEBPACK_IMPORTED_MODULE_1__/* .getPersistedState */ .wU)(DATETIME_TYPE)) !== null && _getPersistedState2 !== void 0 ? _getPersistedState2 : undefined
});
const flowTypeState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'flowTypeState',
  default: (_getPersistedState3 = (0,lib_state_persistence__WEBPACK_IMPORTED_MODULE_1__/* .getPersistedState */ .wU)(FLOW_TYPE)) !== null && _getPersistedState3 !== void 0 ? _getPersistedState3 : undefined
});
const useMapTypeState = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(mapTypeState);
const useSetMapTypeState = (0,lib_state_persistence__WEBPACK_IMPORTED_MODULE_1__/* .makePersistedSetRecoilState */ .GC)(MAP_TYPE, mapTypeState);
const useDateTimeTypeState = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(dateTimeTypeState);
const useSetDateTimeTypeState = (0,lib_state_persistence__WEBPACK_IMPORTED_MODULE_1__/* .makePersistedSetRecoilState */ .GC)(DATETIME_TYPE, dateTimeTypeState);
const useFlowTypeState = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(flowTypeState);
const useSetFlowTypeState = (0,lib_state_persistence__WEBPACK_IMPORTED_MODULE_1__/* .makePersistedSetRecoilState */ .GC)(FLOW_TYPE, flowTypeState);
let MapType;

(function (MapType) {
  MapType[MapType["MapBox"] = 0] = "MapBox";
  MapType[MapType["Google"] = 1] = "Google";
  MapType[MapType["None"] = 2] = "None";
})(MapType || (MapType = {}));

let DateTimeType;

(function (DateTimeType) {
  DateTimeType[DateTimeType["ShowTimeForOneDay"] = 0] = "ShowTimeForOneDay";
  DateTimeType[DateTimeType["ShowTimeForManyDays"] = 1] = "ShowTimeForManyDays";
})(DateTimeType || (DateTimeType = {}));

let FlowType;

(function (FlowType) {
  FlowType[FlowType["SelectLocationFirst"] = 0] = "SelectLocationFirst";
  FlowType[FlowType["SelectServiceFirst"] = 1] = "SelectServiceFirst";
})(FlowType || (FlowType = {}));

let DisplayAppSettingsPopup;

(function (DisplayAppSettingsPopup) {
  DisplayAppSettingsPopup[DisplayAppSettingsPopup["No"] = 0] = "No";
  DisplayAppSettingsPopup[DisplayAppSettingsPopup["Yes"] = 1] = "Yes";
})(DisplayAppSettingsPopup || (DisplayAppSettingsPopup = {}));

const useAppConfig = () => {
  const {
    mapType,
    flowType,
    dateTimeType,
    mapboxApiAccessToken,
    googleMapsApiAccessToken
  } = (0,lib_sdk_hooks_useConfig__WEBPACK_IMPORTED_MODULE_2__/* .useConfig */ .Z)();
  const mapTypeString = useMapTypeState();
  const dateTimeTypeString = useDateTimeTypeState();
  const flowTypeState = useFlowTypeState();

  function getValue(value, defaultValue, enumVariable) {
    var _result;

    let result;

    if (value) {
      result = enumVariable[value];
    }

    return (_result = result) !== null && _result !== void 0 ? _result : defaultValue;
  }

  const getMapType = () => {
    return getValue(mapTypeString, mapType, MapType);
  };

  const isMapAvailable = () => {
    const mapType = getMapType();

    if (mapType === MapType.MapBox) {
      return !!mapboxApiAccessToken;
    } else if (mapType === MapType.Google) {
      return !!googleMapsApiAccessToken;
    }

    return false;
  };

  const getDateTimeType = () => {
    return getValue(dateTimeTypeString, dateTimeType, DateTimeType);
  };

  const getFlowType = () => {
    return getValue(flowTypeState, flowType, FlowType);
  };

  return {
    getMapType: getMapType,
    getDateTimeType: getDateTimeType,
    getFlowType: getFlowType,
    isMapAvailable: isMapAvailable
  };
};

/***/ }),

/***/ 1846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OQ": () => (/* binding */ useCurrentPosition),
/* harmony export */   "sU": () => (/* binding */ useIsLocationAccessAllowed),
/* harmony export */   "aS": () => (/* binding */ useSetIsLocationAccessAllowed),
/* harmony export */   "X4": () => (/* binding */ useSetCurrentPositionName),
/* harmony export */   "v9": () => (/* binding */ useIsLocationAccessAnsweredByUser),
/* harmony export */   "be": () => (/* binding */ useSetIsLocationAccessAnsweredByUser)
/* harmony export */ });
/* unused harmony exports useSetCurrentPosition, useCurrentPositionName */
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8121);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_utils_locationUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8754);


const defaultPosition = {
  latitude: lib_utils_locationUtils__WEBPACK_IMPORTED_MODULE_1__/* .defaultLatitude */ .Bh,
  longitude: lib_utils_locationUtils__WEBPACK_IMPORTED_MODULE_1__/* .defaultLongitude */ .w_
};
const currentPositionState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'currentPositionState',
  default: defaultPosition
});
const currentPositionNameState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'currentPositionNameState',
  default: ''
});
const isLocationAccessAllowed = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'isLocationAccessAllowed',
  default: false
});
const isLocationAccessAnsweredByUser = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'isLocationAccessAnsweredByUser',
  default: false
});
const useCurrentPosition = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(currentPositionState);
const useSetCurrentPosition = () => useSetRecoilState(currentPositionState);
const useIsLocationAccessAllowed = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(isLocationAccessAllowed);
const useSetIsLocationAccessAllowed = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(isLocationAccessAllowed);
const useCurrentPositionName = () => useRecoilValue(currentPositionNameState);
const useSetCurrentPositionName = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(currentPositionNameState);
const useIsLocationAccessAnsweredByUser = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(isLocationAccessAnsweredByUser);
const useSetIsLocationAccessAnsweredByUser = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(isLocationAccessAnsweredByUser);

/***/ }),

/***/ 1886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dJ": () => (/* binding */ useUpdateStoresViewportState),
/* harmony export */   "Vz": () => (/* binding */ useSetUpdateStoresViewportState),
/* harmony export */   "ov": () => (/* binding */ useLocationSelectedStoreState),
/* harmony export */   "zS": () => (/* binding */ useSetLocationSelectedStoreState),
/* harmony export */   "Z$": () => (/* binding */ useResetLocationSelectedStoreState),
/* harmony export */   "a5": () => (/* binding */ useMapViewportState),
/* harmony export */   "hM": () => (/* binding */ useSetMapViewportState),
/* harmony export */   "Yo": () => (/* binding */ useIsShowMap),
/* harmony export */   "GZ": () => (/* binding */ useMapView),
/* harmony export */   "UQ": () => (/* binding */ useSetDefineLocationMapViewportState)
/* harmony export */ });
/* unused harmony exports locationSelectedStoreState, mapViewportState, updateStoresViewportState, defineLocationMapViewportState, isShowMapState, useSetIsShowMap */
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8121);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const locationSelectedStoreState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'locationSelectedStoreState',
  default: undefined
});
const mapViewportState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'mapViewportState',
  default: {
    latitude: 37.7577,
    longitude: -102.4376,
    zoom: 3
  }
});
const updateStoresViewportState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'updateStoresViewportState',
  default: undefined
});
const defineLocationMapViewportState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'defineLocationMapViewportState',
  default: {}
});
const isShowMapState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'isShowMapState',
  default: false
});
const useUpdateStoresViewportState = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(updateStoresViewportState);
const useSetUpdateStoresViewportState = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(updateStoresViewportState);
const useLocationSelectedStoreState = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilState)(locationSelectedStoreState);
const useSetLocationSelectedStoreState = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(locationSelectedStoreState);
const useResetLocationSelectedStoreState = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useResetRecoilState)(locationSelectedStoreState);
const useMapViewportState = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilState)(mapViewportState);
const useSetMapViewportState = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(mapViewportState);
const useIsShowMap = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilState)(isShowMapState);
const useSetIsShowMap = () => useSetRecoilState(isShowMapState);
const useMapView = () => {
  const getMapViewportState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilCallback)(({
    snapshot
  }) => () => {
    let loadable = snapshot.getLoadable(defineLocationMapViewportState);
    return loadable.valueMaybe();
  }, []);
  return {
    getMapViewportState: getMapViewportState
  };
};
const useSetDefineLocationMapViewportState = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(defineLocationMapViewportState);

/***/ }),

/***/ 8038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wU": () => (/* binding */ getPersistedState),
/* harmony export */   "GC": () => (/* binding */ makePersistedSetRecoilState)
/* harmony export */ });
/* unused harmony exports setPersistedState, deletePersistedState */
/* harmony import */ var detect_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2801);
/* harmony import */ var detect_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(detect_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8121);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Local Storage Persistence for recoil states
 */


function getPersistedState(key) {
  if ((detect_node__WEBPACK_IMPORTED_MODULE_0___default())) return null;
  const state = localStorage.getItem(key);
  return !!state ? JSON.parse(state) : null;
}
function setPersistedState(key, state) {
  localStorage.setItem(key, JSON.stringify(state));
}
function deletePersistedState(key) {
  localStorage.removeItem(key);
}
function makePersistedSetRecoilState(key, atom) {
  return () => {
    const setRecoilState = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useSetRecoilState)(atom);
    return newVal => {
      setRecoilState(newVal);

      if (newVal === undefined) {
        deletePersistedState(key);
      } else {
        setPersistedState(key, newVal);
      }
    };
  };
}

/***/ }),

/***/ 8289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UL": () => (/* binding */ usePersonalInformationState),
/* harmony export */   "TY": () => (/* binding */ useSetPersonalInformationState)
/* harmony export */ });
/* unused harmony export useResetPersonalInformationState */
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8121);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const personalInformationState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'personalInformationState',
  default: {
    firstName: '',
    email: '',
    lastName: '',
    phone: '',
    password: ''
  }
});
const usePersonalInformationState = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilState)(personalInformationState);
const useSetPersonalInformationState = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(personalInformationState);
const useResetPersonalInformationState = () => useResetRecoilState(personalInformationState);

/***/ }),

/***/ 4226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EB": () => (/* binding */ useAvailableCategories),
/* harmony export */   "UK": () => (/* binding */ useSetAvailableCategories),
/* harmony export */   "ce": () => (/* binding */ useSelectedCartAvailableCategory),
/* harmony export */   "OT": () => (/* binding */ useSetSelectedCartAvailableCategory),
/* harmony export */   "IY": () => (/* binding */ useResetSelectedCartAvailableCategory),
/* harmony export */   "dQ": () => (/* binding */ useActiveSelectedService),
/* harmony export */   "qI": () => (/* binding */ useSetActiveSelectedService),
/* harmony export */   "ds": () => (/* binding */ useLastSelectedBookableItem),
/* harmony export */   "hT": () => (/* binding */ useSetLastSelectedBookableItem),
/* harmony export */   "Ui": () => (/* binding */ useResetLastSelectedBookableItem),
/* harmony export */   "bI": () => (/* binding */ useSelectedServices),
/* harmony export */   "r9": () => (/* binding */ useServiceActions)
/* harmony export */ });
/* unused harmony exports availableCategoriesState, selectedCartAvailableCategoryState, selectedServicesState, selectedCartAvailableItemsState, activeSelectedServiceState, lastSelectedBookableItem */
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8121);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_state_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1601);
/* harmony import */ var lib_state_booking_flow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6750);
/* harmony import */ var lib_state_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6312);
/* harmony import */ var lib_state_booking_flow_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(469);





const availableCategoriesState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'availableCategories',
  default: []
});
const selectedCartAvailableCategoryState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'selectedCartAvailableCategoryState',
  default: undefined
});
const selectedServicesState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'selectedServicesState',
  default: []
});
const selectedCartAvailableItemsState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'selectedCartAvailableItemsState',
  default: []
});
const activeSelectedServiceState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'activeSelectedServiceState',
  default: undefined
});
const lastSelectedBookableItem = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'lastSelectedBookableItem',
  default: undefined
});
const useAvailableCategories = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(availableCategoriesState);
const useSetAvailableCategories = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(availableCategoriesState);
const useSelectedCartAvailableCategory = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(selectedCartAvailableCategoryState);
const useSetSelectedCartAvailableCategory = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(selectedCartAvailableCategoryState);
const useResetSelectedCartAvailableCategory = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useResetRecoilState)(selectedCartAvailableCategoryState);
const useActiveSelectedService = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(activeSelectedServiceState);
const useSetActiveSelectedService = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(activeSelectedServiceState);
const useLastSelectedBookableItem = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(lastSelectedBookableItem);
const useSetLastSelectedBookableItem = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(lastSelectedBookableItem);
const useResetLastSelectedBookableItem = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useResetRecoilState)(lastSelectedBookableItem);
const useSelectedServices = () => {
  const selectedServicesStateValue = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(selectedServicesState);
  const setSelectedServicesStateValue = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(selectedServicesState);
  const selectedCartAvailableItemsStateValue = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(selectedCartAvailableItemsState);
  const setSelectedCartAvailableItemsState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(selectedCartAvailableItemsState);

  const reverseSelectedServices = selectedServies => {
    return selectedServies.concat().reverse();
  };

  const loadSelectedServicesFromCart = async (cart, selectedCartAvailableItems) => {
    const selectedItems = await cart.getSelectedItems();
    const cartBookableItems = selectedItems.map(x => {
      return x;
    }); // We shouldn’t rely on the ordering of the items
    // returned by getSelectedItems - that ordering is not guaranteed and can change at any point in the future.
    // Sort items based on selectedCartAvailableItems.

    const usedIndexes = [];
    const sortedCartBookableItems = [];

    for (let availableItem of selectedCartAvailableItems) {
      for (let i = 0; i < cartBookableItems.length; i++) {
        const selectedItem = cartBookableItems[i];

        if (selectedItem.item.id === availableItem.id && usedIndexes.find(x => x === i) === undefined) {
          sortedCartBookableItems.push(selectedItem);
          usedIndexes.push(i);
          break;
        }
      }
    } // We don't want to miss any element returned by server even it's available item is not in the selectedCartAvailableItems for some reason.


    for (let cartBookableItem of cartBookableItems) {
      if (sortedCartBookableItems.find(x => x.id === cartBookableItem.id) === undefined) {
        sortedCartBookableItems.push(cartBookableItem);
      }
    }

    setSelectedServicesStateValue(sortedCartBookableItems);

    if (sortedCartBookableItems.length === 0) {
      setSelectedCartAvailableItemsState([]);
    } else if (selectedCartAvailableItemsStateValue.length === 0) {
      setSelectedCartAvailableItemsState(sortedCartBookableItems.map(x => x.item));
    }

    return sortedCartBookableItems;
  };

  return {
    selectedServicesStateValue: selectedServicesStateValue,
    loadSelectedServicesFromCart: loadSelectedServicesFromCart,
    reverseSelectedServices: reverseSelectedServices,
    selectedCartAvailableItemsStateValue: selectedCartAvailableItemsStateValue,
    setSelectedCartAvailableItemsState: setSelectedCartAvailableItemsState
  };
};
const useServiceActions = bookableItem => {
  const cart = (0,lib_state_cart__WEBPACK_IMPORTED_MODULE_1__/* .useCartState */ .KO)();
  const setActiveSelectedService = useSetActiveSelectedService();
  const {
    removeService,
    createCart
  } = (0,lib_state_cart__WEBPACK_IMPORTED_MODULE_1__/* .useCartMethods */ .ei)();
  const {
    setStep
  } = (0,lib_state_booking_flow__WEBPACK_IMPORTED_MODULE_2__/* .useFlowStep */ .c8)();
  const {
    reverseSelectedServices
  } = useSelectedServices();
  const {
    getFlowType
  } = (0,lib_state_config__WEBPACK_IMPORTED_MODULE_3__/* .useAppConfig */ .MG)();
  const flowType = getFlowType();

  const removeAllItemsSelectLocationFirstNextStep = async () => {
    await setStep(lib_state_booking_flow_types__WEBPACK_IMPORTED_MODULE_4__/* .Step.SelectService */ .h.SelectService);
  };

  const removeAllItemsSelectServiceFirstNextStep = async () => {
    await createCart();
    await setStep(lib_state_booking_flow_types__WEBPACK_IMPORTED_MODULE_4__/* .Step.SelectService */ .h.SelectService);
  };

  const removeAllItemsNextStep = async () => {
    if (flowType === lib_state_config__WEBPACK_IMPORTED_MODULE_3__/* .FlowType.SelectLocationFirst */ .MK.SelectLocationFirst) {
      await removeAllItemsSelectLocationFirstNextStep();
    } else {
      await removeAllItemsSelectServiceFirstNextStep();
    }
  };

  const onRemoveClick = async () => {
    if (cart === undefined || bookableItem === undefined) {
      return;
    }

    const cartServices = await removeService(cart, bookableItem);

    if (cartServices.services.length === 0) {
      await removeAllItemsNextStep();
    } else {
      const services = reverseSelectedServices(cartServices.services);
      const activeItem = services[0];
      setActiveSelectedService(activeItem);
      return {
        activeItem,
        selectedServices: cartServices.services
      };
    }
  };

  const onEditAddonClick = async () => {
    setActiveSelectedService(bookableItem);
    await setStep(lib_state_booking_flow_types__WEBPACK_IMPORTED_MODULE_4__/* .Step.SelectOptions */ .h.SelectOptions);
  };

  return {
    onRemoveClick: onRemoveClick,
    onEditAddonClick: onEditAddonClick
  };
};

/***/ }),

/***/ 937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IV": () => (/* binding */ useResetStaffDatesStore),
/* harmony export */   "dG": () => (/* binding */ useStaffDates)
/* harmony export */ });
/* unused harmony exports staffDatesState, selectedStaffDateState, useSelectedStaffDateState, useSetSelectedStaffDateState */
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8121);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_utils_formatDateFns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8053);
/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8083);
/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns_tz__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3879);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);




const staffDatesState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'staffDatesState',
  default: []
});
const selectedStaffDateState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'selectedStaffDateState',
  default: undefined
});
const useResetStaffDatesStore = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useResetRecoilState)(staffDatesState);
const useStaffDates = () => {
  const cartBookableDateToStaffDate = cartBookableDate => {
    return {
      date: new Date(cartBookableDate.date),
      cartBookableDate: cartBookableDate
    };
  };

  const addStaffDates = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilCallback)(({
    set
  }) => cartBookableDates => {
    const dates = cartBookableDates.map(x => cartBookableDateToStaffDate(x));
    const yearArrays = dates.map(x => x.date.getFullYear());
    const years = [...new Set(yearArrays)];
    years.forEach(year => {
      const monthArrays = dates.filter(x => x.date.getUTCFullYear() === year).map(x => x.date.getUTCMonth());
      const months = [...new Set(monthArrays)];
      months.forEach(month => {
        const monthDates = dates.filter(x => x.date.getUTCMonth() === month && x.date.getUTCFullYear() === year);
        set(staffDatesState, prevItems => {
          var _prevItems$find$dates, _prevItems$find;

          const prevMonthDates = (_prevItems$find$dates = (_prevItems$find = prevItems.find(x => x.year === year && x.month === month)) === null || _prevItems$find === void 0 ? void 0 : _prevItems$find.dates) !== null && _prevItems$find$dates !== void 0 ? _prevItems$find$dates : [];
          const items = prevItems.filter(x => !(x.year === year && x.month === month)); //remove possible duplicates

          const dates = [...new Map(monthDates.concat(prevMonthDates).map(item => [item.date.getDate(), item])).values()];
          return items.concat([{
            month: month,
            dates: dates,
            year: year
          }]);
        });
      });
    });
  }, []);

  const getRangeDate = (date, locationTz) => {
    return (0,lib_utils_formatDateFns__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP)(date, locationTz, 'yyyy-MM-dd');
  };

  const loadStaffDatesForMonth = async (year, month, cart, locationTz) => {
    const staffDatesStore = getStaffDateState(); //check do we need to get passed month or not

    if (staffDatesStore && (staffDatesStore === null || staffDatesStore === void 0 ? void 0 : staffDatesStore.filter(x => x.year === year && x.month === month).length) > 0) {
      return [];
    }

    try {
      const minimumDate = getMinimumDate(locationTz);
      const monthStart = new Date(year, month, 1);
      const lowerRangeDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.isAfter)(minimumDate, monthStart) ? minimumDate : monthStart;
      const dates = await cart.getBookableDates({
        searchRangeLower: getRangeDate(lowerRangeDate, locationTz),
        searchRangeUpper: getRangeDate(new Date(year, month + 1, 0), locationTz),
        timezone: locationTz
      });

      if (dates === undefined) {
        return [];
      }

      addStaffDates(dates);
      return dates;
    } catch (e) {
      console.error(e);
    }

    return [];
  };

  const loadStaffDates = async (year, month, cart, locationTz) => {
    if (!cart) {
      return [];
    }

    let date1 = new Date(year, month, 1);
    let date2 = new Date(date1.getFullYear(), date1.getMonth() + 1, 1);
    return (await Promise.all([loadStaffDatesForMonth(date1.getFullYear(), date1.getMonth(), cart, locationTz), loadStaffDatesForMonth(date2.getFullYear(), date2.getMonth(), cart, locationTz)])).flatMap(x => x);
  };

  const getMinimumDate = locationTz => {
    const availabilityExcludedHours = 0;
    return (0,date_fns_tz__WEBPACK_IMPORTED_MODULE_2__.utcToZonedTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_3__.addHours)(new Date(), availabilityExcludedHours), locationTz);
  };

  const getFirstAvailableDayAfterTheDate = async (cart, locationTz, minimumDate) => {
    if (!cart) {
      return undefined;
    }

    try {
      const dates = await cart.getBookableDates({
        searchRangeLower: getRangeDate(minimumDate, locationTz),
        timezone: locationTz,
        limit: 1
      });

      if (dates === undefined || dates.length === 0) {
        return undefined;
      }

      return dates[0];
    } catch (e) {
      return undefined;
    }
  };

  const getFirstAvailableDay = async (cart, locationTz) => {
    return getFirstAvailableDayAfterTheDate(cart, locationTz, getMinimumDate(locationTz));
  };

  const getStaffDateState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilCallback)(({
    snapshot
  }) => () => {
    let loadable = snapshot.getLoadable(staffDatesState);
    return loadable.valueMaybe();
  }, []);
  return {
    getFirstAvailableDay: getFirstAvailableDay,
    getFirstAvailableDayAfterTheDate: getFirstAvailableDayAfterTheDate,
    loadStaffDates: loadStaffDates,
    getStaffDateState: getStaffDateState,
    getMinimumDate: getMinimumDate,
    cartBookableDateToStaffDate: cartBookableDateToStaffDate
  };
};
const useSelectedStaffDateState = () => useRecoilValue(selectedStaffDateState);
const useSetSelectedStaffDateState = () => useSetRecoilState(selectedStaffDateState);

/***/ }),

/***/ 8647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$o": () => (/* binding */ useStaffTimesState),
/* harmony export */   "Wk": () => (/* binding */ useResetStaffTimesState),
/* harmony export */   "wq": () => (/* binding */ useSelectedStaffTimeState),
/* harmony export */   "wO": () => (/* binding */ useSetSelectedStaffTimeState),
/* harmony export */   "Lv": () => (/* binding */ useResetSelectedStaffTimeState),
/* harmony export */   "VH": () => (/* binding */ useStaffTimes),
/* harmony export */   "Aj": () => (/* binding */ useTimesAreLoadingState),
/* harmony export */   "V4": () => (/* binding */ useLoadingStaffTimeState),
/* harmony export */   "IW": () => (/* binding */ useSetLoadingStaffTimeState)
/* harmony export */ });
/* unused harmony exports staffTimesState, timesAreLoadingState, loadingStaffTimeState, selectedStaffTimeState, cartBookableTimeToStaffTime, useSetTimesAreLoadingState */
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8121);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8083);
/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_tz__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_state_staffDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(937);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3879);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lib_utils_sortUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2710);
/* harmony import */ var lib_state_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6312);






const staffTimesState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'staffTimesState',
  default: []
});
const timesAreLoadingState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'timesAreLoadingState',
  default: true
});
const loadingStaffTimeState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'loadingStaffTimeState',
  default: false
});
const selectedStaffTimeState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'selectedStaffTimeState',
  default: undefined
});
const useStaffTimesState = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(staffTimesState);
const useResetStaffTimesState = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useResetRecoilState)(staffTimesState);
const useSelectedStaffTimeState = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(selectedStaffTimeState);
const useSetSelectedStaffTimeState = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(selectedStaffTimeState);
const useResetSelectedStaffTimeState = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useResetRecoilState)(selectedStaffTimeState);
const cartBookableTimeToStaffTime = (startTime, locationTz, cartBookableTime) => {
  return {
    startTime: new Date(startTime),
    localTime: (0,date_fns_tz__WEBPACK_IMPORTED_MODULE_1__.utcToZonedTime)(startTime, Intl.DateTimeFormat().resolvedOptions().timeZone),
    locationTime: (0,date_fns_tz__WEBPACK_IMPORTED_MODULE_1__.utcToZonedTime)(startTime, locationTz),
    cartBookableTime: cartBookableTime
  };
};
const useStaffTimes = () => {
  const {
    getMinimumDate
  } = (0,lib_state_staffDate__WEBPACK_IMPORTED_MODULE_2__/* .useStaffDates */ .dG)();
  const {
    loadStaffDates,
    cartBookableDateToStaffDate,
    getFirstAvailableDayAfterTheDate,
    getStaffDateState
  } = (0,lib_state_staffDate__WEBPACK_IMPORTED_MODULE_2__/* .useStaffDates */ .dG)();
  const staffDatesStore = getStaffDateState();
  const staffTimes = useStaffTimesState();
  const setTimesAreLoadingState = useSetTimesAreLoadingState();
  const resetStaffDatesStore = (0,lib_state_staffDate__WEBPACK_IMPORTED_MODULE_2__/* .useResetStaffDatesStore */ .IV)();
  const resetStaffTimesState = useResetStaffTimesState();
  const resetSelectedStaffTimeState = useResetSelectedStaffTimeState();
  const {
    getDateTimeType
  } = (0,lib_state_config__WEBPACK_IMPORTED_MODULE_4__/* .useAppConfig */ .MG)();
  const addStaffTimes = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilCallback)(({
    set
  }) => (cartBookableTimes, locationTz, minimumDate) => {
    const times = cartBookableTimes.map(x => cartBookableTimeToStaffTime(x.startTime, locationTz, x)).filter(x => (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.isAfter)(x.locationTime, minimumDate));
    const yearArrays = times.map(x => x.locationTime.getFullYear());
    const years = [...new Set(yearArrays)];
    years.forEach(year => {
      const monthArrays = times.filter(x => x.locationTime.getFullYear() === year).map(x => x.locationTime.getMonth());
      const months = [...new Set(monthArrays)];
      months.forEach(month => {
        const dayArrays = times.filter(x => x.locationTime.getMonth() === month && x.locationTime.getFullYear() === year).map(x => x.locationTime.getDate());
        const days = [...new Set(dayArrays)];
        days.forEach(day => {
          //suppose we get the whole day from the server
          const dayTimes = times.filter(x => x.locationTime.getMonth() === month && x.locationTime.getFullYear() === year && x.locationTime.getDate() === day);
          set(staffTimesState, prevItems => prevItems.filter(x => !(x.year === year && x.month === month && x.day === day)).concat({
            month: month,
            times: dayTimes,
            year: year,
            day: day,
            date: new Date(year, month, day)
          }));
        });
      });
    });
  }, []);
  const clearStaffTimes = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilCallback)(({
    reset
  }) => () => {
    reset(staffTimesState);
  }, []);

  const loadStaffTimes = async (cart, staffDate, locationTz) => {
    if (!cart || !staffDate || !staffDate.cartBookableDate) {
      return;
    }

    try {
      const times = await cart.getBookableTimes(staffDate.cartBookableDate, {
        timezone: locationTz
      });

      if (times === undefined) {
        return;
      }

      const minimumDate = getMinimumDate(locationTz);
      addStaffTimes(times, locationTz, minimumDate);
      return times;
    } catch (e) {
      console.error(e);
    }
  };

  const timePageSize = 10;

  const loadStaffTimesByStaffDates = (cart, locationTz, staffDates) => {
    setTimesAreLoadingState(true);
    staffDates.reduce((p, staffDate) => p.then(_ => loadStaffTimes(cart, staffDate, locationTz)), Promise.resolve()).finally(() => {
      setTimesAreLoadingState(false);
    });
  };

  const forceLoadDatesAndTimes = async (cart, location, date) => {
    resetStaffDatesStore();
    resetStaffTimesState();
    resetSelectedStaffTimeState();
    await loadDatesAndTimes(cart, location, date);
  };

  const loadDatesAndTimes = async (cart, location, date) => {
    const cartBookableDates = await loadStaffDates(date.getFullYear(), date.getMonth(), cart, location.tz);
    const staffDates = cartBookableDates.map(x => cartBookableDateToStaffDate(x)).sort(lib_utils_sortUtils__WEBPACK_IMPORTED_MODULE_5__/* .sortByDate */ .d).slice(0, timePageSize);
    const dateTimeType = getDateTimeType();

    if (dateTimeType === lib_state_config__WEBPACK_IMPORTED_MODULE_4__/* .DateTimeType.ShowTimeForOneDay */ .Vf.ShowTimeForOneDay) {
      if (staffDates.length > 0) {
        const staffDate = staffDates[0];
        await loadStaffTimes(cart, staffDate, location.tz);
      }

      return;
    }

    loadStaffTimesByStaffDates(cart, location.tz, staffDates);
  };

  const loadNextTimesPage = async (cart, locationTz) => {
    if (cart === undefined || staffTimes.length === 0 || staffDatesStore === undefined || staffDatesStore.length === 0) {
      return false;
    } // get the list of dates
    // sortedStaffDatesStore contains list of available dates.


    const lastLoadedDate = staffTimes[staffTimes.length - 1].date;
    lastLoadedDate.setHours(staffDatesStore[0].dates[0].date.getHours());
    const sortedStaffDatesStore = staffDatesStore.flatMap(x => x.dates).sort(lib_utils_sortUtils__WEBPACK_IMPORTED_MODULE_5__/* .sortByDate */ .d);
    let staffDates = sortedStaffDatesStore.filter(x => (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.isAfter)(x.date, lastLoadedDate)).slice(0, timePageSize);

    if (staffDates.length < timePageSize) {
      // if number of available dates is less than page size then we should get more available days from the server
      // to get next available dates we need to determine the next month to load data
      const lastStaffDate = sortedStaffDatesStore[sortedStaffDatesStore.length - 1].date;
      const nextMonthDate = new Date(lastStaffDate.getFullYear(), lastStaffDate.getMonth() + 1, 1);
      let cartBookableDates = await loadStaffDates(nextMonthDate.getFullYear(), nextMonthDate.getMonth(), cart, locationTz);

      if (cartBookableDates.length === 0) {
        //if next month doesn't have available days - get first available day after next month
        const firstAvailableDay = await getFirstAvailableDayAfterTheDate(cart, locationTz, nextMonthDate);

        if (firstAvailableDay !== undefined) {
          // if available day exists then load days for the month of the available day
          const dateToLoad = (0,date_fns_tz__WEBPACK_IMPORTED_MODULE_1__.zonedTimeToUtc)(firstAvailableDay.date, locationTz);
          cartBookableDates = await loadStaffDates(dateToLoad.getFullYear(), dateToLoad.getMonth(), cart, locationTz);
        }
      }

      staffDates = staffDates.concat(cartBookableDates.map(x => cartBookableDateToStaffDate(x))).sort(lib_utils_sortUtils__WEBPACK_IMPORTED_MODULE_5__/* .sortByDate */ .d).slice(0, timePageSize);
    }

    loadStaffTimesByStaffDates(cart, locationTz, staffDates); // return true if we were able to get number of days equals to page size. Otherwise return false - meaning there is no more days

    return staffDates.length >= timePageSize;
  };

  return {
    clearStaffTimes,
    loadStaffTimes: loadStaffTimes,
    loadDatesAndTimes: loadDatesAndTimes,
    timePageSize: timePageSize,
    loadNextTimesPage: loadNextTimesPage,
    forceLoadDatesAndTimes: forceLoadDatesAndTimes
  };
};
const useTimesAreLoadingState = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(timesAreLoadingState);
const useSetTimesAreLoadingState = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(timesAreLoadingState);
const useLoadingStaffTimeState = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(loadingStaffTimeState);
const useSetLoadingStaffTimeState = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(loadingStaffTimeState);

/***/ }),

/***/ 734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wk": () => (/* binding */ cartAvailableBookableItemStaffVariantToStaff),
/* harmony export */   "Pk": () => (/* binding */ useBookableStaffVariants),
/* harmony export */   "OB": () => (/* binding */ useSetBookableStaffVariants),
/* harmony export */   "eK": () => (/* binding */ useCartBookableItemListStaff),
/* harmony export */   "tM": () => (/* binding */ useSetCartBookableItemListStaff),
/* harmony export */   "Or": () => (/* binding */ useAllowChooseStaffError),
/* harmony export */   "JR": () => (/* binding */ useSetAllowChooseStaffError)
/* harmony export */ });
/* unused harmony exports bookableStaffVariantsState, cartBookableItemStaffListState, allowChooseStaffErrorState */
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8121);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const bookableStaffVariantsState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'bookableStaffVariantsState',
  default: []
});
const cartBookableItemStaffListState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'cartBookableItemStaffState',
  default: undefined
});
const allowChooseStaffErrorState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'allowChooseStaffErrorState',
  default: false
});
const cartAvailableBookableItemStaffVariantToStaff = z => {
  return {
    id: z.staff.id,
    name: `${z.staff.firstName} ${z.staff.lastName}`,
    description: z.staff.bio,
    avatar: z.staff.avatar,
    staffVariant: z
  };
};
const useBookableStaffVariants = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(bookableStaffVariantsState);
const useSetBookableStaffVariants = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(bookableStaffVariantsState);
const useCartBookableItemListStaff = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(cartBookableItemStaffListState);
const useSetCartBookableItemListStaff = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(cartBookableItemStaffListState);
const useAllowChooseStaffError = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(allowChooseStaffErrorState);
const useSetAllowChooseStaffError = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(allowChooseStaffErrorState);

/***/ }),

/***/ 9639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xs": () => (/* binding */ useCartStoreState),
/* harmony export */   "fz": () => (/* binding */ useSetCartStoreState),
/* harmony export */   "rH": () => (/* binding */ useResetCartStoreState),
/* harmony export */   "n_": () => (/* binding */ useStoresState),
/* harmony export */   "pA": () => (/* binding */ useSetStoresState),
/* harmony export */   "WJ": () => (/* binding */ useAvailableBookableItemStoresState),
/* harmony export */   "sQ": () => (/* binding */ useSetAvailableBookableItemStoresState)
/* harmony export */ });
/* unused harmony exports cartStoreState, storesState, availableBookableItemStoresState */
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8121);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const cartStoreState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'cartStoreState',
  default: undefined
});
const storesState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'storesState',
  default: []
});
const availableBookableItemStoresState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'availableBookableItemStoresState',
  default: []
});
const useCartStoreState = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(cartStoreState);
const useSetCartStoreState = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(cartStoreState);
const useResetCartStoreState = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useResetRecoilState)(cartStoreState);
const useStoresState = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(storesState);
const useSetStoresState = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(storesState);
const useAvailableBookableItemStoresState = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(availableBookableItemStoresState);
const useSetAvailableBookableItemStoresState = () => (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(availableBookableItemStoresState);

/***/ }),

/***/ 8447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ theme),
/* harmony export */   "f": () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8035);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var config_colors_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8714);
/* harmony import */ var config_fonts_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3510);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: '70px',
          borderBottom: `1px solid #0000000a`,
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start'
        },
        colorPrimary: {
          backgroundColor: '#FFFFFF'
        }
      }
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: '3px'
        },
        barColorPrimary: {
          backgroundColor: config_colors_json__WEBPACK_IMPORTED_MODULE_1__.primary.main
        },
        colorPrimary: {
          backgroundColor: '#FFFFFF'
        }
      }
    },
    MuiFormControl: {
      defaultProps: {
        variant: 'filled',
        size: 'small',
        margin: 'none'
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          color: 'rgba(0, 0, 0, 0.6)',
          fontSize: '16px',
          fontFamily: config_fonts_json__WEBPACK_IMPORTED_MODULE_2__/* .body_family */ .Xw,
          left: -12,
          transform: 'translate(12px, 40px) scale(1)',
          transformOrigin: 'bottom left',
          '&.Mui-focused': {
            transform: 'translate(12px, 18px) scale(0.75)',
            color: 'rgba(0, 0, 0, 0.6)'
          },
          position: 'relative',
          whiteSpace: 'normal',
          paddingRight: '6px'
        },
        shrink: {
          transform: 'translate(12px, 18px) scale(0.75)'
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '2px',
          fontSize: 16,
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#33343C !important',
            borderWidth: '1px !important'
          }
        }
      }
    },
    MuiSelect: {
      defaultProps: {
        size: 'small',
        variant: 'filled'
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          whiteSpace: 'normal'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: config_colors_json__WEBPACK_IMPORTED_MODULE_1__.custom.lightGray
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#33343C',
            borderWidth: '1px'
          }
        }
      },
      defaultProps: {
        variant: 'filled',
        fullWidth: true,
        size: 'small'
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          minHeight: '48px',
          ':after': {
            borderBottomColor: config_colors_json__WEBPACK_IMPORTED_MODULE_1__.primary.main
          }
        },
        input: {
          paddingLeft: 0,
          backgroundColor: '#FFFFFF',
          boxSizing: 'border-box',
          height: '48px',
          '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 100px #ffffff inset'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: '140px',
          height: '38px',
          fontFamily: config_fonts_json__WEBPACK_IMPORTED_MODULE_2__/* .body_family */ .Xw,
          textTransform: 'capitalize',
          fontWeight: 500,
          fontSize: '16px',
          boxShadow: 'none',
          borderRadius: '4px'
        },
        outlinedPrimary: {
          borderColor: config_colors_json__WEBPACK_IMPORTED_MODULE_1__.primary.main,
          color: config_colors_json__WEBPACK_IMPORTED_MODULE_1__.primary.main,
          '&:hover': {
            border: `1px solid ${config_colors_json__WEBPACK_IMPORTED_MODULE_1__.primary.main}`
          }
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: config_colors_json__WEBPACK_IMPORTED_MODULE_1__.primary.dark,
            border: `none`,
            color: config_colors_json__WEBPACK_IMPORTED_MODULE_1__.primary.contrastText,
            boxShadow: 'none'
          },
          '&.Mui-disabled': {
            color: '#C3C7CF',
            backgroundColor: '#EEF2F7'
          }
        },
        textSecondary: {
          backgroundColor: config_colors_json__WEBPACK_IMPORTED_MODULE_1__.secondary.main,
          border: `2px solid #FFFFFF`,
          borderColor: config_colors_json__WEBPACK_IMPORTED_MODULE_1__.primary.main,
          color: config_colors_json__WEBPACK_IMPORTED_MODULE_1__.primary.main,
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: config_colors_json__WEBPACK_IMPORTED_MODULE_1__.secondary.main,
            border: `2px solid ${config_colors_json__WEBPACK_IMPORTED_MODULE_1__.primary.main}`,
            borderColor: config_colors_json__WEBPACK_IMPORTED_MODULE_1__.primary.dark,
            color: config_colors_json__WEBPACK_IMPORTED_MODULE_1__.primary.main,
            boxShadow: 'none'
          }
        }
      }
    }
  },
  typography: {
    fontFamily: config_fonts_json__WEBPACK_IMPORTED_MODULE_2__/* .body_family */ .Xw,
    fontSize: 16,
    h1: {
      fontFamily: config_fonts_json__WEBPACK_IMPORTED_MODULE_2__/* .headings_family */ .zc,
      color: 'rgba(0, 0, 0, 0.9)',
      fontSize: '32px',
      fontWeight: 500
    },
    h2: {
      fontFamily: config_fonts_json__WEBPACK_IMPORTED_MODULE_2__/* .headings_family */ .zc,
      color: 'rgba(0, 0, 0, 0.9)',
      fontSize: '20px',
      fontWeight: 500
    },
    h3: {
      fontFamily: config_fonts_json__WEBPACK_IMPORTED_MODULE_2__/* .body_family */ .Xw,
      color: '#33343C',
      fontSize: '16px',
      fontWeight: 'bold'
    },
    h4: {
      fontFamily: config_fonts_json__WEBPACK_IMPORTED_MODULE_2__/* .body_family */ .Xw,
      color: '#33343C',
      fontSize: '14px',
      fontWeight: 'bold',
      lineHeight: 2
    },
    h5: {
      fontFamily: config_fonts_json__WEBPACK_IMPORTED_MODULE_2__/* .body_family */ .Xw
    },
    h6: {
      fontFamily: config_fonts_json__WEBPACK_IMPORTED_MODULE_2__/* .body_family */ .Xw,
      fontSize: '20px'
    },
    subtitle1: {
      fontFamily: config_fonts_json__WEBPACK_IMPORTED_MODULE_2__/* .body_family */ .Xw,
      color: config_colors_json__WEBPACK_IMPORTED_MODULE_1__.primary.main,
      fontSize: 16,
      textTransform: 'uppercase'
    },
    subtitle2: {
      fontFamily: config_fonts_json__WEBPACK_IMPORTED_MODULE_2__/* .body_family */ .Xw,
      color: config_colors_json__WEBPACK_IMPORTED_MODULE_1__.primary.main,
      fontSize: 14,
      fontWeight: 'bold'
    },
    body1: {
      fontFamily: config_fonts_json__WEBPACK_IMPORTED_MODULE_2__/* .body_family */ .Xw,
      color: '#33343C',
      fontSize: '14px'
    },
    body2: {
      fontFamily: config_fonts_json__WEBPACK_IMPORTED_MODULE_2__/* .body_family */ .Xw,
      color: '#6E717D',
      fontSize: '14px'
    },
    button: {
      textTransform: 'none'
    }
  },
  palette: _objectSpread({}, config_colors_json__WEBPACK_IMPORTED_MODULE_1__),
  shape: {
    borderRadius: 0
  }
});
const ThemeProvider = ({
  children
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.ThemeProvider, {
    theme: theme,
    children: children
  });
};

/***/ }),

/***/ 8053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zt": () => (/* binding */ TimeFormat),
/* harmony export */   "gv": () => (/* binding */ cartTimeToDate),
/* harmony export */   "ZP": () => (/* binding */ formatDateFns)
/* harmony export */ });
/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8083);
/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns_tz__WEBPACK_IMPORTED_MODULE_0__);

const TimeFormat = 'h:mma';
const cartTimeToDate = (dateTime, defaultDate) => {
  if (dateTime === undefined || dateTime === null) {
    return defaultDate;
  }

  return (0,date_fns_tz__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateTime);
};
function formatDateFns(date, timeZone, format) {
  if (!date) {
    return '';
  }

  return (0,date_fns_tz__WEBPACK_IMPORTED_MODULE_0__.format)((0,date_fns_tz__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, {
    timeZone: timeZone
  }), format, {
    timeZone: timeZone
  });
}

/***/ }),

/***/ 8754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Er": () => (/* binding */ mapStyleTheme),
/* harmony export */   "Bh": () => (/* binding */ defaultLatitude),
/* harmony export */   "w_": () => (/* binding */ defaultLongitude),
/* harmony export */   "de": () => (/* binding */ defaultZoom),
/* harmony export */   "ND": () => (/* binding */ mapBoxTransitionDuration),
/* harmony export */   "EV": () => (/* binding */ mapBoxLongTransitionDuration),
/* harmony export */   "fm": () => (/* binding */ mapBoxFlyToInterpolator),
/* harmony export */   "Ih": () => (/* binding */ limitedMapBoxFlyToInterpolator),
/* harmony export */   "VN": () => (/* binding */ mapBoxLinearInterpolator),
/* harmony export */   "Y8": () => (/* binding */ scrollMapToTop),
/* harmony export */   "Kn": () => (/* binding */ getAddress),
/* harmony export */   "K4": () => (/* binding */ getLocationName)
/* harmony export */ });
/* unused harmony exports countryCanadaShort, NebraskaState, appExternalUrl, getStateOrProvince, getNavigationUrl */
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5508);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_map_gl__WEBPACK_IMPORTED_MODULE_0__);


const mapStyleTheme = 'mapbox://styles/mapbox/streets-v11';
const defaultLatitude = 40.6976637;
const defaultLongitude = -74.119764;
const countryCanadaShort = 'CA';
const NebraskaState = 'NE';
const defaultZoom = 16;
const mapBoxTransitionDuration = 500;
const mapBoxLongTransitionDuration = 2000;
const mapBoxFlyToInterpolator = new react_map_gl__WEBPACK_IMPORTED_MODULE_0__.FlyToInterpolator();
const limitedMapBoxFlyToInterpolator = new react_map_gl__WEBPACK_IMPORTED_MODULE_0__.FlyToInterpolator({
  maxDuration: 1500
});
const mapBoxLinearInterpolator = new react_map_gl__WEBPACK_IMPORTED_MODULE_0__.LinearInterpolator();
const appExternalUrl = 'https://google.com/';
const scrollMapToTop = () => {
  window.scrollTo(0, 0);
};
const getStateOrProvince = location => {
  if ((location === null || location === void 0 ? void 0 : location.address.country) === countryCanadaShort) {
    return location.address.province;
  }

  return location === null || location === void 0 ? void 0 : location.address.state;
};
const getAddress = store => {
  if (store === undefined || store.location.isRemote) {
    return '';
  }

  return `${store.location.address.line1}, ${store.location.address.city}, ${getStateOrProvince(store.location)} ${store.location.address.zip}`;
};
const getLocationName = store => {
  if (store === undefined) {
    return '';
  }

  return store.location.name;
};
const getNavigationUrl = location => {
  var _location$coordinates, _location$coordinates2;

  let address = `${location === null || location === void 0 ? void 0 : location.address.line1}, ${location === null || location === void 0 ? void 0 : location.address.city}, ${location === null || location === void 0 ? void 0 : location.address.country}`;

  if (location !== null && location !== void 0 && (_location$coordinates = location.coordinates) !== null && _location$coordinates !== void 0 && _location$coordinates.latitude && location !== null && location !== void 0 && (_location$coordinates2 = location.coordinates) !== null && _location$coordinates2 !== void 0 && _location$coordinates2.longitude) {
    var _location$coordinates3, _location$coordinates4;

    address = `${location === null || location === void 0 ? void 0 : (_location$coordinates3 = location.coordinates) === null || _location$coordinates3 === void 0 ? void 0 : _location$coordinates3.latitude}, ${location === null || location === void 0 ? void 0 : (_location$coordinates4 = location.coordinates) === null || _location$coordinates4 === void 0 ? void 0 : _location$coordinates4.longitude}`;
  }

  switch (getMobileOperatingSystem()) {
    case 'iOS':
      return `maps://maps.google.com/?q=${address}`;

    case 'unknown':
      //probably desktop
      return `https://maps.google.com/?q=${address}`;

    case 'Android':
      return `geo://maps.google.com/?q=${address}`;

    default:
      return `https://maps.google.com/?q=${address}`;
  }
};

/***/ }),

/***/ 2710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ sortByDate),
/* harmony export */   "c": () => (/* binding */ sortByDistance)
/* harmony export */ });
const sortByDate = (a, b) => a.date > b.date ? 1 : b.date > a.date ? -1 : 0;
const sortByDistance = (a, b, selectedStore) => {
  var _selectedStore$locati;

  return a.location.id === (selectedStore === null || selectedStore === void 0 ? void 0 : (_selectedStore$locati = selectedStore.location) === null || _selectedStore$locati === void 0 ? void 0 : _selectedStore$locati.id) ? -1 : a.distance - b.distance;
};

/***/ }),

/***/ 8714:
/***/ ((module) => {

module.exports = JSON.parse('{"primary":{"main":"#FF7D65","dark":"#FF5536","light":"#FF9987","contrastText":"#FFFFFF"},"secondary":{"main":"#FFFFFF"},"text":{"primary":"#333F48","secondary":"#333F48CC","disabled":"#C2C6C9","hint":"#C6A992"},"custom":{"lightGray":"#D9DDE5","colorOne":"#A69788","colorTwo":"#C8BEB8","colorThree":"#856E5C","colorFour":"#F5F34E","colorFive":"#52433D","colorSix":"#BAAEA2","colorSeven":"#918074"}}');

/***/ }),

/***/ 3510:
/***/ ((module) => {

module.exports = JSON.parse('{"zc":"Montserrat, sans-serif","Xw":"Montserrat, sans-serif"}');

/***/ })

};
;