/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Auth_Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Auth/Auth */ "./src/components/Auth/Auth.js");
/* harmony import */ var _components_CreateAnimal_CreateAnimal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/CreateAnimal/CreateAnimal */ "./src/components/CreateAnimal/CreateAnimal.js");
/* harmony import */ var _components_AnimalsList_AnimalsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AnimalsList/AnimalsList */ "./src/components/AnimalsList/AnimalsList.js");
/* harmony import */ var _App_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.module.scss */ "./src/App.module.scss");
/* harmony import */ var _components_Searchbar_Searchbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Searchbar/Searchbar */ "./src/components/Searchbar/Searchbar.js");
/* harmony import */ var _components_SearchFilter_SearchFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/SearchFilter/SearchFilter */ "./src/components/SearchFilter/SearchFilter.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }







function App() {
  const handleChangeAuth = event => {
    setCredentials(_objectSpread(_objectSpread({}, credentials), {}, {
      [event.target.name]: event.target.value
    }));
  };
  const handleChange = event => {
    setAnimal(_objectSpread(_objectSpread({}, animal), {}, {
      [event.target.name]: event.target.value
    }));
  };
  const [credentials, setCredentials] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    email: '',
    password: '',
    name: ''
  });
  const [animal, setAnimal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: '',
    species: '',
    image: '',
    reservedForAdoption: {
      type: Boolean,
      required: true,
      defaultValue: false
    }
  }, {
    timestamps: true
  });
  const [animals, setAnimals] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const login = async () => {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password
        })
      });
      const tokenResponse = await response.json();
      setToken(tokenResponse);
      localStorage.setItem('token', JSON.stringify(tokenResponse));
    } catch (error) {
      console.error(error);
    } finally {
      window.location.reload();
    }
  };
  const signUp = async () => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(_objectSpread({}, credentials))
      });
      const tokenResponse = await response.json();
      setToken(tokenResponse);
      localStorage.setItem('token', JSON.stringify(tokenResponse));
    } catch (error) {
      console.error(error);
    } finally {
      window.location.reload();
    }
  };
  const createAnimal = async () => {
    try {
      const response = await fetch('/api/animals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer ".concat(token)
        },
        body: JSON.stringify(_objectSpread({}, animal))
      });
      const data = await response.json();
      setAnimals([data, ...animals]);
    } catch (error) {
      console.error(error);
    } finally {
      setAnimal({
        name: '',
        species: '',
        image: ''
      });
    }
  };
  const listAnimals = async () => {
    try {
      const response = await fetch('/api/animals', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer ".concat(JSON.parse(localStorage.getItem('token')))
        }
      });
      const data = await response.json();
      setAnimals(data);
    } catch (error) {
      console.error(error);
    }
  };
  const deleteAnimal = async id => {
    try {
      const response = await fetch("/api/animals/".concat(id), {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer ".concat(token)
        }
      });
      const data = await response.json();
      const animalsCopy = [...animals];
      const index = animalsCopy.findIndex(animal => id === animal._id);
      animalsCopy.splice(index, 1);
      setAnimals(animalsCopy);
    } catch (error) {
      console.error(error);
    }
  };
  const updateAnimal = async (id, updatedData) => {
    try {
      const response = await fetch("/api/animals/".concat(id), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer ".concat(token)
        },
        body: JSON.stringify(updatedData)
      });
      const data = await response.json();
      const animalsCopy = [...animals];
      const index = animalsCopy.findIndex(animal => id === animal._id);
      animalsCopy[index] = _objectSpread(_objectSpread({}, animalsCopy[index]), updatedData);
      setAnimals(animalsCopy);
    } catch (error) {
      console.error(error);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const tokenData = localStorage.getItem('token');
    if (tokenData && tokenData !== 'null' && tokenData !== 'undefined') {
      listAnimals();
    }
  }, [token]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const tokenData = localStorage.getItem('token');
    if (tokenData && tokenData !== 'null' && tokenData !== 'undefined') {
      setToken(JSON.parse(tokenData));
    }
  }, []);
  const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const handleSearch = (searchInput, animals) => {
    searchInput ? /*#__PURE__*/React.createElement(_components_AnimalsList_AnimalsList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      animals: animals.filter(animal => animal.name.includes(searchInput)),
      updateAnimal: updateAnimal,
      deleteAnimal: deleteAnimal
    }) : /*#__PURE__*/React.createElement(_components_AnimalsList_AnimalsList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      animals: animals,
      updateAnimal: updateAnimal,
      deleteAnimal: deleteAnimal
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, token ? /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      localStorage.removeItem('token');
      window.location.reload();
    }
  }, "Logout") : '', /*#__PURE__*/React.createElement("div", {
    className: "banner"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "banner"
  }, "Sunny Animal Adoption Shelter"), /*#__PURE__*/React.createElement("h2", {
    className: "banner"
  }, "Brighter Days Ahead For Our Furry Friends"), /*#__PURE__*/React.createElement("img", {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqtuoc9EQFUFrIEbZovpxdtEWNrmtPb4Ysiw&usqp=CAU"
  })), /*#__PURE__*/React.createElement(_components_Auth_Auth__WEBPACK_IMPORTED_MODULE_1__["default"], {
    login: login,
    credentials: credentials,
    handleChangeAuth: handleChangeAuth,
    signUp: signUp,
    setToken: setToken,
    token: token
  }), /*#__PURE__*/React.createElement(_components_CreateAnimal_CreateAnimal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    createAnimal: createAnimal,
    animal: animal,
    handleChange: handleChange
  }), /*#__PURE__*/React.createElement(_components_Searchbar_Searchbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    animals: animals,
    searchInput: searchInput,
    setSearchInput: setSearchInput,
    onKeyDown: handleSearch
  }));
}

/***/ }),

/***/ "./src/components/Animal/Animal.js":
/*!*****************************************!*\
  !*** ./src/components/Animal/Animal.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Animal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Animal_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Animal.module.scss */ "./src/components/Animal/Animal.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function Animal(_ref) {
  let {
    animal,
    updateAnimal,
    deleteAnimal
  } = _ref;
  const [showInput, setShowInput] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showBody, setShowBody] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("h4", {
    onClick: () => setShowInput(!showInput)
  }, "Edit Animal, Click Here"), /*#__PURE__*/React.createElement("div", {
    className: "animal__data"
  }, /*#__PURE__*/React.createElement("h4", null, animal.name), /*#__PURE__*/React.createElement("h4", null, animal.species), /*#__PURE__*/React.createElement("img", {
    src: animal.image
  })), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    style: {
      display: showInput ? 'block' : 'none'
    },
    type: "text",
    onKeyDown: e => {
      if (e.key === 'Enter') {
        const name = inputRef.current.value;
        updateAnimal(animal._id, {
          name
        });
        setShowInput(false);
      }
    },
    defaultValue: animal.name
  }), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    style: {
      display: showInput ? 'block' : 'none'
    },
    type: "text",
    onKeyDown: e => {
      if (e.key === 'Enter') {
        const species = inputRef.current.value;
        updateAnimal(animal._id, {
          species
        });
        setShowInput(false);
      }
    },
    defaultValue: animal.species
  }), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    style: {
      display: showInput ? 'block' : 'none'
    },
    type: "text",
    onKeyDown: e => {
      if (e.key === 'Enter') {
        const image = inputRef.current.value;
        updateAnimal(animal._id, {
          image
        });
        setShowInput(false);
      }
    },
    defaultValue: animal.image
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => deleteAnimal(animal._id)
  }, "Found a New Home")));
}

// must delete url and replace with the rest of the relevant animal data.

/***/ }),

/***/ "./src/components/AnimalsList/AnimalsList.js":
/*!***************************************************!*\
  !*** ./src/components/AnimalsList/AnimalsList.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AnimalList)
/* harmony export */ });
/* harmony import */ var _AnimalsList_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimalsList.module.scss */ "./src/components/AnimalsList/AnimalsList.module.scss");
/* harmony import */ var _Animal_Animal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Animal/Animal */ "./src/components/Animal/Animal.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



function AnimalList(_ref) {
  let {
    animals,
    deleteAnimal,
    updateAnimal,
    searchInput
  } = _ref;
  return searchInput ? null : /*#__PURE__*/React.createElement("ul", null, animals.length ? animals.map(animal => /*#__PURE__*/React.createElement(_Animal_Animal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: animal._id,
    animal: animal,
    updateAnimal: updateAnimal,
    deleteAnimal: deleteAnimal
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, "No Animals on Adoption Yet... Add one in the Form Above")));
}

/***/ }),

/***/ "./src/components/Auth/Auth.js":
/*!*************************************!*\
  !*** ./src/components/Auth/Auth.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Auth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Login_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Login/Login */ "./src/components/Login/Login.js");
/* harmony import */ var _SignUp_SignUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SignUp/SignUp */ "./src/components/SignUp/SignUp.js");
/* harmony import */ var _Auth_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Auth.module.scss */ "./src/components/Auth/Auth.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");





// export default function Auth (props){
//     const [showLogin, setShowLogin] = useState(true)
//     return(
//      <>
//        <button onClick={() => setShowLogin(!showLogin)}>{!showLogin? 'Already Have An account. Click Here To Sign In': 'New Here. Click Here Sign Up'}</button>
//        { !showLogin ? <SignUp signUp={props.signUp}/> : <Login login={props.login}/>}
//      </>
//     )
//  }

function Auth(_ref) {
  let {
    login,
    signUp,
    credentials,
    handleChangeAuth
  } = _ref;
  const [showLogin, setShowLogin] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [showSignUp, setShowSignUp] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');

  // note for arthur if ever you see it. this use effect hook was crashing my login process.... did I need it at all?
  // useEffect(() => {
  //     const getToken = () => {
  //         const token = window.localStorage.getItem('token')
  //         if (!token || token === 'null' || token === 'undefined') return null
  //         // const payload = JSON.parse(atob(localStorage.token.split('.')[1]))
  //         // if (payload.exp < Date.now() / 1000) {S
  //         //     window.localStorage.removeItem('token')
  //         //     return null
  //         // }
  //         return token
  //     }
  //     const myToken = getToken()
  //     const data = myToken ? JSON.parse(atob(localStorage.token.split('.')[1])).user : null
  //     setUser(data)
  //     setToken(myToken)
  // }, [])
  return /*#__PURE__*/React.createElement(React.Fragment, null, user && user.name ? /*#__PURE__*/React.createElement("h1", {
    className: _Auth_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].h1
  }, "Welcome ", user.name.toUpperCase()) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: _Auth_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].button,
    onClick: () => {
      setShowSignUp(!showSignUp);
    }
  }, showSignUp ? 'Sign Up With a New Account Below or Click Here to Login As An Existing User' : 'Welcome Back, Login As An Existing User or Click Here to Sign Up With A New Account'), showSignUp ? /*#__PURE__*/React.createElement(_SignUp_SignUp__WEBPACK_IMPORTED_MODULE_2__["default"], {
    signUp: signUp,
    credentials: credentials,
    handleChangeAuth: handleChangeAuth
  }) : /*#__PURE__*/React.createElement(_Login_Login__WEBPACK_IMPORTED_MODULE_1__["default"], {
    login: login,
    credentials: credentials,
    handleChangeAuth: handleChangeAuth
  })));
}

/***/ }),

/***/ "./src/components/CreateAnimal/CreateAnimal.js":
/*!*****************************************************!*\
  !*** ./src/components/CreateAnimal/CreateAnimal.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateAnimal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CreateAnimal_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateAnimal.module.scss */ "./src/components/CreateAnimal/CreateAnimal.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CreateAnimal(_ref) {
  let {
    createAnimal,
    animal,
    handleChange
  } = _ref;
  // const [ formData, setFormData ] = useState({
  //     name: '',
  //     species: '',
  //     image: ''
  // })

  // const handleSubmit = async (e) => {
  //     e.preventDefault()
  //     try {
  //         await createAnimal(formData)
  //         // cool thing to do once there is a showpage done
  //     } catch (error) {
  //         console.error(error)
  //     }
  // }

  // const handleChange = (e) => {
  //     setFormData({...formData, [e.target.name]: e.target.value })
  // }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, "Contribute an Animal to the Adoption Community"), /*#__PURE__*/React.createElement("div", {
    className: _CreateAnimal_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].container
  }, /*#__PURE__*/React.createElement("form", {
    className: _CreateAnimal_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].form,
    onSubmit: e => {
      e.preventDefault();
      createAnimal();
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Name", /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: animal.name,
    name: "name",
    onChange: handleChange,
    placeholder: 'Name'
  })), /*#__PURE__*/React.createElement("label", null, "Species", /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: animal.species,
    name: "species",
    onChange: handleChange,
    placeholder: 'Species'
  })), /*#__PURE__*/React.createElement("label", null, "Image Url ", /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: animal.image,
    name: "image",
    onChange: handleChange,
    placeholder: 'Image Url'
  }), " ")), /*#__PURE__*/React.createElement("input", {
    className: _CreateAnimal_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button,
    type: "submit",
    value: "Create Animal"
  }))));
}

/***/ }),

/***/ "./src/components/Login/Login.js":
/*!***************************************!*\
  !*** ./src/components/Login/Login.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Login)
/* harmony export */ });
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
// import styles from './Login.module.scss'

function Login(_ref) {
  let {
    login,
    credentials,
    handleChangeAuth
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, " Shelter Organizer? Login over here! "), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      login();
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: credentials.email,
    name: "email",
    onChange: handleChangeAuth,
    placeholder: "Email Here"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: credentials.password,
    name: "password",
    onChange: handleChangeAuth,
    placeholder: "Password"
  }), /*#__PURE__*/React.createElement("input", {
    type: "submit",
    value: "Login as Existing User"
  })));
}

/***/ }),

/***/ "./src/components/SearchFilter/SearchFilter.js":
/*!*****************************************************!*\
  !*** ./src/components/SearchFilter/SearchFilter.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Searchbar_Searchbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Searchbar/Searchbar */ "./src/components/Searchbar/Searchbar.js");
/* harmony import */ var _AnimalsList_AnimalsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AnimalsList/AnimalsList */ "./src/components/AnimalsList/AnimalsList.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");





// export default function Auth (props){
//     const [showLogin, setShowLogin] = useState(true)
//     return(
//      <>
//        <button onClick={() => setShowLogin(!showLogin)}>{!showLogin? 'Already Have An account. Click Here To Sign In': 'New Here. Click Here Sign Up'}</button>
//        { !showLogin ? <SignUp signUp={props.signUp}/> : <Login login={props.login}/>}
//      </>
//     )
//  }

function SearchFilter(_ref) {
  let {
    searchInput,
    searchResults,
    animals
  } = _ref;
  // const [searchInput, setSearchInput] = useState(false)

  return /*#__PURE__*/React.createElement(React.Fragment, null, "searchInput ? ", /*#__PURE__*/React.createElement(_Searchbar_Searchbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    animals: searchResults
  }), " : null");
}

/***/ }),

/***/ "./src/components/Searchbar/Searchbar.js":
/*!***********************************************!*\
  !*** ./src/components/Searchbar/Searchbar.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Searchbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Searchbar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Searchbar.module.scss */ "./src/components/Searchbar/Searchbar.module.scss");
/* harmony import */ var _Animal_Animal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Animal/Animal */ "./src/components/Animal/Animal.js");
/* harmony import */ var _AnimalsList_AnimalsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AnimalsList/AnimalsList */ "./src/components/AnimalsList/AnimalsList.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");




// MUST FINALIZE SEARCH COMPONENT BY INVESTIGATING HOW TO CORRECTLY ACCESS THE REAL BOOKMARKS

// const searchResults = (searchInput, animals) => {
//     if(!searchInput) {
//         return <AnimalsList animals={animals} updateAnimal={updateAnimal} />
//     }
//     return animals.filter(animal => animal.name.includes(searchInput))
// }

function Searchbar(_ref) {
  let {
    updateAnimal,
    deleteAnimal,
    animals
  } = _ref;
  const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "search__bar"
  }, /*#__PURE__*/React.createElement("label", null, "Search animals here", /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Search...",
    onChange: e => setSearchInput(e.target.value)
  })), !searchInput ? /*#__PURE__*/React.createElement(_AnimalsList_AnimalsList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    animals: animals,
    updateAnimal: updateAnimal
  }) : /*#__PURE__*/React.createElement(_AnimalsList_AnimalsList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    animals: animals.filter(animal => animal.name.includes(searchInput)),
    uodateAnimal: updateAnimal,
    deleteAnimal: deleteAnimal
  }));
}

// how do I specify where the search result will display? Need functioning search bar at top of bookmarks index only.
// useEffect to manipulate data, useState to grab it

// don't handle change on instances of basic functionality to occur. no need for things that DONT auto change. like form submission, if no page reload no need

// if you want the user to be able to make up tags you can't use enum. If you want to be able to ADD tags, the model should have an array of strings called tags. it's much simpler than you think it is. Searching by tags is a MATCH, not an includes search. (would still technically work.)

// const SearchBar = ({input}) => {

//     // const [searchResults, setSearchResults] = useState(input)

//     const handleSearch = (e) => {
//         const searchTerm = e.target.value
//         setSearchInput(searchTerm)
//     }
//         const results = bookmarks.filter(bookmark => bookmark.title.toLowerCase().includes(searchTerm.toLowerCase()))

//         setSearchResults(results)
//     }

// there is no universal way to do a searchbar.
// you've already acquired full list, don't need to contact api again in small scale search for this singular instance. LARGER databases require more complex search that calls the database again .  --> NO need to implement quick sort algorithms on small-scale search. that's big fish stuff.

//binary search with extra steps. -> MongoDB HAS search built in. you just need to tell it to search .    .find({}) using regular expression.  Also has built in sorting .  .sort.filter.

// for tag search
// const handleSelectTag = (e)=> {
//     const term = e.target.value
//     setSearchInput(term)

// bookmark data must be a prop GIVEN to the searchbar component to successfully acquire ma
// bookmarks are an OBJECT so you must specifically target the ELEMENT in question.  then call .includes to allow for that.
//     // const results = bookmarks.filter(bookmark => bookmark.title.toLowerCase().includes(term.toLowerCase())) --> MUST call filter on an ARRAY.
//     // e.preventDefault()
//     handleSearch(searchInput)
//     // onSearch(searchInput) I feel like this is irrelevant atm
// }
// JSX CANT DO HANDLE SEARCH. you can't put a prop in an input like handlesearch. onsubmit={handleSearch} --> whatever you choose, it MUST be an on action name. onkeydown==enter would work as well.

/* tag buttons:

 <div className="tag__buttons"
        id="tag-buttons"
        >
        <button
        className="tag__btn"
        value="TagOne"
        onClick={handleSearch}
        >Tag One Search</button>
        <button className="tag__btn"
        value="TagTwo"
        onClick={handleSearch}
        >Tag Two Search</button>
        <button className="tag__btn"
        value="TagThree"
        onClick={handleSearch}
        >Tag Three Search</button>
        </div>
*/

/***/ }),

/***/ "./src/components/SignUp/SignUp.js":
/*!*****************************************!*\
  !*** ./src/components/SignUp/SignUp.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignUp)
/* harmony export */ });
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
// import styles from './SignUp.module.scss'

function SignUp(_ref) {
  let {
    credentials,
    signUp,
    handleChangeAuth
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, "SignUp To Be a Contributor to Our Adoptions Community!"), /*#__PURE__*/React.createElement("form", {
    className: "sign__up__form",
    onSubmit: e => {
      e.preventDefault();
      signUp();
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: credentials.name,
    name: "name",
    onChange: handleChangeAuth,
    placeholder: "Email"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: credentials.email,
    name: "email",
    onChange: handleChangeAuth,
    placeholder: "Name"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: credentials.password,
    name: "password",
    onChange: handleChangeAuth,
    placeholder: "Password"
  }), /*#__PURE__*/React.createElement("input", {
    type: "submit",
    value: "Sign Up as New User"
  })));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById("app"));
root.render( /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/React.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null)));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.scss ***!
  \********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --offwhite: whitesmoke;
  --bg-blue: rgb(90, 7, 242);
  --bg-light: rgb(127, 105, 114);
  --text-blue: rgb(181, 49, 196);
  --text-light: rgb(177, 168, 206);
  --text-black: #161616;
}

body {
  margin: 0;
  padding: 1vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-dark);
  color: var(--text-black);
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  justify-content: center;
  align-items: center;
  width: 25%;
}

.KTmxx2sH00E53HXHCND1 {
  width: 100%;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.KTmxx2sH00E53HXHCND1 .WKlfm_QhEH6O353p7gRh {
  width: 50vw;
  max-height: 300px;
}
.KTmxx2sH00E53HXHCND1 h1 {
  width: 100%;
  text-align: center;
  color: rgba(23, 5, 58, 0.8);
  background-color: whitesmoke;
}
.KTmxx2sH00E53HXHCND1 .TtztygEzHlox4F5H2Le9 {
  background-color: whitesmoke;
}`, "",{"version":3,"sources":["webpack://./src/App.module.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;EACA,0BAAA;EACA,8BAAA;EACA,8BAAA;EACA,gCAAA;EACA,qBAAA;AACJ;;AAEA;EACI,SAAA;EACA,YAAA;EACA,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,gCAAA;EACA,wBAAA;AACJ;;AAEA;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AACJ;;AAEA;EACI,uBAAA;EACA,mBAAA;EACA,UAAA;AACJ;;AAEA;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,kBAAA;AACJ;AAAI;EACI,WAAA;EACA,iBAAA;AAER;AAAI;EACI,WAAA;EACA,kBAAA;EACA,2BAAA;EACA,4BAAA;AAER;AAAI;EACI,4BAAA;AAER","sourcesContent":[":root{\n    --offwhite: whitesmoke;\n    --bg-blue: rgb(90, 7, 242);\n    --bg-light: rgb(127, 105, 114);\n    --text-blue: rgb(181, 49, 196);\n    --text-light: rgb(177, 168, 206);\n    --text-black: #161616;\n}\n\nbody {\n    margin: 0;\n    padding: 1vw;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--bg-dark);\n    color: var(--text-black);\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nimg {\n    justify-content: center;\n    align-items: center;\n    width: 25%;\n}\n\n.banner{\n    width: 100%;\n    color: black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    text-align: center;\n    .img {\n        width: 50vw;\n        max-height: 300px;\n    }\n    h1 {\n        width: 100%;\n        text-align: center;\n        color: rgba(23,5, 58, 0.8);\n        background-color: whitesmoke;\n    }\n    .h2 {\n        background-color: whitesmoke;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"banner": `KTmxx2sH00E53HXHCND1`,
	"img": `WKlfm_QhEH6O353p7gRh`,
	"h2": `TtztygEzHlox4F5H2Le9`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Animal/Animal.module.scss":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Animal/Animal.module.scss ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `button {
  background-color: var(--bg-blue);
  color: var(--text-light);
  border-radius: 0.5vmin;
  margin: 1vmin;
  font-size: 2vmin;
  height: 3vmin;
}

a, a:visited, a:link {
  text-decoration: none;
  cursor: pointer;
  color: var(--text-blue);
}

li {
  text-decoration: none;
  list-style: none;
  background-color: var(--offwhite);
  border: 1px solid var(--text-blue);
  box-shadow: 4px 8px 16px var(--text-blue);
  display: flex;
  font-size: 1.5vmin;
  align-items: center;
  justify-content: space-between;
  padding: 1.5vmin;
}

.OmFmBVBjQGDKgfgnRdGt {
  border: solid 5px var(--bg-light);
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.OmFmBVBjQGDKgfgnRdGt .oLDiJlg0yBuKGjThTM9L {
  background-color: var(--bg-blue);
  text-transform: uppercase;
  cursor: grab;
  color: var(--text-light);
  padding: 0.25rem 1rem;
  font-size: 1rem;
  font-weight: 700;
  display: inline-block;
  margin: 1rem;
  margin-left: 1rem;
  border: 2px solid black;
  box-shadow: 0 2px 5px var(--bg-blue);
}
.OmFmBVBjQGDKgfgnRdGt .c9tMfQWhdAxbEc0oNUYK {
  color: black;
  padding: 1rem;
}`, "",{"version":3,"sources":["webpack://./src/components/Animal/Animal.module.scss"],"names":[],"mappings":"AAAA;EACI,gCAAA;EACA,wBAAA;EACA,sBAAA;EACA,aAAA;EACA,gBAAA;EACA,aAAA;AACJ;;AAEA;EACI,qBAAA;EACA,eAAA;EACA,uBAAA;AACJ;;AAEA;EACI,qBAAA;EACA,gBAAA;EACA,iCAAA;EACA,kCAAA;EACA,yCAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;EACA,8BAAA;EACA,gBAAA;AACJ;;AAEA;EACI,iCAAA;EACA,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;AACJ;AAAI;EACI,gCAAA;EACA,yBAAA;EACA,YAAA;EACA,wBAAA;EACA,qBAAA;EACA,eAAA;EACA,gBAAA;EACA,qBAAA;EACA,YAAA;EACA,iBAAA;EACA,uBAAA;EACA,oCAAA;AAER;AAAI;EACI,YAAA;EACA,aAAA;AAER","sourcesContent":["button {\n    background-color: var(--bg-blue);\n    color: var(--text-light);\n    border-radius: .5vmin;\n    margin: 1vmin;\n    font-size: 2vmin;\n    height: 3vmin;\n}\n\na, a:visited, a:link {\n    text-decoration: none;\n    cursor: pointer;\n    color: var(--text-blue);\n}\n\nli {\n    text-decoration: none;\n    list-style: none;\n    background-color: var(--offwhite);\n    border: 1px solid var(--text-blue);\n    box-shadow: 4px 8px 16px var(--text-blue);\n    display: flex;\n    font-size: 1.5vmin;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1.5vmin;\n}\n\n.animal {\n    border: solid 5px var(--bg-light);\n    font-size: 1.5rem;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    .button {\n        background-color: var(--bg-blue);\n        text-transform: uppercase;\n        cursor: grab;\n        color: var(--text-light);\n        padding: .25rem 1rem;\n        font-size: 1rem;\n        font-weight: 700;\n        display: inline-block;\n        margin: 1rem;\n        margin-left: 1rem;\n        border: 2px solid black;\n        box-shadow: 0 2px 5px var(--bg-blue);\n    }\n    .link {\n        color: black;\n        padding: 1rem;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"animal": `OmFmBVBjQGDKgfgnRdGt`,
	"button": `oLDiJlg0yBuKGjThTM9L`,
	"link": `c9tMfQWhdAxbEc0oNUYK`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/AnimalsList/AnimalsList.module.scss":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/AnimalsList/AnimalsList.module.scss ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.sgoFJuZD52mJH_e183yU {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: var(--text-black);
  background-color: var(--bg-light);
  border-radius: 5%;
  border: 1px solid var(--text-black);
  padding: 20px;
  margin: 20px;
  box-shadow: 2px 4px 8px var(--bg-blue);
}
.sgoFJuZD52mJH_e183yU .dUfwJcpiqlvUFGTJM5bf {
  color: var(--text-blue);
  display: inline-block;
  font-size: 2.5rem;
  margin: 3rem;
  border: 0;
  background-color: var(--offwhite);
  align-items: right;
  justify-content: right;
  text-align: right;
}`, "",{"version":3,"sources":["webpack://./src/components/AnimalsList/AnimalsList.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,wBAAA;EACA,iCAAA;EACA,iBAAA;EACA,mCAAA;EACA,aAAA;EACA,YAAA;EACA,sCAAA;AACJ;AAAI;EACI,uBAAA;EACA,qBAAA;EACA,iBAAA;EACA,YAAA;EACA,SAAA;EACA,iCAAA;EACA,kBAAA;EACA,sBAAA;EACA,iBAAA;AAER","sourcesContent":[".animalList {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    color: var(--text-black);\n    background-color: var(--bg-light);\n    border-radius: 5%;\n    border: 1px solid var(--text-black);\n    padding: 20px;\n    margin: 20px;\n    box-shadow: 2px 4px 8px var(--bg-blue);\n    .input {\n        color: var(--text-blue);\n        display: inline-block;\n        font-size: 2.5rem;\n        margin: 3rem;\n        border: 0;\n        background-color: var(--offwhite);\n        align-items: right;\n        justify-content: right;\n        text-align: right;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"animalList": `sgoFJuZD52mJH_e183yU`,
	"input": `dUfwJcpiqlvUFGTJM5bf`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Auth/Auth.module.scss":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Auth/Auth.module.scss ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.UhNDaS6ukZ19AIax4ZjN {
  background-color: var(--bg-blue);
  color: var(--text-light);
  font-size: 2.5rem;
  border-radius: 5%;
  text-align: center;
}

.teRb0vp2dOtwO_9DnYOs {
  background-color: var(--bg-blue);
  color: var(--text--light);
  font-size: 2.5rem;
  min-height: 10rem;
  border-radius: 5%;
  text-align: center;
  display: block;
  margin: 0 auto;
}

.teRb0vp2dOtwO_9DnYOs:hover {
  background-color: var(--bg-light);
  color: var(--text-blue);
  cursor: grab;
}`, "",{"version":3,"sources":["webpack://./src/components/Auth/Auth.module.scss"],"names":[],"mappings":"AAAA;EACI,gCAAA;EACA,wBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;AACJ;;AAEA;EACI,gCAAA;EACA,yBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;EACA,cAAA;AACJ;;AAEA;EACI,iCAAA;EACA,uBAAA;EACA,YAAA;AACJ","sourcesContent":[".h1{\n    background-color: var(--bg-blue);\n    color: var(--text-light);\n    font-size: 2.5rem;\n    border-radius: 5%;;\n    text-align: center;\n}\n\n.button {\n    background-color: var(--bg-blue);\n    color: var(--text--light);\n    font-size: 2.5rem;\n    min-height: 10rem;\n    border-radius: 5%;\n    text-align: center;\n    display: block;\n    margin: 0 auto;\n}\n\n.button:hover{\n    background-color: var(--bg-light);\n    color: var(--text-blue);\n    cursor: grab;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"h1": `UhNDaS6ukZ19AIax4ZjN`,
	"button": `teRb0vp2dOtwO_9DnYOs`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/CreateAnimal/CreateAnimal.module.scss":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/CreateAnimal/CreateAnimal.module.scss ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.bWI9uGavqU5iJ7bi5G5e {
  align-self: center;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1.25vmin;
  color: var(--text-black);
  min-height: 8min;
}
.bWI9uGavqU5iJ7bi5G5e label {
  font-size: 2vmin;
  display: flex;
  align-items: center;
}
.bWI9uGavqU5iJ7bi5G5e div {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.bWI9uGavqU5iJ7bi5G5e input {
  padding: 1vmin;
  font-size: 2vmin;
  border: 0.1vmin solid var(--bg-light);
}
.bWI9uGavqU5iJ7bi5G5e .jQHtI3dvxZc96QRBrmVP {
  margin: 1vmin;
  padding: 1vmin;
  color: var(--offwhite);
  background-color: var(--text-blue);
  min-height: 4rem;
}

h2 {
  text-align: center;
  color: var(--text-blue);
  background-color: var(--bg-light);
  font-size: 2rem;
}

.CkbgmcMZF15DNKpQgYMX {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}`, "",{"version":3,"sources":["webpack://./src/components/CreateAnimal/CreateAnimal.module.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,aAAA;EACA,8BAAA;EACA,aAAA;EACA,wBAAA;EACA,gBAAA;AACJ;AAAQ;EACI,gBAAA;EACA,aAAA;EACA,mBAAA;AAEZ;AAAQ;EACI,aAAA;EACA,6BAAA;EACA,mBAAA;AAEZ;AAAQ;EACI,cAAA;EACA,gBAAA;EACA,qCAAA;AAEZ;AAAQ;EACI,aAAA;EACA,cAAA;EACA,sBAAA;EACA,kCAAA;EACA,gBAAA;AAEZ;;AAEA;EACI,kBAAA;EACA,uBAAA;EACA,iCAAA;EACA,eAAA;AACJ;;AAEA;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AACJ","sourcesContent":[".form {\n    align-self: center;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    gap: 1.25vmin;\n    color: var(--text-black);\n    min-height: 8min;\n        label{\n            font-size: 2vmin;\n            display: flex;\n            align-items: center;\n        }\n        div {\n            display: flex;\n            justify-content: space-around;\n            align-items: center;\n        }\n        input {\n            padding: 1vmin;\n            font-size: 2vmin;\n            border: .1vmin solid var(--bg-light);\n        }\n        .button {\n            margin: 1vmin;\n            padding: 1vmin;\n            color: var(--offwhite);\n            background-color: var(--text-blue);\n            min-height: 4rem;\n        }\n}\n\nh2 {\n    text-align: center;\n    color: var(--text-blue);\n    background-color: var(--bg-light);\n    font-size: 2rem;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"form": `bWI9uGavqU5iJ7bi5G5e`,
	"button": `jQHtI3dvxZc96QRBrmVP`,
	"container": `CkbgmcMZF15DNKpQgYMX`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Searchbar/Searchbar.module.scss":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Searchbar/Searchbar.module.scss ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.module.scss":
/*!*****************************!*\
  !*** ./src/App.module.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../node_modules/sass-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./App.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Animal/Animal.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Animal/Animal.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Animal_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Animal.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Animal/Animal.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Animal_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Animal_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Animal_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Animal_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/AnimalsList/AnimalsList.module.scss":
/*!************************************************************!*\
  !*** ./src/components/AnimalsList/AnimalsList.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AnimalsList_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./AnimalsList.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/AnimalsList/AnimalsList.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AnimalsList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AnimalsList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AnimalsList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AnimalsList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Auth/Auth.module.scss":
/*!**********************************************!*\
  !*** ./src/components/Auth/Auth.module.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Auth_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Auth.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Auth/Auth.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Auth_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Auth_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Auth_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Auth_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/CreateAnimal/CreateAnimal.module.scss":
/*!**************************************************************!*\
  !*** ./src/components/CreateAnimal/CreateAnimal.module.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_CreateAnimal_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./CreateAnimal.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/CreateAnimal/CreateAnimal.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_CreateAnimal_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_CreateAnimal_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_CreateAnimal_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_CreateAnimal_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Searchbar/Searchbar.module.scss":
/*!********************************************************!*\
  !*** ./src/components/Searchbar/Searchbar.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Searchbar_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Searchbar.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Searchbar/Searchbar.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Searchbar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Searchbar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Searchbar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Searchbar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"App": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbig_poppa_code_react_starter_kit"] = self["webpackChunkbig_poppa_code_react_starter_kit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-0ab90a"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=App.0c2401db2c85a8d9187d7c8bfef1039b.js.map