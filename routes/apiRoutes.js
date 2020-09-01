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
            exec(`curl -H "Authorization: Bearer ${token}" GET https://api.petfinder.com/v2/animals?type=${req.body.type}&age=${req.body.age}&gender=${req.body.gender}`, (err, stdout, stderr) => {
                if (err) {
                    console.log(err);
                    return;
                }
                res.send(JSON.parse(stdout));
            });
        });


    });

}


