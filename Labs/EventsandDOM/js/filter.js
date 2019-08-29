"use strict"


document.getElementById("search").addEventListener("keyup", function () {

    var input = document.getElementById("search");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("infoTable");
    var tr = table.getElementsByTagName("tr");

    var i;
    var td;
// Loop through all table rows, and hide those who don't match the search query
    for(i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");

        if(td.length !=0) {
//only search name	
	 //if (td[0].innerHTML.toUpperCase().indexOf(filter) > -1) {	
      //this makes it work if you change what you type by re-displaying rows // this is changing the css display
            if(tr[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display ="none";
            }
        }
    }

});
