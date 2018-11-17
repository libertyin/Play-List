'use strict';

var main = document.createElement("main");
document.body.appendChild(main); 
// Сreate main tag

var divContainer = document.createElement ("div");
divContainer.className = "ba-container";
main.appendChild(divContainer);
// Create div tag

var divPlayList = document.createElement ("div");
divPlayList.className = "ba-playlist";
divContainer.appendChild(divPlayList);
// Create div2 tag

var h3PlayList = document.createElement ("h3");
h3PlayList.innerText = "PlayList";
h3PlayList.className = "ba-playlist__title";
divPlayList.appendChild(h3PlayList);
// Create h3 tag

var ulPlayList = document.createElement ("ul");
ulPlayList.className = "ba-playlist__list";
ulPlayList.id = "playlist";
divPlayList.appendChild(ulPlayList);
// Create ul tag

// Mass of sings names
var playList = [{
    author: "Led zeppelin",
    song: "stairway to heaven",
    duration: "2:03"
},
{
    author: "Queen",
    song: "bohemian rhapsody",
    duration: "2:30"
},
{
    author: "Lynyrd skynyrd",
    song: "free bird",
    duration: "1:56"
},
{
    author: "Deep purple",
    song: "smoke on the water",
    duration: "3:03"
},
{
    author: "Jimi hendrix",
    song: "all along the watchtower",
    duration: "2:53"
},
{
    author: "AC/DC",
    song: "back in black",
    duration: "2:43"
},
{
    author: "Queen",
    song: "we will rock you",
    duration: "2:13"            
},
{
    author: "Metallica",
    song: "enter sandman",
    duration: "3:03"            
}
];

var list = document.querySelector("#playlist");

for (var i = 0; i < playList.length; i++) {

    var li = document.createElement('li');
    li.className = "ba-tune";
    list.appendChild(li);
    
    var topLi = document.createElement('div');
    topLi.className = "ba-tune__top";
    li.appendChild(topLi);

    var spanTime = document.createElement('span');
    spanTime.className = "ba-tune__duration";
    var spanAuthor = document.createElement('span');
    spanAuthor.className = "ba-tune__author";
    var divSong = document.createElement('div');
    divSong.className = "ba-tune__song";

    divSong.innerText = playList[i].song;
    spanAuthor.innerText = playList[i].author;
    spanTime.innerText = playList[i].duration;


    topLi.appendChild(spanTime);
    topLi.appendChild(spanAuthor);
    li.appendChild(divSong);


}