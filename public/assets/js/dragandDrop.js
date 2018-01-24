

 var fsClient = filestack.init('ArKUq7TzLSaKrbTJi6WB9z');
 function openPicker() {
   fsClient.pick({
     fromSources:["local_file_system","url","googledrive","dropbox"],
     maxFiles:5
   }).then(function(response) {
     // declare this function to handle response
     //handleFilestack(response);
     console.log(response);
     image(response.filesUploaded[0].url)
   });
   
 }
 //openPicker();

function image(driver_img) {
$.post("/api/image", {driver_img}, function(response, err) {
 console.log(response);
})
}


