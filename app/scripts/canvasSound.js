const container = document.getElementById('container');
const file = document.getElementById('fileupload');
const canvas = document.getElementById('canvas1');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.save();
ctx.font="32px 'Ubuntu', sans-serif";
ctx.fillStyle = 'white';
ctx.fillText('點擊畫面播放音樂', 30, 100);
ctx.fillText('或上傳新的檔案', 30, 150);
ctx.translate(canvas.width/2,canvas.width/2);
ctx.restore();


let audioSource;
let analyser;

container.addEventListener('click',function(){
    const audio1 = document.getElementById('audio1');
    audio1.src = 'https://cdn.pixabay.com/download/audio/2021/05/01/audio_f88aa31493.mp3?filename=tech-house-loop-01-4230.mp3'
    const audioContext = new AudioContext();
    audio1.play();
    audioSource = audioContext.createMediaElementSource(audio1);//接收元素
    analyser = audioContext.createAnalyser();//獲取音頻時間和頻率數據
    audioSource.connect(analyser);
    analyser.connect(audioContext.destination); //音頻最終輸出目標，通常是指最終端的電腦喇吧，連結才會聽到聲音
    //下面三行是計算音頻節點的
    //會創造出一個陣列
    analyser.fftSize = 64;//快速傅立葉變換，決定音頻譜的密度
    const bufferLength = analyser.frequencyBinCount; //fftSize的一半
    const dataArray = new Uint8Array(bufferLength); //將每個字節視為0-255單個數字
    //https://zh.javascript.info/arraybuffer-binary-arrays

    const barWidth = (canvas.width/2) / bufferLength;
    let barHeight;
    let x;

    function animate(){
        x=0;
        ctx.clearRect(0,0,canvas.width, canvas.height);
        analyser.getByteFrequencyData(dataArray);

        drawVisualiser(bufferLength,x, barWidth, barHeight, dataArray);

        requestAnimationFrame(animate);


    }

    animate();
});

file.addEventListener('change', function(){
    const files = this.files;
    const audio1 = document.getElementById('audio1');
    audio1.src = URL.createObjectURL(files[0]);
    audio1.load();
    audio1.play();

    audioSource = audioContext.createMediaElementSource(audio1);
    analyser = audioContext.createAnalyser();
    audioSource.connect(analyser);
    analyser.connect(audioContext.destination); 
    analyser.fftSize = 64;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const barWidth = canvas.width / bufferLength;
    let barHeight;
    let x;

    function animate(){
        x=0;
        ctx.clearRect(0,0,canvas.width, canvas.height);
        analyser.getByteFrequencyData(dataArray);
        drawVisualiser(bufferLength,x, barWidth, barHeight, dataArray);

        requestAnimationFrame(animate);

    }

    animate();
    
});


function drawVisualiser(bufferLength,x, barWidth, barHeight, dataArray){
    
    // 1.中心圓的
    // for(let i = 0; i<bufferLength; i++){
    //     barHeight = dataArray[i];
    //     ctx.save(); //將當前狀態保存, 不保存的話下面的圖案都會跟著上一個的參數旋轉
    //     ctx.translate(canvas.width/2, canvas.height/2);
    //     ctx.rotate(i * Math.PI * 2 / bufferLength);
    //     const hue = i * 3 ;
    //     ctx.fillStyle = 'hsl('+hue+',100%, 50%)';
    //     ctx.fillRect(0, 0, barWidth, barHeight);
    //     ctx.restore(); //取出原來所保存狀態
    //     // save & restore說明：https://blog.csdn.net/tiankongcheng6/article/details/83000247
    // }

    //2. 柱狀的
    for(let i = 0; i<bufferLength; i++){
        barHeight = dataArray[i];
        const red = i * barHeight/10;
        const green = i*4;
        const blue = barHeight/10;
        ctx.fillStyle = 'rgb('+red+','+green+','+blue+')';
        ctx.fillRect(canvas.width /2 - x, canvas.height - barHeight, barWidth, barHeight);
        x += barWidth;
    }

    for(let i = 0; i<bufferLength; i++){
        barHeight = dataArray[i];
        const red = i * barHeight/10;
        const green = i*20;
        const blue = barHeight/10;
        ctx.fillStyle = 'rgb('+red+','+green+','+blue+')';
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        x += barWidth;
    }

}