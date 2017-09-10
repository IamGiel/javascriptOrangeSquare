 
    // function to grow the box
        function grow(){
     		var el = document.getElementById("box");
		    var height = el.offsetHeight;
		    var width = el.offsetWidth;

		    var newHeight = height += 500;
		    var newWidth = width += 500;

		    el.style.height = newHeight + 'px';
		    el.style.width = newWidth + 'px';

		}	

	// function to change color to blue
		function blue() {
			document.getElementById("box").style.backgroundColor = "lightBlue";		
		}
	// function to fade out the box
		function fadeOutEffect() {
		    var fadeTarget = document.getElementById("box");
		    var fadeEffect = setInterval(function () {
		        if (!fadeTarget.style.opacity) {
		            fadeTarget.style.opacity = 1;
		        }
		        if (fadeTarget.style.opacity < 0.1) {
		            clearInterval(fadeEffect);
		        } else {
		            fadeTarget.style.opacity -= 0.1;
		        }
		    }, 100);
		}

        //restores original style of the box
		function reset(){
				document.getElementById("box").style.backgroundColor = "orange";
				document.getElementById("box").style.width = "150px";
				document.getElementById("box").style.height = "150px";
				
				var element = document.getElementById("box");
            	element.style.opacity += 1.0;
		}

		// calling out the functions inside this javascript.js file (to keep HTML clean)
		document.getElementById("button1").addEventListener('click', grow);
		document.getElementById("button2").addEventListener('click', blue);
		document.getElementById("button3").addEventListener('click', fadeOutEffect);


		function fade() {
			var element = document.getElementById("box");

            element.style.opacity += 0.1;
		}

		






