import { http_request } from "../../configs/http-host";
import { http_mongo } from "../../configs/http-mongo";

const state = {
  // Thông tin của user
  user_profile: {
    profiles: {
      avatars: [],
      about: "",
      zodiac: "",
      pet: "",
      smoking: "",
      education: "",
      university: "",
      company: "",
      jobTitle: "",
      gender: "",
      showGender: false,
      orientationSexuals: [],
      showSexual: false,
      interests: [],
      favoriteSongs: [],
      address: "",
      showAge: false,
      showDistance: false,
    },
    settings: {
      distancePreference: {
        range: 10,
        unit: "km",
        onlyShowInThis: false,
      },
      agePreference: {
        min: 15,
        max: 30,
        onlyShowInThis: false,
      },
      showOnlineStatus: false,
      showActiveStatus: false,
      autoPlayVideo: "no",
      notiSeenMsg: false,
      genderShowMe: "",
      showMePersonLikeMe: false,
      global: false,
      incognitoMode: false,
    },
    verifyStatus: false,
    coins: 0,
    numberBooster: 0,
    numberSuperLike: 0,
    numberNotiSeenMsg: 0,
  },
  isCheckBox: false,
  listSexuals: [],
  listInterests: [],
  isActiveId: false,

  userProfileDetail: {
    gender: 0,
  },
  urlAvatarUser: "",
  userProfileList: [],

  listZodiacs: {},

  listEducations: {},
  listPersonalitys: {},
  listDietaryPreferences: {},
  listPets: {},
  listSmokes: {},
  listFavoritePet: {},

  keyZodiac: "",

  lifeStyle: {},
  // Mongo
  detailProfile: {},
  avatarChecked: [],

  profileLife: {
    zodiac: "",
    education: "",
    personality: "",
    dietaryPreference: "",
    pet: "",
    smoking: "",
  },
};

const getters = {
  showAge: (state) => {
    debugger;
    return state.user_profile.profiles.showAge;
  },
  showDistance: (state) => {
    debugger;
    return state.user_profile.profiles.showDistance;
  },

  showGlobal: (state) => {
    debugger;
    return state.user_profile.settings.global;
  },

  showPeopleDistance: (state) => {
    return state.user_profile.settings.distancePreference.onlyShowInThis;
  },

  showAgePreference: (state) => {
    return state.user_profile.settings.agePreference.onlyShowInThis;
  },
};

const actions = {
  /**
   * API lấy chi tiết thông tin theo Authorization
   * @param {*} param0
   * @param {*} data
   */
  async getDetailProfileByAuthorization({ commit }, data) {
    await http_mongo
      .get(`api/v1/profile`, data)
      .then((response) => {
        commit("setDetailProfileAuth_Mongo", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  /**
   * API thêm thông tin của user
   * @param {*} param
   * @param {*} data
   */
  async postInforUserProfile({ commit }, data) {
    await http_request
      .post(`user/v1/create-one/${data.userId}`, data)
      .then((response) => {
        commit("setUserProfiles", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  // Lấy danh sách user
  async getAllListUserProfile({ commit }, data) {
    const userId = data.userId;
    const latitude = data.latitude;
    const longitude = data.longitude;
    const page = data.page;
    const pageNumber = data.pageNumber;
    const startAge = data.startAge;
    const endAge = data.endAge;
    const showMeGender = data.showMeGender;
    const location = data.location;

    await http_request
      .post(
        `home/v1/profile?userId=${userId}&latitude=${latitude}&longitude=${longitude}&page=${page}&pageNumber=${pageNumber}&startAge=${startAge}&endAge=${endAge}&showMeGender=${showMeGender}&location=${location}`
      )
      .then((response) => {
        commit("setListUserProfiles", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  // Lấy chi tiết thông tin user

  async getDetailInforUser({ commit }, data) {
    await http_request
      .get(
        `user/v1/get-detail/${data.userId}/en?latitude=${data.latitude}&longitude=${data.longitude}`
      )
      .then((response) => {
        commit("setDetailUserProfile", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  /**
   * Lấy danh sách sexuals trong Database
   * @param {*} param0
   * @param {*} param1
   */
  async getListDataSexuals({ commit }, { entityName, entityId }) {
    await http_request
      .get(`base/v1/get-detail?entityName=${entityName}&entityId=${entityId}`)
      .then((response) => {
        commit("setListDataSexuals", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  /**
   * Lấy danh sách interests trong Database
   * @param {*} param0
   * @param {*} param1
   */
  async getListDataInterests({ commit }, { entityName, entityId }) {
    await http_request
      .get(`base/v1/get-detail?entityName=${entityName}&entityId=${entityId}`)
      .then((response) => {
        commit("setListDataInterests", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  // Life style

  async getDataZodiacs({ commit }, { entityName, entityId }) {
    await http_request
      .get(`base/v1/get-detail?entityName=${entityName}&entityId=${entityId}`)
      .then((response) => {
        commit("setDataZodiacs", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  async getDataEducations({ commit }, { entityName, entityId }) {
    await http_request
      .get(`base/v1/get-detail?entityName=${entityName}&entityId=${entityId}`)
      .then((response) => {
        commit("setDataEducations", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  async getDataPreferences({ commit }, { entityName, entityId }) {
    await http_request
      .get(`base/v1/get-detail?entityName=${entityName}&entityId=${entityId}`)
      .then((response) => {
        commit("setDataPreferences", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  async getDataPersonalitys({ commit }, { entityName, entityId }) {
    await http_request
      .get(`base/v1/get-detail?entityName=${entityName}&entityId=${entityId}`)
      .then((response) => {
        commit("setDataPersonalitys", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  async getDataPets({ commit }, { entityName, entityId }) {
    await http_request
      .get(`base/v1/get-detail?entityName=${entityName}&entityId=${entityId}`)
      .then((response) => {
        commit("setDataPets", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  async getDataSmokes({ commit }, { entityName, entityId }) {
    await http_request
      .get(`base/v1/get-detail?entityName=${entityName}&entityId=${entityId}`)
      .then((response) => {
        commit("setDataSmokes", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  async getFavoritePet({ commit }, { entityName, entityId }) {
    await http_request
      .get(`base/v1/get-detail?entityName=${entityName}&entityId=${entityId}`)
      .then((response) => {
        commit("setListFavoritePet", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

const mutations = {
  /**
   * Xét giá trị cho user_profile khi gọi API detail
   * @param {*} state
   * @param {*} data
   */
  setDetailProfileAuth_Mongo(state, data) {
    state.detailProfile = data;
    debugger;
    for (let index = 0; index < data.profiles.avatars.length; index++) {
      const element = data.profiles.avatars[index];

      const indexBody = {
        id: index,
        url: element,
      };
      state.avatarChecked.push(indexBody);
    }
    debugger;
    (state.user_profile.dob = data.dob),
      (state.user_profile.email = data.email),
      (state.user_profile.fullname = data.fullname),
      (state.user_profile.verifyStatus = data.verifyStatus),
      (state.user_profile.location = data.location),
      (state.user_profile.coins = data.coins),
      (state.user_profile.numberBooster = data.numberBooster),
      (state.user_profile.numberSuperLike = data.numberSuperLike),
      (state.user_profile.numberNotiSeenMsg = data.numberNotiSeenMsg),
      // user profile
      (state.user_profile.profiles = {
        ...state.user_profile.profiles,
        ...data.profiles,
      });
    // setting
    state.user_profile.settings = {
      ...state.user_profile.settings,
      ...data.settings,
    };

    debugger;
    const findZodiac = this.state.commonModule.listLifeStyle.zodiacs.find(
      (x) => x.code === data.profiles.zodiac
    );
    const findEducation = this.state.commonModule.listLifeStyle.educations.find(
      (x) => x.code === data.profiles.education
    );
    const findPersonality =
      this.state.commonModule.listLifeStyle.personalities.find(
        (x) => x.code === data.profiles.personality
      );
    const findDietaryPreference =
      this.state.commonModule.listLifeStyle.foodPreferences.find(
        (x) => x.code === data.profiles.dietaryPreference
      );
    const findPet = this.state.commonModule.listLifeStyle.pets.find(
      (x) => x.code === data.profiles.pet
    );
    const findSmoking = this.state.commonModule.listLifeStyle.smokes.find(
      (x) => x.code === data.profiles.smoking
    );

    console.log(findZodiac.value);
    (state.profileLife.zodiac = findZodiac.value),
      (state.profileLife.education = findEducation.value),
      (state.profileLife.personality = findPersonality.value),
      (state.profileLife.dietaryPreference = findDietaryPreference.value),
      (state.profileLife.pet = findPet.value),
      (state.profileLife.smoking = findSmoking.value);
  },

  /**
   * Xét giá trị OAuth2Id
   * @param {*} state
   * @param {*} oAuth2Id
   */
  setOAuth2Id(state, oAuth2Id) {
    state.user_profile.oAuth2Id = oAuth2Id;
    localStorage.setItem("oAuth2Id", oAuth2Id);
  },

  /**
   * Xét giá trị firstName
   * @param {*} state
   * @param {*} firstName
   */
  setFirstName(state, firstName) {
    state.user_profile.fullname = firstName;
  },

  /**
   * Xét giá trị email
   * @param {*} state
   * @param {*} email
   */
  setEmailForUser(state, email) {
    state.user_profile.email = email;
  },

  /**
   * Xét giá trị birthday
   * @param {*} state
   * @param {*} birthday
   */
  setBirthday(state, birthday) {
    state.user_profile.dob = birthday;
  },

  /**
   * Xét giá trị about
   * @param {*} state
   * @param {*} value
   */
  setAbout(state, value) {
    state.user_profile.profiles.about = value;
  },

  /**
   * Xét giá trị gender
   * @param {*} state
   * @param {*} gender
   */
  setGender(state, gender) {
    state.user_profile.profiles.gender = gender;
  },

  /**
   * Xét giá trị ẩn/hiện độ tuổi
   * @param {*} state
   * @param {*} value
   */
  setShowAge(state, value) {
    debugger;
    state.user_profile.profiles.showAge = value;
  },

  /**
   * Xét giá trị ẩn/hiện khoảng cách
   * @param {*} state
   * @param {*} value
   */
  setShowDistance(state, value) {
    state.user_profile.profiles.showDistance = value;
  },

  /**
   * Xét giá trị ẩn/hiện toàn cầu
   * @param {*} state
   * @param {*} value
   */
  setShowGlobal(state, value) {
    debugger;
    state.user_profile.settings.global = value;
  },

  setPeopleDistance(state, value) {
    state.user_profile.settings.distancePreference.onlyShowInThis = value;
  },
  setAgePreference(state, value) {
    state.user_profile.settings.agePreference.onlyShowInThis = value;
  },
  /**
   * Xét giá trị value distance
   * @param {*} state
   * @param {*} value
   */
  setValueDistance(state, value) {
    debugger;
    state.user_profile.settings.distancePreference.range = value;
  },

  setValueAgeRange(state, value) {
    state.user_profile.settings.agePreference.min = value[0];
    state.user_profile.settings.agePreference.max = value[1];
    debugger;
  },

  /**
   * Xét giá trị orientationSexuals
   * @param {*} state
   * @param {*} sexual
   */
  setSexuals(state, sexuals) {
    debugger;
    const index =
      state.user_profile.profiles.orientationSexuals.indexOf(sexuals);
    if (index > -1) {
      // only splice array when item is found
      state.user_profile.profiles.orientationSexuals.splice(index, 1);
      state.isCheckBox = false;
      // 2nd parameter means remove one item only
    } else {
      if (state.user_profile.profiles.orientationSexuals.length < 3) {
        state.user_profile.profiles.orientationSexuals.push(sexuals);
      } else {
        state.isCheckBox = true;
      }
    }
  },

  /**
   * Xét giá trị show gender hiển thị đối tượng
   * @param {*} state
   * @param {*} gender
   */
  setShowGender(state, showGender) {
    state.user_profile.settings.genderShowMe = showGender;
  },

  setShowStatusGender(state, value) {
    state.user_profile.profiles.showGender = value;
  },

  setShowStatusSexual(state, value) {
    state.user_profile.profiles.showSexual = value;
  },

  setAddressLocation(state, data) {
    state.user_profile.profiles.address = data;
  },

  /**
   * Xét giá trị ảnh của user
   * @param {*} state
   * @param {*} interest
   */
  setInterest(state, interests) {
    const index = state.user_profile.profiles.interests.indexOf(interests);
    if (index > -1) {
      // only splice array when item is found
      state.user_profile.profiles.interests.splice(index, 1); // 2nd parameter means remove one item only
      state.isActiveId = false;
    } else {
      if (state.user_profile.profiles.interests.length < 5) {
        state.user_profile.profiles.interests.push(interests);
        state.isActiveId = true;
      } else {
        state.isActiveId = false;
      }
    }
  },

  setListInterests(state, data) {
    debugger;
    state.user_profile.profiles.interests = data;
  },

  /**
   * Xét giá trị ảnh của user
   * @param {*} state
   * @param {*} photos
   */
  setPhotos(state, photos) {
    const idUrl = photos.id;
    const index = state.avatarChecked.findIndex((x) => x.id === idUrl);
    if (index !== -1) {
      // only splice array when item is found
      state.avatarChecked.splice(index, 1); // 2nd parameter means remove one item only
    } else {
      debugger;
      state.avatarChecked.push(photos);
      state.user_profile.profiles.avatars.push(photos.url);
    }
  },

  /**
   * Xét giá trị location cho user
   * @param {*} state
   * @param {*} location
   */
  setLocation(state, location) {
    state.user_profile.location = {
      lat: location.latitude,
      long: location.longitude,
    };

    localStorage.setItem("latitude", location.latitude);
    localStorage.setItem("longitude", location.longitude);
  },

  setLifeStyleUser(state, data) {
    state.user_profile.profiles = {
      ...state.user_profile.profiles,
      ...data,
    };
  },

  /**
   * Xét giá trị cho jobTitle
   * @param {*} state
   * @param {*} value
   */
  setJobTitle(state, value) {
    state.user_profile.profiles.jobTitle = value;
  },

  /**
   * Xét giá trị cho university
   * @param {*} state
   * @param {*} value
   */
  setSchool(state, value) {
    state.user_profile.profiles.university = value;
  },

  /**
   * Xét giá trị cho address
   * @param {*} state
   * @param {*} value
   */
  setAddress(state, value) {
    state.user_profile.address = value;
  },

  /**
   * Xét giá trị cho list sexuals
   * @param {*} state
   * @param {*} data
   */
  setListDataSexuals(state, data) {
    state.listSexuals = data;
  },

  /**
   * Xét giá trị cho list interest
   * @param {*} state
   * @param {*} data
   */
  setListDataInterests(state, data) {
    state.listInterests = data;
  },

  setListUserProfiles(state, data) {
    state.userProfileList = data;
  },

  setDetailUserProfile(state, data) {
    state.userProfileDetail = data;
  },

  setUrlNameAvatarUser(state, data) {
    state.urlAvatarUser = data;
  },

  setLeftRighAvatar(state, data) {
    if (data === true) {
      const idNew = parseInt(state.urlAvatarUser.id) + 1;
      if (idNew < state.userProfileDetail.avatars.length) {
        const findValue = state.userProfileDetail.avatars.find(
          (x) => parseInt(x.id) === parseInt(idNew)
        );
        state.urlAvatarUser = findValue;
      }
    } else {
      if (state.urlAvatarUser.id === 0) {
        // Ko cho next
        state.urlAvatarUser = data.avatars[0];
      } else {
        const idNew = parseInt(state.urlAvatarUser.id) - 1;
        const findValue = state.userProfileDetail.avatars.find(
          (x) => parseInt(x.id) === parseInt(idNew)
        );
        state.urlAvatarUser = findValue;
      }
    }
  },

  setLeftRightAvatar(state, data) {
    const index = data.listImages.findIndex((x) => x === data.idImage);
    if (index !== -1) {
      if (data.statusNext === true) {
        const indexNew = parseInt(index) + 1;

        state.urlAvatarUser = {
          idUrl: indexNew,
          urlName: data.listImages[indexNew],
        };
      } else {
        if (data.idImage === 0) {
          // Ko cho next
          state.urlAvatarUser = {
            idUrl: data.idImage,
            urlName: data.listImages[0],
          };
        } else {
          const indexNew = parseInt(index) - 1;

          state.urlAvatarUser = {
            idUrl: indexNew,
            urlName: data.listImages[indexNew],
          };
        }
      }
    }
  },

  setSkipProfiles(state, data) {
    if (data === 3) {
      state.user_profile.profiles.sexuals = [];
    }
    if (data === 4) {
      state.user_profile.profiles.interests = [];
    }

    if (data === 4) {
      state.user_profile.profiles.avatars = [];
    }
  },

  // life

  setDataZodiacs(state, data) {
    state.listZodiacs = data;
  },

  setDataEducations(state, data) {
    state.listEducations = data;
  },

  setDataPreferences(state, data) {
    state.listDietaryPreferences = data;
  },

  setDataPersonalitys(state, data) {
    state.listPersonalitys = data;
  },

  setDataPets(state, data) {
    state.listPets = data;
  },

  setDataSmokes(state, data) {
    state.listSmokes = data;
  },

  setListFavoritePet(state, data) {
    state.listFavoritePet = data;
  },

  setLifeStyle(state, data) {
    // Object.assign(lifeStyle, { data })
    debugger;
    state.lifeStyle = { ...state.lifeStyle, ...data };
    debugger;
  },
  /**
   * Xét giá trị cho Zodiac
   * @param {*} state
   * @param {*} value
   */
  setZodiac(state, value) {
    debugger;
    state.profileLife.zodiac = value.value;
    state.user_profile.profiles.zodiac = value.code;
  },

  /**
   * Xét giá trị cho Education
   * @param {*} state
   * @param {*} value
   */
  setEducation(state, value) {
    state.profileLife.education = value.value;
    state.user_profile.profiles.education = value.code;
  },

  /**
   * Xét giá trị cho Personality
   * @param {*} state
   * @param {*} value
   */
  setPersonality(state, value) {
    state.profileLife.personality = value.value;
    state.user_profile.profiles.personality = value.code;
  },

  /**
   * Xét giá trị cho Smoke
   * @param {*} state
   * @param {*} value
   */
  setSmoke(state, value) {
    state.profileLife.smoking = value.value;
    state.user_profile.profiles.smoking = value.code;
  },

  /**
   * Xét giá trị cho Preferences
   * @param {*} state
   * @param {*} value
   */
  setPreferences(state, value) {
    state.profileLife.dietaryPreference = value.value;
    state.user_profile.profiles.dietaryPreference = value.code;
  },

  /**
   * Xét giá trị cho Pets
   * @param {*} state
   * @param {*} value
   */
  setFavoritePets(state, value) {
    state.profileLife.pet = value.value;
    state.user_profile.profiles.pet = value.code;
  },

  setShowGenderSetting(state, data) {
    state.user_profile.gender = data;
  },
};

export default {
  state,

  getters,

  actions,

  mutations,
};
