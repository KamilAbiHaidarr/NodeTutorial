//THE OS MODULE
const os = require('os')
// info about the current user
const userInfo = os.userInfo()
console.log(userInfo)

const upTime = os.uptime()
console.log(upTime)

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}
console.log(currentOS)
