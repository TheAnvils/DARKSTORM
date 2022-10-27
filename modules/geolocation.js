const ipInfo = require("ipinfo");
console.log('Hello from ipinfo');
exports.locate = function(ip) {
    ipInfo(ip, process.env.TOKEN).then(cLoc => {
        console.log(cLoc)
    }).catch(console.error);
}