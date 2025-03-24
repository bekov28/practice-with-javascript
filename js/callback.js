//Callback - bitta funksiya bajarilgandan so'ng keyin ishlaydigan funksiya

function greeting(callback) {
    console.log("Hello students!");
    callback();
}

greeting(function() {
console.log("Are you ready today?")
})



