function showWorld() {
    if (window.getComputedStyle(document.getElementById("map")).display == "none") {
        document.getElementById("map").style.display = "block";
        document.getElementById("showWorld").innerHTML = "Remove world map";
        document.getElementById("opennewtab").style.display = "block";
    }
    else {
        document.getElementById("map").style.display = "none"
        document.getElementById("showWorld").innerHTML = "View image of world map";
        document.getElementById("opennewtab").style.display = "none";
    }
}
function startGame() {
    document.getElementById("inputs").style.display = "block";
    document.getElementById("startGame").style.display = "none";
    var meow = 0;
}
function giveUp() {
    document.getElementById("countryinput").readOnly = true;
    for (e = 0; e < 195; e++) {
        if (window.getComputedStyle(document.getElementsByTagName("h3")[e]).display == "none") {
            document.getElementsByTagName("h3")[e].style.display = "block";
            document.getElementsByTagName("h3")[e].style.color = "red";
        }
    }
}
function asdfghjkl() {
    document.getElementById("wahwah").style.display = "none"
    document.getElementsByTagName("footer")[0].style.position = "static"
}

document.getElementById('inputs').onsubmit = function() {
    var countryinput = document.getElementById("countryinput");
    if (countryinput.value.toLowerCase() == "afghanistan" || countryinput.value.toLowerCase() == "afghanistan " || countryinput.value.toLowerCase() == " afghanistan" || countryinput.value.toLowerCase() == " afghanistan ") {
        if (window.getComputedStyle(document.getElementById("afghanistan")).display == "none") {
            document.getElementById("afghanistan").style.display = "block";
            countryinput.value = "";
            return false;
        } else {
            return false;
        }
    } 
    if (countryinput.value.toLowerCase() == "albania" || countryinput.value.toLowerCase() == "albania " || countryinput.value.toLowerCase() == " albania" || countryinput.value.toLowerCase() == " albania ") {
        if (window.getComputedStyle(document.getElementById("albania")).display == "none") {
            document.getElementById("albania").style.display = "block";
            countryinput.value = "";
            return false;
        } else {
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "algeria" || countryinput.value.toLowerCase() == " algeria" || countryinput.value.toLowerCase() == "algeria " || countryinput.value.toLowerCase() == " algeria ") {
        if (window.getComputedStyle(document.getElementById("algeria")).display == "none") {
            document.getElementById("algeria").style.display = "block";
            countryinput.value = "";
            return false;
        } else {
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "andorra" || countryinput.value.toLowerCase() == " andorra" || countryinput.value.toLowerCase() == "andorra " || countryinput.value.toLowerCase() == " andorra ") {
        if (window.getComputedStyle(document.getElementById("andorra")).display == "none") {
            document.getElementById("andorra").style.display = "block";
            countryinput.value = "";
            return false;
        } else {
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "angola" || countryinput.value.toLowerCase() == " angola" || countryinput.value.toLowerCase() == "angola " || countryinput.value.toLowerCase() == " angola ") {
        if (window.getComputedStyle(document.getElementById("angola")).display == "none") {
            document.getElementById("angola").style.display = "block";
            countryinput.value = "";
            return false;
        } else {
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "antigua and barbuda" || countryinput.value.toLowerCase() == " antigua and barbuda" || countryinput.value.toLowerCase() == "antigua and barbuda " || countryinput.value.toLowerCase() == " antigua and barbuda ") {
        if (window.getComputedStyle(document.getElementById("antiguabarbuda")).display == "none") {
            document.getElementById("antiguabarbuda").style.display = "block";
            countryinput.value = "";
            return false;
        } else {
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "argentina" || countryinput.value.toLowerCase() == " argentina" || countryinput.value.toLowerCase() == "argentina " || countryinput.value.toLowerCase() == " argentina ") {
        if (window.getComputedStyle(document.getElementById("argentina")).display == "none") {
            document.getElementById("argentina").style.display = "block";
            countryinput.value = "";
            return false;
        } else {
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "armenia" || countryinput.value.toLowerCase() == " armenia" || countryinput.value.toLowerCase() == "armenia " || countryinput.value.toLowerCase() == " armenia ") {
        if (window.getComputedStyle(document.getElementById("armenia")).display == "none") {
            document.getElementById("armenia").style.display = "block";
            countryinput.value = "";
            return false;
        } else {
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "australia" || countryinput.value.toLowerCase() == " australia" || countryinput.value.toLowerCase() == "australia " || countryinput.value.toLowerCase() == " australia ") {
        if (window.getComputedStyle(document.getElementById("australia")).display == "none") {
            document.getElementById("australia").style.display = "block";
            countryinput.value = "";
            return false;
        } else {
            return false;
        }
    } 
    if (countryinput.value.toLowerCase() == "austria" || countryinput.value.toLowerCase() == " austria" || countryinput.value.toLowerCase() == " austria " || countryinput.value.toLowerCase() == "austria ") {
        if (window.getComputedStyle(document.getElementById("austria")).display == "none") {
            document.getElementById("austria").style.display = "block";
            countryinput.value = "";
            return false;
        } else {
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "azerbaijan" || countryinput.value.toLowerCase() == " azerbaijan" || countryinput.value.toLowerCase() == "azerbaijan " || countryinput.value.toLowerCase() == " azerbaijan ") {
        if (window.getComputedStyle(document.getElementById("azerbaijan")).display == "none") {
            document.getElementById('azerbaijan').style.display = "block";
            countryinput.value = "";
            return false;
        } else {
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "bahamas" || countryinput.value.toLowerCase() == "the bahamas" || countryinput.value.toLowerCase() == " bahamas" || countryinput.value.toLowerCase() == " the bahamas" || countryinput.value.toLowerCase() == "bahamas " || countryinput.value.toLowerCase() == "the bahamas " || countryinput.value.toLowerCase() == " the bahamas " || countryinput.value.toLowerCase() == " bahamas ") {
        if (window.getComputedStyle(document.getElementById("bahamas")).display == "none") {
            document.getElementById('bahamas').style.display = "block";
            countryinput.value = "";
            return false;
        } else {
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "bahrain" || countryinput.value.toLowerCase() == " bahrain" || countryinput.value.toLowerCase() == "bahrain " || countryinput.value.toLowerCase() == " bahrain ") {
        if (window.getComputedStyle(document.getElementById("bahrain")).display == "none") {
            document.getElementById('bahrain').style.display = "block";
            countryinput.value = "";
            return false;
        } else {
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "bangladesh" || countryinput.value.toLowerCase() == " bangladesh" || countryinput.value.toLowerCase() == "bangladesh " || countryinput.value.toLowerCase() == " bangladesh ") {
        if (window.getComputedStyle(document.getElementById("bangladesh")).display == "none") {
            document.getElementById('bangladesh').style.display = "block";
            countryinput.value = "";
            return false;
        } else {
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "barbados" || countryinput.value.toLowerCase() == " barbados" || countryinput.value.toLowerCase() == "barbados " || countryinput.value.toLowerCase() == " barbados ") {
        if (window.getComputedStyle(document.getElementById("barbados")).display == "none") {
            document.getElementById('barbados').style.display = "block";
            countryinput.value = "";
            return false;
        } else {
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "belarus" || countryinput.value.toLowerCase() == " belarus" || countryinput.value.toLowerCase() == "belarus " || countryinput.value.toLowerCase() == " belarus ") {
        if (window.getComputedStyle(document.getElementById("belarus")).display == "none") {
            document.getElementById('belarus').style.display = "block";
            countryinput.value = "";
            return false;
        } else {
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "belgium" || countryinput.value.toLowerCase() == " belgium" || countryinput.value.toLowerCase() == "belgium " || countryinput.value.toLowerCase() == " beligum ") {
        if (window.getComputedStyle(document.getElementById("belgium")).display == "none") {
            document.getElementById("belgium").style.display = "block";
            countryinput.value = "";
            return false;
        } else {
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "belize" || countryinput.value.toLowerCase() == " belize" || countryinput.value.toLowerCase() == "belize " || countryinput.value.toLowerCase() == " belize ") {
        if (window.getComputedStyle(document.getElementById("belize")).display == "none") {
            document.getElementById("belize").style.display = "block";
            countryinput.value = "";
            return false;
        } else {
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "benin" || countryinput.value.toLowerCase() == " benin" || countryinput.value.toLowerCase() == "benin " || countryinput.value.toLowerCase() == " benin ") {
        if (window.getComputedStyle(document.getElementById("benin")).display == "none") {
            document.getElementById("benin").style.display = "block";
            countryinput.value = "";
            return false;
        } else {
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "bhutan" || countryinput.value.toLowerCase() == " bhutan" || countryinput.value.toLowerCase() == " bhutan " || countryinput.value.toLowerCase() == "bhutan ") {
        if (window.getComputedStyle(document.getElementById("bhutan")).display == "none") {
            document.getElementById("bhutan").style.display = "block";
            countryinput.value = "";
            return false;
        } else {
            return false;
        }
    } 
    if (countryinput.value.toLowerCase() == "bolivia" || countryinput.value.toLowerCase() == " bolivia" || countryinput.value.toLowerCase() == "bolivia " || countryinput.value.toLowerCase() == " bolivia ") {
        if (window.getComputedStyle(document.getElementById("bolivia")).display == "none") {
            document.getElementById("bolivia").style.display = "block";
            countryinput.value = "";
            return false;
        } else {
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "bosnia and herzegovina" || countryinput.value.toLowerCase() == "bosnia and herzegovina " || countryinput.value.toLowerCase() == " bosnia and herzegovina" || countryinput.value.toLowerCase() == " bosnia and herzegovina ") {
        if (window.getComputedStyle(document.getElementById("bosniaHerzegovina")).display == "none") {
            document.getElementById("bosniaHerzegovina").style.display = "block";
            countryinput.value = "";
            return false;
        } else {
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "botswana" || countryinput.value.toLowerCase() == "botswana " || countryinput.value.toLowerCase() == " botswana" || countryinput.value.toLowerCase() == " botswana ") {
        if (window.getComputedStyle(document.getElementById("botswana")).display == "none") {
            document.getElementById("botswana").style.display = "block";
            countryinput.value = "";
            return false;
        } else {
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "brazil" || countryinput.value.toLowerCase() == " brazil" || countryinput.value.toLowerCase() == "brazil " || countryinput.value.toLowerCase() == " brazil ") {
        if (window.getComputedStyle(document.getElementById("brazil")).display == "none") {
            document.getElementById("brazil").style.display = "block";
            countryinput.value = "";
            return false;
        } else {
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "brunei" || countryinput.value.toLowerCase() == "brunei " || countryinput.value.toLowerCase() == " brunei" || countryinput.value.toLowerCase() == " brunei ") {
        if (window.getComputedStyle(document.getElementById("brunei")).display == "none") {
            document.getElementById("brunei").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "bulgaria" || countryinput.value.toLowerCase() == "bulgaria " || countryinput.value.toLowerCase() == " bulgaria" || countryinput.value.toLowerCase() == " bulgaria ") {
        if (window.getComputedStyle(document.getElementById("bulgaria")).display == "none") {
            document.getElementById("bulgaria").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "burkina faso" || countryinput.value.toLowerCase() == "burkina faso " || countryinput.value.toLowerCase() == " burkina faso" || countryinput.value.toLowerCase() == " burkina faso ") {
        if (window.getComputedStyle(document.getElementById("burkinafaso")).display == "none") {
            document.getElementById("burkinafaso").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "burundi" || countryinput.value.toLowerCase() == "burundi " || countryinput.value.toLowerCase() == " burundi" || countryinput.value.toLowerCase() == " burundi ") {
        if (window.getComputedStyle(document.getElementById("burundi")).display == "none") {
            document.getElementById("burundi").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "cambodia" || countryinput.value.toLowerCase() == " cambodia" || countryinput.value.toLowerCase() == "cambodia " || countryinput.value.toLowerCase() == " cambodia ") {
        if (window.getComputedStyle(document.getElementById("cambodia")).display == "none") {
            document.getElementById("cambodia").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "cameroon" || countryinput.value.toLowerCase() == " cameroon" || countryinput.value.toLowerCase() == "cameroon " || countryinput.value.toLowerCase() == " cameroon ") {
        if (window.getComputedStyle(document.getElementById("cameroon")).display == "none") {
            document.getElementById("cameroon").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "canada" || countryinput.value.toLowerCase() == "canada " || countryinput.value.toLowerCase() == " canada" || countryinput.value.toLowerCase() == " canada ") {
        if (window.getComputedStyle(document.getElementById("canada")).display == "none") {
            document.getElementById("canada").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "cape verde" || countryinput.value.toLowerCase() == "cape verde " || countryinput.value.toLowerCase() == " cape verde" || countryinput.value.toLowerCase() == " cape verde " || countryinput.value.toLowerCase() == "cabo verde" || countryinput.value.toLowerCase() == "cabo verde " || countryinput.value.toLowerCase() == " cabo verde" || countryinput.value.toLowerCase() == " cabo verde ") {
        if (window.getComputedStyle(document.getElementById("capeVerde")).display == "none") {
            document.getElementById("capeVerde").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "car" || countryinput.value.toLowerCase() == "car " || countryinput.value.toLowerCase() == " car" || countryinput.value.toLowerCase() == " car " || countryinput.value.toLowerCase() == "central african republic" || countryinput.value.toLowerCase() == " central african republic" || countryinput.value.toLowerCase() == "central african republic " || countryinput.value.toLowerCase() == " central african republic ") {
        if (window.getComputedStyle(document.getElementById("CAR")).display == "none") {
            document.getElementById("CAR").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "chad" || countryinput.value.toLowerCase() == "chad " || countryinput.value.toLowerCase() == " chad" || countryinput.value.toLowerCase() == " chad ") {
        if (window.getComputedStyle(document.getElementById("chad")).display == "none") {
            document.getElementById("chad").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "chile" || countryinput.value.toLowerCase() == "chile " || countryinput.value.toLowerCase() == " chile" || countryinput.value.toLowerCase() == " chile ") {
        if (window.getComputedStyle(document.getElementById("chile")).display == "none") {
            document.getElementById("chile").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "china" || countryinput.value.toLowerCase() == "china " || countryinput.value.toLowerCase() == " china" || countryinput.value.toLowerCase() == " china ") {
        if (window.getComputedStyle(document.getElementById("china")).display == "none") {
            document.getElementById("china").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "colombia" || countryinput.value.toLowerCase() == " colombia" || countryinput.value.toLowerCase() == "colombia " || countryinput.value.toLowerCase() == " colombia ") {
        if (window.getComputedStyle(document.getElementById("colombia")).display == "none") {
            document.getElementById("colombia").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "comoros" || countryinput.value.toLowerCase() == "comoros " || countryinput.value.toLowerCase() == " comoros" || countryinput.value.toLowerCase() == " comoros ") {
        if (window.getComputedStyle(document.getElementById("comoros")).display == "none") {
            document.getElementById("comoros").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "republic of the congo" || countryinput.value.toLowerCase() == "republic of the congo " || countryinput.value.toLowerCase() == " republic of the congo" || countryinput.value.toLowerCase() == " republic of the congo " || countryinput.value.toLowerCase() == "congo-brazzaville" || countryinput.value.toLowerCase() == " congo-brazzaville" || countryinput.value.toLowerCase() == "congo-brazzaville " || countryinput.value.toLowerCase() == " congo-brazzaville " || countryinput.value.toLowerCase() == "republic of congo" || countryinput.value.toLowerCase() == "republic of congo " || countryinput.value.toLowerCase() == " republic of congo" || countryinput.value.toLowerCase() == " republic of congo " || countryinput.value.toLowerCase() == "congo brazzaville" || countryinput.value.toLowerCase() == "congo brazzaville " || countryinput.value.toLowerCase() == " congo brazzaville" || countryinput.value.toLowerCase() == " congo brazzaville ") {
        if (window.getComputedStyle(document.getElementById("repCongo")).display == "none") {
            document.getElementById("repCongo").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "democratic republic of the congo" || countryinput.value.toLowerCase() == "democratic republic of the congo " || countryinput.value.toLowerCase() == " democratic republic of the congo" || countryinput.value.toLowerCase() == " democratic republic of the congo " || countryinput.value.toLowerCase() == "drc" || countryinput.value.toLowerCase() == "drc " || countryinput.value.toLowerCase() == " drc" || countryinput.value.toLowerCase() == " drc " || countryinput.value.toLowerCase() == "congo-kinshasa" || countryinput.value.toLowerCase() == "congo-kinshasa " || countryinput.value.toLowerCase() == " congo-kinshasa" || countryinput.value.toLowerCase() == " congo-kinshasa " || countryinput.value.toLowerCase() == "dr congo" || countryinput.value.toLowerCase() == "dr congo " || countryinput.value.toLowerCase() == " dr congo" || countryinput.value.toLowerCase() == " dr congo " || countryinput.value.toLowerCase() == "congo kinshasa" || countryinput.value.toLowerCase() == "congo kinshasa " || countryinput.value.toLowerCase() == " congo kinshasa" || countryinput.value.toLowerCase() == " congo kinshasa " || countryinput.value.toLowerCase() == "droc" || countryinput.value.toLowerCase() == "droc " || countryinput.value.toLowerCase() == " droc" || countryinput.value.toLowerCase() == " droc " || countryinput.value.toLowerCase() == "democratic republic of congo" || countryinput.value.toLowerCase() == "democratic republic of congo " || countryinput.value.toLowerCase() == " democratic republic of congo" || countryinput.value.toLowerCase() == " democratic republic of congo " || countryinput.value.toLowerCase() == "zaire" || countryinput.value.toLowerCase() == "zaire " || countryinput.value.toLowerCase() == " zaire" || countryinput.value.toLowerCase() == " zaire ") {
        //why the fuck must the drc have so many names and be so similar to the republic of rhe congo
        if (window.getComputedStyle(document.getElementById("drc")).display == "none") {
            document.getElementById("drc").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "costa rica" || countryinput.value.toLowerCase() == "costa rica " || countryinput.value.toLowerCase() == " costa rica" || countryinput.value.toLowerCase() == " costa rica ") {
        if (window.getComputedStyle(document.getElementById("costaRica")).display == "none") {
            document.getElementById("costaRica").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "côte d'ivoire" || countryinput.value.toLowerCase() == "côte d'ivoire " || countryinput.value.toLowerCase() == " côte d'ivoire" || countryinput.value.toLowerCase() == " côte d'ivoire " || countryinput.value.toLowerCase() == "cote d'ivoire" || countryinput.value.toLowerCase() == "cote d'ivoire " || countryinput.value.toLowerCase() == " cote d'ivoire" || countryinput.value.toLowerCase() == " cote d'ivoire " || countryinput.value.toLowerCase() == "ivory coast" || countryinput.value.toLowerCase() == "ivory coast " || countryinput.value.toLowerCase() == " ivory coast" || countryinput.value.toLowerCase() == " ivory coast ") {
        if (window.getComputedStyle(document.getElementById("ivoryCoast")).display == "none") {
            document.getElementById("ivoryCoast").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "croatia" || countryinput.value.toLowerCase() == "croatia " || countryinput.value.toLowerCase() == " croatia" || countryinput.value.toLowerCase() == " croatia ") {
        if (window.getComputedStyle(document.getElementById("croatia")).display == "none") {
            document.getElementById("croatia").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "cuba" || countryinput.value.toLowerCase() == "cuba " || countryinput.value.toLowerCase() == " cuba" || countryinput.value.toLowerCase() == " cuba ") {
        if (window.getComputedStyle(document.getElementById("cuba")).display == "none") {
            document.getElementById("cuba").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "cyprus" || countryinput.value.toLowerCase() == "cyprus " || countryinput.value.toLowerCase() == " cyprus" || countryinput.value.toLowerCase() == " cyprus ") {
        if (window.getComputedStyle(document.getElementById("cyprus")).display == "none") {
            document.getElementById("cyprus").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "czechia" || countryinput.value.toLowerCase() == "czechia " || countryinput.value.toLowerCase() == " czechia" || countryinput.value.toLowerCase() == " czechia " || countryinput.value.toLowerCase() == "czech republic" || countryinput.value.toLowerCase() == "czech republic " || countryinput.value.toLowerCase() == " czech republic" || countryinput.value.toLowerCase() == " czech republic ") {
        if (window.getComputedStyle(document.getElementById("czech")).display == "none") {
            document.getElementById("czech").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "denmark" || countryinput.value.toLowerCase() == "denmark " || countryinput.value.toLowerCase() == " denmark" || countryinput.value.toLowerCase() == " denmark ") {
        if (window.getComputedStyle(document.getElementById("denmark")).display == "none") {
            document.getElementById("denmark").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "djibouti" || countryinput.value.toLowerCase() == "djibouti " || countryinput.value.toLowerCase() == " djibouti" || countryinput.value.toLowerCase() == " djibouti ") {
        if (window.getComputedStyle(document.getElementById("djibouti")).display == "none") {
            document.getElementById("djibouti").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "dominica" || countryinput.value.toLowerCase() == "dominica " || countryinput.value.toLowerCase() == " dominica" || countryinput.value.toLowerCase() == " dominica ") {
        if (window.getComputedStyle(document.getElementById("dominica")).display == "none") {
            document.getElementById("dominica").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "dominican republic" || countryinput.value.toLowerCase() == "dominican republic " || countryinput.value.toLowerCase() == " dominican republic" || countryinput.value.toLowerCase() == " dominican republic ") {
        if (window.getComputedStyle(document.getElementById("dominicanRepublic")).display == "none") {
            document.getElementById("dominicanRepublic").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "ecuador" || countryinput.value.toLowerCase() == " ecuador" || countryinput.value.toLowerCase() == "ecuador " || countryinput.value.toLowerCase() == " ecuador ") {
        if (window.getComputedStyle(document.getElementById("ecuador")).display == "none") {
            document.getElementById("ecuador").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "egypt" || countryinput.value.toLowerCase() == "egypt " || countryinput.value.toLowerCase() == " egypt" || countryinput.value.toLowerCase() == " egypt ") {
        if (window.getComputedStyle(document.getElementById("egypt")).display == "none") {
            document.getElementById("egypt").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "el salvador" || countryinput.value.toLowerCase() == "el salvador " || countryinput.value.toLowerCase() == " el salvador" || countryinput.value.toLowerCase() == " el salvador ") {
        if (window.getComputedStyle(document.getElementById("elSalvador")).display == "none") {
            document.getElementById("elSalvador").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "equatorial guinea" || countryinput.value.toLowerCase() == "equatorial guinea " || countryinput.value.toLowerCase() == " equatorial guinea" || countryinput.value.toLowerCase() == " equatorial guinea ") {
        if (window.getComputedStyle(document.getElementById("equatorialGuinea")).display == "none") {
            document.getElementById("equatorialGuinea").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "eritrea" || countryinput.value.toLowerCase() == "eritrea " || countryinput.value.toLowerCase() == " eritrea" || countryinput.value.toLowerCase() == " eritrea ") {
        if (window.getComputedStyle(document.getElementById("eritrea")).display == "none") {
            document.getElementById("eritrea").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "estonia" || countryinput.value.toLowerCase() == "estonia " || countryinput.value.toLowerCase() == " estonia" || countryinput.value.toLowerCase() == " estonia ") {
        if (window.getComputedStyle(document.getElementById("estonia")).display == "none") {
            document.getElementById("estonia").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "eswatini" || countryinput.value.toLowerCase() == "eswatini " || countryinput.value.toLowerCase() == " eswatini" || countryinput.value.toLowerCase() == " eswatini " || countryinput.value.toLowerCase() == "swaziland" || countryinput.value.toLowerCase() == "swaziland " || countryinput.value.toLowerCase() == " swaziland" || countryinput.value.toLowerCase() == " swaziland ") {
        if (window.getComputedStyle(document.getElementById("eswatini")).display == "none") {
            document.getElementById("eswatini").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "ethiopia" || countryinput.value.toLowerCase() == "ethiopia " || countryinput.value.toLowerCase() == " ethiopia" || countryinput.value.toLowerCase() == " ethiopia ") {
        if (window.getComputedStyle(document.getElementById("ethiopia")).display == "none") {
            document.getElementById("ethiopia").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "fiji" || countryinput.value.toLowerCase() == "fiji " || countryinput.value.toLowerCase() == " fiji" || countryinput.value.toLowerCase() == " fiji ") {
        if (window.getComputedStyle(document.getElementById("fiji")).display == "none") {
            document.getElementById("fiji").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "finland" || countryinput.value.toLowerCase() == "finland " || countryinput.value.toLowerCase() == " finland" || countryinput.value.toLowerCase() == " finland ") {
        if (window.getComputedStyle(document.getElementById("finland")).display == "none") {
            document.getElementById("finland").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "france" || countryinput.value.toLowerCase() == "france " || countryinput.value.toLowerCase() == " france" || countryinput.value.toLowerCase() == " france ") {
        if (window.getComputedStyle(document.getElementById("france")).display == "none") {
            document.getElementById("france").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "gabon" || countryinput.value.toLowerCase() == "gabon " || countryinput.value.toLowerCase() == " gabon" || countryinput.value.toLowerCase() == " gabon ") {
        if (window.getComputedStyle(document.getElementById("gabon")).display == "none") {
            document.getElementById("gabon").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "gambia" || countryinput.value.toLowerCase() == "gambia " || countryinput.value.toLowerCase() == " gambia" || countryinput.value.toLowerCase() == " gambia " || countryinput.value.toLowerCase() == "the gambia" || countryinput.value.toLowerCase() == "the gambia " || countryinput.value.toLowerCase() == " the gambia" || countryinput.value.toLowerCase() == " the gambia ") {
        if (window.getComputedStyle(document.getElementById("gambia")).display == "none") {
            document.getElementById("gambia").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "georgia" || countryinput.value.toLowerCase() == "georgia " || countryinput.value.toLowerCase() == " georgia" || countryinput.value.toLowerCase() == " georgia ") {
        if (window.getComputedStyle(document.getElementById("georgia")).display == "none") {
            document.getElementById("georgia").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "germany" || countryinput.value.toLowerCase() == "germany " || countryinput.value.toLowerCase() == " germany" || countryinput.value.toLowerCase() == " germany ") {
        if (window.getComputedStyle(document.getElementById("germany")).display == "none") {
            document.getElementById("germany").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "ghana" || countryinput.value.toLowerCase() == "ghana " || countryinput.value.toLowerCase() == " ghana" || countryinput.value.toLowerCase() == " ghana ") {
        if (window.getComputedStyle(document.getElementById("ghana")).display == "none") {
            document.getElementById("ghana").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "greece" || countryinput.value.toLowerCase() == "greece " || countryinput.value.toLowerCase() == " greece" || countryinput.value.toLowerCase() == " greece ") {
        if (window.getComputedStyle(document.getElementById("greece")).display == "none") {
            document.getElementById("greece").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "grenada" || countryinput.value.toLowerCase() == "grenada " || countryinput.value.toLowerCase() == " grenada" || countryinput.value.toLowerCase() == " grenada ") {
        if (window.getComputedStyle(document.getElementById("grenada")).display == "none") {
            document.getElementById("grenada").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "guatemala" || countryinput.value.toLowerCase() == "guatemala " || countryinput.value.toLowerCase() == " guatemala" || countryinput.value.toLowerCase() == " guatemala ") {
        if (window.getComputedStyle(document.getElementById("guatemala")).display == "none") {
            document.getElementById("guatemala").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "guinea" || countryinput.value.toLowerCase() == "guinea " || countryinput.value.toLowerCase() == " guinea" || countryinput.value.toLowerCase() == " guinea ") {
        if (window.getComputedStyle(document.getElementById("guinea")).display == "none") {
            document.getElementById("guinea").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "guinea bissau" || countryinput.value.toLowerCase() == "guinea bissau " || countryinput.value.toLowerCase() == " guinea bissau" || countryinput.value.toLowerCase() == " guinea bissau " || countryinput.value.toLowerCase() == "guinea-bissau" || countryinput.value.toLowerCase() == " guinea-bissau" || countryinput.value.toLowerCase() == "guinea-bissau " || countryinput.value.toLowerCase() == " guinea-bissau ") {
        if (window.getComputedStyle(document.getElementById("guineaBissau")).display == "none") {
            document.getElementById("guineaBissau").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "guyana" || countryinput.value.toLowerCase() == "guyana " || countryinput.value.toLowerCase() == " guyana" || countryinput.value.toLowerCase() == " guyana ") {
        if (window.getComputedStyle(document.getElementById("guyana")).display == "none") {
            document.getElementById("guyana").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "haiti" || countryinput.value.toLowerCase() == "haiti " || countryinput.value.toLowerCase() == " haiti" || countryinput.value.toLowerCase() == " haiti ") {
        if (window.getComputedStyle(document.getElementById("haiti")).display == "none") {
            document.getElementById("haiti").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "honduras" || countryinput.value.toLowerCase() == "honduras " || countryinput.value.toLowerCase() == " honduras" || countryinput.value.toLowerCase() == " honduras ") {
        if (window.getComputedStyle(document.getElementById("honduras")).display == "none") {
            document.getElementById("honduras").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "hungary" || countryinput.value.toLowerCase() == "hungary " || countryinput.value.toLowerCase() == " hungary" || countryinput.value.toLowerCase() == " hungary ") {
        if (window.getComputedStyle(document.getElementById("hungary")).display == "none") {
            document.getElementById("hungary").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "iceland" || countryinput.value.toLowerCase() == "iceland " || countryinput.value.toLowerCase() == " iceland" || countryinput.value.toLowerCase() == " iceland ") {
        if (window.getComputedStyle(document.getElementById("iceland")).display == "none") {
            document.getElementById("iceland").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "india" || countryinput.value.toLowerCase() == "india " || countryinput.value.toLowerCase() == " india" || countryinput.value.toLowerCase() == " india ") {
        if (window.getComputedStyle(document.getElementById("india")).display == "none") {
            document.getElementById("india").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "indonesia" || countryinput.value.toLowerCase() == "indonesia " || countryinput.value.toLowerCase() == " indonesia" || countryinput.value.toLowerCase() == " indonesia ") {
        if (window.getComputedStyle(document.getElementById("indonesia")).display == "none") {
            document.getElementById("indonesia").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "iran" || countryinput.value.toLowerCase() == "iran " || countryinput.value.toLowerCase() == " iran" || countryinput.value.toLowerCase() == " iran ") {
        if (window.getComputedStyle(document.getElementById("iran")).display == "none") {
            document.getElementById("iran").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "iraq" || countryinput.value.toLowerCase() == "iraq " || countryinput.value.toLowerCase() == " iraq" || countryinput.value.toLowerCase() == " iraq ") {
        if (window.getComputedStyle(document.getElementById("iraq")).display == "none") {
            document.getElementById("iraq").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "ireland" || countryinput.value.toLowerCase() == "ireland " || countryinput.value.toLowerCase() == " ireland" || countryinput.value.toLowerCase() == " ireland ") {
        if (window.getComputedStyle(document.getElementById("LilyLand")).display == "none") {
            document.getElementById("LilyLand").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "israel" || countryinput.value.toLowerCase() == "israel " || countryinput.value.toLowerCase() == " israel" || countryinput.value.toLowerCase() == " israel ") {
        if (window.getComputedStyle(document.getElementById("israel")).display == "none") {
            document.getElementById("israel").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "italy" || countryinput.value.toLowerCase() == "italy " || countryinput.value.toLowerCase() == " italy" || countryinput.value.toLowerCase() == " italy ") {
        if (window.getComputedStyle(document.getElementById("italy")).display == "none") {
            document.getElementById("italy").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "jamaica" || countryinput.value.toLowerCase() == "jamaica " || countryinput.value.toLowerCase() == " jamaica" || countryinput.value.toLowerCase() == " jamaica ") {
        if (window.getComputedStyle(document.getElementById("jamaica")).display == "none") {
            document.getElementById("jamaica").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "japan" || countryinput.value.toLowerCase() == "japan " || countryinput.value.toLowerCase() == " japan" || countryinput.value.toLowerCase() == " japan ") {
        if (window.getComputedStyle(document.getElementById("japan")).display == "none") {
            document.getElementById("japan").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "jordan" || countryinput.value.toLowerCase() == "jordan " || countryinput.value.toLowerCase() == " jordan" || countryinput.value.toLowerCase() == " jordan ") {
        if (window.getComputedStyle(document.getElementById("jordan")).display == "none") {
            document.getElementById("jordan").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "kazakhstan" || countryinput.value.toLowerCase() == "kazakhstan " || countryinput.value.toLowerCase() == " kazakhstan" || countryinput.value.toLowerCase() == " kazakhstan ") {
        if (window.getComputedStyle(document.getElementById("kazakhstan")).display == "none") {
            document.getElementById("kazakhstan").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "kenya" || countryinput.value.toLowerCase() == "kenya " || countryinput.value.toLowerCase() == " kenya" || countryinput.value.toLowerCase() == " kenya ") {
        if (window.getComputedStyle(document.getElementById("kenya")).display == "none") {
            document.getElementById("kenya").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "kiribati" || countryinput.value.toLowerCase() == "kiribati " || countryinput.value.toLowerCase() == " kiribati" || countryinput.value.toLowerCase() == " kiribati ") {
        if (window.getComputedStyle(document.getElementById("kiribati")).display == "none") {
            document.getElementById("kiribati").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "kuwait" || countryinput.value.toLowerCase() == "kuwait " || countryinput.value.toLowerCase() == " kuwait" || countryinput.value.toLowerCase() == " kuwait ") {
        if (window.getComputedStyle(document.getElementById("kuwait")).display == "none") {
            document.getElementById("kuwait").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "kyrgyzstan" || countryinput.value.toLowerCase() == "kyrgyzstan " || countryinput.value.toLowerCase() == " kyrgyzstan" || countryinput.value.toLowerCase() == " kyrgyzstan ") {
        if (window.getComputedStyle(document.getElementById("kyrgyzstan")).display == "none") {
            document.getElementById("kyrgyzstan").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "laos" || countryinput.value.toLowerCase() == "laos " || countryinput.value.toLowerCase() == " laos" || countryinput.value.toLowerCase() == " laos ") {
        if (window.getComputedStyle(document.getElementById("laos")).display == "none") {
            document.getElementById("laos").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "latvia" || countryinput.value.toLowerCase() == "latvia " || countryinput.value.toLowerCase() == " latvia" || countryinput.value.toLowerCase() == " latvia ") {
        if (window.getComputedStyle(document.getElementById("latvia")).display == "none") {
            document.getElementById("latvia").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "lebanon" || countryinput.value.toLowerCase() == "lebanon " || countryinput.value.toLowerCase() == " lebanon" || countryinput.value.toLowerCase() == " lebanon ") {
        if (window.getComputedStyle(document.getElementById("lebanon")).display == "none") {
            document.getElementById("lebanon").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "lesotho" || countryinput.value.toLowerCase() == "lesotho " || countryinput.value.toLowerCase() == " lesotho" || countryinput.value.toLowerCase() == " lesotho ") {
        if (window.getComputedStyle(document.getElementById("lesotho")).display == "none") {
            document.getElementById("lesotho").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "liberia" || countryinput.value.toLowerCase() == "liberia " || countryinput.value.toLowerCase() == " liberia" || countryinput.value.toLowerCase() == " liberia ") {
        if (window.getComputedStyle(document.getElementById("liberia")).display == "none") {
            document.getElementById("liberia").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "libya" || countryinput.value.toLowerCase() == "libya " || countryinput.value.toLowerCase() == " libya" || countryinput.value.toLowerCase() == " libya ") {
        if (window.getComputedStyle(document.getElementById("libya")).display == "none") {
            document.getElementById("libya").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "liechtenstein" || countryinput.value.toLowerCase() == "liechtenstein " || countryinput.value.toLowerCase() == " liechtenstein" || countryinput.value.toLowerCase() == " liechtenstein ") {
        if (window.getComputedStyle(document.getElementById("liechtenstein")).display == "none") {
            document.getElementById("liechtenstein").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "lithuania" || countryinput.value.toLowerCase() == "lithuania " || countryinput.value.toLowerCase() == " lithuania" || countryinput.value.toLowerCase() == " lithuania ") {
        if (window.getComputedStyle(document.getElementById("lithuania")).display == "none") {
            document.getElementById("lithuania").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "luxembourg" || countryinput.value.toLowerCase() == "luxembourg " || countryinput.value.toLowerCase() == " luxembourg" || countryinput.value.toLowerCase() == " luxembourg ") {
        if (window.getComputedStyle(document.getElementById("luxembourg")).display == "none") {
            document.getElementById("luxembourg").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "madagascar" || countryinput.value.toLowerCase() == "madagascar " || countryinput.value.toLowerCase() == " madagascar" || countryinput.value.toLowerCase() == " madagascar ") {
        if (window.getComputedStyle(document.getElementById("madagascar")).display == "none") {
            document.getElementById("madagascar").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "malawi" || countryinput.value.toLowerCase() == "malawi " || countryinput.value.toLowerCase() == " malawi" || countryinput.value.toLowerCase() == " malawi ") {
        if (window.getComputedStyle(document.getElementById("malawi")).display == "none") {
            document.getElementById("malawi").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "malaysia" || countryinput.value.toLowerCase() == " malaysia" || countryinput.value.toLowerCase() == "malaysia " || countryinput.value.toLowerCase() == " malaysia ") {
        if (window.getComputedStyle(document.getElementById("malaysia")).display == "none") {
            document.getElementById("malaysia").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "maldives" || countryinput.value.toLowerCase() == "maldives " || countryinput.value.toLowerCase() == " maldives" || countryinput.value.toLowerCase() == " maldives ") {
        if (window.getComputedStyle(document.getElementById("maldives")).display == "none") {
            document.getElementById("maldives").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "mali" || countryinput.value.toLowerCase() == "mali " || countryinput.value.toLowerCase() == " mali" || countryinput.value.toLowerCase() == " mali ") {
        if (window.getComputedStyle(document.getElementById("mali")).display == "none") {
            document.getElementById("mali").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "malta" || countryinput.value.toLowerCase() == "malta " || countryinput.value.toLowerCase() == " malta" || countryinput.value.toLowerCase() == " malta ") {
        if (window.getComputedStyle(document.getElementById("malta")).display == "none") {
            document.getElementById("malta").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "marshall islands" || countryinput.value.toLowerCase() == "marshall islands " || countryinput.value.toLowerCase() == " marshall islands" || countryinput.value.toLowerCase() == " marshall islands ") {
        if (window.getComputedStyle(document.getElementById("marshallislands")).display == "none") {
            document.getElementById("marshallislands").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "mauritania" || countryinput.value.toLowerCase() == " mauritania" || countryinput.value.toLowerCase() == "mauritania " || countryinput.value.toLowerCase() == " mauritania ") {
        if (window.getComputedStyle(document.getElementById("mauritania")).display == "none") {
            document.getElementById("mauritania").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "mauritius" || countryinput.value.toLowerCase() == "mauritius " || countryinput.value.toLowerCase() == " mauritius" || countryinput.value.toLowerCase() == " mauritius ") {
        if (window.getComputedStyle(document.getElementById("mauritius")).display == "none") {
            document.getElementById("mauritius").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "mexico" || countryinput.value.toLowerCase() == "mexico " || countryinput.value.toLowerCase() == " mexico" || countryinput.value.toLowerCase() == " mexico ") {
        if (window.getComputedStyle(document.getElementById("mexico")).display == "none") {
            document.getElementById("mexico").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "micronesia" || countryinput.value.toLowerCase() == "micronesia " || countryinput.value.toLowerCase() == " micronesia" || countryinput.value.toLowerCase() == " micronesia ") {
        if (window.getComputedStyle(document.getElementById("micronesia")).display == "none") {
            document.getElementById("micronesia").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "moldova" || countryinput.value.toLowerCase() == "moldova " || countryinput.value.toLowerCase() == " moldova" || countryinput.value.toLowerCase() == " moldova ") {
        if (window.getComputedStyle(document.getElementById("moldova")).display == "none") {
            document.getElementById("moldova").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "monaco" || countryinput.value.toLowerCase() == "monaco " || countryinput.value.toLowerCase() == " monaco" || countryinput.value.toLowerCase() == " monaco ") {
        if (window.getComputedStyle(document.getElementById("monaco")).display == "none") {
            document.getElementById("monaco").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "mongolia" || countryinput.value.toLowerCase() == "mongolia " || countryinput.value.toLowerCase() == " mongolia" || countryinput.value.toLowerCase() == " mongolia ") {
        if (window.getComputedStyle(document.getElementById("mongolia")).display == "none") {
            document.getElementById("mongolia").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "montenegro" || countryinput.value.toLowerCase() == "montenegro " || countryinput.value.toLowerCase() == " montenegro" || countryinput.value.toLowerCase() == " montenegro ") {
        if (window.getComputedStyle(document.getElementById("montenegro")).display == "none") {
            document.getElementById("montenegro").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "morocco" || countryinput.value.toLowerCase() == "morocco " || countryinput.value.toLowerCase() == " morocco" || countryinput.value.toLowerCase() == " morocco ") {
        if (window.getComputedStyle(document.getElementById("morocco")).display == "none") {
            document.getElementById("morocco").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "mozambique" || countryinput.value.toLowerCase() == "mozambique " || countryinput.value.toLowerCase() == " mozambique" || countryinput.value.toLowerCase() == " mozambique ") {
        if (window.getComputedStyle(document.getElementById("mozambique")).display == "none") {
            document.getElementById("mozambique").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "myanmar" || countryinput.value.toLowerCase() == "myanmar " || countryinput.value.toLowerCase() == " myanmar" || countryinput.value.toLowerCase() == " myanmar " || countryinput.value.toLowerCase() == "burma" || countryinput.value.toLowerCase() == "burma " || countryinput.value.toLowerCase() == " burma" || countryinput.value.toLowerCase() == " burma ") {
        if (window.getComputedStyle(document.getElementById("myanmar")).display == "none") {
            document.getElementById("myanmar").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "namibia" || countryinput.value.toLowerCase() == "namibia " || countryinput.value.toLowerCase() == " namibia" || countryinput.value.toLowerCase() == " namibia ") {
        if (window.getComputedStyle(document.getElementById("namibia")).display == "none") {
            document.getElementById("namibia").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "nauru" || countryinput.value.toLowerCase() == "nauru " || countryinput.value.toLowerCase() == " nauru" || countryinput.value.toLowerCase() == " nauru ") {
        if (window.getComputedStyle(document.getElementById("nauru")).display == "none") {
            document.getElementById("nauru").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "nepal" || countryinput.value.toLowerCase() == "nepal " || countryinput.value.toLowerCase() == " nepal" || countryinput.value.toLowerCase() == " nepal ") {
        if (window.getComputedStyle(document.getElementById("nepal")).display == "none") {
            document.getElementById("nepal").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "netherlands" || countryinput.value.toLowerCase() == "netherlands " || countryinput.value.toLowerCase() == " netherlands" || countryinput.value.toLowerCase() == " netherlands " || countryinput.value.toLowerCase() == "the netherlands" || countryinput.value.toLowerCase() == "the netherlands " || countryinput.value.toLowerCase() == " the netherlands" || countryinput.value.toLowerCase() == " the netherlands ") {
        if (window.getComputedStyle(document.getElementById("netherlands")).display == "none") {
            document.getElementById("netherlands").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "new zealand" || countryinput.value.toLowerCase() == "new zealand " || countryinput.value.toLowerCase() == " new zealand" || countryinput.value.toLowerCase() == " new zealand ") {
        if (window.getComputedStyle(document.getElementById("newZealand")).display == "none") {
            document.getElementById("newZealand").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "nicaragua" || countryinput.value.toLowerCase() == "nicaragua " || countryinput.value.toLowerCase() == " nicaragua" || countryinput.value.toLowerCase() == " nicaragua ") {
        if (window.getComputedStyle(document.getElementById("nicaragua")).display == "none") {
            document.getElementById("nicaragua").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "niger" || countryinput.value.toLowerCase() == "niger " || countryinput.value.toLowerCase() == " niger" || countryinput.value.toLowerCase() == " niger ") {
        if (window.getComputedStyle(document.getElementById("niger")).display == "none") {
            document.getElementById("niger").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "nigeria" || countryinput.value.toLowerCase() == "nigeria " || countryinput.value.toLowerCase() == " nigeria" || countryinput.value.toLowerCase() == " nigeria ") {
        if (window.getComputedStyle(document.getElementById("nigeria")).display == "none") {
            document.getElementById("nigeria").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "north korea" || countryinput.value.toLowerCase() == "north korea " || countryinput.value.toLowerCase() == " north korea" || countryinput.value.toLowerCase() == " north korea " || countryinput.value.toLowerCase() == "dprk" || countryinput.value.toLowerCase() == " dprk" || countryinput.value.toLowerCase() == "dprk " || countryinput.value.toLowerCase() == " dprk ") {
        if (window.getComputedStyle(document.getElementById("nKorea")).display == "none") {
            document.getElementById("nKorea").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "north macedonia" || countryinput.value.toLowerCase() == "north macedonia " || countryinput.value.toLowerCase() == " north macedonia" || countryinput.value.toLowerCase() == " north macedonia " || countryinput.value.toLowerCase() == "macedonia" || countryinput.value.toLowerCase() == " macedonia" || countryinput.value.toLowerCase() == "macedonia " || countryinput.value.toLowerCase() == " macedonia ") {
        if (window.getComputedStyle(document.getElementById("nMacedonia")).display == "none") {
            document.getElementById("nMacedonia").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "norway" || countryinput.value.toLowerCase() == "norway " || countryinput.value.toLowerCase() == " norway" || countryinput.value.toLowerCase() == " norway ") {
        if (window.getComputedStyle(document.getElementById("norway")).display == "none") {
            document.getElementById("norway").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "oman" || countryinput.value.toLowerCase() == "oman " || countryinput.value.toLowerCase() == " oman" || countryinput.value.toLowerCase() == " oman ") {
        if (window.getComputedStyle(document.getElementById("oman")).display == "none") {
            document.getElementById("oman").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "pakistan" || countryinput.value.toLowerCase() == "pakistan " || countryinput.value.toLowerCase() == " pakistan" || countryinput.value.toLowerCase() == " pakistan ") {
        if (window.getComputedStyle(document.getElementById("pakistan")).display == "none") {
            document.getElementById("pakistan").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "palau" || countryinput.value.toLowerCase() == "palau " || countryinput.value.toLowerCase() == " palau" || countryinput.value.toLowerCase() == " palau ") {
        if (window.getComputedStyle(document.getElementById("palau")).display == "none") {
            document.getElementById("palau").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "palestine" || countryinput.value.toLowerCase() == "palestine " || countryinput.value.toLowerCase() == " palestine" || countryinput.value.toLowerCase() == " palestine ") {
        if (window.getComputedStyle(document.getElementById("palestine")).display == "none") {
            document.getElementById("palestine").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "panama" || countryinput.value.toLowerCase() == "panama " || countryinput.value.toLowerCase() == " panama" || countryinput.value.toLowerCase() == " panama ") {
        if (window.getComputedStyle(document.getElementById("panama")).display == "none") {
            document.getElementById("panama").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "papua new guinea" || countryinput.value.toLowerCase() == "papua new guinea " || countryinput.value.toLowerCase() == " papua new guinea" || countryinput.value.toLowerCase() == " papua new guinea ") {
        if (window.getComputedStyle(document.getElementById("png")).display == "none") {
            document.getElementById("png").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "paraguay" || countryinput.value.toLowerCase() == "paraguay " || countryinput.value.toLowerCase() == " paraguay" || countryinput.value.toLowerCase() == " paraguay ") {
        if (window.getComputedStyle(document.getElementById("paraguay")).display == "none") {
            document.getElementById("paraguay").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "peru" || countryinput.value.toLowerCase() == "peru " || countryinput.value.toLowerCase() == " peru" || countryinput.value.toLowerCase() == " peru ") {
        if (window.getComputedStyle(document.getElementById("peru")).display == "none") {
            document.getElementById("peru").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }    
    if (countryinput.value.toLowerCase() == "philippines" || countryinput.value.toLowerCase() == "philippines " || countryinput.value.toLowerCase() == " philippines" || countryinput.value.toLowerCase() == " philippines " || countryinput.value.toLowerCase() == "the philippines" || countryinput.value.toLowerCase() == "the philippines " || countryinput.value.toLowerCase() == " the philippines" || countryinput.value.toLowerCase() == " the philippines ") {
        if (window.getComputedStyle(document.getElementById("philippines")).display == "none") {
            document.getElementById("philippines").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "poland" || countryinput.value.toLowerCase() == "poland " || countryinput.value.toLowerCase() == " poland" || countryinput.value.toLowerCase() == " poland ") {
        if (window.getComputedStyle(document.getElementById("poland")).display == "none") {
            document.getElementById("poland").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "portugal" || countryinput.value.toLowerCase() == "portugal " || countryinput.value.toLowerCase() == " portugal" || countryinput.value.toLowerCase() == " portugal ") {
        if (window.getComputedStyle(document.getElementById("portugal")).display == "none") {
            document.getElementById("portugal").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "qatar" || countryinput.value.toLowerCase() == "qatar " || countryinput.value.toLowerCase() == " qatar" || countryinput.value.toLowerCase() == " qatar ") {
        if (window.getComputedStyle(document.getElementById("qatar")).display == "none") {
            document.getElementById("qatar").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "romania" || countryinput.value.toLowerCase() == "romania " || countryinput.value.toLowerCase() == " romania" || countryinput.value.toLowerCase() == " romania ") {
        if (window.getComputedStyle(document.getElementById("romania")).display == "none") {
            document.getElementById("romania").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "russia" || countryinput.value.toLowerCase() == "russia " || countryinput.value.toLowerCase() == " russia" || countryinput.value.toLowerCase() == " russia ") {
        if (window.getComputedStyle(document.getElementById("russia")).display == "none") {
            document.getElementById("russia").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "rwanda" || countryinput.value.toLowerCase() == "rwanda " || countryinput.value.toLowerCase() == " rwanda" || countryinput.value.toLowerCase() == " rwanda ") {
        if (window.getComputedStyle(document.getElementById("rwanda")).display == "none") {
            document.getElementById("rwanda").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "samoa" || countryinput.value.toLowerCase() == "samoa " || countryinput.value.toLowerCase() == " samoa" || countryinput.value.toLowerCase() == " samoa ") {
        if (window.getComputedStyle(document.getElementById("samoa")).display == "none") {
            document.getElementById("samoa").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "san marino" || countryinput.value.toLowerCase() == "san marino " || countryinput.value.toLowerCase() == " san marino" || countryinput.value.toLowerCase() == " san marino ") {
        if (window.getComputedStyle(document.getElementById("sanMarino")).display == "none") {
            document.getElementById("sanMarino").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "são tomé and príncipe" || countryinput.value.toLowerCase() == "são tomé and príncipe " || countryinput.value.toLowerCase() == " são tomé and príncipe" || countryinput.value.toLowerCase() == " são tomé and príncipe " || countryinput.value.toLowerCase() == "sao tome and principe" || countryinput.value.toLowerCase() == "sao tome and principe " || countryinput.value.toLowerCase() == " sao tome and principe" || countryinput.value.toLowerCase() == " sao tome and principe ") {
        if (window.getComputedStyle(document.getElementById("saoTomePrincipe")).display == "none") {
            document.getElementById("saoTomePrincipe").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "saudi arabia" || countryinput.value.toLowerCase() == "saudi arabia " || countryinput.value.toLowerCase() == " saudi arabia" || countryinput.value.toLowerCase() == " saudi arabia ") {
        if (window.getComputedStyle(document.getElementById("saudiArabia")).display == "none") {
            document.getElementById("saudiArabia").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "senegal" || countryinput.value.toLowerCase() == "senegal " || countryinput.value.toLowerCase() == " senegal" || countryinput.value.toLowerCase() == " senegal ") {
        if (window.getComputedStyle(document.getElementById("senegal")).display == "none") {
            document.getElementById("senegal").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "serbia" || countryinput.value.toLowerCase() == "serbia " || countryinput.value.toLowerCase() == " serbia" || countryinput.value.toLowerCase() == " serbia ") {
        if (window.getComputedStyle(document.getElementById("serbia")).display == "none") {
            document.getElementById("serbia").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "seychelles" || countryinput.value.toLowerCase() == "seychelles " || countryinput.value.toLowerCase() == " seychelles" || countryinput.value.toLowerCase() == " seychelles ") {
        if (window.getComputedStyle(document.getElementById("seychelles")).display == "none") {
            document.getElementById("seychelles").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "sierra leone" || countryinput.value.toLowerCase() == "sierra leone " || countryinput.value.toLowerCase() == " sierra leone" || countryinput.value.toLowerCase() == " sierra leone ") {
        if (window.getComputedStyle(document.getElementById("sierraLeone")).display == "none") {
            document.getElementById("sierraLeone").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "singapore" || countryinput.value.toLowerCase() == "singapore " || countryinput.value.toLowerCase() == " singapore" || countryinput.value.toLowerCase() == " singapore ") {
        if (window.getComputedStyle(document.getElementById("singapore")).display == "none") {
            document.getElementById("singapore").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "slovakia" || countryinput.value.toLowerCase() == "slovakia " || countryinput.value.toLowerCase() == " slovakia" || countryinput.value.toLowerCase() == " slovakia ") {
        if (window.getComputedStyle(document.getElementById("slovakia")).display == "none") {
            document.getElementById("slovakia").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "slovenia" || countryinput.value.toLowerCase() == "slovenia " || countryinput.value.toLowerCase() == " slovenia" || countryinput.value.toLowerCase() == " slovenia ") {
        if (window.getComputedStyle(document.getElementById("slovenia")).display == "none") {
            document.getElementById("slovenia").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "solomon islands" || countryinput.value.toLowerCase() == "solomon islands " || countryinput.value.toLowerCase() == " solomon islands" || countryinput.value.toLowerCase() == " solomon islands ") {
        if (window.getComputedStyle(document.getElementById("solomonislands")).display == "none") {
            document.getElementById("solomonislands").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "somalia" || countryinput.value.toLowerCase() == "somalia " || countryinput.value.toLowerCase() == " somalia" || countryinput.value.toLowerCase() == " somalia ") {
        if (window.getComputedStyle(document.getElementById("somalia")).display == "none") {
            document.getElementById("somalia").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "south africa" || countryinput.value.toLowerCase() == "south africa " || countryinput.value.toLowerCase() == " south africa" || countryinput.value.toLowerCase() == " south africa ") {
        if (window.getComputedStyle(document.getElementById("sAfrica")).display == "none") {
            document.getElementById("sAfrica").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "south korea" || countryinput.value.toLowerCase() == "south korea " || countryinput.value.toLowerCase() == " south korea" || countryinput.value.toLowerCase() == " south korea ") {
        if (window.getComputedStyle(document.getElementById("sKorea")).display == "none") {
            document.getElementById("sKorea").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "south sudan" || countryinput.value.toLowerCase() == "south sudan " || countryinput.value.toLowerCase() == " south sudan" || countryinput.value.toLowerCase() == " south sudan ") {
        if (window.getComputedStyle(document.getElementById("sSudan")).display == "none") {
            document.getElementById("sSudan").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "spain" || countryinput.value.toLowerCase() == "spain " || countryinput.value.toLowerCase() == " spain" || countryinput.value.toLowerCase() == " spain ") {
        if (window.getComputedStyle(document.getElementById("spain")).display == "none") {
            document.getElementById("spain").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "sri lanka" || countryinput.value.toLowerCase() == "sri lanka " || countryinput.value.toLowerCase() == " sri lanka" || countryinput.value.toLowerCase() == " sri lanka ") {
        if (window.getComputedStyle(document.getElementById("sriLanka")).display == "none") {
            document.getElementById("sriLanka").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "st kitts and nevis" || countryinput.value.toLowerCase() == "st kitts and nevis " || countryinput.value.toLowerCase() == " st kitts and nevis" || countryinput.value.toLowerCase() == " st kitts and nevis " || countryinput.value.toLowerCase() == "saint kitts and nevis" || countryinput.value.toLowerCase() == "saint kitts and nevis " || countryinput.value.toLowerCase() == " saint kitts and nevis" || countryinput.value.toLowerCase() == " saint kitts and nevis ") {
        if (window.getComputedStyle(document.getElementById("saintKittsNevis")).display == "none") {
            document.getElementById("saintKittsNevis").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "st lucia" || countryinput.value.toLowerCase() == "st lucia " || countryinput.value.toLowerCase() == " st lucia" || countryinput.value.toLowerCase() == " st lucia " || countryinput.value.toLowerCase() == "saint lucia" || countryinput.value.toLowerCase() == "saint lucia " || countryinput.value.toLowerCase() == " saint lucia" || countryinput.value.toLowerCase() == " saint lucia ") {
        if (window.getComputedStyle(document.getElementById("stLucia")).display == "none") {
            document.getElementById("stLucia").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "st vincent" || countryinput.value.toLowerCase() == "st vincent " || countryinput.value.toLowerCase() == " st vincent" || countryinput.value.toLowerCase() == " st vincent " || countryinput.value.toLowerCase() == "saint vincent" || countryinput.value.toLowerCase() == " saint vincent" || countryinput.value.toLowerCase() == "saint vincent " || countryinput.value.toLowerCase() == " saint vincent " || countryinput.value.toLowerCase() == "st vincent and the grenadines" || countryinput.value.toLowerCase() == "st vincent and the grenadines " || countryinput.value.toLowerCase() == " st vincent and the grenadines" || countryinput.value.toLowerCase() == " st vincent and the grenadines " || countryinput.value.toLowerCase() == "saint vincent and the grenadines" || countryinput.value.toLowerCase() == " saint vincent and the grenadines" || countryinput.value.toLowerCase() == "saint vincent and the grenadines " || countryinput.value.toLowerCase() == " saint vincent and the grenadines ") {
        if (window.getComputedStyle(document.getElementById("stVincent")).display == "none") {
            document.getElementById("stVincent").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "sudan" || countryinput.value.toLowerCase() == "sudan " || countryinput.value.toLowerCase() == " sudan" || countryinput.value.toLowerCase() == " sudan ") {
        if (window.getComputedStyle(document.getElementById("sudan")).display == "none") {
            document.getElementById("sudan").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "suriname" || countryinput.value.toLowerCase() == "suriname " || countryinput.value.toLowerCase() == " suriname" || countryinput.value.toLowerCase() == " suriname ") {
        if (window.getComputedStyle(document.getElementById("suriname")).display == "none") {
            document.getElementById("suriname").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "sweden" || countryinput.value.toLowerCase() == "sweden " || countryinput.value.toLowerCase() == " sweden" || countryinput.value.toLowerCase() == " sweden ") {
        if (window.getComputedStyle(document.getElementById("sweden")).display == "none") {
            document.getElementById("sweden").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "switzerland" || countryinput.value.toLowerCase() == "switzerland " || countryinput.value.toLowerCase() == " switzerland" || countryinput.value.toLowerCase() == " switzerland ") {
        if (window.getComputedStyle(document.getElementById("switzerland")).display == "none") {
            document.getElementById("switzerland").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "syria" || countryinput.value.toLowerCase() == "syria " || countryinput.value.toLowerCase() == " syria" || countryinput.value.toLowerCase() == " syria ") {
        if (window.getComputedStyle(document.getElementById("syria")).display == "none") {
            document.getElementById("syria").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "tajikistan" || countryinput.value.toLowerCase() == "tajikistan " || countryinput.value.toLowerCase() == " tajikistan" || countryinput.value.toLowerCase() == " tajikistan ") {
        if (window.getComputedStyle(document.getElementById("tajikistan")).display == "none") {
            document.getElementById("tajikistan").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "tanzania" || countryinput.value.toLowerCase() == "tanzania " || countryinput.value.toLowerCase() == " tanzania" || countryinput.value.toLowerCase() == " tanzania ") {
        if (window.getComputedStyle(document.getElementById("tanzania")).display == "none") {
            document.getElementById("tanzania").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "thailand" || countryinput.value.toLowerCase() == "thailand " || countryinput.value.toLowerCase() == " thailand" || countryinput.value.toLowerCase() == " thailand ") {
        if (window.getComputedStyle(document.getElementById("thailand")).display == "none") {
            document.getElementById("thailand").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "timor-leste" || countryinput.value.toLowerCase() == "timor-leste " || countryinput.value.toLowerCase() == " timor-leste" || countryinput.value.toLowerCase() == " timor-leste " || countryinput.value.toLowerCase() == "timor leste" || countryinput.value.toLowerCase() == "timor leste " || countryinput.value.toLowerCase() == " timor leste" || countryinput.value.toLowerCase() == " timor leste " || countryinput.value.toLowerCase() == "east timor" || countryinput.value.toLowerCase() == "east timor " || countryinput.value.toLowerCase() == " east timor" || countryinput.value.toLowerCase() == " east timor ") {
        if (window.getComputedStyle(document.getElementById("timorLeste")).display == "none") {
            document.getElementById("timorLeste").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "togo" || countryinput.value.toLowerCase() == "togo " || countryinput.value.toLowerCase() == " togo" || countryinput.value.toLowerCase() == " togo ") {
        if (window.getComputedStyle(document.getElementById("togo")).display == "none") {
            document.getElementById("togo").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "tonga" || countryinput.value.toLowerCase() == "tonga " || countryinput.value.toLowerCase() == " tonga" || countryinput.value.toLowerCase() == " tonga ") {
        if (window.getComputedStyle(document.getElementById("tonga")).display == "none") {
            document.getElementById("tonga").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "trinidad and tobago" || countryinput.value.toLowerCase() == "trinidad and tobago " || countryinput.value.toLowerCase() == " trinidad and tobago" || countryinput.value.toLowerCase() == " trinidad and tobago ") {
        if (window.getComputedStyle(document.getElementById("trinidadTobago")).display == "none") {
            document.getElementById("trinidadTobago").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "tunisia" || countryinput.value.toLowerCase() == "tunisia " || countryinput.value.toLowerCase() == " tunisia" || countryinput.value.toLowerCase() == " tunisia ") {
        if (window.getComputedStyle(document.getElementById("tunisia")).display == "none") {
            document.getElementById("tunisia").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "turkey" || countryinput.value.toLowerCase() == "turkey " || countryinput.value.toLowerCase() == " turkey" || countryinput.value.toLowerCase() == " turkey ") {
        if (window.getComputedStyle(document.getElementById("turkey")).display == "none") {
            document.getElementById("turkey").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "turkmenistan" || countryinput.value.toLowerCase() == "turkmenistan " || countryinput.value.toLowerCase() == " turkmenistan" || countryinput.value.toLowerCase() == " turkmenistan ") {
        if (window.getComputedStyle(document.getElementById("turkmenistan")).display == "none") {
            document.getElementById("turkmenistan").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "tuvalu" || countryinput.value.toLowerCase() == "tuvalu " || countryinput.value.toLowerCase() == " tuvalu" || countryinput.value.toLowerCase() == " tuvalu ") {
        if (window.getComputedStyle(document.getElementById("tuvalu")).display == "none") {
            document.getElementById("tuvalu").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "uganda" || countryinput.value.toLowerCase() == "uganda " || countryinput.value.toLowerCase() == " uganda" || countryinput.value.toLowerCase() == " uganda ") {
        if (window.getComputedStyle(document.getElementById("uganda")).display == "none") {
            document.getElementById("uganda").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "ukraine" || countryinput.value.toLowerCase() == "ukraine " || countryinput.value.toLowerCase() == " ukraine" || countryinput.value.toLowerCase() == " ukraine ") {
        if (window.getComputedStyle(document.getElementById("ukraine")).display == "none") {
            document.getElementById("ukraine").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "uae" || countryinput.value.toLowerCase() == "uae " || countryinput.value.toLowerCase() == " uae" || countryinput.value.toLowerCase() == " uae " || countryinput.value.toLowerCase() == "united arab emirates" || countryinput.value.toLowerCase() == "united arab emirates " || countryinput.value.toLowerCase() == " united arab emirates" || countryinput.value.toLowerCase() == " united arab emirates ") {
        if (window.getComputedStyle(document.getElementById("uae")).display == "none") {
            document.getElementById("uae").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "uk" || countryinput.value.toLowerCase() == "uk " || countryinput.value.toLowerCase() == " uk" || countryinput.value.toLowerCase() == " uk " || countryinput.value.toLowerCase() == "united kingdom" || countryinput.value.toLowerCase() == "united kingdom " || countryinput.value.toLowerCase() == " united kingdom" || countryinput.value.toLowerCase() == " united kingdom ") {
        if (window.getComputedStyle(document.getElementById("uk")).display == "none") {
            document.getElementById("uk").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "usa" || countryinput.value.toLowerCase() == "usa " || countryinput.value.toLowerCase() == " usa" || countryinput.value.toLowerCase() == " usa " || countryinput.value.toLowerCase() == "us" || countryinput.value.toLowerCase() == "us " || countryinput.value.toLowerCase() == " us" || countryinput.value.toLowerCase() == " us " || countryinput.value.toLowerCase() == "united states" || countryinput.value.toLowerCase() == "united states " || countryinput.value.toLowerCase() == " united states" || countryinput.value.toLowerCase() == " united states " || countryinput.value.toLowerCase() == "america" || countryinput.value.toLowerCase() == " america" || countryinput.value.toLowerCase() == "america " || countryinput.value.toLowerCase() == " america " || countryinput.value.toLowerCase() == "united states of america" || countryinput.value.toLowerCase() == "united states of america " || countryinput.value.toLowerCase() == " united states of america" || countryinput.value.toLowerCase() == " united states of america ") {
        if (window.getComputedStyle(document.getElementById("usa")).display == "none") {
            document.getElementById("usa").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "uruguay" || countryinput.value.toLowerCase() == "uruguay " || countryinput.value.toLowerCase() == " uruguay" || countryinput.value.toLowerCase() == " uruguay ") {
        if (window.getComputedStyle(document.getElementById("uruguay")).display == "none") {
            document.getElementById("uruguay").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "uzbekistan" || countryinput.value.toLowerCase() == "uzbekistan " || countryinput.value.toLowerCase() == " uzbekistan" || countryinput.value.toLowerCase() == " uzbekistan ") {
        if (window.getComputedStyle(document.getElementById("uzbekistan")).display == "none") {
            document.getElementById("uzbekistan").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "vanuatu" || countryinput.value.toLowerCase() == "vanuatu " || countryinput.value.toLowerCase() == " vanuatu" || countryinput.value.toLowerCase() == " vanuatu ") {
        if (window.getComputedStyle(document.getElementById("vanuatu")).display == "none") {
            document.getElementById("vanuatu").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "vatican" || countryinput.value.toLowerCase() == "vatican " || countryinput.value.toLowerCase() == " vatican" || countryinput.value.toLowerCase() == " vatican " || countryinput.value.toLowerCase() == "vatican city" || countryinput.value.toLowerCase() == "vatican city " || countryinput.value.toLowerCase() == " vatican city" || countryinput.value.toLowerCase() == " vatican city " || countryinput.value.toLowerCase() == "holy see" || countryinput.value.toLowerCase() == "holy see " || countryinput.value.toLowerCase() == " holy see" || countryinput.value.toLowerCase() == " holy see ") {
        if (window.getComputedStyle(document.getElementById("vatican")).display == "none") {
            document.getElementById("vatican").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "venezuela" || countryinput.value.toLowerCase() == "venezuela " || countryinput.value.toLowerCase() == " venezuela" || countryinput.value.toLowerCase() == " venezuela ") {
        if (window.getComputedStyle(document.getElementById("venezuela")).display == "none") {
            document.getElementById("venezuela").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "vietnam" || countryinput.value.toLowerCase() == "vietnam " || countryinput.value.toLowerCase() == " vietnam" || countryinput.value.toLowerCase() == " vietnam ") {
        if (window.getComputedStyle(document.getElementById("vietnam")).display == "none") {
            document.getElementById("vietnam").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "yemen" || countryinput.value.toLowerCase() == "yemen " || countryinput.value.toLowerCase() == " yemen" || countryinput.value.toLowerCase() == " yemen ") {
        if (window.getComputedStyle(document.getElementById("yemen")).display == "none") {
            document.getElementById("yemen").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    if (countryinput.value.toLowerCase() == "zambia" || countryinput.value.toLowerCase() == "zambia " || countryinput.value.toLowerCase() == " zambia" || countryinput.value.toLowerCase() == " zambia ") {
        if (window.getComputedStyle(document.getElementById("zambia")).display == "none") {
            document.getElementById("zambia").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }    
    if (countryinput.value.toLowerCase() == "zimbabwe" || countryinput.value.toLowerCase() == "zimbabwe " || countryinput.value.toLowerCase() == " zimbabwe" || countryinput.value.toLowerCase() == " zimbabwe ") {
        if (window.getComputedStyle(document.getElementById("zimbabwe")).display == "none") {
            document.getElementById("zimbabwe").style.display = "block";
            countryinput.value = "";
            return false;
        }
    }
    return false;
};
function cheatcheatlol() {
    for (var birb = 0; birb < 194; birb++) {
        document.getElementsByTagName("h3")[birb].style.display = "block";
    }
}