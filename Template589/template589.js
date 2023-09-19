document.getElementById("btn-menu").onclick = function () {
    if (document.getElementById("menu").style.visibility == "hidden") {
        document.getElementById("menu").style.visibility = "visible";
    }
    else {
        document.getElementById("menu").style.visibility = "hidden"
    }
}

document.getElementById("all").onclick = function () {
    document.getElementById("all").style.backgroundColor = "#fc6d6d";
    document.getElementById("all").style.color = "#ffffff";
    document.getElementById("adv").style.backgroundColor = "#f5f5f5";
    document.getElementById("adv").style.color = "#000000";
    document.getElementById("str").style.backgroundColor = "#f5f5f5";
    document.getElementById("str").style.color = "#000000";
    document.getElementById("rac").style.backgroundColor = "#f5f5f5";
    document.getElementById("rac").style.color = "#000000";

    document.getElementById("tr1").style.display = "block";
    document.getElementById("tr2").style.display = "block";
    document.getElementById("tr3").style.display = "block";
    document.getElementById("tr4").style.display = "block";
    document.getElementById("tr5").style.display = "block";
    document.getElementById("tr6").style.display = "block";
    document.getElementById("tr7").style.display = "block";
    document.getElementById("tr8").style.display = "block";
    document.getElementById("tr9").style.display = "block";
    document.getElementById("tr10").style.display = "block";
    document.getElementById("tr11").style.display = "block";
    document.getElementById("tr12").style.display = "block";
}
document.getElementById("adv").onclick = function () {
    document.getElementById("all").style.backgroundColor = "#f5f5f5";
    document.getElementById("all").style.color = "#000000";
    document.getElementById("adv").style.backgroundColor = "#fc6d6d";
    document.getElementById("adv").style.color = "#ffffff";
    document.getElementById("str").style.backgroundColor = "#f5f5f5";
    document.getElementById("str").style.color = "#000000";
    document.getElementById("rac").style.backgroundColor = "#f5f5f5";
    document.getElementById("rac").style.color = "#000000";

    document.getElementById("tr1").style.display = "block";
    document.getElementById("tr2").style.display = "none";
    document.getElementById("tr3").style.display = "block";
    document.getElementById("tr4").style.display = "none";
    document.getElementById("tr5").style.display = "none";
    document.getElementById("tr6").style.display = "block";
    document.getElementById("tr7").style.display = "none";
    document.getElementById("tr8").style.display = "block";
    document.getElementById("tr9").style.display = "block";
    document.getElementById("tr10").style.display = "none";
    document.getElementById("tr11").style.display = "block";
    document.getElementById("tr12").style.display = "none";
}
document.getElementById("str").onclick = function () {
    document.getElementById("all").style.backgroundColor = "#f5f5f5";
    document.getElementById("all").style.color = "#000000";
    document.getElementById("adv").style.backgroundColor = "#f5f5f5";
    document.getElementById("adv").style.color = "#000000";
    document.getElementById("str").style.backgroundColor = "#fc6d6d";
    document.getElementById("str").style.color = "#ffffff";
    document.getElementById("rac").style.backgroundColor = "#f5f5f5";
    document.getElementById("rac").style.color = "#000000";

    document.getElementById("tr1").style.display = "none";
    document.getElementById("tr2").style.display = "block";
    document.getElementById("tr3").style.display = "none";
    document.getElementById("tr4").style.display = "block";
    document.getElementById("tr5").style.display = "block";
    document.getElementById("tr6").style.display = "none";
    document.getElementById("tr7").style.display = "block";
    document.getElementById("tr8").style.display = "none";
    document.getElementById("tr9").style.display = "none";
    document.getElementById("tr10").style.display = "block";
    document.getElementById("tr11").style.display = "none";
    document.getElementById("tr10").style.display = "block";
}
document.getElementById("rac").onclick = function () {
    document.getElementById("all").style.backgroundColor = "#f5f5f5";
    document.getElementById("all").style.color = "#000000";
    document.getElementById("adv").style.backgroundColor = "#f5f5f5";
    document.getElementById("adv").style.color = "#000000";
    document.getElementById("str").style.backgroundColor = "#f5f5f5";
    document.getElementById("str").style.color = "#000000";
    document.getElementById("rac").style.backgroundColor = "#fc6d6d";
    document.getElementById("rac").style.color = "#ffffff";

    document.getElementById("tr1").style.display = "none";
    document.getElementById("tr2").style.display = "none";
    document.getElementById("tr3").style.display = "block";
    document.getElementById("tr4").style.display = "none";
    document.getElementById("tr5").style.display = "block";
    document.getElementById("tr6").style.display = "block";
    document.getElementById("tr7").style.display = "block";
    document.getElementById("tr8").style.display = "block";
    document.getElementById("tr9").style.display = "block";
    document.getElementById("tr10").style.display = "none";
    document.getElementById("tr11").style.display = "none";
    document.getElementById("tr12").style.display = "none";
}