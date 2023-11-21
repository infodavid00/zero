/* 
the flow goes like :
query database [ use the id and username to find a post ] check has to be run to 
determine how to mount the componenets,ie : if type === multi ? return [sidenav, core 
and header(pass props to indicate)] else if type === single return 
[header(pass prop to indicate) and core]
*/