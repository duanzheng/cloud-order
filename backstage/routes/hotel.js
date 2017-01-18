var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/insertHotel', function(req, res, next) {
    var ret = {};

    if (true) {
        models.hotel.create({
            'name': '七里云庭酒店',
            'address': '测试地址123',
            'phone': 13888888888
        }).then(function (newHotel) {
            var newHotelMsg = newHotel.get({
                plain: true
            });
            console.log(newHotelMsg);
            ret.error = 0;
            ret.msg = newHotelMsg;
            res.json(ret);
        });
    } else {
        ret.error = 1;
        ret.msg = '请输入酒店信息';
        res.json(ret);
    }
});

module.exports = router;