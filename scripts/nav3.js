function update( itemName, lastActiveItemName ) {

  const navItemQuery        = `nav.nav3 > ul > li[name=${ itemName }`;
  const navItem             = document.querySelector( navItemQuery );
  const lastActiveItemQuery = `nav.nav3 > ul > li[name=${ lastActiveItemName }]`;
  const lastActiveItem      = document.querySelector( lastActiveItemQuery );
  const markerQuery         = "nav.nav3 > ul > span";
  const markerLeft          = navItem.offsetLeft;
  const marker              = document.querySelector( markerQuery );

  marker.style.left = `${ markerLeft }px`;
  lastActiveItem.style.color           = "var( --color-secondary )";
  navItem.style.color                  = "#FFF";

}

export default update;