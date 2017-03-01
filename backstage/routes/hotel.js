var express = require('express');
var router = express.Router();
var models = require('../models');
var co = require('co');

router.post('/insertHotel', function(req, res, next) {
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
router.post('/getHotelInfo', function(req, res, next) {
    var hotelId = req.body.id;
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

router.get('/getCurOrders', function (req, res, next) {
    var ret = {
        error: 0,
        msg: [{
            id: 1,
            beginDate: '2017-02-13',
            endDate: '2017-02-15',
            arriveTime: '14:00',
            roomName: '豪华山景家庭套房',
            roomNumber: 1,
            customerName: '张三',
            totalCost: 2440
        }, {
            id: 2,
            beginDate: '2017-02-13',
            endDate: '2017-02-15',
            arriveTime: '14:00',
            roomName: '豪华山景大床房',
            roomNumber: 1,
            customerName: '李四',
            totalCost: 2440
        }]
    };
    res.json(ret);
});

module.exports = router;