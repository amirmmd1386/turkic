
import * as country from './majol.js';
var b = window.location.href;
var array = b.split("?");
var flag = document.getElementById('photo-flag');
var cap = document.getElementById('photo-cap');
var his = document.getElementById('photo-his');
var text = document.getElementById('text');
var map = document.getElementById('photo-map');
var name_con = document.getElementById('name-con');
switch (array[1]) {
    case "uzbekistan":
        flag.src = country.uzbekistan(0);
        cap.src = country.uzbekistan(1);
        his.src = country.uzbekistan(2);
        map.src= country.uzbekistan(3);
        text.innerText = country.uzbekistan(4);
        name_con.innerText = country.uzbekistan(5);
        break;
    case "Turkey":
        flag.src = country.turkey(0);
        cap.src = country.turkey(1);
        his.src = country.turkey(2);
        map.src= country.turkey(3);
        text.innerText = country.turkey(4);
        name_con.innerText = country.turkey(5);
        break;
    case "azerbyjan":
        flag.src = country.Azerbaijan(0);
        cap.src = country.Azerbaijan(1);
        his.src = country.Azerbaijan(2);
        map.src= country.Azerbaijan(3);
        text.innerText = country.Azerbaijan(4);
        name_con.innerText = country.Azerbaijan(5);
        break;
    case "kyr":
        flag.src = country.Kyrgyzstan(0);
        cap.src = country.Kyrgyzstan(1);
        his.src = country.Kyrgyzstan(2);
        map.src= country.Kyrgyzstan(3);
        text.innerText = country.Kyrgyzstan(4);
        name_con.innerText = country.Kyrgyzstan(5);
        break;
    case "turkmen":
        flag.src = country.turkmenistan(0);
        cap.src = country.turkmenistan(1);
        his.src = country.turkmenistan(2);
        map.src= country.turkmenistan(3);
        text.innerText = country.turkmenistan(4);
        name_con.innerText = country.turkmenistan(5);
        break;
    case "ghash":
        flag.src = country.ghash(0);
        cap.src = country.ghash(1);
        his.src = country.ghash(2);
        map.src= country.ghash(3);
        text.innerText = country.ghash(4);
        name_con.innerText = country.ghash(5);
        break;
}
