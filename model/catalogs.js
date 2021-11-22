var db = require('./database'); //chèn model database vào đế kết nối db
var data = null; //biến để chứa dữ liệu đổ về cho controller
exports.create = function(nameCat, order, showHide) {
    //chèn record mới vào table catalogs
}
exports.update = function(idCat, nameCat, order, showHide) {
    //cập nhật record vào table
}
exports.checkUserName = function(email) {
    let sql = `SELECT * FROM account where email = ${email}`;
    db.query(sql, function(err, item) {
        if (err) throw err;
        data = item[0];
    });
    return data;
}
exports.listUserName = function() {
    let sql = `SELECT * FROM account`;
    db.query(sql, function(err, item) {
        if (err) throw err;
        return (item);
    });
}
exports.delete = function(idCat) {
    //xóa 1 record 
}


// console.log(exports.checkUserName("'longgiaquyen2001@gmail.com'"));

async function test() {
    data = await getColour();
    console.log(data);
}

function getColour() {
    return new Promise((resolve, reject) => {
        db.query(
            "SELECT * FROM account",
            (err, result) => {
                return err ? reject(err) : resolve(result);
            }
        );
    });
}

console.log(test());
console.log(data);