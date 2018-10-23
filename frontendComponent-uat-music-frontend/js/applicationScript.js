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
 
    getMusic();
  $('#button-save').on('click', function() {
    //start parameter initiation

    //end parameter initiation
    submitMusic();
  })


}

var initClient = function(y) {
  this.client = new Las2peerWidgetLibrary("", iwcCallback, "127.0.0.1:8073", y);
  console.log("Client initialized");
};

// submitMusic
var submitMusic = function(){

//start variable declaration
   var returnData = null;

//end variable declaration
// get values
    var imageName = $("#txt-image-name").val();
    var imageUrl = $("#txt-image-url").val();
    var musicName = $("#txt-music-name").val();
    var musicUrl = $("#txt-music-url").val();

    var postData = { 
        imageName: imageName, 
        imageUrl: imageUrl, 
        musicName: musicName, 
        musicUrl: musicUrl, 
    };

  client.sendRequest("POST", "post", JSON.stringify(postData), "text/plain", {}, false,
  function(data, type) {
    console.log("POST DATA");
    console.log(data);
    getMusic();
  },
  function(error) {
    console.log(error);
    getMusic();
  });

  //Additional own javascript
 return returnData;
}

// getMusic
var getMusic = function(){

//start variable declaration
   var getReturn = null;

//end variable declaration

   var getData = null;
  client.sendRequest("GET", "get", "", "", {},
  function(data, type) {
    console.log("GET DATA");
    console.log(data);
    $("#table-music-body").html("");
        data.forEach(function(item) {
            console.log(item);
            // append to table
            $("#table-music-body").append(
                "<tr>" + 
                    "<td>" + item["imageName"] + "</td>" +
                    "<td><img src='" + item["imageUrl"] + "' width='100'></td>" +
                    "<td>" + item["musicName"] + "</td>" +
                    "<td><audio controls><source src='" + item["musicUrl"] + "' type='audio/mpeg'>" +
                    "Your browser does not support the audio element.</audio></td>" +
                "</tr>"
            );
            
        });
  },
  function(data) {
    console.log("GET DATA");
    console.log(data);
    $("#table-music-body").html("");
        data.forEach(function(item) {
            console.log(item);
            // append to table
            $("#table-music-body").append(
                "<tr>" + 
                    "<td>" + item["imageName"] + "</td>" +
                    "<td><img src='" + item["imageUrl"] + "' width='100'></td>" +
                    "<td>" + item["musicName"] + "</td>" +
                    "<td><audio controls><source src='" + item["musicUrl"] + "' type='audio/mpeg'>" +
                    "Your browser does not support the audio element.</audio></td>" +
                "</tr>"
            );
            
        });
  });

  //Additional own javascript
 return getReturn;
}



$(document).ready(function() {
  init();
});
