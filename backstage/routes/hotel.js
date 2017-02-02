var express = require('express');
var router = express.Router();
var models = require('../models');
var co = require('co');

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

//查询酒店信息
router.get('/getHotelInfo', function(req, res, next) {
    var hotelId = req.query.id;
    if (hotelId) {
        co(function* () {
            var hotel = yield models.hotel.findAll({
                'where': {
                    'id': hotelId
                }
            });
            if (hotel.length > 0) {
                res.json({
                    error: 0,
                    msg: hotel
                });
            } else {
                res.json({
                    error: 1,
                    msg: '没有该酒店信息'
                });
            }
        }).catch(function (e) {
            console.log(e);
        });
    } else {
        res.json({
            error: 1,
            msg: '缺少参数'
        });
    }
});

module.exports = router;