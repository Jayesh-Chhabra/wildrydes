// Add a "checked" symbol when clicking on a list item
var WildRydes = window.WildRydes || {};

(function rideScopeWrapper($) {
    var authToken;
    WildRydes.authToken.then(function setAuthToken(token) {
        if (token) {
            authToken = token;
        } else {
            window.location.href = '/signin.html';
        }
    }).catch(function handleTokenError(error) {
        alert(error);
        window.location.href = '/signin.html';
    });
    dbPut = function(inputValue) {
        $.ajax({
            method: 'POST',
            url: _config.api.invokeUrl + '/postings',
            headers: {
                Authorization: authToken
            },
            data: JSON.stringify({
                input1: {
                    inputValue
                }
            }),
            contentType: 'application/json',
            success: completeRequest,
            error: function ajaxError(jqXHR, textStatus, errorThrown) {
                console.error('Error putting input: ', textStatus, ', Details: ', errorThrown);
                console.error('Response: ', jqXHR.responseText);
                alert('An error occured when inputting your posting:\n' + jqXHR.responseText);
            }
        });
    }
    function newElement() {
        var li = $("<li></li>");
        var inputValue = $("#myInput");
        var t = document.createTextNode(inputValue);
        li.appendChild(document.createTextNode(inputValue));
        if (inputValue === '') {
          alert("You must write something!");
        } else {
          $("#postingList").appendChild(li);
          dbPut(inputValue);
        }
        $("#myInput").val() = "";
      
        var span = $("<span></span>");
        //var txt = document.createTextNode("\u00D7");
        span.addClass("close");
        //span.appendChild(txt);
        li.appendChild(span);
      
        for (i = 0; i < close.length; i++) {
          close[i].click = function() {
            var div = $(this).parent();
            div.css("display", "none");
          }
        }
      }
      
    $(function onDocReady() {
        $('#addButton').click(function() {alert( "Handler for .click() called." )});
        
    });
})

// Create a new list item when clicking on the "Add" button
/* function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("postingList").appendChild(li);
    dbPut(inputValue);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  //var txt = document.createTextNode("\u00D7");
  span.className = "close";
  //span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
*/