
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function cubeRotate () {
    cubeRotate12 ();
    await sleep (2000);
    cubeRotate23 ();
    await sleep (2000);
    cubeRotate31 ();
}

function cubeRotate12 () {
    document.getElementById("cube-rtt1").style.display = "none";
    document.getElementById("cube-rtt2").style.display = "block";
}

function cubeRotate23 () {
    document.getElementById("cube-rtt2").style.display = "none";
    document.getElementById("cube-rtt3").style.display = "block";
}

function cubeRotate31 () {
    document.getElementById("cube-rtt3").style.display = "none";
    document.getElementById("cube-rtt1").style.display = "block";
}
  
function startInterval() {
    setInterval(cubeRotate, 6000);  
}
    