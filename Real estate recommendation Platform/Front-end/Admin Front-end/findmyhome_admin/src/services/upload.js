import { BlobServiceClient } from '@azure/storage-blob';
const conStr = "https://containerfindmyhome.blob.core.windows.net/?sv=2021-06-08&ss=b&srt=o&sp=rwdlaciytfx&se=2023-01-27T16:58:54Z&st=2022-12-30T08:58:54Z&spr=https,http&sig=WyPzQzespIO9Ez2Rvw2R3pYuVKDxtHu4qYFq0MeB9Tk%3D";
var blobServiceClient = new BlobServiceClient(conStr);
var containerClient = blobServiceClient
                            .getContainerClient("propertyimages");
 const  uploadFile = async () => {
    console.debug("uploadFile");
    var file = document.getElementById("file").files[0];
    var blobClient = containerClient.getBlockBlobClient(file.name);
    var r = await blobClient.uploadData(file);
    console.debug(r);
    alert("File uploaded successfully");
}
const  uploadMultiple = async () => {
    console.debug("uploadFile");
    const files = [];
    for(var i = 0; i < document.getElementById("file").files.length; i++)
    {
        var file = document.getElementById("file").files[i];
        var blobClient = containerClient.getBlockBlobClient(file.name);
        var r = await blobClient.uploadData(file);
        files.push(`https://containerfindmyhome.blob.core.windows.net/propertyimages/${file.name}`);
    }
    return files;
}
export {uploadFile,uploadMultiple}