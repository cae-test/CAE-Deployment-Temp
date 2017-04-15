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
    if (intent.action == "RETURN_GRAPH") {
       storeGraph(intent.data);
    }
  };

  client = new Las2peerWidgetLibrary("$STEEN_URL$:$STEEN_PORT$", iwcCallback);

  $('#storeButton').on('click', function() {
    //start parameter initiation

    //end parameter initiation
    sendStoreGraphIntent();
  })
  $('#graphTable').on('click', function() {
    //start parameter initiation
    var id = null;

    //end parameter initiation
    loadGraph(id);
  })
  $('#newButton').on('click', function() {
    //start parameter initiation

    //end parameter initiation
    sendLoadEmptyGraph();
  })


}

// getGraphs
var getGraphs = function(){

//start variable declaration

//end variable declaration

  client.sendRequest("GET", , "", "", {}, false,
  function(data, type) {
    console.log(data);
    //Also update the html element?
    //$("#graphTable").html("Updated Element");
  },
  function(error) {
    console.log(error);
    //Also update the html element?
    //$("#graphTable").html("Updated Element");
  });

  $("#graphTable").html("Updated Element");
  //Additional own javascript

}

// loadGraph
var loadGraph = function(id){

//start variable declaration

//end variable declaration

  client.sendRequest("GET", id, "", "", {}, false,
  function(data, type) {
    console.log(data);
    //Also update the html element?
    //$("#descriptionInput").html("Updated Element");
  },
  function(error) {
    console.log(error);
    //Also update the html element?
    //$("#descriptionInput").html("Updated Element");
  });

  $("#descriptionInput").html("Updated Element");
  var graph = "initialized";
  client.sendIntent("LOAD_GRAPH",graph,true);

  //Additional own javascript

}

// sendStoreGraphIntent
var sendStoreGraphIntent = function(){

//start variable declaration

//end variable declaration


  var noData = "initialized";
  client.sendIntent("STORE_GRAPH",noData,true);

  //Additional own javascript

}

// storeGraph
var storeGraph = function(graph){

//start variable declaration

//end variable declaration

   var graph = null;
  client.sendRequest("POST", , graph, "text/plain", {}, false,
  function(data, type) {
    console.log(data);
  },
  function(error) {
    console.log(error);
  });

  //Additional own javascript

}

// sendLoadEmptyGraph
var sendLoadEmptyGraph = function(){

//start variable declaration

//end variable declaration


  var graph = "initialized";
  client.sendIntent("LOAD_GRAPH",graph,true);

  //Additional own javascript

}


$(document).ready(function() {
  init();
});
