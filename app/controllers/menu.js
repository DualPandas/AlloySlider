var args = arguments[0] || {};

function menuclick(e){
	var rowId=e.rowData.rowId;
	
	switch (rowId){
		case "1":
	//		Alloy.CFG.main.backgroundColor="#BF7070";

//controller name is 'Dining'
    var Dining = Alloy.createController('Dining').getView()
  Dining.open()

			break;
		case "2":
			//Alloy.CFG.main.backgroundColor="#3C3F93";
			    var ToDo = Alloy.createController('ToDo').getView()
  ToDo.open()
			break;
		case "3":
					    var Stay = Alloy.createController('Stay').getView()
  Stay.open()
			//Alloy.CFG.main.backgroundColor="#2159B2";
			break;
		case "4":
						    var Shopping = Alloy.createController('Shopping').getView()
  Shopping.open()
			//Alloy.CFG.main.backgroundColor="#8B4726";
			break;
		case "5":
						    var Travel = Alloy.createController('Travel').getView()
  Travel.open()
			//Alloy.CFG.main.backgroundColor="#8B4726";
			break;
		case "6":
								    var Nightlife = Alloy.createController('Nightlife').getView()
  Nightlife.open()
			//Alloy.CFG.main.backgroundColor="#8B4726";
			break;
		case "7":
								    var Offers = Alloy.createController('Offers').getView()
  Offers.open()
			//Alloy.CFG.main.backgroundColor="#8B4726";
			break;
		case "8":
								    var RealEstate = Alloy.createController('RealEstate').getView()
  RealEstate.open()			
						
	}
	
	Alloy.CFG.drawermenu.showhidemenu();
}