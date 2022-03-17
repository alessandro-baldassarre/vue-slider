

const app = new Vue({
    el: '#app',

    beforeMount(){
      this.startAutoSlide();
   },
    data: {

      activeElement: 0,

      autoSlide: null,

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
        startAutoSlide: function(){
            this.autoSlide = setInterval(this.nextImage,2000);
            
        },
        invertSlide: function(){
            clearInterval(this.autoSlide);
            
            this.autoSlide = setInterval(this.prevImage,2000);
            console.log(this.autoSlide);
        }
        


        
       
    }

  });