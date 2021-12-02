Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
    });
    
    camera = document.getElementById("camera");
    
    Webcam.attach('#camera');
    
    function snapshot(){
    Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<image id="captured_image" src = "'+data_uri+'"/> ';
    });
    }
    
    console.log('ml5 version:',ml5.version);
    
    Classifier = ml5.imageClassifier('model.json',modelLoaded);
    
    function modelLoaded(){
    console.log("model is loaded");
    }