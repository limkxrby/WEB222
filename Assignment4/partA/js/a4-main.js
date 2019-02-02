var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

window.onload = loadTableWithFilters;
function loadTableWithFilters() {
    var tbl = document.querySelector("#main-table-body");
     tbl.innerHTML = '';
    for (var i = 0; i < petData.length; i++){
        if ((filterType == petData[i].type || filterType == "") && petData[i].age <= filterAgeMax && petData[i].age > filterAgeMin){
        
        var img = document.createElement("img");
        img.setAttribute("src", petData[i].image.src);
        img.setAttribute("alt", petData[i].image.alt);
        img.setAttribute("width", petData[i].image.width);
        img.setAttribute("height", petData[i].image.height);

        var row = document.createElement("tr");
        var td = document.createElement("td");
        td.appendChild(img);
        row.appendChild(td);
        
        var tdata = document.createElement("td");
        var h4 = document.createElement("h4");
        var name = document.createTextNode(petData[i].name);

        h4.appendChild(name);
        tdata.appendChild(h4);
        var p = document.createElement("p");
        p.innerHTML = petData[i].description.toString();
        tdata.appendChild(p);
        var span = document.createElement("span");
        var age = document.createTextNode("Age: " + petData[i].age + " years old.");
        span.appendChild(age);
        tdata.appendChild(span);
        row.appendChild(tdata);
        tbl.appendChild(row);
        
        }

    }
};

;

function filterDog() {

  filterType = "dog";
  loadTableWithFilters();
};

function filterCat() {

  filterType = "cat";
  loadTableWithFilters();

};

function filterBird() {

  filterType = "bird";
  loadTableWithFilters();

};

function filter_zero_1() {

  filterAgeMin = 0;
  filterAgeMax = 1;
  loadTableWithFilters();
};

function filter_1_3() {

  filterAgeMin = 1;
  filterAgeMax = 3;
  loadTableWithFilters();
};

function filter_4_plus() {

  filterAgeMin = 4;
  filterAgeMax = Number.MAX_VALUE;
  loadTableWithFilters();
};

function filterAllPets() {

  var filterType = "";
  var filterAgeMin = 0;
  var filterAgeMax = Number.MAX_VALUE;
  loadTableWithFilters();
};