﻿ var libItems = fl.getDocumentDOM().library.items;

for (i = 0; i < libItems.length; i++){
if(libItems[i].itemType == "bitmap"){
libItems[i].allowSmoothing = true;
libItems[i].compressionType = "photo";
// libItems[i].quality = 100; 
}
}





//libItems[i].compressionType = “lossless”;
//libItems[i].compressionType = “photo”;
//specify custom quality if you want