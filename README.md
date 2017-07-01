# Inserts
Adding Insert Plug-ins to Studio One

This script allows loading any plugin directly to selected tracks via key command 
or via macro toolbar buttons.

It works by firing the Console | Add Insert pop-up list and executing X "Down" 
commands to get to any plugin in the list and then loads it.  That list is fluid
and may change as you add new plugins and if so you'll have to edit the position
numbers below and recompile the script.

** Always move the mouse up out of arrange before firing the script with a bound
hotkey.   If the mouse cursor is in the arrange space it will auto highlight the
plugin in that pop-up list that's on the same vertical level as the mouse cursor.

Click the title bar or something before hitting the hot key, or use macro toolbar 
buttons to load your favorite plugins

Zip up the three files and rename the file as plugins.package, and put it into
the Studio One application \scripts folder.
