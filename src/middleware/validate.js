const functionValidate = {
  validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  },

  /**
   * Hàm convert từ dateTime to age
   * @param {*} dob
   * @returns
   */
  calculatAge(dob) {
    const dateNew = new Date(dob);
    var diff_ms = Date.now() - dateNew.getTime();
    var age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  },

  /**
   * Hàm convert lat/long  to location km
   * @param {*} latAdmin
   * @param {*} longAdmin
   * @param {*} latUser
   * @param {*} longUser
   * @param {*} unit
   * @returns
   */
  convertDistance(latAdmin, longAdmin, latUser, longUser, unit) {
    var radlatAdmin = (Math.PI * latAdmin) / 180;
    var radlatUser = (Math.PI * latUser) / 180;
    var theta = longAdmin - longUser;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlatAdmin) * Math.sin(radlatUser) +
      Math.cos(radlatAdmin) * Math.cos(radlatUser) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") {
      dist = dist * 1.609344;
    }
    if (unit == "N") {
      dist = dist * 0.8684;
    }
    return dist;
  },
};

export default functionValidate;
