const express = require("express"),
    app = express(),
    port = 4201,
    send= (res, data, code=200)=>{
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(code);
        res.json(data);
    },
    getData= (slug) => {
        try {
            data = require('./'+ slug);
            code = 200;
        }catch (e) {
            data = {message: "not found code"}
            code = 404;
        }

        return {data, code}
    }


app.get("/api/v:version/all", (req, res, next) => {
    let data;

    data = getData('all');
    send(res, data.data, data.code);
});

app.get("/api/v:version/:module/:code", (req, res, next) => {
    let data, code;

    data = getData(req.params.module + '/' + req.params.code);
    send(res, data.data, data.code);
});

app.use((req, res) => {
    send(res, {message: "not found endpoint"}, 404);
});

app.listen(port, () => {
    console.log("Server running on port " + port);
});