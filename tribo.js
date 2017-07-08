function trib(n) {
    
    if (n < 3) {
        console.log(n); return n;
    }
    var tribo = trib(n-3) + trib(n-2) + trib(n-1);
    //    console.log(tribo);
    return tribo;
}

trib(4);