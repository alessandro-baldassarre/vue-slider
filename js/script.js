

const app = new Vue({
    el: '#app',

    beforeMount(){
      this.rightSlide();
   },
    data: {

      activeElement: 0,

      autoSlide: null,

      autoSlideControl: 1,

      stadiums: [

        {
            image: "img/sofi-stadium.jpeg",
            description: "SoFi Stadium — Inglewood, California"
        },
    
        {
            image: "img/allegiant-stadium.jpeg",
            description: "Allegiant Stadium — Las Vegas, Nevada"
        },
    
        {
            image: "img/metlife-stadium.jpeg",
            description: "MetLife Stadium — East Rutherford, New Jersey"
        },
    
        {
            image: "img/mercedesbenz-stadium.jpeg",
            description: "Mercedes-Benz Stadium — Atlanta, Georgia"
        },
    
        {
            image: "img/at&t-stadium.jpeg",
            description: "AT&T Stadium — Arlington, Texas"
        },
      ]
      
    },

    methods: {

        nextImage: function(){
            
            this.activeElement++;
           
            if(this.activeElement >= this.stadiums.length) {this.activeElement = 0};

        },
        prevImage: function(){
            
            this.activeElement--;
           
            if(this.activeElement < 0) {this.activeElement = (this.stadiums.length - 1)};

        },
        invertSlide: function(){
            if(this.autoSlideControl == 1){
                this.leftSlide();
            }
            else{
                this.rightSlide();
            }
        },
        stopSlide: function(){
            clearInterval(this.autoSlide);
        },
        restartSlide: function(){
            if(this.autoSlideControl == 1){
                this.rightSlide();
            }
            else{
                this.leftSlide();
            }
        },
        leftSlide: function(){  
            clearInterval(this.autoSlide);
            this.autoSlide = setInterval(this.prevImage,2000);
            this.autoSlideControl = 2;   
        },
        rightSlide: function(){
            clearInterval(this.autoSlide);
            this.autoSlide = setInterval(this.nextImage,2000);
            this.autoSlideControl = 1;   
        }
       
    }

  });