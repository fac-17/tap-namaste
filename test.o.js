const test = require('tape');

test("Test naame",(t)=>{
    t.equal(1,1,"Comment good");
    t.end();
})
test("Test bad",(t)=>{
    t.equal(1,2,"Comment not good");
    t.end();
})
test("Third test",(t)=>{
    t.deepEqual([],["colette","jack","reuben","jan"],"Comment other");
    t.end();
})