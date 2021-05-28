function update( itemName, lastActiveItemName ) {

  const navItemQuery        = `nav.nav4 > ul > li[name=${ itemName }] > svg`;
  const navItem             = document.querySelector( navItemQuery );
  const lastActiveItemQuery = `nav.nav4 > ul > li[name=${ lastActiveItemName }] > svg`;
  const lastActiveItem      = document.querySelector( lastActiveItemQuery );

  lastActiveItem.style.fill = "var( --color-secondary )";
  navItem.style.fill        = "var( --color-primary )";

  const { offsetWidth: parentWidth, offsetLeft: parentLeft } = navItem.parentElement;

  const markerLeft = parentLeft + (parentWidth / 2) - 1;
  const marker     = document.querySelector( "nav.nav4 > ul > span" );
  
  marker.style.left  = `${ markerLeft }px`;
}

export default update;