const AdmZip = require("adm-zip");

var nodemailer = require('nodemailer');
const fs = require('fs')

async function createZipArchive() {
    const zip = new AdmZip();
    const outputFile = "html-reports.zip";
    zip.addLocalFolder("./cypress/reports/html");
    zip.writeZip(outputFile);
    console.log(`Created ${outputFile} successfully`);
}

var transporter = nodemailer.createTransport({ // config mail server
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'vulong.2662@gmail.com',
        pass: 'jjkhanrrjgglnkum'
    }
});

const path = require("path")

const getAllFiles = function(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath)
  
    arrayOfFiles = arrayOfFiles || []
  
    files.forEach(function(file) {
      if (fs.statSync(dirPath + "/" + file).isDirectory()) {
        arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
      } else {
        arrayOfFiles.push(path.join(__dirname, dirPath, "/", file))
      }
    })
  
    return arrayOfFiles
  }

const files = getAllFiles('./cypress/reports/html')
var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
    from: 'vulong265',
    to: 'je31828@lyqmeu.xyz',
    subject: 'Test Nodemailer',
    text: 'You recieved message from ',
    attachments: files.map((v, i)=>{
        return {
            filename: v,
            path: v
        }
    }),
    html: '<p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>'
}

transporter.sendMail(mainOptions, function (err, info) {
    console.log(info);
    console.log(
        err
    );
});