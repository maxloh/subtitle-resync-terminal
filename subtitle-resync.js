const fs = require('fs');
const chardet = require('chardet');
const { parse, stringify, resync } = require('subtitle');

fs.readFile(process.argv[2], (err, data) => {
    let subtitles = parse(data.toString(chardet.detect(data)));
    let newSubtitles = resync(subtitles, parseInt(process.argv[3]));

    let fileName = process.argv[2].substring(0, process.argv[2].lastIndexOf('.'));
    let fileExtension = process.argv[2].substring(process.argv[2].lastIndexOf('.'));
    fs.writeFile(fileName + '-resync' + fileExtension, stringify(newSubtitles), (err) => { if (err) throw err; });
});