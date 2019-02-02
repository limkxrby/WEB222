// Data for the "HTML Tables" Page

var users = [
    {first_name: "Kaitlin", last_name: "Burns", age: 23, email: "kburns99753@usermail.com"},
    {first_name: "Joshua", last_name: "Feir", age: 31, email: "josh319726@usermail.com"},
    {first_name: "Stephen", last_name: "Shaw", age: 28, email: "steve.shaw47628@usermail.com"},
    {first_name: "Timothy", last_name: "McAlpine", age: 37, email: "Timbo72469@usermail.com"},
    {first_name: "Sarah", last_name: "Connor", age: 19, email: "SarahC6320@usermail.com"}
];




var myData = [{user: "James", address: "123 Keele St. Toronto, ON."},
              {user: "Mary", address: "92 Appleby Ave. Hamilton, ON."},
              {user: "Catherine", address: "1121 New St. Burlington, ON."}];

window.onload = function(){
      var userContainer = document.querySelector("#userTable");

      var userList = "";

      for(var i=0; i < users.length; i++){ 
            userList += "<tr>" 
                         +"<td>" + users[i].first_name + "</td>"  
                         +"<td>" + users[i].last_name + "</td>"  
						 +"<td>" + users[i].age + "</td>"  
						 +"<td>" + '<a href="mailto:' + users[i].email + '">'+ users[i].email + "</a> " + "</td>"  
                      +"</tr>";
      }

      userContainer.innerHTML += userList; // append the new rows
};
