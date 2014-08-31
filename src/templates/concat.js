var fs = require('fs');
var path = require('path')
var total = {}
dirList = fs.readdirSync(__dirname);
for (var i in dirList) {
    if (dirList[i].indexOf('.html') > -1) total[dirList[i].slice(0, -5)] = fs.readFileSync(path.join(__dirname, dirList[i])).toString();
}

fs.writeFileSync(__dirname + "/bootstrap_components.js", "var components = " + JSON.stringify(total) + ';')
