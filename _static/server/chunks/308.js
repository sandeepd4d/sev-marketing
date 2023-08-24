"use strict";
exports.id = 308;
exports.ids = [308];
exports.modules = {

/***/ 5308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ Blvd),
/* harmony export */   "C": () => (/* binding */ PlatformTarget)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7435);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1683);
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_1__);


/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */

var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

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

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
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

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
} // import { version } from './../package.json';


var version = "1.0.21";

var btoa = function (string) {
  var buffer = Buffer.from(string.toString(), "binary");
  return buffer.toString("base64");
};

var PlatformTarget;

(function (PlatformTarget) {
  PlatformTarget[PlatformTarget["Sandbox"] = 0] = "Sandbox";
  PlatformTarget[PlatformTarget["Live"] = 1] = "Live";
})(PlatformTarget || (PlatformTarget = {}));

var Node = function () {
  /**
   * @internal
   */
  function Node(platformClient, graphItem) {
    this.platformClient = platformClient;
    Object.assign(this, graphItem);
  }

  return Node;
}();

var PlatformClient = function () {
  function PlatformClient(apiKey, businessID, target) {
    this.apiKey = apiKey;
    this.target = target;

    switch (target) {
      case PlatformTarget.Sandbox:
        this.client = new graphql_request__WEBPACK_IMPORTED_MODULE_0__.GraphQLClient("https://sandbox.joinblvd.com/api/2020-01/" + businessID + "/client");
        break;

      case PlatformTarget.Live:
        this.client = new graphql_request__WEBPACK_IMPORTED_MODULE_0__.GraphQLClient("https://dashboard.boulevard.io/api/2020-01/" + businessID + "/client");
        break;

      case undefined:
        this.client = new graphql_request__WEBPACK_IMPORTED_MODULE_0__.GraphQLClient("https://sandbox.joinblvd.com/api/2020-01/" + businessID + "/client");
        break;

      default:
        this.client = new graphql_request__WEBPACK_IMPORTED_MODULE_0__.GraphQLClient(target + "/api/2020-01/" + businessID + "/client");
    }
  }

  PlatformClient.prototype.request = function (query, variables) {
    return this.client.request(query, variables, this.headers());
  };

  PlatformClient.prototype.withAuthentication = function (auth) {
    this.authentication = auth;
    return this;
  };

  PlatformClient.prototype.token = function () {
    var _a;

    return ((_a = this.authentication) === null || _a === void 0 ? void 0 : _a.token) ? btoa(this.apiKey + ":" + this.authentication.token) : btoa(this.apiKey + ":");
  };

  PlatformClient.prototype.headers = function () {
    return {
      Authorization: "Basic " + this.token(),
      "Book-SDK-Version": version
    };
  };

  return PlatformClient;
}();

var fragments$6 = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  fragment ServiceProperties on Service {\n    category {\n      name\n    }\n    description\n    id\n    externalId\n    name\n  }\n"], ["\n  fragment ServiceProperties on Service {\n    category {\n      name\n    }\n    description\n    id\n    externalId\n    name\n  }\n"])));
var templateObject_1$7;
var fragments$5 = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  fragment StaffProperties on Staff {\n    avatar\n    bio\n    firstName\n    id\n    insertedAt\n    lastName\n    displayName\n    nickname\n    role {\n      id\n      name\n    }\n    updatedAt\n  }\n"], ["\n  fragment StaffProperties on Staff {\n    avatar\n    bio\n    firstName\n    id\n    insertedAt\n    lastName\n    displayName\n    nickname\n    role {\n      id\n      name\n    }\n    updatedAt\n  }\n"])));
var templateObject_1$6;
var fragments$4 = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  fragment LocationProperties on Location {\n    address {\n      city\n      line1\n      line2\n      state\n      province\n      zip\n      country\n    }\n    avatar\n    businessName\n    id\n    externalId\n    insertedAt\n    name\n    phoneNumber\n    coordinates\n    tz\n    isRemote\n    updatedAt\n  }\n"], ["\n  fragment LocationProperties on Location {\n    address {\n      city\n      line1\n      line2\n      state\n      province\n      zip\n      country\n    }\n    avatar\n    businessName\n    id\n    externalId\n    insertedAt\n    name\n    phoneNumber\n    coordinates\n    tz\n    isRemote\n    updatedAt\n  }\n"])));
var getLocationsQuery = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  ", "\n  query GetLocations {\n    locations(first: 200) {\n      edges {\n        node {\n          ...LocationProperties\n        }\n      }\n    }\n  }\n"], ["\n  ", "\n  query GetLocations {\n    locations(first: 200) {\n      edges {\n        node {\n          ...LocationProperties\n        }\n      }\n    }\n  }\n"])), fragments$4);
var templateObject_1$5, templateObject_2$4;
var fragments$3 = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  fragment ClientProperties on Client {\n    email\n    firstName\n    id\n    insertedAt\n    lastName\n    mobilePhone\n    name\n    updatedAt\n  }\n"], ["\n  fragment ClientProperties on Client {\n    email\n    firstName\n    id\n    insertedAt\n    lastName\n    mobilePhone\n    name\n    updatedAt\n  }\n"])));
var clientQuery = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  ", "\n  query Client {\n    client {\n      ...ClientProperties\n    }\n  }\n"], ["\n  ", "\n  query Client {\n    client {\n      ...ClientProperties\n    }\n  }\n"])), fragments$3);
var updateClientMutation = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  ", "\n  mutation UpdateClient($input: UpdateClientInput!) {\n    updateClient(input: $input) {\n      client {\n        ...ClientProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  mutation UpdateClient($input: UpdateClientInput!) {\n    updateClient(input: $input) {\n      client {\n        ...ClientProperties\n      }\n    }\n  }\n"])), fragments$3);
var templateObject_1$4, templateObject_2$3, templateObject_3$3;
var fragments$2 = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  ", "\n  ", "\n  fragment AppointmentServiceProperties on AppointmentService {\n    duration\n    endAt\n    price\n    service {\n      ...ServiceProperties\n    }\n    staff {\n      ...StaffProperties\n    }\n    staffRequested\n    startAt\n    startTimeOffset\n    totalDuration\n  }\n\n  fragment AppointmentProperties on Appointment {\n    id\n    duration\n    cancelled\n    state\n    startAt\n    endAt\n    createdAt\n    notes\n    appointmentServices {\n      ...AppointmentServiceProperties\n    }\n    calendarLinks {\n      icsDownload\n      googleCalendar\n      microsoftOffice\n      microsoftOutlook\n      yahooCalendar\n    }\n    cancellation {\n      cancelledAt\n      notes\n      reason\n    }\n  }\n"], ["\n  ", "\n  ", "\n  fragment AppointmentServiceProperties on AppointmentService {\n    duration\n    endAt\n    price\n    service {\n      ...ServiceProperties\n    }\n    staff {\n      ...StaffProperties\n    }\n    staffRequested\n    startAt\n    startTimeOffset\n    totalDuration\n  }\n\n  fragment AppointmentProperties on Appointment {\n    id\n    duration\n    cancelled\n    state\n    startAt\n    endAt\n    createdAt\n    notes\n    appointmentServices {\n      ...AppointmentServiceProperties\n    }\n    calendarLinks {\n      icsDownload\n      googleCalendar\n      microsoftOffice\n      microsoftOutlook\n      yahooCalendar\n    }\n    cancellation {\n      cancelledAt\n      notes\n      reason\n    }\n  }\n"])), fragments$6, fragments$5);
var appointmentQuery = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  ", "\n  query Appointment($id: ID!, $cartId: ID) {\n    appointment(id: $id, cartId: $cartId) {\n      ...AppointmentProperties\n    }\n  }\n"], ["\n  ", "\n  query Appointment($id: ID!, $cartId: ID) {\n    appointment(id: $id, cartId: $cartId) {\n      ...AppointmentProperties\n    }\n  }\n"])), fragments$2);
var appointmentClientQuery = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  ", "\n  query Appointment($id: ID!) {\n    appointment(id: $id) {\n      client {\n        ...ClientProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  query Appointment($id: ID!) {\n    appointment(id: $id) {\n      client {\n        ...ClientProperties\n      }\n    }\n  }\n"])), fragments$3);
var appointmentLocationQuery = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  ", "\n  query Appointment($id: ID!) {\n    appointment(id: $id) {\n      location {\n        ...LocationProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  query Appointment($id: ID!) {\n    appointment(id: $id) {\n      location {\n        ...LocationProperties\n      }\n    }\n  }\n"])), fragments$4);
var availableRescheduleTimesQuery = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  query AppointmentRescheduleAvailableTimes(\n    $input: AppointmentRescheduleAvailableTimesInput!\n  ) {\n    appointmentRescheduleAvailableTimes(input: $input) {\n      availableTimes {\n        bookableTimeId\n        startTime\n      }\n    }\n  }\n"], ["\n  query AppointmentRescheduleAvailableTimes(\n    $input: AppointmentRescheduleAvailableTimesInput!\n  ) {\n    appointmentRescheduleAvailableTimes(input: $input) {\n      availableTimes {\n        bookableTimeId\n        startTime\n      }\n    }\n  }\n"])));
var availableRescheduleDatesQuery = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  query AppointmentRescheduleAvailableDates(\n    $input: AppointmentRescheduleAvailableDatesInput!\n  ) {\n    appointmentRescheduleAvailableDates(input: $input) {\n      availableDates {\n        date\n      }\n    }\n  }\n"], ["\n  query AppointmentRescheduleAvailableDates(\n    $input: AppointmentRescheduleAvailableDatesInput!\n  ) {\n    appointmentRescheduleAvailableDates(input: $input) {\n      availableDates {\n        date\n      }\n    }\n  }\n"])));
var cancelAppointmentMutation = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n  ", "\n  mutation CancelAppointment($input: CancelAppointmentInput!) {\n    cancelAppointment(input: $input) {\n      appointment {\n        ...AppointmentProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  mutation CancelAppointment($input: CancelAppointmentInput!) {\n    cancelAppointment(input: $input) {\n      appointment {\n        ...AppointmentProperties\n      }\n    }\n  }\n"])), fragments$2);
var appointmentRescheduleMutation = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_8$1 || (templateObject_8$1 = __makeTemplateObject(["\n  ", "\n  mutation AppointmentReschedule($input: AppointmentRescheduleInput!) {\n    appointmentReschedule(input: $input) {\n      appointment {\n        ...AppointmentProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  mutation AppointmentReschedule($input: AppointmentRescheduleInput!) {\n    appointmentReschedule(input: $input) {\n      appointment {\n        ...AppointmentProperties\n      }\n    }\n  }\n"])), fragments$2);
var myAppointmentsQuery = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_9$1 || (templateObject_9$1 = __makeTemplateObject(["\n  ", "\n  query MyAppointments(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n    $query: QueryString\n  ) {\n    myAppointments(\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n      query: $query\n    ) {\n      edges {\n        cursor\n        node {\n          ...AppointmentProperties\n        }\n      }\n    }\n  }\n"], ["\n  ", "\n  query MyAppointments(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n    $query: QueryString\n  ) {\n    myAppointments(\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n      query: $query\n    ) {\n      edges {\n        cursor\n        node {\n          ...AppointmentProperties\n        }\n      }\n    }\n  }\n"])), fragments$2);
var templateObject_1$3, templateObject_2$2, templateObject_3$2, templateObject_4$1, templateObject_5$1, templateObject_6$1, templateObject_7$1, templateObject_8$1, templateObject_9$1;

var ServiceCategory = function (_super) {
  __extends(ServiceCategory, _super);

  function ServiceCategory() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return ServiceCategory;
}(Node);

var Service = function (_super) {
  __extends(Service, _super);
  /**
   * @internal
   */


  function Service(platformClient, service) {
    var _this = _super.call(this, platformClient, service) || this;

    _this.category = new ServiceCategory(platformClient, service.category);
    return _this;
  }

  return Service;
}(Node);

var Staff = function (_super) {
  __extends(Staff, _super);
  /**
   * @internal
   */


  function Staff(platformClient, staff) {
    var _this = _super.call(this, platformClient, staff) || this;

    _this.role = new StaffRole(platformClient, staff.role);
    return _this;
  }

  return Staff;
}(Node);

var StaffRole = function (_super) {
  __extends(StaffRole, _super);

  function StaffRole() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return StaffRole;
}(Node);

var Address = function (_super) {
  __extends(Address, _super);

  function Address() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return Address;
}(Node);

var Location = function (_super) {
  __extends(Location, _super);
  /**
   * @internal
   */


  function Location(platformClient, location) {
    var _this = _super.call(this, platformClient, location) || this;

    _this.address = new Address(platformClient, location.address);
    return _this;
  }

  return Location;
}(Node);

var Locations = function () {
  /**
   * @internal
   */
  function Locations(platformClient) {
    this.platformClient = platformClient;
  }
  /**
   * List locations for the business
   *
   * @async
   * @returns Promise containing a list of Locations
   * @todo Pagination
   */


  Locations.prototype.list = function () {
    return __awaiter(this, void 0, void 0, function () {
      var response;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.platformClient.request(getLocationsQuery)];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , response.locations.edges.map(function (edge) {
              return new Location(_this.platformClient, edge.node);
            })];
        }
      });
    });
  };

  return Locations;
}();

var fragments$1 = {
  cart: (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n    fragment CartProperties on Cart {\n      advanceGratuity {\n        fixed\n        percentage\n      }\n      clientInformation {\n        email\n        firstName\n        lastName\n        phoneNumber\n        externalId\n      }\n      clientMessage\n      completedAt\n      bookingQuestions {\n        ...CartBookingQuestionProperties\n      }\n      endTime\n      errors {\n        code\n        description\n        message\n      }\n      expiresAt\n      id\n      insertedAt\n      startTime\n      summary {\n        deposit\n        depositAmount\n        discountAmount\n        gratuityAmount\n        paymentMethodRequired\n        roundingAmount\n        subtotal\n        taxAmount\n        total\n      }\n      updatedAt\n    }\n\n    fragment CartBookingQuestionProperties on CartBookingQuestion {\n      answer {\n        ... on CartBookingQuestionTextAnswer {\n          textValue\n        }\n        ... on CartBookingQuestionIntegerAnswer {\n          integerValue\n        }\n        ... on CartBookingQuestionBooleanAnswer {\n          booleanValue\n        }\n        ... on CartBookingQuestionFloatAnswer {\n          floatValue\n        }\n        ... on CartBookingQuestionDatetimeAnswer {\n          datetimeValue\n        }\n        ... on CartBookingQuestionSelectAnswer {\n          option {\n            ...CartBookingQuestionOptionProperties\n          }\n        }\n        ... on CartBookingQuestionMultiSelectAnswer {\n          options {\n            ...CartBookingQuestionOptionProperties\n          }\n        }\n      }\n      displayType\n      errors\n      id\n      key\n      label\n      options {\n        ...CartBookingQuestionOptionProperties\n      }\n      required\n      valueType\n      schema\n    }\n\n    fragment CartBookingQuestionOptionProperties on CartBookingQuestionOption {\n      id\n      label\n    }\n  "], ["\n    fragment CartProperties on Cart {\n      advanceGratuity {\n        fixed\n        percentage\n      }\n      clientInformation {\n        email\n        firstName\n        lastName\n        phoneNumber\n        externalId\n      }\n      clientMessage\n      completedAt\n      bookingQuestions {\n        ...CartBookingQuestionProperties\n      }\n      endTime\n      errors {\n        code\n        description\n        message\n      }\n      expiresAt\n      id\n      insertedAt\n      startTime\n      summary {\n        deposit\n        depositAmount\n        discountAmount\n        gratuityAmount\n        paymentMethodRequired\n        roundingAmount\n        subtotal\n        taxAmount\n        total\n      }\n      updatedAt\n    }\n\n    fragment CartBookingQuestionProperties on CartBookingQuestion {\n      answer {\n        ... on CartBookingQuestionTextAnswer {\n          textValue\n        }\n        ... on CartBookingQuestionIntegerAnswer {\n          integerValue\n        }\n        ... on CartBookingQuestionBooleanAnswer {\n          booleanValue\n        }\n        ... on CartBookingQuestionFloatAnswer {\n          floatValue\n        }\n        ... on CartBookingQuestionDatetimeAnswer {\n          datetimeValue\n        }\n        ... on CartBookingQuestionSelectAnswer {\n          option {\n            ...CartBookingQuestionOptionProperties\n          }\n        }\n        ... on CartBookingQuestionMultiSelectAnswer {\n          options {\n            ...CartBookingQuestionOptionProperties\n          }\n        }\n      }\n      displayType\n      errors\n      id\n      key\n      label\n      options {\n        ...CartBookingQuestionOptionProperties\n      }\n      required\n      valueType\n      schema\n    }\n\n    fragment CartBookingQuestionOptionProperties on CartBookingQuestionOption {\n      id\n      label\n    }\n  "]))),
  availability: (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n    fragment CartAvailableBookableItemOptionProperties on CartAvailableBookableItemOption {\n      description\n      durationDelta\n      id\n      name\n      priceDelta\n    }\n\n    fragment CartAvailableBookableItemOptionGroupProperties on CartAvailableBookableItemOptionGroup {\n      id\n      description\n      maxLimit\n      minLimit\n      name\n      options {\n        ...CartAvailableBookableItemOptionProperties\n      }\n    }\n\n    fragment CartAvailableItemProperties on CartAvailableItem {\n      __typename\n      description\n      disabled\n      disabledDescription\n      id\n      listPriceRange {\n        max\n        min\n        variable\n      }\n      name\n    }\n\n    fragment CartAvailableBookableItemProperties on CartAvailableBookableItem {\n      listDurationRange {\n        max\n        min\n        variable\n      }\n\n      optionGroups {\n        ...CartAvailableBookableItemOptionGroupProperties\n      }\n    }\n\n    fragment CartAvailableCategoryProperties on CartAvailableCategory {\n      id\n      name\n      disabledDescription\n      disabled\n      description\n      availableItems {\n        ...CartAvailableItemProperties\n        ...CartAvailableBookableItemProperties\n      }\n    }\n  "], ["\n    fragment CartAvailableBookableItemOptionProperties on CartAvailableBookableItemOption {\n      description\n      durationDelta\n      id\n      name\n      priceDelta\n    }\n\n    fragment CartAvailableBookableItemOptionGroupProperties on CartAvailableBookableItemOptionGroup {\n      id\n      description\n      maxLimit\n      minLimit\n      name\n      options {\n        ...CartAvailableBookableItemOptionProperties\n      }\n    }\n\n    fragment CartAvailableItemProperties on CartAvailableItem {\n      __typename\n      description\n      disabled\n      disabledDescription\n      id\n      listPriceRange {\n        max\n        min\n        variable\n      }\n      name\n    }\n\n    fragment CartAvailableBookableItemProperties on CartAvailableBookableItem {\n      listDurationRange {\n        max\n        min\n        variable\n      }\n\n      optionGroups {\n        ...CartAvailableBookableItemOptionGroupProperties\n      }\n    }\n\n    fragment CartAvailableCategoryProperties on CartAvailableCategory {\n      id\n      name\n      disabledDescription\n      disabled\n      description\n      availableItems {\n        ...CartAvailableItemProperties\n        ...CartAvailableBookableItemProperties\n      }\n    }\n  "]))),
  features: (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n    fragment CartFeaturesProperties on CartFeatures {\n      giftCardPurchaseEnabled\n      paymentInfoRequired\n    }\n  "], ["\n    fragment CartFeaturesProperties on CartFeatures {\n      giftCardPurchaseEnabled\n      paymentInfoRequired\n    }\n  "]))),
  item: (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    fragment CartItemProperties on CartItem {\n      __typename\n      discountAmount\n      discountCode\n      errors {\n        code\n        description\n        message\n      }\n      id\n      item {\n        ...CartAvailableItemProperties\n        ...CartAvailableBookableItemProperties\n      }\n      lineTotal\n      price\n      taxAmount\n      selectedPaymentMethod {\n        ...CartItemPaymentMethodProperties\n      }\n      availablePaymentMethods {\n        ...CartItemPaymentMethodProperties\n      }\n    }\n    fragment CartBookableItemProperties on CartBookableItem {\n      guestId\n      startTime\n      guest {\n        ...CartGuestProperties\n      }\n      selectedOptions {\n        ...CartAvailableBookableItemOptionProperties\n      }\n      selectedStaffVariant {\n        id\n        duration\n        price\n        staff {\n          ...StaffProperties\n        }\n      }\n    }\n  "], ["\n    fragment CartItemProperties on CartItem {\n      __typename\n      discountAmount\n      discountCode\n      errors {\n        code\n        description\n        message\n      }\n      id\n      item {\n        ...CartAvailableItemProperties\n        ...CartAvailableBookableItemProperties\n      }\n      lineTotal\n      price\n      taxAmount\n      selectedPaymentMethod {\n        ...CartItemPaymentMethodProperties\n      }\n      availablePaymentMethods {\n        ...CartItemPaymentMethodProperties\n      }\n    }\n    fragment CartBookableItemProperties on CartBookableItem {\n      guestId\n      startTime\n      guest {\n        ...CartGuestProperties\n      }\n      selectedOptions {\n        ...CartAvailableBookableItemOptionProperties\n      }\n      selectedStaffVariant {\n        id\n        duration\n        price\n        staff {\n          ...StaffProperties\n        }\n      }\n    }\n  "]))),
  offer: (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    fragment CartOfferProperties on CartOffer {\n      id\n      name\n      code\n      applied\n    }\n  "], ["\n    fragment CartOfferProperties on CartOffer {\n      id\n      name\n      code\n      applied\n    }\n  "]))),
  emailFulfilment: (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    fragment CartItemEmailFulfillmentProperties on CartItemEmailFulfillment {\n      deliveryDate\n      id\n      messageFromSender\n      recipientEmail\n      recipientName\n      senderName\n    }\n  "], ["\n    fragment CartItemEmailFulfillmentProperties on CartItemEmailFulfillment {\n      deliveryDate\n      id\n      messageFromSender\n      recipientEmail\n      recipientName\n      senderName\n    }\n  "]))),
  guest: (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    fragment CartGuestProperties on CartGuest {\n      email\n      firstName\n      id\n      label\n      lastName\n      number\n      phoneNumber\n    }\n  "], ["\n    fragment CartGuestProperties on CartGuest {\n      email\n      firstName\n      id\n      label\n      lastName\n      number\n      phoneNumber\n    }\n  "]))),
  paymentMethod: (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    fragment CartItemPaymentMethodProperties on CartItemPaymentMethod {\n      id\n      name\n    }\n  "], ["\n    fragment CartItemPaymentMethodProperties on CartItemPaymentMethod {\n      id\n      name\n    }\n  "])))
};
var addBookableItemMutation = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  ", "\n  mutation AddCartBookableItem($input: AddCartSelectedBookableItemInput!) {\n    addCartSelectedBookableItem(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  mutation AddCartBookableItem($input: AddCartSelectedBookableItemInput!) {\n    addCartSelectedBookableItem(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"])), fragments$1.cart);
var addGiftCardItemMutation = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  ", "\n  mutation AddCartGiftCardItem($input: AddCartSelectedGiftCardItemInput!) {\n    addCartSelectedGiftCardItem(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  mutation AddCartGiftCardItem($input: AddCartSelectedGiftCardItemInput!) {\n    addCartSelectedGiftCardItem(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"])), fragments$1.cart);
var addPurchasableItemMutation = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  ", "\n  mutation AddCartPurchasableItem(\n    $input: AddCartSelectedPurchasableItemInput!\n  ) {\n    addCartSelectedPurchasableItem(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  mutation AddCartPurchasableItem(\n    $input: AddCartSelectedPurchasableItemInput!\n  ) {\n    addCartSelectedPurchasableItem(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"])), fragments$1.cart);
var addToWaitlistMutation = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  ", "\n  mutation CartAddToWaitlist($input: CartAddToWaitlistInput!) {\n    cartAddToWaitlist(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  mutation CartAddToWaitlist($input: CartAddToWaitlistInput!) {\n    cartAddToWaitlist(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"])), fragments$1.cart);
var availableCategoriesQuery = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  ", "\n  query Cart($id: ID!) {\n    cart(id: $id) {\n      availableCategories {\n        ...CartAvailableCategoryProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  query Cart($id: ID!) {\n    cart(id: $id) {\n      availableCategories {\n        ...CartAvailableCategoryProperties\n      }\n    }\n  }\n"])), fragments$1.availability);
var availableBookableItemLocationVariantsQuery = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  ", "\n\n  query Cart($cartId: ID!, $id: ID!) {\n    cart(id: $cartId) {\n      availableItem(id: $id) {\n        ... on CartAvailableBookableItem {\n          locationVariants {\n            location {\n              ...LocationProperties\n            }\n          }\n        }\n      }\n    }\n  }\n"], ["\n  ", "\n\n  query Cart($cartId: ID!, $id: ID!) {\n    cart(id: $cartId) {\n      availableItem(id: $id) {\n        ... on CartAvailableBookableItem {\n          locationVariants {\n            location {\n              ...LocationProperties\n            }\n          }\n        }\n      }\n    }\n  }\n"])), fragments$4);
var availableBookableItemStaffVariantsQuery = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  ", "\n  query Cart($cartId: ID!, $id: ID!) {\n    cart(id: $cartId) {\n      availableItem(id: $id) {\n        ... on CartAvailableBookableItem {\n          staffVariants {\n            id\n            duration\n            price\n            staff {\n              ...StaffProperties\n            }\n          }\n        }\n      }\n    }\n  }\n"], ["\n  ", "\n  query Cart($cartId: ID!, $id: ID!) {\n    cart(id: $cartId) {\n      availableItem(id: $id) {\n        ... on CartAvailableBookableItem {\n          staffVariants {\n            id\n            duration\n            price\n            staff {\n              ...StaffProperties\n            }\n          }\n        }\n      }\n    }\n  }\n"])), fragments$5);
var availablePaymentMethodsQuery = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  ", "\n  query Cart($id: ID!) {\n    cart(id: $id) {\n      availablePaymentMethods {\n        ...CartAvailablePaymentMethodProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  query Cart($id: ID!) {\n    cart(id: $id) {\n      availablePaymentMethods {\n        ...CartAvailablePaymentMethodProperties\n      }\n    }\n  }\n"])), fragments$1);
var bookableStaffVariantsQuery = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  ", "\n  query CartBookableStaffVariants($id: ID!, $itemId: ID!, bookableTimeId: ID!) {\n    cartBookableStaffVariants(id: $id, itemId: $itemId, bookableTimeId: $bookableTimeId) {\n      id\n      duration\n      price\n      staff {\n        ...StaffProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  query CartBookableStaffVariants($id: ID!, $itemId: ID!, bookableTimeId: ID!) {\n    cartBookableStaffVariants(id: $id, itemId: $itemId, bookableTimeId: $bookableTimeId) {\n      id\n      duration\n      price\n      staff {\n        ...StaffProperties\n      }\n    }\n  }\n"])), fragments$1);
var addCartOfferMutation = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n  ", "\n  ", "\n  mutation AddCartOffer($input: AddCartOfferInput!) {\n    addCartOffer(input: $input) {\n      cart {\n        ...CartProperties\n      }\n      offer {\n        ...CartOfferProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  ", "\n  mutation AddCartOffer($input: AddCartOfferInput!) {\n    addCartOffer(input: $input) {\n      cart {\n        ...CartProperties\n      }\n      offer {\n        ...CartOfferProperties\n      }\n    }\n  }\n"])), fragments$1.cart, fragments$1.offer);
var cartQuery = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n  ", "\n  query Cart($id: ID!) {\n    cart(id: $id) {\n      ...CartProperties\n    }\n  }\n"], ["\n  ", "\n  query Cart($id: ID!) {\n    cart(id: $id) {\n      ...CartProperties\n    }\n  }\n"])), fragments$1.cart);
var datesQuery = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n  query CartBookableDates(\n    $id: ID!\n    $searchRangeLower: Date\n    $searchRangeUpper: Date\n    $tz: Tz\n    $limit: Int\n  ) {\n    cartBookableDates(\n      id: $id\n      searchRangeLower: $searchRangeLower\n      searchRangeUpper: $searchRangeUpper\n      tz: $tz\n      limit: $limit\n    ) {\n      date\n    }\n  }\n"], ["\n  query CartBookableDates(\n    $id: ID!\n    $searchRangeLower: Date\n    $searchRangeUpper: Date\n    $tz: Tz\n    $limit: Int\n  ) {\n    cartBookableDates(\n      id: $id\n      searchRangeLower: $searchRangeLower\n      searchRangeUpper: $searchRangeUpper\n      tz: $tz\n      limit: $limit\n    ) {\n      date\n    }\n  }\n"])));
var timesQuery = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n  query CartBookableTimes($id: ID!, $searchDate: Date!, $tz: Tz) {\n    cartBookableTimes(id: $id, searchDate: $searchDate, tz: $tz) {\n      id\n      score\n      startTime\n    }\n  }\n"], ["\n  query CartBookableTimes($id: ID!, $searchDate: Date!, $tz: Tz) {\n    cartBookableTimes(id: $id, searchDate: $searchDate, tz: $tz) {\n      id\n      score\n      startTime\n    }\n  }\n"])));
var checkoutCartMutation = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n  ", "\n  mutation CheckoutCart($input: CheckoutCartInput!) {\n    checkoutCart(input: $input) {\n      cart {\n        ...CartProperties\n      }\n      appointments {\n        appointmentId\n        clientId\n        forCartOwner\n      }\n    }\n  }\n"], ["\n  ", "\n  mutation CheckoutCart($input: CheckoutCartInput!) {\n    checkoutCart(input: $input) {\n      cart {\n        ...CartProperties\n      }\n      appointments {\n        appointmentId\n        clientId\n        forCartOwner\n      }\n    }\n  }\n"])), fragments$1.cart);
var createCartMutation = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n  ", "\n  mutation CreateCart($input: CreateCartInput!) {\n    createCart(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  mutation CreateCart($input: CreateCartInput!) {\n    createCart(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"])), fragments$1.cart);
var createCartGiftCardItemEmailFulfillmentMutation = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n  ", "\n  ", "\n  mutation CreateCartGiftCardItemEmailFulfillment(\n    $input: CreateCartGiftCardItemEmailFulfillmentInput!\n  ) {\n    createCartGiftCardItemEmailFulfillment(input: $input) {\n      cart {\n        ...CartProperties\n      }\n      emailFulfillment {\n        ...CartItemEmailFulfillmentProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  ", "\n  mutation CreateCartGiftCardItemEmailFulfillment(\n    $input: CreateCartGiftCardItemEmailFulfillmentInput!\n  ) {\n    createCartGiftCardItemEmailFulfillment(input: $input) {\n      cart {\n        ...CartProperties\n      }\n      emailFulfillment {\n        ...CartItemEmailFulfillmentProperties\n      }\n    }\n  }\n"])), fragments$1.cart, fragments$1.emailFulfilment);
var createGuestMutation = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n  ", "\n  ", "\n  mutation CreateGuest($input: CreateCartGuestInput!) {\n    createCartGuest(input: $input) {\n      cart {\n        ...CartProperties\n      }\n      guest {\n        ...CartGuestProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  ", "\n  mutation CreateGuest($input: CreateCartGuestInput!) {\n    createCartGuest(input: $input) {\n      cart {\n        ...CartProperties\n      }\n      guest {\n        ...CartGuestProperties\n      }\n    }\n  }\n"])), fragments$1.cart, fragments$1.guest);
var deleteCartGiftCardItemEmailFulfillmentMutation = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_26 || (templateObject_26 = __makeTemplateObject(["\n  ", "\n  ", "\n  mutation DeleteCartGiftCardItemEmailFulfillment(\n    $input: DeleteCartGiftCardItemEmailFulfillmentInput!\n  ) {\n    deleteCartGiftCardItemEmailFulfillment(input: $input) {\n      cart {\n        ...CartProperties\n      }\n      emailFulfillment {\n        ...CartItemEmailFulfillmentProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  ", "\n  mutation DeleteCartGiftCardItemEmailFulfillment(\n    $input: DeleteCartGiftCardItemEmailFulfillmentInput!\n  ) {\n    deleteCartGiftCardItemEmailFulfillment(input: $input) {\n      cart {\n        ...CartProperties\n      }\n      emailFulfillment {\n        ...CartItemEmailFulfillmentProperties\n      }\n    }\n  }\n"])), fragments$1.cart, fragments$1.emailFulfilment);
var deleteGuestMutation = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_27 || (templateObject_27 = __makeTemplateObject(["\n  ", "\n  ", "\n  mutation DeleteGuest($input: DeleteCartGuestInput!) {\n    deleteCartGuest(input: $input) {\n      cart {\n        ...CartProperties\n      }\n      guest {\n        ...CartGuestProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  ", "\n  mutation DeleteGuest($input: DeleteCartGuestInput!) {\n    deleteCartGuest(input: $input) {\n      cart {\n        ...CartProperties\n      }\n      guest {\n        ...CartGuestProperties\n      }\n    }\n  }\n"])), fragments$1.cart, fragments$1.guest);
var featuresQuery = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_28 || (templateObject_28 = __makeTemplateObject(["\n  ", "\n  query Cart($id: ID!) {\n    cart(id: $id) {\n      features {\n        ...CartFeaturesProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  query Cart($id: ID!) {\n    cart(id: $id) {\n      features {\n        ...CartFeaturesProperties\n      }\n    }\n  }\n"])), fragments$1.features);
var guestsQuery = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_29 || (templateObject_29 = __makeTemplateObject(["\n  ", "\n  query Cart($id: ID!) {\n    cart(id: $id) {\n      guests {\n        ...CartGuestProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  query Cart($id: ID!) {\n    cart(id: $id) {\n      guests {\n        ...CartGuestProperties\n      }\n    }\n  }\n"])), fragments$1.guest);
var locationQuery = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_30 || (templateObject_30 = __makeTemplateObject(["\n  ", "\n  query Cart($id: ID!) {\n    cart(id: $id) {\n      location {\n        ...LocationProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  query Cart($id: ID!) {\n    cart(id: $id) {\n      location {\n        ...LocationProperties\n      }\n    }\n  }\n"])), fragments$4);
var offersQuery = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_31 || (templateObject_31 = __makeTemplateObject(["\n  ", "\n  query Cart($id: ID!) {\n    cart(id: $id) {\n      offers {\n        ...CartOfferProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  query Cart($id: ID!) {\n    cart(id: $id) {\n      offers {\n        ...CartOfferProperties\n      }\n    }\n  }\n"])), fragments$1.offer);
var removeOfferMutation = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_32 || (templateObject_32 = __makeTemplateObject(["\n  ", "\n  mutation RemoveCartOffer($input: RemoveCartOfferInput!) {\n    removeCartOffer(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  mutation RemoveCartOffer($input: RemoveCartOfferInput!) {\n    removeCartOffer(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"])), fragments$1.cart);
var removeSelectedItemMutation = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_33 || (templateObject_33 = __makeTemplateObject(["\n  ", "\n  mutation RemoveCartSelectedItem($input: RemoveCartSelectedItemInput!) {\n    removeCartSelectedItem(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  mutation RemoveCartSelectedItem($input: RemoveCartSelectedItemInput!) {\n    removeCartSelectedItem(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"])), fragments$1.cart);
var reserveCartMutation = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_34 || (templateObject_34 = __makeTemplateObject(["\n  ", "\n  mutation ReserveCartBookableItems($input: ReserveCartBookableItemsInput!) {\n    reserveCartBookableItems(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  mutation ReserveCartBookableItems($input: ReserveCartBookableItemsInput!) {\n    reserveCartBookableItems(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"])), fragments$1.cart);
var selectedItemsQuery = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_35 || (templateObject_35 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  query Cart($id: ID!) {\n    cart(id: $id) {\n      selectedItems {\n        ...CartItemProperties\n        ...CartBookableItemProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  query Cart($id: ID!) {\n    cart(id: $id) {\n      selectedItems {\n        ...CartItemProperties\n        ...CartBookableItemProperties\n      }\n    }\n  }\n"])), fragments$1.offer, fragments$5, fragments$4, fragments$1.availability, fragments$1.guest, fragments$1.paymentMethod, fragments$1.item);
var selectPaymentMethodMutation = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_36 || (templateObject_36 = __makeTemplateObject(["\n  ", "\n  mutation SelectCartPaymentMethod($input: SelectCartPaymentMethodInput!) {\n    selectCartPaymentMethod(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  mutation SelectCartPaymentMethod($input: SelectCartPaymentMethodInput!) {\n    selectCartPaymentMethod(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"])), fragments$1.cart);
var takeOwnershipMutation = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_37 || (templateObject_37 = __makeTemplateObject(["\n  ", "\n  mutation TakeOwnership($input: TakeCartOwnershipInput!) {\n    takeCartOwnership(input: $input) {\n      cart {\n        id\n      }\n    }\n  }\n"], ["\n  ", "\n  mutation TakeOwnership($input: TakeCartOwnershipInput!) {\n    takeCartOwnership(input: $input) {\n      cart {\n        id\n      }\n    }\n  }\n"])), fragments$1.cart);
var updateCartMutation = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_38 || (templateObject_38 = __makeTemplateObject(["\n  ", "\n  mutation UpdateCart($input: UpdateCartInput!) {\n    updateCart(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  mutation UpdateCart($input: UpdateCartInput!) {\n    updateCart(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"])), fragments$1.cart);
var updateCartGiftCardItemEmailFulfillmentMutation = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_39 || (templateObject_39 = __makeTemplateObject(["\n  ", "\n  ", "\n  mutation UpdateCartGiftCardItemEmailFulfillment(\n    $input: UpdateCartGiftCardItemEmailFulfillmentInput!\n  ) {\n    updateCartGiftCardItemEmailFulfillment(input: $input) {\n      cart {\n        ...CartProperties\n      }\n      emailFulfillment {\n        ...CartItemEmailFulfillmentProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  ", "\n  mutation UpdateCartGiftCardItemEmailFulfillment(\n    $input: UpdateCartGiftCardItemEmailFulfillmentInput!\n  ) {\n    updateCartGiftCardItemEmailFulfillment(input: $input) {\n      cart {\n        ...CartProperties\n      }\n      emailFulfillment {\n        ...CartItemEmailFulfillmentProperties\n      }\n    }\n  }\n"])), fragments$1.cart, fragments$1.emailFulfilment);
var updateGuestMutation = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_40 || (templateObject_40 = __makeTemplateObject(["\n  ", "\n  ", "\n  mutation UpdateGuest($input: UpdateCartGuestInput!) {\n    updateCartGuest(input: $input) {\n      cart {\n        ...CartProperties\n      }\n      guest {\n        ...CartGuestProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  ", "\n  mutation UpdateGuest($input: UpdateCartGuestInput!) {\n    updateCartGuest(input: $input) {\n      cart {\n        ...CartProperties\n      }\n      guest {\n        ...CartGuestProperties\n      }\n    }\n  }\n"])), fragments$1.cart, fragments$1.guest);
var updateSelectedBookableItemMutation = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_41 || (templateObject_41 = __makeTemplateObject(["\n  ", "\n  mutation UpdateCartBookableItem(\n    $input: UpdateCartSelectedBookableItemInput!\n  ) {\n    updateCartSelectedBookableItem(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  mutation UpdateCartBookableItem(\n    $input: UpdateCartSelectedBookableItemInput!\n  ) {\n    updateCartSelectedBookableItem(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"])), fragments$1.cart);
var updateSelectedGiftCardItemMutation = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_42 || (templateObject_42 = __makeTemplateObject(["\n  ", "\n  mutation UpdateCartGiftCardItem(\n    $input: UpdateCartSelectedGiftCardItemInput!\n  ) {\n    updateCartSelectedGiftCardItem(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  mutation UpdateCartGiftCardItem(\n    $input: UpdateCartSelectedGiftCardItemInput!\n  ) {\n    updateCartSelectedGiftCardItem(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"])), fragments$1.cart);
var updateSelectedPurchasableItemMutation = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_43 || (templateObject_43 = __makeTemplateObject(["\n  ", "\n  mutation UpdateCartPurchasableItem(\n    $input: UpdateCartSelectedPurchasableItemInput!\n  ) {\n    updateCartSelectedPurchasableItem(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  mutation UpdateCartPurchasableItem(\n    $input: UpdateCartSelectedPurchasableItemInput!\n  ) {\n    updateCartSelectedPurchasableItem(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"])), fragments$1.cart);
var appointmentAddTagsMutation = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_44 || (templateObject_44 = __makeTemplateObject(["\n  mutation AppointmentAddTags($input: AppointmentAddTagsInput!) {\n    appointmentAddTags(input: $input) {\n      success\n    }\n  }\n"], ["\n  mutation AppointmentAddTags($input: AppointmentAddTagsInput!) {\n    appointmentAddTags(input: $input) {\n      success\n    }\n  }\n"])));
var addCardPaymentMethodMutation = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_45 || (templateObject_45 = __makeTemplateObject(["\n  ", "\n  mutation AddCartCardPaymentMethod($input: AddCartCardPaymentMethodInput!) {\n    addCartCardPaymentMethod(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  mutation AddCartCardPaymentMethod($input: AddCartCardPaymentMethodInput!) {\n    addCartCardPaymentMethod(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"])), fragments$1.cart);
var bookingQuestionAddAnswerMutation = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_46 || (templateObject_46 = __makeTemplateObject(["\n  ", "\n  mutation CartBookingQuestionAddAnswer(\n    $input: CartBookingQuestionAddAnswerInput!\n  ) {\n    cartBookingQuestionAddAnswer(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  mutation CartBookingQuestionAddAnswer(\n    $input: CartBookingQuestionAddAnswerInput!\n  ) {\n    cartBookingQuestionAddAnswer(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"])), fragments$1.cart);
var bookingQuestionClearAnswerMutation = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_47 || (templateObject_47 = __makeTemplateObject(["\n  ", "\n  mutation CartBookingQuestionClearAnswer(\n    $input: CartBookingQuestionClearnswerInput!\n  ) {\n    cartBookingQuestionClearAnswer(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  mutation CartBookingQuestionClearAnswer(\n    $input: CartBookingQuestionClearnswerInput!\n  ) {\n    cartBookingQuestionClearAnswer(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"])), fragments$1.cart);
var setLocationMutation = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_48 || (templateObject_48 = __makeTemplateObject(["\n  ", "\n  ", "\n  mutation CartSetLocation($input: CartSetLocationInput!) {\n    cartSetLocation(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"], ["\n  ", "\n  ", "\n  mutation CartSetLocation($input: CartSetLocationInput!) {\n    cartSetLocation(input: $input) {\n      cart {\n        ...CartProperties\n      }\n    }\n  }\n"])), fragments$4, fragments$1.cart);
var templateObject_1$2, templateObject_2$1, templateObject_3$1, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35, templateObject_36, templateObject_37, templateObject_38, templateObject_39, templateObject_40, templateObject_41, templateObject_42, templateObject_43, templateObject_44, templateObject_45, templateObject_46, templateObject_47, templateObject_48;
/** A membership service voucher */

var MembershipVoucher = function (_super) {
  __extends(MembershipVoucher, _super);
  /**
   * @internal
   */


  function MembershipVoucher(platformClient, voucher) {
    var _this = _super.call(this, platformClient, voucher) || this;

    _this.service = new Service(platformClient, voucher.service);
    _this.services = voucher.services.map(function (s) {
      return new Service(platformClient, s);
    });
    return _this;
  }

  return MembershipVoucher;
}(Node);
/** A client membership sold at the business. */


var Membership = function (_super) {
  __extends(Membership, _super);
  /**
   * @internal
   */


  function Membership(platformClient, membership) {
    var _this = _super.call(this, platformClient, membership) || this;

    _this.client = new Client(platformClient, membership.client);
    _this.vouchers = membership.vouchers.map(function (v) {
      return new MembershipVoucher(platformClient, v);
    });
    return _this;
  }

  return Membership;
}(Node);

var myMembershipsQuery = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  ", "\n  ", "\n  query MyMemberships {\n    myMemberships(first: 100) {\n      edges {\n        node {\n          client {\n            ...ClientProperties\n          }\n          endOn\n          id\n          interval\n          name\n          startOn\n          status\n          termNumber\n          vouchers {\n            quantity\n            service {\n              ...ServiceProperties\n            }\n            services {\n              ...ServiceProperties\n            }\n          }\n        }\n      }\n    }\n  }\n"], ["\n  ", "\n  ", "\n  query MyMemberships {\n    myMemberships(first: 100) {\n      edges {\n        node {\n          client {\n            ...ClientProperties\n          }\n          endOn\n          id\n          interval\n          name\n          startOn\n          status\n          termNumber\n          vouchers {\n            quantity\n            service {\n              ...ServiceProperties\n            }\n            services {\n              ...ServiceProperties\n            }\n          }\n        }\n      }\n    }\n  }\n"])), fragments$3, fragments$6);
var templateObject_1$1;
var CartBookingQuestionDisplayType;

(function (CartBookingQuestionDisplayType) {
  CartBookingQuestionDisplayType["Boolean"] = "BOOLEAN";
  CartBookingQuestionDisplayType["Datetime"] = "DATETIME";
  CartBookingQuestionDisplayType["Float"] = "FLOAT";
  CartBookingQuestionDisplayType["Integer"] = "INTEGER";
  CartBookingQuestionDisplayType["LongText"] = "LONG_TEXT";
  CartBookingQuestionDisplayType["Multiselect"] = "MULTISELECT";
  CartBookingQuestionDisplayType["Select"] = "SELECT";
  CartBookingQuestionDisplayType["ShortText"] = "SHORT_TEXT";
})(CartBookingQuestionDisplayType || (CartBookingQuestionDisplayType = {}));

var CartBookingQuestionValueType;

(function (CartBookingQuestionValueType) {
  CartBookingQuestionValueType["Boolean"] = "BOOLEAN";
  CartBookingQuestionValueType["Datetime"] = "DATETIME";
  CartBookingQuestionValueType["Float"] = "FLOAT";
  CartBookingQuestionValueType["Integer"] = "INTEGER";
  CartBookingQuestionValueType["Multiselect"] = "MULTISELECT";
  CartBookingQuestionValueType["Select"] = "SELECT";
  CartBookingQuestionValueType["Text"] = "TEXT";
})(CartBookingQuestionValueType || (CartBookingQuestionValueType = {}));

var CartBookingQuestionSchema;

(function (CartBookingQuestionSchema) {
  CartBookingQuestionSchema["Client"] = "CLIENT";
  CartBookingQuestionSchema["Appointment"] = "APPOINTMENT";
})(CartBookingQuestionSchema || (CartBookingQuestionSchema = {}));

var answerToInput = function (valueType, answer) {
  switch (valueType) {
    case CartBookingQuestionValueType.Boolean:
      // @ts-expect-error Pending API-210
      return {
        booleanValue: answer
      };

    case CartBookingQuestionValueType.Datetime:
      return {
        datetimeValue: answer
      };

    case CartBookingQuestionValueType.Float:
      var floatValue = answer;
      return {
        floatValue: floatValue
      };

    case CartBookingQuestionValueType.Integer:
      var integerValue = answer;
      return {
        integerValue: integerValue
      };

    case CartBookingQuestionValueType.Multiselect:
      var options = answer;
      return {
        optionValues: options.map(function (o) {
          return {
            optionId: o.id
          };
        })
      };

    case CartBookingQuestionValueType.Select:
      var option = answer;
      return {
        optionValue: {
          optionId: option.id
        }
      };

    case CartBookingQuestionValueType.Text:
      var textValue = answer;
      return {
        textValue: textValue
      };
  }
};

var CartBookingQuestion = function (_super) {
  __extends(CartBookingQuestion, _super);
  /**
   * @internal
   */


  function CartBookingQuestion(platformClient, bookingQuestion, cartId) {
    var _a;

    var _this = _super.call(this, platformClient, bookingQuestion) || this;

    _this.cartId = cartId;

    switch ((_a = bookingQuestion.answer) === null || _a === void 0 ? void 0 : _a.__typename) {
      case "CartBookingQuestionTextAnswer":
        _this.answer = new CartBookingQuestionTextAnswer(platformClient, bookingQuestion.answer);
        break;

      case "CartBookingQuestionIntegerAnswer":
        _this.answer = new CartBookingQuestionIntegerAnswer(platformClient, bookingQuestion.answer);
        break;

      case "CartBookingQuestionBooleanAnswer":
        _this.answer = new CartBookingQuestionBooleanAnswer(platformClient, bookingQuestion.answer);
        break;

      case "CartBookingQuestionFloatAnswer":
        _this.answer = new CartBookingQuestionFloatAnswer(platformClient, bookingQuestion.answer);
        break;

      case "CartBookingQuestionDatetimeAnswer":
        _this.answer = new CartBookingQuestionDatetimeAnswer(platformClient, bookingQuestion.answer);
        break;

      case "CartBookingQuestionSelectAnswer":
        _this.answer = new CartBookingQuestionSelectAnswer(platformClient, bookingQuestion.answer);

      case "CartBookingQuestionMultiSelectAnswer":
        _this.answer = new CartBookingQuestionMultiSelectAnswer(platformClient, bookingQuestion.answer);
        break;
    }

    _this.options = bookingQuestion.options.map(function (option) {
      return new CartBookingQuestionOption(platformClient, option);
    });
    return _this;
  }
  /**
   * Answer a booking question
   *
   * @async
   * @param answer The answer to the question, either a provided option, or a user input
   * @public
   */


  CartBookingQuestion.prototype.submitAnswer = function (answer) {
    return __awaiter(this, void 0, void 0, function () {
      var input, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            input = {
              questionId: this.id,
              answer: answerToInput(this.valueType, answer),
              id: this.cartId
            };
            return [4
            /*yield*/
            , this.platformClient.request(bookingQuestionAddAnswerMutation, {
              input: input
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , new Cart(this.platformClient, response.cartBookingQuestionAddAnswer.cart)];
        }
      });
    });
  };

  CartBookingQuestion.prototype.clearAnswer = function () {
    return __awaiter(this, void 0, void 0, function () {
      var input, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            input = {
              questionId: this.id,
              id: this.cartId
            };
            return [4
            /*yield*/
            , this.platformClient.request(bookingQuestionClearAnswerMutation, {
              input: input
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , new Cart(this.platformClient, response.cartBookingQuestionClearAnswer.cart)];
        }
      });
    });
  };

  return CartBookingQuestion;
}(Node);

var CartBookingQuestionTextAnswer = function (_super) {
  __extends(CartBookingQuestionTextAnswer, _super);

  function CartBookingQuestionTextAnswer() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return CartBookingQuestionTextAnswer;
}(Node);

var CartBookingQuestionIntegerAnswer = function (_super) {
  __extends(CartBookingQuestionIntegerAnswer, _super);

  function CartBookingQuestionIntegerAnswer() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return CartBookingQuestionIntegerAnswer;
}(Node);

var CartBookingQuestionBooleanAnswer = function (_super) {
  __extends(CartBookingQuestionBooleanAnswer, _super);

  function CartBookingQuestionBooleanAnswer() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return CartBookingQuestionBooleanAnswer;
}(Node);

var CartBookingQuestionFloatAnswer = function (_super) {
  __extends(CartBookingQuestionFloatAnswer, _super);

  function CartBookingQuestionFloatAnswer() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return CartBookingQuestionFloatAnswer;
}(Node);

var CartBookingQuestionDatetimeAnswer = function (_super) {
  __extends(CartBookingQuestionDatetimeAnswer, _super);

  function CartBookingQuestionDatetimeAnswer() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return CartBookingQuestionDatetimeAnswer;
}(Node);

var CartBookingQuestionSelectAnswer = function (_super) {
  __extends(CartBookingQuestionSelectAnswer, _super);
  /**
   * @internal
   */


  function CartBookingQuestionSelectAnswer(platformClient, bookingQuestionSelectAnswer) {
    var _this = _super.call(this, platformClient, bookingQuestionSelectAnswer) || this;

    _this.option = new CartBookingQuestionOption(platformClient, bookingQuestionSelectAnswer.option);
    return _this;
  }

  return CartBookingQuestionSelectAnswer;
}(Node);

var CartBookingQuestionMultiSelectAnswer = function (_super) {
  __extends(CartBookingQuestionMultiSelectAnswer, _super);
  /**
   * @internal
   */


  function CartBookingQuestionMultiSelectAnswer(platformClient, bookingQuestionMultiSelectAnswer) {
    var _this = _super.call(this, platformClient, bookingQuestionMultiSelectAnswer) || this;

    _this.options = bookingQuestionMultiSelectAnswer.options.map(function (option) {
      return new CartBookingQuestionOption(platformClient, option);
    });
    return _this;
  }

  return CartBookingQuestionMultiSelectAnswer;
}(Node);

var CartBookingQuestionOption = function (_super) {
  __extends(CartBookingQuestionOption, _super);

  function CartBookingQuestionOption() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return CartBookingQuestionOption;
}(Node);
/** A guest that can be associated with a bookable item. */


var CartGuest = function (_super) {
  __extends(CartGuest, _super);

  function CartGuest() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return CartGuest;
}(Node);
/** Abstract available item that can be checked out. */


var CartAvailableItem = function (_super) {
  __extends(CartAvailableItem, _super);
  /**
   * @internal
   */


  function CartAvailableItem(platformClient, item, cartId) {
    var _this = _super.call(this, platformClient, item) || this;

    _this.cartId = cartId;
    return _this;
  }

  return CartAvailableItem;
}(Node);
/** Cart item payment method. */


var CartItemPaymentMethod = function (_super) {
  __extends(CartItemPaymentMethod, _super);

  function CartItemPaymentMethod() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return CartItemPaymentMethod;
}(Node);
/** Abstract item added using the `addCart...Item` mutations. */


var CartItem = function (_super) {
  __extends(CartItem, _super);
  /**
   * @internal
   */


  function CartItem(platformClient, cartItem) {
    var _this = _super.call(this, platformClient, cartItem) || this;

    _this.errors = cartItem.errors.map(function (error) {
      return new CartItemError(platformClient, error);
    });
    _this.availablePaymentMethods = cartItem.availablePaymentMethods.map(function (m) {
      return new CartItemPaymentMethod(platformClient, m);
    });
    _this.selectedPaymentMethod = cartItem.selectedPaymentMethod ? new CartItemPaymentMethod(platformClient, cartItem.selectedPaymentMethod) : null;
    return _this;
  }
  /** Payment methods available for this item.
   */


  CartItem.prototype.getAvailablePaymentMethods = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2
        /*return*/
        , Promise.resolve(this.availablePaymentMethods)];
      });
    });
  };
  /** Payment method selected for this item.
   */


  CartItem.prototype.getSelectedPaymentMethod = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2
        /*return*/
        , Promise.resolve(this.selectedPaymentMethod)];
      });
    });
  };

  return CartItem;
}(Node);
/** Send the item to a recipient via email. */


var CartItemEmailFulfillment = function (_super) {
  __extends(CartItemEmailFulfillment, _super);

  function CartItemEmailFulfillment() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return CartItemEmailFulfillment;
}(Node);
/** Cart item validation error. */


var CartItemError = function (_super) {
  __extends(CartItemError, _super);

  function CartItemError() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return CartItemError;
}(Node);
/** Item that can be booked through `addCartBookableItem`. */


var CartAvailableBookableItem = function (_super) {
  __extends(CartAvailableBookableItem, _super);
  /**
   * @internal
   */


  function CartAvailableBookableItem(platformClient, item, cartId) {
    var _this = _super.call(this, platformClient, item, cartId) || this;

    _this.optionGroups = item.optionGroups.map(function (g) {
      return new CartAvailableBookableItemOptionGroup(platformClient, g);
    });
    return _this;
  }
  /**
   * Groups of available options for modifying the booked service. These can be
   * used to modify the booked item and may affect pricing and timing.
   *
   */


  CartAvailableBookableItem.prototype.getOptionGroups = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2
        /*return*/
        , Promise.resolve(this.optionGroups)];
      });
    });
  };
  /**
   * List of optional staff variants that can be chosen. Variants may have
   * different pricing and timing.
   *
   * When there’s no preference, the first one available is assigned based on the
   * selected time. The business can also enforce this, in which case this list
   * is empty.
   */


  CartAvailableBookableItem.prototype.getStaffVariants = function () {
    return __awaiter(this, void 0, void 0, function () {
      var response;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.platformClient.request(availableBookableItemStaffVariantsQuery, {
              cartId: this.cartId,
              id: this.id
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , response.cart.availableItem.staffVariants.map(function (variant) {
              return new CartAvailableBookableItemStaffVariant(_this.platformClient, variant);
            })];
        }
      });
    });
  };
  /**
   * List of locations offering the selected bookable item.
   *
   * This is affected by:
   *
   * - Staff / staff role settings set for the services in the cart
   * - The "Bookable online" option for a specific service/location pair
   * - The "Enable online booking" option for a location
   *
   * Location has to be chosen before checking out the cart.
   */


  CartAvailableBookableItem.prototype.getLocationVariants = function () {
    return __awaiter(this, void 0, void 0, function () {
      var response;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.platformClient.request(availableBookableItemLocationVariantsQuery, {
              cartId: this.cartId,
              id: this.id
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , response.cart.availableItem.locationVariants.map(function (variant) {
              return new CartAvailableBookableItemLocationVariant(_this.platformClient, variant);
            })];
        }
      });
    });
  };

  return CartAvailableBookableItem;
}(CartAvailableItem);
/**
 * Option group of a bookable item with optional limits.
 *
 * Option groups have their own validation requirements which are validated when
 * the bookable item is added. An error is returned if the selections don’t meet
 * those requirements.
 */


var CartAvailableBookableItemOptionGroup = function (_super) {
  __extends(CartAvailableBookableItemOptionGroup, _super);
  /**
   * @internal
   */


  function CartAvailableBookableItemOptionGroup(platformClient, group) {
    var _this = _super.call(this, platformClient, group) || this;

    _this.options = group.options.map(function (o) {
      return new CartAvailableBookableItemOption(platformClient, o);
    });
    return _this;
  }

  return CartAvailableBookableItemOptionGroup;
}(Node);
/** Option of a bookable item that can be selected. */


var CartAvailableBookableItemOption = function (_super) {
  __extends(CartAvailableBookableItemOption, _super);

  function CartAvailableBookableItemOption() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return CartAvailableBookableItemOption;
}(Node);
/** Gift card that can be purchased through `addCartSelectedGiftCardItem`. */


var CartAvailableGiftCardItem = function (_super) {
  __extends(CartAvailableGiftCardItem, _super);

  function CartAvailableGiftCardItem() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return CartAvailableGiftCardItem;
}(CartAvailableItem);
/** Item that can be purchased through `addCartPurchasableItem`. */


var CartAvailablePurchasableItem = function (_super) {
  __extends(CartAvailablePurchasableItem, _super);

  function CartAvailablePurchasableItem() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return CartAvailablePurchasableItem;
}(CartAvailableItem);
/** An item that can be booked at a certain time. */


var CartBookableItem = function (_super) {
  __extends(CartBookableItem, _super);
  /**
   * @internal
   */


  function CartBookableItem(platformClient, item, cartId) {
    var _this = _super.call(this, platformClient, item) || this;

    _this.cartId = cartId;
    _this.item = new CartAvailableBookableItem(platformClient, item.item, cartId);
    _this.guest = item.guest && new CartGuest(platformClient, item.guest);
    _this.selectedOptions = item.selectedOptions.map(function (o) {
      return new CartAvailableBookableItemOption(platformClient, o);
    });
    _this.selectedStaffVariant = item.selectedStaffVariant && new CartAvailableBookableItemStaffVariant(platformClient, item.selectedStaffVariant);
    return _this;
  }
  /**
   * Guest associated with this item.
   *
   * A null value implies the default guest, i.e. the booking client.
   */


  CartBookableItem.prototype.getGuest = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2
        /*return*/
        , Promise.resolve(this.guest)];
      });
    });
  };
  /** Any selected options for the item.
   */


  CartBookableItem.prototype.getSelectedOptions = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2
        /*return*/
        , Promise.resolve(this.selectedOptions)];
      });
    });
  };
  /**
   * Update the item.
   *
   * This invalidates existing reservations when the guest, staff variant, or options are updated.
   *
   * @async
   * @param opts.discountCode Optional discount code applied to the item. Invalid discount codes are ignored without an error, check `discountCode` on the selected item to see if the code was valid.
   * @param opts.guest The guest this item is booked for. A null value indicates the cart owner, or current client. When finding available times for bookable items, it's assumed that two items having different guests can be booked simultaneously.
   * @param opts.options Selected bookable item options. Note that the selections must conform to the option group requirements, e.g. limits on the number of options. Otherwise an error is returned.
   * @param opts.staffVariant The selected bookable item staff variant.
   * @public
   * @returns Promise containing the updated cart
   */


  CartBookableItem.prototype.update = function (opts) {
    return __awaiter(this, void 0, void 0, function () {
      var input, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            input = {
              id: this.cartId,
              itemId: this.id,
              itemDiscountCode: opts === null || opts === void 0 ? void 0 : opts.discountCode,
              itemGuestId: (opts === null || opts === void 0 ? void 0 : opts.guest) == null ? null : opts.guest.id,
              itemStaffVariantId: (opts === null || opts === void 0 ? void 0 : opts.staffVariant) == null ? null : opts.staffVariant.id,
              itemOptionIds: (opts === null || opts === void 0 ? void 0 : opts.options) == null ? null : opts.options.map(function (o) {
                return o.id;
              })
            };
            return [4
            /*yield*/
            , this.platformClient.request(updateSelectedBookableItemMutation, {
              input: input
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , new Cart(this.platformClient, response.updateCartSelectedBookableItem.cart)];
        }
      });
    });
  };
  /**
   * Selected staff variant for the item.
   *
   * You can set the preferred variant when adding the item. Leaving the variant
   * unset indicates no preference.
   *
   * Once a time is reserved, a variant is automatically set if none was set
   * earlier. Once the reservation expires, any automatically set value reverts
   * back to `null`.
   */


  CartBookableItem.prototype.getSelectedStaffVariant = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2
        /*return*/
        , Promise.resolve(this.selectedStaffVariant)];
      });
    });
  };

  return CartBookableItem;
}(CartItem);
/** Staff variant of a bookable item. */


var CartAvailableBookableItemStaffVariant = function (_super) {
  __extends(CartAvailableBookableItemStaffVariant, _super);
  /**
   * @internal
   */


  function CartAvailableBookableItemStaffVariant(platformClient, variant) {
    var _this = _super.call(this, platformClient, variant) || this;

    _this.staff = new Staff(platformClient, variant.staff);
    return _this;
  }

  return CartAvailableBookableItemStaffVariant;
}(Node);
/** Location variant of a bookable item */


var CartAvailableBookableItemLocationVariant = function (_super) {
  __extends(CartAvailableBookableItemLocationVariant, _super);
  /**
   * @internal
   */


  function CartAvailableBookableItemLocationVariant(platformClient, group) {
    return _super.call(this, platformClient, group) || this;
  }

  return CartAvailableBookableItemLocationVariant;
}(Node);
/** Specified design for a CartItemEmailFulfillment. */


var CartItemGiftCardDesign = function (_super) {
  __extends(CartItemGiftCardDesign, _super);

  function CartItemGiftCardDesign() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return CartItemGiftCardDesign;
}(Node);
/** A gift card item that can be purchased. */


var CartGiftCardItem = function (_super) {
  __extends(CartGiftCardItem, _super);
  /**
   * @internal
   */


  function CartGiftCardItem(platformClient, item, cartId) {
    var _this = _super.call(this, platformClient, item) || this;

    _this.item = new CartAvailableGiftCardItem(platformClient, item.item, cartId);
    _this.emailFulfillment = item.emailFulfillment && new CartItemEmailFulfillment(platformClient, item.emailFulfillment);
    _this.giftCardDesign = item.giftCardDesign && new CartItemGiftCardDesign(platformClient, item.giftCardDesign);
    return _this;
  }

  return CartGiftCardItem;
}(CartItem);
/** Displayed price range of an item, before tax. */

/** @class */


(function (_super) {
  __extends(CartPriceRange, _super);

  function CartPriceRange() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return CartPriceRange;
})(Node);
/** An item that can be purchased. */


var CartPurchasableItem = function (_super) {
  __extends(CartPurchasableItem, _super);
  /**
   * @internal
   */


  function CartPurchasableItem(platformClient, item, cartId) {
    var _this = _super.call(this, platformClient, item) || this;

    _this.item = new CartAvailablePurchasableItem(platformClient, item.item, cartId);
    return _this;
  }

  return CartPurchasableItem;
}(CartItem);
/** Gratuity set in advance for bookable items. */

/** @class */


(function (_super) {
  __extends(CartAdvanceGratuity, _super);

  function CartAdvanceGratuity() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return CartAdvanceGratuity;
})(Node);
/** Category of items that can be checked out. */


var CartAvailableCategory = function (_super) {
  __extends(CartAvailableCategory, _super);
  /**
   * @internal
   */


  function CartAvailableCategory(platformClient, category, cartId) {
    var _this = _super.call(this, platformClient, category) || this;

    _this.availableItems = category.availableItems.map(function (item) {
      switch (item.__typename) {
        case "CartAvailableBookableItem":
          return new CartAvailableBookableItem(_this.platformClient, item, cartId);

        case "CartAvailableGiftCardItem":
          return new CartAvailableGiftCardItem(_this.platformClient, item, cartId);

        case "CartAvailablePurchasableItem":
          return new CartAvailablePurchasableItem(_this.platformClient, item, cartId);
      }
    });
    return _this;
  }

  return CartAvailableCategory;
}(Node);
/** Available starting date for bookable items in a cart. */


var CartBookableDate = function (_super) {
  __extends(CartBookableDate, _super);

  function CartBookableDate() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return CartBookableDate;
}(Node);
/** Available starting time for bookable items in a cart. */


var CartBookableTime = function (_super) {
  __extends(CartBookableTime, _super);

  function CartBookableTime() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return CartBookableTime;
}(Node);
/**
 * Client information supplied when checking out as a new user or on behalf of
 * someone else than the current user.
 */

/** @class */


(function (_super) {
  __extends(CartClientInformation, _super);

  function CartClientInformation() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return CartClientInformation;
})(Node);
/** Cart validation error. */

/** @class */


(function (_super) {
  __extends(CartError, _super);

  function CartError() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return CartError;
})(Node);
/** Features available to the cart. */


var CartFeatures = function (_super) {
  __extends(CartFeatures, _super);

  function CartFeatures() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return CartFeatures;
}(Node);
/** Offer added to a cart, see the `offers` field. */


var CartOffer = function (_super) {
  __extends(CartOffer, _super);

  function CartOffer() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return CartOffer;
}(Node);
/** Summary of the cart, including e.g. line item totals. */


var CartSummary = function (_super) {
  __extends(CartSummary, _super);

  function CartSummary() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return CartSummary;
}(Node);

var Cart = function (_super) {
  __extends(Cart, _super);
  /**
   * @internal
   */


  function Cart(platformClient, cart, opts) {
    var _this = _super.call(this, platformClient, cart) || this;

    _this.bookingQuestions = cart.bookingQuestions.map(function (question) {
      return new CartBookingQuestion(platformClient, question, cart.id);
    });
    _this.timezone = (opts === null || opts === void 0 ? void 0 : opts.timezone) || Intl.DateTimeFormat().resolvedOptions().timeZone;
    _this.summary = new CartSummary(platformClient, cart.summary);
    return _this;
  }
  /**
   * Add a credit card payment method to a cart.
   *
   * @async
   * @category Checkout & Payment
   * @public
   * @returns Promise containing the updated cart
   */


  Cart.prototype.addCardPaymentMethod = function (details, opts) {
    return __awaiter(this, void 0, void 0, function () {
      var token, input, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.tokenizeCardDetails(details)];

          case 1:
            token = _a.sent();
            input = {
              id: this.id,
              token: token,
              select: (opts === null || opts === void 0 ? void 0 : opts.select) == false ? false : true
            };
            return [4
            /*yield*/
            , this.platformClient.request(addCardPaymentMethodMutation, {
              input: input
            })];

          case 2:
            response = _a.sent();
            return [2
            /*return*/
            , this.refresh(response.addCartCardPaymentMethod.cart)];
        }
      });
    });
  };
  /**
   * @internal
   */


  Cart.prototype.tokenizeCardDetails = function (details) {
    return __awaiter(this, void 0, void 0, function () {
      var response, token;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!("token" in details)) return [3
            /*break*/
            , 1];
            return [2
            /*return*/
            , details.token];

          case 1:
            return [4
            /*yield*/
            , cross_fetch__WEBPACK_IMPORTED_MODULE_1___default()(this.platformClient.target == PlatformTarget.Live ? "https://pci.boulevard.app/cards/tokenize" : "https://pci.staging-boulevard.app/cards/tokenize", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify(details)
            })];

          case 2:
            response = _a.sent();
            return [4
            /*yield*/
            , response.json()];

          case 3:
            token = _a.sent().token;
            return [2
            /*return*/
            , token];
        }
      });
    });
  };
  /**
   * Add an offer to a cart.
   *
   * When the offer code exists, it's possible that it's not applicable to any
   * items in the cart, in which case the offer is accepted but pricing doesn't
   * change. This status can be checked on each offer. When applicable items are
   * added later, their pricing is updated then.
   *
   * When the offer code doesn't exist, a `CART_OFFER_CODE_INVALID` error is
   * returned.
   *
   * @async
   * @category Offers
   * @param offerCode The offer code identifier
   * @public
   */


  Cart.prototype.addOffer = function (offerCode) {
    return __awaiter(this, void 0, void 0, function () {
      var input, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            input = {
              id: this.id,
              offerCode: offerCode
            };
            return [4
            /*yield*/
            , this.platformClient.request(addCartOfferMutation, {
              input: input
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , {
              cart: this.refresh(response.addCartOffer.cart),
              offer: new CartOffer(this.platformClient, response.addCartOffer.offer)
            }];
        }
      });
    });
  };
  /**
   * Add a bookable item to a cart
   *
   * @async
   * @category Bookable Items
   * @param item The bookable item
   * @param opts.discountCode Optional discount code applied to the item. Invalid discount codes are ignored without an error, check `discountCode` on the selected item to see if the code was valid.
   * @param opts.guest The guest this item is booked for. A null value indicates the cart owner, or current client. When finding available times for bookable items, it's assumed that two items having different guests can be booked simultaneously.
   * @param opts.options Selected bookable item options. Note that the selections must conform to the option group requirements, e.g. limits on the number of options. Otherwise an error is returned.
   * @param opts.staffVariant The selected bookable item staff variant.
   * @public
   * @returns Promise containing the updated cart
   */


  Cart.prototype.addBookableItem = function (item, opts) {
    return __awaiter(this, void 0, void 0, function () {
      var input, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            input = {
              id: this.id,
              itemId: item.id,
              itemDiscountCode: opts === null || opts === void 0 ? void 0 : opts.discountCode,
              itemGuestId: (opts === null || opts === void 0 ? void 0 : opts.guest) == null ? null : opts.guest.id,
              itemStaffVariantId: (opts === null || opts === void 0 ? void 0 : opts.staffVariant) == null ? null : opts.staffVariant.id,
              itemOptionIds: (opts === null || opts === void 0 ? void 0 : opts.options) == null ? null : opts.options.map(function (o) {
                return o.id;
              })
            };
            return [4
            /*yield*/
            , this.platformClient.request(addBookableItemMutation, {
              input: input
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , this.refresh(response.addCartSelectedBookableItem.cart)];
        }
      });
    });
  };
  /**
   * Add a gift card item to a cart
   *
   * @async
   * @category Gift Cards
   * @param item The gift card item
   * @param price Price applied to the gift card item
   * @public
   * @returns Promise containing the updated cart
   */


  Cart.prototype.addGiftCardItem = function (item, price) {
    return __awaiter(this, void 0, void 0, function () {
      var input, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            input = {
              id: this.id,
              itemId: item.id,
              itemPrice: price
            };
            return [4
            /*yield*/
            , this.platformClient.request(addGiftCardItemMutation, {
              input: input
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , this.refresh(response.addCartSelectedGiftCardItem.cart)];
        }
      });
    });
  };
  /**
   * Add a purchasable item to a cart
   *
   * @async
   * @category Purchasable Items
   * @param item The purchasable item
   * @param opts.discountCode Discount code applied to the item. Invalid discount codes are ignored without an error, check `discountCode` on the selected item to see if the code was valid.
   * @public
   * @returns Promise containing the updated cart
   */


  Cart.prototype.addPurchasableItem = function (item, opts) {
    return __awaiter(this, void 0, void 0, function () {
      var input, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            input = {
              id: this.id,
              itemId: item.id,
              itemDiscountCode: opts === null || opts === void 0 ? void 0 : opts.discountCode
            };
            return [4
            /*yield*/
            , this.platformClient.request(addPurchasableItemMutation, {
              input: input
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , this.refresh(response.addCartSelectedPurchasableItem.cart)];
        }
      });
    });
  };
  /**
   * Creates a waitlist entry for the cart with the specified date and time ranges as the boundary for the preferred bookable time.
   * Only selected bookable items will be included in the waitlist entry for the cart.
   *
   * This mutation marks the cart as completed, it can no longer be modified.
   *
   * @async
   * @category Purchasable Items
   * @param preferredTimeLower The preferred lower bound date and time of the bookable items.
   * @param preferredTimeUpper The preferred upper bound date and time of the bookable items.
   * @param opts.timezone Optional override for the timezone set in {@link Carts.create}
   * @public
   * @returns Promise containing the updated cart
   */


  Cart.prototype.addToWaitlist = function (preferredTimeLower, preferredTimeUpper, opts) {
    return __awaiter(this, void 0, void 0, function () {
      var input, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            input = {
              id: this.id,
              preferredTimeLower: preferredTimeLower,
              preferredTimeUpper: preferredTimeUpper,
              tz: opts === null || opts === void 0 ? void 0 : opts.timezone
            };
            return [4
            /*yield*/
            , this.platformClient.request(addToWaitlistMutation, {
              input: input
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , this.refresh(response.cartAddToWaitlist.cart)];
        }
      });
    });
  };
  /**
   * Completes the checkout process.
   *
   * This will first check for any errors in the cart, aborting if any errors exist.
   * Then, it will lock the cart, proceed to attempt to charge the card for any purchaseable items,
   * book all appointments, send relevant email receipts and confirmations, and then mark the cart as completed.
   *
   * @async
   * @category Checkout & Payment
   * @public
   * @returns Promise containing the updated cart and the appointments
   */


  Cart.prototype.checkout = function () {
    return __awaiter(this, void 0, void 0, function () {
      var input, response, cart;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            input = {
              id: this.id
            };
            return [4
            /*yield*/
            , this.platformClient.request(checkoutCartMutation, {
              input: input
            })];

          case 1:
            response = _a.sent();
            cart = this.refresh(response.checkoutCart.cart);
            return [2
            /*return*/
            , __assign(__assign({}, response.checkoutCart), {
              cart: cart
            })];
        }
      });
    });
  };
  /**
   * Create an email fulfillment for a gift card item. A digital copy of the gift card will be sent to the recipient after the order is completed.
   *
   * @async
   * @category Gift Cards
   * @public
   * @param item The CartGiftCardItem.
   * @param sender The name of the person sending the item.
   * @param recipient.email The email of the person receiving the item
   * @param recipient.name The name of the person receiving the item
   * @param opts.message A message to include from the sender
   */


  Cart.prototype.createGiftCardItemEmailFulfillment = function (item, sender, deliveryDate, recipient, opts) {
    return __awaiter(this, void 0, void 0, function () {
      var input, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            input = {
              id: this.id,
              itemId: item.id,
              deliveryDate: deliveryDate,
              messageFromSender: opts === null || opts === void 0 ? void 0 : opts.message,
              recipientEmail: recipient.email,
              recipientName: recipient.name,
              senderName: sender
            };
            return [4
            /*yield*/
            , this.platformClient.request(createCartGiftCardItemEmailFulfillmentMutation, {
              input: input
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , {
              cart: this.refresh(response.createCartGiftCardItemEmailFulfillment.cart),
              emailFulfillment: new CartItemEmailFulfillment(this.platformClient, response.createCartGiftCardItemEmailFulfillment.emailFulfillment)
            }];
        }
      });
    });
  };
  /**
   * Add a guest to a cart.
   *
   * @async
   * @category Guests
   * @public
   */


  Cart.prototype.createGuest = function (opts) {
    return __awaiter(this, void 0, void 0, function () {
      var input, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            input = __assign({
              id: this.id
            }, opts);
            return [4
            /*yield*/
            , this.platformClient.request(createGuestMutation, {
              input: input
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , {
              cart: this.refresh(response.createCartGuest.cart),
              guest: new CartGuest(this.platformClient, response.createCartGuest.guest)
            }];
        }
      });
    });
  };
  /**
   * Delete a gift card item email fulfillment.
   *
   * @async
   * @category Gift Cards
   * @public
   * @param item The CartGiftCardItem.
   * @returns Promise containing the updated cart
   */


  Cart.prototype.deleteGiftCardItemEmailFulfillment = function (item) {
    return __awaiter(this, void 0, void 0, function () {
      var input, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            input = {
              id: this.id,
              itemId: item.id
            };
            return [4
            /*yield*/
            , this.platformClient.request(deleteCartGiftCardItemEmailFulfillmentMutation, {
              input: input
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , this.refresh(response.deleteCartGiftCardItemEmailFulfillment.cart)];
        }
      });
    });
  };
  /**
   * Delete a cart's guest. Using this invalidates existing reservations.
   *
   * @async
   * @category Guests
   * @public
   * @returns Promise containing the updated cart
   */


  Cart.prototype.deleteGuest = function (guest) {
    return __awaiter(this, void 0, void 0, function () {
      var input, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            input = {
              id: this.id,
              guestId: guest.id
            };
            return [4
            /*yield*/
            , this.platformClient.request(deleteGuestMutation, {
              input: input
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , this.refresh(response.deleteCartGuest.cart)];
        }
      });
    });
  };
  /**
   * Categories of items available to be checked out.
   *
   * Note that this list updates as the cart changes. For instance, some
   * incompatible items may be disabled after others are added to the cart.
   *
   * Clients should retrieve this list again after mutations or make sure errors
   * are handled when items cannot be added.
   *
   * @async
   * @public
   * @returns Promise containing the list of available categories
   */


  Cart.prototype.getAvailableCategories = function () {
    return __awaiter(this, void 0, void 0, function () {
      var response;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.platformClient.request(availableCategoriesQuery, {
              id: this.id
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , response.cart.availableCategories.map(function (category) {
              return new CartAvailableCategory(_this.platformClient, category, _this.id);
            })];
        }
      });
    });
  };
  /**
   * Payment methods available for this cart. Some methods may already be
   * present, for instance when the current user is authenticated. Additional
   * methods can be added using the `addCart...PaymentMethod` mutations.
   *
   * Note that not all of these payment methods can be used with every cart item.
   * Subsets of supported payment methods are available through the item objects
   * instead.
   */


  Cart.prototype.getAvailablePaymentMethods = function () {
    return __awaiter(this, void 0, void 0, function () {
      var response;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.platformClient.request(availablePaymentMethodsQuery)];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , response.cart.availablePaymentMethods.map(function (category) {
              return new CartItemPaymentMethod(_this.platformClient, category);
            })];
        }
      });
    });
  };
  /**
   * Retrieves available dates for all bookable cart items.
   *
   * @async
   * @category Bookable Items
   * @param opts.searchRangeLower Lower (inclusive) search range bound. When null, the current date plus the location's minimum booking lead time (i.e. the earliest possible date to book) is used.
   * @param opts.searchRangeUpper Upper (inclusive) search range bound. When null, the lower bound plus one week is used.
   * @param opts.timezone Optional override for the timezone set in {@link Carts.create}
   * @public
   * @returns Promise containing the list of Bookable Dates
   */


  Cart.prototype.getBookableDates = function (opts) {
    var _a;

    return __awaiter(this, void 0, void 0, function () {
      var response;

      var _this = this;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4
            /*yield*/
            , this.platformClient.request(datesQuery, {
              id: this.id,
              searchRangeLower: opts === null || opts === void 0 ? void 0 : opts.searchRangeLower,
              searchRangeUpper: opts === null || opts === void 0 ? void 0 : opts.searchRangeUpper,
              locationId: (_a = opts === null || opts === void 0 ? void 0 : opts.location) === null || _a === void 0 ? void 0 : _a.id,
              tz: (opts === null || opts === void 0 ? void 0 : opts.timezone) || this.timezone,
              limit: opts === null || opts === void 0 ? void 0 : opts.limit
            })];

          case 1:
            response = _b.sent();
            return [2
            /*return*/
            , response.cartBookableDates.map(function (date) {
              return new CartBookableDate(_this.platformClient, date);
            })];
        }
      });
    });
  };
  /**
   *
   * Retrieves available staff variants for a specific bookable cart item, given
   * a time that was retrieved earlier using `cartBookableTimes`. In other words,
   * returns all variants that can be selected for the item while still keeping
   * the overall starting time.
   *
   * #### Caveats
   *
   * Because this query assumes that variants of other items stay constant,
   * variants of multiple items must be updated separately by retrieving the
   * variants for one item first, updating that item, and then retrieving the
   * variants for another item.
   *
   * Timing of an item is affected when the variant is updated, which is why any
   * existing reservations are invalidated and the times must be reserved again
   * using `reserveCartBookableItems`.
   *
   * @async
   * @category Bookable Items
   * @public
   * @param time The bookable time.
   * @param item The selected bookable item.
   * @returns Promise containing the list of Bookable Item Staff Variants
   */


  Cart.prototype.getBookableStaffVariants = function (time, item, opts) {
    var _a;

    return __awaiter(this, void 0, void 0, function () {
      var response;

      var _this = this;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4
            /*yield*/
            , this.platformClient.request(bookableStaffVariantsQuery, {
              id: this.id,
              itemId: item.id,
              bookableTimeId: time.id,
              locationId: (_a = opts === null || opts === void 0 ? void 0 : opts.location) === null || _a === void 0 ? void 0 : _a.id
            })];

          case 1:
            response = _b.sent();
            return [2
            /*return*/
            , response.cart.cartBookableStaffVariants.map(function (variant) {
              return new CartAvailableBookableItemStaffVariant(_this.platformClient, variant);
            })];
        }
      });
    });
  };
  /**
   * Retrieves available times for all bookable cart items, given a date that was retrieved earlier using `getDates`.
   *
   * @async
   * @category Bookable Items
   * @public
   * @param {date} Date - an ISO8601 string for the date that should be searched through.
   * @param opts.timezone Optional override for the timezone set in {@link Carts.create}
   * @returns Promise containing the list of Bookable Times
   */


  Cart.prototype.getBookableTimes = function (_a, opts) {
    var _b;

    var date = _a.date;
    return __awaiter(this, void 0, void 0, function () {
      var response;

      var _this = this;

      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            return [4
            /*yield*/
            , this.platformClient.request(timesQuery, {
              id: this.id,
              searchDate: date,
              locationId: (_b = opts === null || opts === void 0 ? void 0 : opts.location) === null || _b === void 0 ? void 0 : _b.id,
              tz: (opts === null || opts === void 0 ? void 0 : opts.timezone) || this.timezone
            })];

          case 1:
            response = _c.sent();
            return [2
            /*return*/
            , response.cartBookableTimes.map(function (time) {
              return new CartBookableTime(_this.platformClient, time);
            })];
        }
      });
    });
  };
  /**
   * Features available to the cart.
   */


  Cart.prototype.getFeatures = function () {
    return __awaiter(this, void 0, void 0, function () {
      var response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.platformClient.request(featuresQuery, {
              id: this.id
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , new CartFeatures(this.platformClient, response.cart.features)];
        }
      });
    });
  };
  /**
   * A list of guests added to the cart
   * @async
   * @category Guests
   *
   * */


  Cart.prototype.getGuests = function () {
    return __awaiter(this, void 0, void 0, function () {
      var response;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.platformClient.request(guestsQuery, {
              id: this.id
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , response.cart.guests.map(function (guest) {
              return new CartGuest(_this.platformClient, guest);
            })];
        }
      });
    });
  };
  /**
   * Location associated with the cart
   */


  Cart.prototype.getLocation = function () {
    return __awaiter(this, void 0, void 0, function () {
      var response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.platformClient.request(locationQuery, {
              id: this.id
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , response.cart.location ? new Location(this.platformClient, response.cart.location) : null];
        }
      });
    });
  };
  /**
   *
   * Sets a location for the cart.
   *
   * Alternative methods for setting a location is passing a locationId argument
   * when creating a cart or when adding a first item to an existing cart.
   *
   * Note that the location can only be set once and cannot be changed. When
   * a location is already present on the cart, this mutation returns a
   * `CART_LOCATION_ALREADY_SET` error.
   */


  Cart.prototype.setLocation = function (location) {
    return __awaiter(this, void 0, void 0, function () {
      var input, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            input = {
              id: this.id,
              locationId: location.id
            };
            return [4
            /*yield*/
            , this.platformClient.request(setLocationMutation, {
              input: input
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , this.refresh(response.cartSetLocation.cart)];
        }
      });
    });
  };
  /**
   * A list of offers applied to the cart.
   *
   * Offers can be applied manually using `addCartOffer` and an offer code, but
   * it's also possible for offers to be auto-applied. At this time auto-applied
   * offers cannot be removed from the cart.
   */


  Cart.prototype.getOffers = function () {
    return __awaiter(this, void 0, void 0, function () {
      var response;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.platformClient.request(offersQuery, {
              id: this.id
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , response.cart.offers.map(function (guest) {
              return new CartOffer(_this.platformClient, guest);
            })];
        }
      });
    });
  };
  /**
   * All selected items pending checkout.
   *
   * Note that the ordering of this list is not stable, and may change depending
   * on the current state of the cart.
   */


  Cart.prototype.getSelectedItems = function () {
    return __awaiter(this, void 0, void 0, function () {
      var response;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.platformClient.request(selectedItemsQuery, {
              id: this.id
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , response.cart.selectedItems.map(function (item) {
              switch (item.__typename) {
                case "CartBookableItem":
                  return new CartBookableItem(_this.platformClient, item, _this.id);

                case "CartGiftCardItem":
                  return new CartGiftCardItem(_this.platformClient, item, _this.id);

                case "CartPurchasableItem":
                  return new CartPurchasableItem(_this.platformClient, item, _this.id);
              }
            })];
        }
      });
    });
  };
  /**
   * Remove an offer from the cart.
   *
   * @async
   * @category Offers
   * @param offer The Offer code
   * @public
   * @returns Promise containing the updated cart
   */


  Cart.prototype.removeOffer = function (offer) {
    return __awaiter(this, void 0, void 0, function () {
      var input, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            input = {
              id: this.id,
              offerId: offer.id
            };
            return [4
            /*yield*/
            , this.platformClient.request(removeOfferMutation, {
              input: input
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , this.refresh(response.removeCartOffer.cart)];
        }
      });
    });
  };
  /**
   * Remove a selected item from a cart. Using this invalidates existing reservations when the item being removed is a bookable item.
   *
   * @async
   * @public
   * @returns Promise containing the updated cart
   */


  Cart.prototype.removeSelectedItem = function (item) {
    return __awaiter(this, void 0, void 0, function () {
      var input, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            input = {
              id: this.id,
              itemId: item.id
            };
            return [4
            /*yield*/
            , this.platformClient.request(removeSelectedItemMutation, {
              input: input
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , this.refresh(response.removeCartSelectedItem.cart)];
        }
      });
    });
  };
  /**
   * Reserve one starting time for bookable cart items, i.e. all bookable items are to be performed starting at this time.
   * Note that this call may fail if the time is no longer available.
   *
   * @async
   * @category Bookable Items
   * @public
   * @returns Promise containing the updated cart
   */


  Cart.prototype.reserveBookableItems = function (bookableTime) {
    return __awaiter(this, void 0, void 0, function () {
      var input, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            input = {
              id: this.id,
              bookableTimeId: bookableTime.id
            };
            return [4
            /*yield*/
            , this.platformClient.request(reserveCartMutation, {
              input: input
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , this.refresh(response.reserveCartBookableItems.cart)];
        }
      });
    });
  };
  /**
   * Select an available payment method to be used with all selected cart items.
   * Note that this call may fail if the payment method is not compatible with all items.
   *
   * This is currently the only way to associate payment methods with cart items.
   * Other mutations may be added later in order to support more complex payment scenarios.
   *
   * @async
   * @category Checkout & Payment
   * @public
   * @returns Promise containing the updated cart
   */


  Cart.prototype.selectPaymentMethod = function (paymentMethod) {
    return __awaiter(this, void 0, void 0, function () {
      var input, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            input = {
              id: this.id,
              paymentMethodId: paymentMethod.id
            };
            return [4
            /*yield*/
            , this.platformClient.request(selectPaymentMethodMutation, {
              input: input
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , this.refresh(response.selectCartPaymentMethod.cart)];
        }
      });
    });
  };
  /**
   * Update a cart. Only some fields can be updated, there are other operations available to update more fields.
   *
   * @async
   * @category Details
   * @param referralSource Referral source for the appointments booked in the cart. This value is mapped to the appointments' 'referral_source' custom field values after checkout.
   * @public
   * @returns Promise containing the updated cart
   */


  Cart.prototype.update = function (opts) {
    return __awaiter(this, void 0, void 0, function () {
      var input, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            input = __assign({
              id: this.id
            }, opts);
            return [4
            /*yield*/
            , this.platformClient.request(updateCartMutation, {
              input: input
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , this.refresh(response.updateCart.cart)];
        }
      });
    });
  };
  /**
   * Update a gift card item email fulfillment.
   *
   * @async
   * @category Gift Cards
   * @param opts.sender.name The name of the person sending the item.
   * @param opts.recipient.email The email of the person receiving the item
   * @param opts.recipient.name The name of the person receiving the item
   * @param opts.message A message to include from the sender
   * @public
   */


  Cart.prototype.updateGiftCardItemEmailFulfillment = function (item, opts) {
    var _a;

    return __awaiter(this, void 0, void 0, function () {
      var input, response;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            input = {
              id: this.id,
              itemId: item.id,
              deliveryDate: opts.deliveryDate,
              messageFromSender: opts === null || opts === void 0 ? void 0 : opts.message,
              recipientEmail: opts === null || opts === void 0 ? void 0 : opts.recipient.email,
              recipientName: opts === null || opts === void 0 ? void 0 : opts.recipient.name,
              senderName: (_a = opts === null || opts === void 0 ? void 0 : opts.sender) === null || _a === void 0 ? void 0 : _a.name
            };
            return [4
            /*yield*/
            , this.platformClient.request(updateCartGiftCardItemEmailFulfillmentMutation, {
              input: input
            })];

          case 1:
            response = _b.sent();
            return [2
            /*return*/
            , {
              cart: this.refresh(response.updateCartGiftCardItemEmailFulfillment.cart),
              emailFulfillment: new CartItemEmailFulfillment(this.platformClient, response.updateCartGiftCardItemEmailFulfillment.emailFulfillment)
            }];
        }
      });
    });
  };
  /**
   * Update a cart's guest.
   *
   * @async
   * @category Guests
   * @public
   * @todo Determine return type
   */


  Cart.prototype.updateGuest = function (guest, opts) {
    return __awaiter(this, void 0, void 0, function () {
      var input, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            input = __assign({
              id: this.id,
              guestId: guest.id
            }, opts);
            return [4
            /*yield*/
            , this.platformClient.request(updateGuestMutation, {
              input: input
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , {
              cart: this.refresh(response.updateCartGuest.cart),
              guest: new CartGuest(this.platformClient, response.updateCartGuest.guest)
            }];
        }
      });
    });
  };
  /**
   * Update a cart's selected bookable item.
   *
   * This invalidates existing reservations when the guest, staff variant, or options are updated.
   *
   * @async
   * @category Bookable Items
   * @param item The bookable item
   * @param opts.discountCode Optional discount code applied to the item. Invalid discount codes are ignored without an error, check `discountCode` on the selected item to see if the code was valid.
   * @param opts.guest The guest this item is booked for. A null value indicates the cart owner, or current client. When finding available times for bookable items, it's assumed that two items having different guests can be booked simultaneously.
   * @param opts.options Selected bookable item options. Note that the selections must conform to the option group requirements, e.g. limits on the number of options. Otherwise an error is returned.
   * @param opts.staffVariant The selected bookable item staff variant.
   * @deprecated See {@link CartBookableItem.update} instead
   * @public
   * @returns Promise containing the updated cart
   */


  Cart.prototype.updateSelectedBookableItem = function (item, opts) {
    return __awaiter(this, void 0, void 0, function () {
      var input, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            input = {
              id: this.id,
              itemId: item.id,
              itemDiscountCode: opts === null || opts === void 0 ? void 0 : opts.discountCode,
              itemGuestId: (opts === null || opts === void 0 ? void 0 : opts.guest) == null ? null : opts.guest.id,
              itemStaffVariantId: (opts === null || opts === void 0 ? void 0 : opts.staffVariant) == null ? null : opts.staffVariant.id,
              itemOptionIds: (opts === null || opts === void 0 ? void 0 : opts.options) == null ? null : opts.options.map(function (o) {
                return o.id;
              })
            };
            return [4
            /*yield*/
            , this.platformClient.request(updateSelectedBookableItemMutation, {
              input: input
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , this.refresh(response.updateCartSelectedBookableItem.cart)];
        }
      });
    });
  };
  /**
   * Update a cart's selected gift card item.
   *
   * @async
   * @category Gift Card Items
   * @param item The gift card item
   * @param opts.price Price applied to the gift card item
   * @public
   * @returns Promise containing the updated cart
   */


  Cart.prototype.updateSelectedGiftCardItem = function (item, opts) {
    return __awaiter(this, void 0, void 0, function () {
      var input, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            input = {
              id: this.id,
              itemId: item.id,
              itemPrice: opts === null || opts === void 0 ? void 0 : opts.price,
              giftCardDesignId: (opts === null || opts === void 0 ? void 0 : opts.design) == null ? null : opts === null || opts === void 0 ? void 0 : opts.design.id
            };
            return [4
            /*yield*/
            , this.platformClient.request(updateSelectedGiftCardItemMutation, {
              input: input
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , this.refresh(response.updateCartSelectedGiftCardItem.cart)];
        }
      });
    });
  };
  /**
   * Update a cart's selected purchasable item.
   *
   * @async
   * @category Purchasable Items
   * @param opts.discountCode Optional discount code applied to the item. Invalid discount codes are ignored without an error, check `discountCode` on the selected item to see if the code was valid.
   * @public
   * @returns Promise containing the updated cart
   */


  Cart.prototype.updateSelectedPurchasableItem = function (item, opts) {
    return __awaiter(this, void 0, void 0, function () {
      var input, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            input = {
              id: this.id,
              itemId: item.id,
              itemDiscountCode: opts === null || opts === void 0 ? void 0 : opts.discountCode
            };
            return [4
            /*yield*/
            , this.platformClient.request(updateSelectedPurchasableItemMutation, {
              input: input
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , this.refresh(response.updateCartSelectedPurchasableItem.cart)];
        }
      });
    });
  };
  /**
   * Adds tags to the appointment booked within a cart.
   *
   * @async
   * @category Appointments
   * @public
   * @returns A map with a Boolean `success` key or an error if one of the tags doesn't exist.
   */


  Cart.prototype.addAppointmentTags = function (appointmentId, tagIds) {
    return __awaiter(this, void 0, void 0, function () {
      var input, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            input = {
              cartId: this.id,
              id: appointmentId,
              tagIds: tagIds
            };
            return [4
            /*yield*/
            , this.platformClient.request(appointmentAddTagsMutation, {
              input: input
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , response];
        }
      });
    });
  };
  /**
   * @internal
   */


  Cart.prototype.refresh = function (newCart) {
    return new Cart(this.platformClient, newCart);
  };

  return Cart;
}(Node);

var Carts = function () {
  /**
   * @internal
   */
  function Carts(platformClient) {
    this.platformClient = platformClient;
  }
  /**
   * @async
   * Creates a new Cart
   *
   * @param opts.timezone Optional time zone that {@link CartBookableDate} and {@link CartBookableTime} should be converted to, e.g. the client's time zone. The search range dates are also interpreted using this. When omitted, the browser timezone is used.
   * @param referralSource Referral source for the appointments booked in the cart. This value is mapped to the appointments' 'referral_source' custom field values after checkout.
   * @protected
   */


  Carts.prototype.create = function (location, opts) {
    return __awaiter(this, void 0, void 0, function () {
      var input, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            input = {
              locationId: location === null || location === void 0 ? void 0 : location.id
            };
            return [4
            /*yield*/
            , this.platformClient.request(createCartMutation, {
              input: input
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , new Cart(this.platformClient, response.createCart.cart, opts)];
        }
      });
    });
  };
  /**
   * @async
   * Retrieves a cart by ID
   *
   * @param {id} ID the ID of the cart
   * @protected
   */


  Carts.prototype.get = function (id, opts) {
    return __awaiter(this, void 0, void 0, function () {
      var response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.platformClient.request(cartQuery, {
              id: id
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , new Cart(this.platformClient, response.cart, opts)];
        }
      });
    });
  };

  return Carts;
}();

var Client = function (_super) {
  __extends(Client, _super);

  function Client() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  /**
   * Update the authenticated client
   *
   * @async
   * @returns Promise containing the Client
   */


  Client.prototype.update = function (input) {
    return __awaiter(this, void 0, void 0, function () {
      var response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.platformClient.request(updateClientMutation, {
              input: input
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , new Client(this.platformClient, response.updateClient.client)];
        }
      });
    });
  };
  /**
   * Take ownership of a cart, linking the cart to this client's account.
   *
   * Using this mutation invalidates existing reservations.
   *
   * @async
   * @returns Promise containing the updated cart
   */


  Client.prototype.takeCartOwnership = function (cart) {
    return __awaiter(this, void 0, void 0, function () {
      var input, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            input = {
              id: cart.id
            };
            return [4
            /*yield*/
            , this.platformClient.request(takeOwnershipMutation, {
              input: input
            })];

          case 1:
            response = _a.sent();
            return [4
            /*yield*/
            , new Carts(this.platformClient).get(response.takeCartOwnership.cart.id)];

          case 2:
            // TODO: When requesting the full ...CartProperties on this mutation, we get
            // a 500 back from sandbox. Unable to reproduce in tests on sched for now
            return [2
            /*return*/
            , _a.sent()];
        }
      });
    });
  };
  /**
   * List memberships for this client
   *
   * @async
   * @returns Promise containing the list of Memberships
   */


  Client.prototype.listMemberships = function () {
    return __awaiter(this, void 0, void 0, function () {
      var response;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.platformClient.request(myMembershipsQuery)];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , response.myMemberships.edges.map(function (edge) {
              return new Membership(_this.platformClient, edge.node);
            })];
        }
      });
    });
  };

  return Client;
}(Node);

var Clients = function () {
  /**
   * @internal
   */
  function Clients(platformClient) {
    this.platformClient = platformClient;
  }
  /**
   * Look up the authenticated client
   *
   * @async
   * @returns Promise containing the Client
   */


  Clients.prototype.get = function (auth) {
    return __awaiter(this, void 0, void 0, function () {
      var platformClient, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            platformClient = this.platformClient.withAuthentication(auth);
            return [4
            /*yield*/
            , platformClient.request(clientQuery)];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , new Client(platformClient, response.client)];
        }
      });
    });
  };

  return Clients;
}();
/** @class */


(function (_super) {
  __extends(AvailableRescheduleTime, _super);

  function AvailableRescheduleTime() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return AvailableRescheduleTime;
})(Node);
/** @class */


(function (_super) {
  __extends(AvailableRescheduleDate, _super);

  function AvailableRescheduleDate() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return AvailableRescheduleDate;
})(Node);

var AppointmentService = function (_super) {
  __extends(AppointmentService, _super);
  /**
   * @internal
   */


  function AppointmentService(platformClient, appointmentService) {
    var _this = _super.call(this, platformClient, appointmentService) || this;

    _this.staff = new Staff(platformClient, appointmentService.staff);
    _this.service = new Service(_this.platformClient, appointmentService.service);
    return _this;
  }

  return AppointmentService;
}(Node);

var AppointmentCancellation = function (_super) {
  __extends(AppointmentCancellation, _super);

  function AppointmentCancellation() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return AppointmentCancellation;
}(Node);

var Appointment = function (_super) {
  __extends(Appointment, _super);
  /**
   * @internal
   */


  function Appointment(platformClient, appointment) {
    var _this = _super.call(this, platformClient, appointment) || this;

    _this.cancellation = appointment.cancellation && new AppointmentCancellation(platformClient, appointment.cancellation);
    _this.appointmentServices = appointment.appointmentServices.map(function (appointmentService) {
      return new AppointmentService(_this.platformClient, appointmentService);
    });
    return _this;
  }
  /**
   * Reschedule the provided appointment to a new date and time.
   *
   * @async
   * @param bookableTime The encoded data representing an available appointment slot (can be computed using rescheduleAvailableTimes())
   * @param sendNotification Creates a notification for the dashboard users to let them know that the appointment has been self-rescheduled by the client.
   * @protected
   * @returns Promise containing the updated Appointment
   */


  Appointment.prototype.reschedule = function (bookableTime, sendNotification) {
    return __awaiter(this, void 0, void 0, function () {
      var input, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            input = {
              appointmentId: this.id,
              bookableTimeId: bookableTime.id,
              sendNotification: sendNotification
            };
            return [4
            /*yield*/
            , this.platformClient.request(appointmentRescheduleMutation, {
              input: input
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , new Appointment(this.platformClient, response.appointmentReschedule.appointment)];
        }
      });
    });
  };
  /**
   * Get the available dates for the provided appointment.
   *
   * @async
   * @param searchRangeLower The lower range (inclusive) of dates to search for appointment availability.
   * @param searchRangeUpper The upper range (inclusive) of dates to search for appointment availability.
   * @protected
   * @returns Promise containing a list of AvailableRescheduleDate
   */


  Appointment.prototype.rescheduleAvailableDates = function (searchRangeLower, searchRangeUpper) {
    return __awaiter(this, void 0, void 0, function () {
      var input, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            input = {
              appointmentId: this.id,
              searchRangeLower: searchRangeLower,
              searchRangeUpper: searchRangeUpper
            };
            return [4
            /*yield*/
            , this.platformClient.request(availableRescheduleDatesQuery, {
              input: input
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , response.appointmentRescheduleAvailableDates.availableDates];
        }
      });
    });
  };
  /**
   * Get the available appointment times on a particular date for the provided appointment.
   *
   * @async
   * @param date The date that should be searched for available times.
   * @protected
   * @returns Promise containing a list of AvailableRescheduleTime
   * @todo Timezone support
   */


  Appointment.prototype.rescheduleAvailableTimes = function (date) {
    return __awaiter(this, void 0, void 0, function () {
      var input, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            input = {
              appointmentId: this.id,
              date: date
            };
            return [4
            /*yield*/
            , this.platformClient.request(availableRescheduleTimesQuery, {
              input: input
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , response.appointmentRescheduleAvailableTimes.availableTimes];
        }
      });
    });
  };
  /**
   * Cancel an Appointment.
   *
   * @async
   * @protected
   * @returns Promise containing the updated Appointment
   */


  Appointment.prototype.cancel = function (notes) {
    return __awaiter(this, void 0, void 0, function () {
      var input, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            input = {
              id: this.id,
              notes: notes
            };
            return [4
            /*yield*/
            , this.platformClient.request(cancelAppointmentMutation, {
              input: input
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , new Appointment(this.platformClient, response.cancelAppointment.appointment)];
        }
      });
    });
  };
  /**
   * Fetch the Client for this appointment.
   *
   * @async
   * @returns Promise containing the Client
   */


  Appointment.prototype.getClient = function () {
    return __awaiter(this, void 0, void 0, function () {
      var response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.platformClient.request(appointmentClientQuery, {
              id: this.id
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , new Client(this.platformClient, response.appointment.client)];
        }
      });
    });
  };
  /**
   * Fetch the Location for this appointment.
   *
   * @async
   * @returns Promise containing the Client
   */


  Appointment.prototype.getLocation = function () {
    return __awaiter(this, void 0, void 0, function () {
      var response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.platformClient.request(appointmentLocationQuery, {
              id: this.id
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , new Location(this.platformClient, response.appointment.location)];
        }
      });
    });
  };

  return Appointment;
}(Node);

var Appointments = function () {
  /**
   * @internal
   */
  function Appointments(platformClient) {
    this.platformClient = platformClient;
  }
  /**
   * Fetches the appointment by the ID.
   *
   * Note that only the appointment's client can see the appointment, so
   * this function requires an authenticated API access. For unauthenticated access,
   * see the getFromCart function.
   * @async
   * @param {id} ID the ID of the appointment
   * @protected
   * @returns Promise containing the Appointment
   */


  Appointments.prototype.get = function (id) {
    return __awaiter(this, void 0, void 0, function () {
      var response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.platformClient.request(appointmentQuery, {
              id: id
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , new Appointment(this.platformClient, response.appointment)];
        }
      });
    });
  };
  /**
   * Fetches the appointment by using the appointment ID and the cart ID.
   * @async
   * @param {id} ID the ID of the appointment
   * @param {cartId} ID the ID of the cart the appointment was booked with
   * @protected
   * @returns Promise containing the Appointment
   */


  Appointments.prototype.getFromCart = function (id, cartId) {
    return __awaiter(this, void 0, void 0, function () {
      var response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.platformClient.request(appointmentQuery, {
              id: id,
              cartId: cartId
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , new Appointment(this.platformClient, response.appointment)];
        }
      });
    });
  };
  /**
   * List appointments for the authenticated client
   *
   * @async
   * @protected
   * @returns Promise containing the list of Appointments
   * @todo Pagination
   */


  Appointments.prototype.list = function () {
    return __awaiter(this, void 0, void 0, function () {
      var response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.platformClient.request(myAppointmentsQuery, {
              first: 100
            })];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , response.myAppointments.edges.map(function (edge) {
              return edge.node;
            })];
        }
      });
    });
  };

  return Appointments;
}();

var fragments = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fragment BusinessProperties on Business {\n    avatar\n    id\n    insertedAt\n    name\n    tz\n    updatedAt\n    website\n  }\n"], ["\n  fragment BusinessProperties on Business {\n    avatar\n    id\n    insertedAt\n    name\n    tz\n    updatedAt\n    website\n  }\n"])));
var businessQuery = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  query Business {\n    business {\n      ...BusinessProperties\n    }\n  }\n"], ["\n  ", "\n  query Business {\n    business {\n      ...BusinessProperties\n    }\n  }\n"])), fragments);
var businessLocationsQuery = (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n  query Business {\n    business {\n      locations(first: 100) {\n        edges {\n          node {\n            ...LocationProperties\n          }\n        }\n      }\n    }\n  }\n"], ["\n  ", "\n  query Business {\n    business {\n      locations(first: 100) {\n        edges {\n          node {\n            ...LocationProperties\n          }\n        }\n      }\n    }\n  }\n"])), fragments$4);
var templateObject_1, templateObject_2, templateObject_3;

var Business = function (_super) {
  __extends(Business, _super);

  function Business() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  /**
   * Get all locations for this business
   *
   * @async
   * @public
   * @todo Pagination
   */


  Business.prototype.getLocations = function () {
    return __awaiter(this, void 0, void 0, function () {
      var response;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.platformClient.request(businessLocationsQuery)];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , response.business.locations.edges.map(function (_a) {
              var node = _a.node;
              return new Location(_this.platformClient, node);
            })];
        }
      });
    });
  };

  return Business;
}(Node);

var Businesses = function () {
  /**
   * @internal
   */
  function Businesses(platformClient) {
    this.platformClient = platformClient;
  }
  /**
   * Look up the currently authenticated business
   *
   * @async
   * @public
   * @returns Promise containing the Business
   */


  Businesses.prototype.get = function () {
    return __awaiter(this, void 0, void 0, function () {
      var response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.platformClient.request(businessQuery)];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , new Business(this.platformClient, response.business)];
        }
      });
    });
  };

  return Businesses;
}();

var Blvd = function () {
  /**
   * Creates a new instance of the Boulevard client.
   *
   * You can create a Sandbox account and generate credentials at https://developers.joinblvd.com/
   *
   * @param apiKey The API Key of your application
   * @param businessID The ID of the business
   * @param target The backend target for this client. Defaults to {@link PlatformTarget.Sandbox}
   * @public
   * @returns A new Boulevard client instance
   */
  function Blvd(apiKey, businessID, target) {
    var client = new PlatformClient(apiKey, businessID, target);
    this.appointments = new Appointments(client);
    this.businesses = new Businesses(client);
    this.carts = new Carts(client);
    this.clients = new Clients(client);
    this.locations = new Locations(client);
  }

  return Blvd;
}();



/***/ })

};
;