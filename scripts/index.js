import createObserver from "./createObserver.js";
import updateNav1     from "./nav1.js";
import updateNav2     from "./nav2.js";
import updateNav3     from "./nav3.js";
import updateNav4     from "./nav4.js";

let lastActiveItemName = "home";

const observer = createObserver();

observer.subscribe( updateNav1 );
observer.subscribe( updateNav2 );
observer.subscribe( updateNav3 );
observer.subscribe( updateNav4 );
observer.notify( lastActiveItemName, lastActiveItemName );

const nav1Items = document.querySelectorAll( "li" );
const nav1ItemsArray = Array.from( nav1Items );

function handleNavItemClick( event ) {

  const navItemName = event.target.getAttribute( "name" );

  observer.notify( navItemName, lastActiveItemName );

  lastActiveItemName = navItemName;

}

nav1ItemsArray.forEach
( 
  navItem => navItem.addEventListener( "click", handleNavItemClick )
);

function handleWindowResize() {

  observer.notify( lastActiveItemName, lastActiveItemName );

}

window.addEventListener( "resize", handleWindowResize );