/*
 * Copyright (c) 2015 Advanced Community Information Systems (ACIS) Group, Chair
 * of Computer Science 5 (Databases & Information Systems), RWTH Aachen
 * University, Germany All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 * 
 * Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 * 
 * Neither the name of the ACIS Group nor the names of its contributors may be
 * used to endorse or promote products derived from this software without
 * specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

var client;

var init = function() {
  
  var iwcCallback = function(intent) {
    // define your reactions on incoming iwc events here 
    console.log(intent);

  };

  client = new Las2peerWidgetLibrary("$STEEN_URL$:$STEEN_PORT$", iwcCallback);

  $('#loadFAQ').on('click', function() {
    //start parameter initiation

    //end parameter initiation
    loadFAQ();
  })
  $('#submitFAQ').on('click', function() {
    //start parameter initiation
     
    //end parameter initiation
    submitFAQ();
  })


}

// loadFAQ
var loadFAQ = function(){

//start variable declaration
   var loaded = null;

//end variable declaration

  client.sendRequest("GET", "faq", "", "", {}, false,
  function(data, type) {
    console.log(data);  
    $('#faq').empty();
    for (var item in data){ 
        var q = data[item]["question"];
        var a = data[item]["answer"];   
        $('#faq').append('<div class="bubble me">'+decodeURIComponent(q.replace(/\+/g,  " "))+'</div><br>');
        $('#faq').append('<div class="bubble you">'+decodeURIComponent(a.replace(/\+/g,  " "))+'</div><br><br>');
    }    
  },
  function(error) {
    console.log(error);
  });

  //Additional own javascript
 return loaded;
}

// submitFAQ
var submitFAQ = function(){

//start variable declaration
   var created = null;

//end variable declaration

   var jsonContent = null;  
    var question =  document.getElementById('questionArea').value;
    var answer =  document.getElementById('answerArea').value;
    jsonContent = {"question":question, "answer":answer}  
  client.sendRequest("POST", "faq", jsonContent, "text/plain", {}, false,
  function(data, type) {
    console.log(data); 
    loadFAQ();    
  },
  function(error) {
    console.log(error);
  });

  //Additional own javascript
 return created;
}


function htmlEncode(value){
  //create a in-memory div, set it's inner text(which jQuery automatically encodes)
  //then grab the encoded contents back out.  The div never exists on the page.
  return $('<div/>').text(value).html();
} 
 
$('<style type="text/css"></style>')
      .html('.bubble::before {background-color: #F2F2F2;content: "    ";display: block;height: 16px;position: absolute; top: 11px;transform:             rotate( 29deg ) skew( -35deg );-moz-transform:    rotate( 29deg ) skew( -35deg );-ms-transform:     rotate( 29deg ) skew( -35deg );-o-transform:      rotate( 29deg ) skew( -35deg );-webkit-transform: rotate( 29deg ) skew( -35deg );width:  20px;} .me::before {box-shadow: -2px 2px 2px 0 rgba( 178, 178, 178, .4 );left: -9px;} .you::before {box-shadow: 2px -2px 2px 0 rgba( 178, 178, 178, .4 );right: -9px;}')
      .appendTo("head");

$(document).ready(function() {
  init(); 
  loadFAQ();
});
