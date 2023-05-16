const AdmZip = require("adm-zip");

var nodemailer =  require('nodemailer');

async function createZipArchive() {
    const zip = new AdmZip();
    const outputFile = "html-reports.zip";
    zip.addLocalFolder("./cypress/reports/html");
    zip.writeZip(outputFile);
    console.log(`Created ${outputFile} successfully`);
}

createZipArchive()

var transporter =  nodemailer.createTransport({ // config mail server
    service: 'Gmail',
    auth: {
        user: 'vulong.2662@gmail.com',
        pass: 'VULONGLONG'
    }
});

var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
    from: 'vulong265',
    to: 'je31828@lyqmeu.xyz',
    subject: 'Test Nodemailer',
    text: 'You recieved message from ' + req.body.email,
    attachments: [
        {
            filename: 'report.zip',
            path: './html-reports.zip'
        }
    ],
    html: '<p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>'
}

transporter.sendMail(mainOptions, function(err, info){
    console.log(info)
    console.log(err)
});