        var dis=document.getElementById('menuId')
        var lis=document.getElementById('list')
        dis.addEventListener('click',display)
        var i=1;
        function display(){
            if(i==1)
            {
                i=0;
                lis.style.display="block";
                lis.style.backgroundcoor="rgb(228, 236, 240)";
                
            }
            else
            {
                i=1;
                lis.style.display="none";
                lis.style.backgroundcoor="none"
            }
        }
        // Slide every slideDelay seconds
        const slideDelay = 3000;

        const dynamicSlider = document.getElementById("slider");

        var curSlide = 0;
        window.setInterval(()=>{
        curSlide++;
        if (curSlide === dynamicSlider.childElementCount) {
            curSlide = 0;
        }

        // Actual slide
        dynamicSlider.firstElementChild.style.setProperty("margin-left", "-" + curSlide + "00%");
        }, slideDelay);

