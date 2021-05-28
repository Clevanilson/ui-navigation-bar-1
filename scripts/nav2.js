function update( itemName, lastActiveItemName ) {

  const navItemQuery        = `nav.nav2 > ul > li[name=${ itemName }`;
  const navItem             = document.querySelector( navItemQuery );
  const lastActiveItemQuery = `nav.nav2 > ul > li[name=${ lastActiveItemName }]`;
  const lastActiveItem      = document.querySelector( lastActiveItemQuery );

  lastActiveItem.style.color           = "var( --color-secondary )";
  lastActiveItem.style.backgroundColor = "#FFF";
  navItem.style.backgroundColor        = "var( --color-primary )";
  navItem.style.color                  = "#FFF";

}

export default update;