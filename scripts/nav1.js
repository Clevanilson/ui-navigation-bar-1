function update( itemName, lastActiveItemName ) {

  const navItemQuery        = `nav.nav1 > ul > li[name=${ itemName }`;
  const navItem             = document.querySelector( navItemQuery );
  const lastActiveItemQuery = `nav.nav1 > ul > li[name=${ lastActiveItemName }]`;
  const lastActiveItem      = document.querySelector( lastActiveItemQuery );

  lastActiveItem.style.color = "var( --color-secondary )";
  navItem.style.color        = "var( --color-primary )";

  const markerLeft  = navItem.offsetLeft;
  const markerWidth = navItem.offsetWidth;
  const marker      = document.querySelector( "nav.nav1 > ul > span" );
  
  marker.style.left  = `${ markerLeft }px`;
  marker.style.width = `${ markerWidth }px`;

}

export default update;