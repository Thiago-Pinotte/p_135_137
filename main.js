objects = []
modelStatus = ""


function setup() {
    canvas = createCanvas(480, 280)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(480, 280)
    video.hide()

}


function modelLoadad() {
    console.log("modelo carregado")
    modelStatus = true
}


function start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoadad)
    document.getElementById("status").innerHTML = "status: detectando objeto"
    objectName = document.getElementById("objectName").value
}

function gotResult(error,results) {
    if (error) {
      console.log(error)  
    }
    console.log(results)
    objects = results
}

function draw() {
    image(video, 0, 0, 480, 280)
}