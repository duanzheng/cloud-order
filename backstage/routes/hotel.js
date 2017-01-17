"use strict";

var express = require('express');
var router = express.Router();
var models = require('../models');
var co = require('co');

router.get('/insertHotel', function(req, res, next) {
    let ret = {},
        error = 0,
        msg = '';

    if (true) {
        co(function* () {
            let newHotel = models.hotel.build({
                'name': '七里云庭酒店',
                'address': '测试地址112312313',
                'phone': 138888888888
            });
            newHotel = yield newHotel.save();
            ret.msg = newHotel.get({'plain': true});
        }).catch(function (e) {
            console.log(e);
        });
    } else {
        ret.error = 1;
        ret.msg = '请输入酒店信息';
    }
    console.log(req.query);
    res.json(ret);
});

module.exports = router;