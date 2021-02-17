const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  // other next config
  disable:true,// process.env.NODE_ENV === "development",
  pwa: {
    dest: "public",
    runtimeCaching,
  },
});
