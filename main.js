function setup() {
  canvas = createCanvas(200, 200);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("MobileNet", model_loaded);
}
function model_loaded(){
 console.log("Model Loaded");
}
function draw(){
 image(video, 0, 0, 200, 200);
 classifier.classify(video, got_result);
}
function got_result(error, result){
 if(error){
  console.error(error);
 }
 else{
  console.log(result);
  document.getElementById("result").innerHTML = result[0].label;
  document.getElementById("result_accuracy").innerHTML = result[0].confidence.toFixed(2);
 }
}
