
 
function insertPlugin(target) {

    /*  This script allows loading any plugin directly to selected tracks via key command
        or via macro toolbar buttons.  MMMMM

        It works by firing the Console | Add Insert pop-up list and executing X "Down"
        commands to get to any plugin in the list and then loads it.  That list is fluid
        and may change as you add new plugins and if so you'll have to edit the position
        numbers below and recompile the script.

        ** Always move the mouse up out of arrange before firing the script with a bound
        hotkey.   If the mouse cursor is in the arrange space it will auto highlight the
        plugin in that pop-up list that's on the same vertical level as the mouse cursor.
        
        Click the title bar or something before hitting the hot key, or use macro toolbar 
        buttons to load your favorite plugins.2222
    */

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


