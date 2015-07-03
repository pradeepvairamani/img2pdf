
function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object
    // files is a FileList of File objects. List some properties.
    var output = files[0];
    var reader  = new FileReader();
    reader.readAsDataURL(output);
    reader.onloadend = function () {
        var imgData = reader.result;
//        window.alert(reader.result);
        var doc = new jsPDF();

//        doc.setFontSize(40);
//        doc.text(35, 25, "Octonyan loves jsPDF");
        doc.addImage(imgData, 'JPEG', 15, 40, 180, 180);
        doc.save(output.name.replace(/\.[^/.]+$/, "") + '.pdf');
        return 0;
    }
  }

$("#files").fileinput({
    showUpload: false,
	previewFileType: "image",
	browseClass: "btn btn-success",
	browseLabel: " Pick Image and convert",
	browseIcon: '<i class="glyphicon glyphicon-picture"></i>',
	removeClass: "btn btn-danger",
	removeLabel: "Delete",
	removeIcon: '<i class="glyphicon glyphicon-trash"></i>',
	uploadClass: "btn btn-info",
	uploadLabel: "Upload",
	uploadIcon: '<i class="glyphicon glyphicon-upload"></i>',
});

document.getElementById('files').addEventListener('change', handleFileSelect, false);