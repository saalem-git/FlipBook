  var option_PDF1 = {
	  
    source: "PDF.pdf", //you can change the path and the name of your .pdf file 
	 //(the .PDF must be on the same server as the PDF Flip app)

    hard: "hard", //possible values are "none", "cover", "all"

	backgroundImage: "assets/background.jpg", //leave blank to use the background color instead
	backgroundColor: "#fff",  //change background color

	soundEnable: true, //change it to false to disable flip sound by default
	enableDownload: true, //change it to false to disable download icon

	autoEnableOutline: false, //change it to true to open table of contents on start

	direction: PDFF.DIRECTION.LTR, //change it to RTL to reverse flip direction

	autoEnableOutline: false, //change it to true to open the table of contents on start

    zoomRatio: 2, //increase the value to add more zoom

    paddingTop: 15,  //top window padding
    paddingLeft: 15, //left window padding
    paddingRight: 15,  //right window padding
    paddingBottom: -10,  //bottom window padding

	autoPlayStart: false, //change to true for auto flip on start
	autoPlayDuration: 5000, //define the time in-between pages flips (5000 represents 5 seconds)

  	scrollWheel: true, //deactivate zoom in / zoom out with mouse scroll

    text: { //you can translate interface
            toggleSound: "Sound On/Off",
            toggleOutline: "Table of Contents",
            previousPage: "Previous Page",
            nextPage: "Next Page",
            toggleFullscreen: "Fullscreen",
            zoomIn: "Zoom In",
            zoomOut: "Zoom Out",
            downloadPDFFile: "Download PDF",
        },
	
   allControls: "outline,thumbnail,startPage,altPrev,pageNumber,altNext,endPage,zoomIn,zoomOut,fullScreen,download,sound,play"

   // you can remove any icon by deleting it from the above list.
   // you can also re-arrange the order of the menu cons	

  };


 