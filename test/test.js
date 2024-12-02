const  mockAny = require("mock-any");

console.log("Test file running ");

mockAny({"ss":"hello"},3).subscribe((response)=>{
    console.log("response",response);
})
