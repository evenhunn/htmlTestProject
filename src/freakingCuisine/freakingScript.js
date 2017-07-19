/**
 * Created by hanseeve on 19.07.2017.
 */


function showSubNav(content, button, informationId) {
  var allNavs = document.getElementById(content).parentNode.children;
  for (var i=0; i<allNavs.length; i++) {
    allNavs[i].classList.remove("show-content");
  }
  document.getElementById(content).classList.add("show-content");
  var navItems = button.parentElement.parentElement.children;
  for (var i=0; i<navItems.length; i++) {
    navItems[i].children[0].classList.remove("nav-active");
  }
  button.classList.add("nav-active");
  var informations = document.getElementById("information").children;
  for (var i=0; i<informations.length; i++) {
    informations[i].classList.remove("show-content");
  }
  document.getElementById(informationId).classList.add("show-content");
}

function showInfo(content) {
  var children = document.getElementById("information").children;
  var grandChildren;

  for (var i=0;i<children.length; i++) {
    grandChildren = children[i].children;
    for (var j = 0; j < grandChildren.length; j++) {
      grandChildren[j].classList.remove("show-content");
    }
  }
  document.getElementById(content).classList.add("show-content");
}

function activateSubNav(element) {
  var subnavs = document.getElementById("subNav").children;
  var subnavListElement;
  for (var i=0; i<subnavs.length;i++) {
    subnavListElement = subnavs[i].children[0].children;
    for (var j=0; j<subnavListElement.length;j++) {
      subnavListElement[j].children[0].classList.remove("active-sub-nav-button");
    }
  }
  element.classList.add("active-sub-nav-button");
}