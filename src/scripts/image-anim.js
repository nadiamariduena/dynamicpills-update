// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// --------------------------------------------------
//
//
//__1
function openTab(e, tabId) {
  var i, tabContent, tabLink, bbb, h2;

  bbb = document.getElementsByClassName("tabsContent-Wrapper");

  tabContent = document.getElementsByClassName("tabContent");
  h2 = document.getElementsByClassName("tabContent");

  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
    tabContent[i].style.backgroundColor = "transparent";
  }

  for (i = 0; i < bbb.length; i++) {
    bbb[i].style.backgroundImage = "none";
  }
  // ----------------------
  for (i = 0; i < h2.length; i++) {
    h2[i].style.color = "#000";
    h2[i].style.fontFamily = "Arial";
    h2[i].style.fontSize = ".8rem";
    h2[i].style.letterSpacing = "3px";
  }
  tabLink = document.getElementsByClassName("tabLink");
  for (i = 0; i < tabLink.length; i++) {
    tabLink[i].className = tabLink[i].className.replace("active", "");
  }

  document.getElementById(tabId).style.display = "block";
}
