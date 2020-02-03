const bcrypt = require('bcrypt');


function test(pass) {

  bcrypt.hash(pass, 10, function(err, hash) {
    console.log(hash);
    console.log(hash.length);

  })
}

test("un")
test("un")
test("un")
test("un")
test("un")
test("un")
test("undoajigfojaoij")
test("284jklkej*$efoijag*0@")
test("uaefojoieagjja ef9734875879n")
