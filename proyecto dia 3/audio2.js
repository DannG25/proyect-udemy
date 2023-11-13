<!DOCTYPE html>
    <head>
        <title>Audio 2</title>
    </head>
    <body>
        <audio id="audioAlarma">
            <source src="alarma.mp3" type="audio/mpeg">
        </audio>
        <script>
        let elementoaudioAlarma = document.getElementById("audioAlarma");
            function test(){
            elementoaudioAlarma.play();
            }
        </script>
    </body>
</html>
