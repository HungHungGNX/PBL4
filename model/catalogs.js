var db = require('./database'); //chèn model database vào đế kết nối db
var data = null; //biến để chứa dữ liệu đổ về cho controller
exports.create = function(values, callback) {

    var sql = "INSERT INTO account (Id, UserName,Email,Password) VALUES ?";
    db.query(sql, [values], function(err, result) {
        if (err) throw err;
        callback(result.affectedRows);
    });
}
exports.update = function(idCat, nameCat, order, showHide) {
    //cập nhật record vào table
}
exports.checkUserName = function(email, callBack) {
    let sql = `SELECT * FROM account where email = ${email}`;
    db.query(sql, function(err, item) {
        if (err) throw err;
        data = item[0];
        callBack(data);
    });
}
exports.listUserName = function(callBack) {
    let sql = `SELECT * FROM account`;
    db.query(sql, (err, item) => {
        if (err) throw err;
        callBack(item);
    });
}
exports.delete = function(idCat) {
    //xóa 1 record 
}