var express = require('express');
var router = express.Router();

router.get('/insertHotel', function(req, res, next) {
    let ret = {},
        error = 0,
        msg = '';

    if (req.query.name) {
        
    } else {
        ret.error = 1;
        ret.msg = '请输入酒店信息';
    }
    console.log(req.query);
    res.json(ret);
});

module.exports = router;