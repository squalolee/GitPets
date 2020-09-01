const key = process.env.key;
const secret = process.env.secret;
let token = '';
const { exec } = require('child_process');

module.exports = function (app) {

    app.post("/api/", function (req, res) {
        console.log("hi");

        exec(`curl -d "grant_type=client_credentials&client_id=${key}&client_secret=${secret}" https://api.petfinder.com/v2/oauth2/token`, (err, stdout, stderr) => {
            if (err) {
                console.log(err);
                return;
            }
            token = JSON.parse(stdout).access_token;
            console.log(token);
            exec(`curl -H "Authorization: Bearer ${token}" GET https://api.petfinder.com/v2/animals?pet=${req.body.pet}&breed=${req.body.breed}&location=${req.body.location}&range=${req.body.range}&gender=${req.body.gender}&age=${req.body.age}&size=${req.body.size}`, (err, stdout, stderr) => {
                if (err) {
                    console.log(err);
                    return;
                }
                res.send(JSON.parse(stdout));
            });
        });


    });

}


