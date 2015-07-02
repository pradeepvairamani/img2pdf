function handleFileSelect(evt) {
    'use strict';
    var files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    var output = files[0];
    var reader  = new FileReader();
    reader.readAsDataURL(output);
    reader.onloadend = function () {
        var imgData = reader.result;
        window.alert(reader.result);
        var doc = new jsPDF();

        doc.setFontSize(40);
//        doc.text(35, 25, "Octonyan loves jsPDF");
        doc.addImage(imgData, 'JPEG', 15, 40, 180, 180);
        doc.save(output.name.replace(/\.[^/.]+$/, "") + '.pdf');
        return 0;
    }
  }

document.getElementById('files').addEventListener('change', handleFileSelect, false);