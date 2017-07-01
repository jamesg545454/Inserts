function insertPlugin(target) {

    var position; 
    this.interfaces = [Host.Interfaces.IEditTask];
    this.prepareEdit = function () { return Host.Results.kResultOk; }
    this.performEdit = function (context) {

        /*  Hit "I" and then "Home" and "Down" starting at 2 to count
            to where the plugin is to get the position number to
            put below for the plugin you want to load
        */
        
        // determine which plugin is being targeted to load
        switch (target){
        // **********************************************************   
        //                ONLY EDIT HERE  
            case "Fat Channel": position = 11; break;
            case "Pro EQ":      position = 25; break;

        // *********************************************************    
        }

        // open the Add Insert list and move to the first item
        doCmd("Console","Add Insert")
        doCmd("Navigation", "Focus Next")
        doCmd("Navigation", "Up")

        // loop to move down to the position of the target plugin 
        for (i = 0; i < position; i++){ doCmd("Navigation", "Down") }

        // fire enter to load the target plugin
        doCmd("Navigation", "Enter") 

        return Host.Results.kResultOk;  
    }        
}

/*  initial functions called by classfactory.xml
    add a new function and class for every plugin   */

// *****************************************************************
//                      ONLY EDIT HERE                               
function FatChannel()   { return new insertPlugin("Fat Channel") }
function ProEQ()        { return new insertPlugin("Pro EQ")     }

// *****************************************************************

// helper function to shorten the command action lines
function doCmd(category, action) {
    Host.GUI.Commands.deferCommand(category, action);
}
// ================================================================


