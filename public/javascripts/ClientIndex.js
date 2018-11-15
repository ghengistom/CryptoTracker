

    setInterval(myFunction, 9900)




function myFunction() {
    $.get( "https://api.coinmarketcap.com/v2/ticker/?limit=10", function( data ) {
    //$( ".result" ).html( data );
    //console.log(data);
    //var p = document.createElement("P");
    var time = new Date();
    var timeC = time.toDateString() + "   " + time.toLocaleTimeString();//time.toLocaleTimeString();
    //console.log(timeC);
    var eth = data.data[1027].name;
    var bit = data.data[1].name;

    var ethPrice = data.data[1027].quotes.USD.price;
    var bitPrice = data.data[1].quotes.USD.price;
    //var tn = document.createTextNode(eth + " " + ethPrice);
    
    document.getElementById("time").innerHTML = timeC;

    document.getElementById("ethercoin").innerHTML = eth;
    document.getElementById("etherprice").innerHTML = ethPrice;

    document.getElementById("bitcoin").innerHTML = bit;
    document.getElementById("bitcoinprice").innerHTML = bitPrice;

    
    //p.appendChild(tn);
    //document.getElementById("ethercoin").appendChild(p);
    //console.log(data.data[1027].name + " " + data.data[1027].quotes.USD.price);// + data.data[1].quotes.usd[1]);
    //document.createElement('BR');
   // console.log(data.data[1].name + " " + data.data[1].quotes.USD.price)
  //  console.log("CLient Index js ");
  });






}

