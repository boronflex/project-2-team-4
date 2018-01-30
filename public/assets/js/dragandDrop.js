var fsClient = filestack.init('ArKUq7TzLSaKrbTJi6WB9z');

function openPicker() {
  return fsClient.pick({
    fromSources: ["local_file_system", "url", "googledrive", "dropbox"],
    maxFiles: 5
  }).then(function(response) {
    // declare this function to handle response
    console.log(response);
    imagex = response.filesUploaded[0].url;
    //  image(response.filesUploaded[0].url)
    return imagex;
  });

}
var imagex;