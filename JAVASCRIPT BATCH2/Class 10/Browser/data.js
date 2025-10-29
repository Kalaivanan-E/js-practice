

let eids = 101
let ename = 'rahul'
let avail = true
let loc =['Tamil Nadu','Kerala','Andra',"Karnataka"]
let emp = {
    eid: 102,
    ename: 'sonia'
}
// we can't able to print the object in browser, so we use JSON.Stringify to convert object to string
document.writeln(eids)
document.writeln("<br>") 
document.writeln(ename)
document.writeln("<br>") 
document.writeln(avail)
document.writeln("<br>") 
document.writeln(loc) 
document.writeln("<br>") 
document.writeln(JSON.stringify(emp))
