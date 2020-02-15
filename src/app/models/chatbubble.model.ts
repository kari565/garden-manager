export class ChatBubble {
    top: number;
    left: number;
    width: number;
    height: number;
    visibility: string;
    slider: {
        value: number,
        display: string,
        visibilityState: string
    }; 

    constructor() {
        this.top = 0;
        this.left = 0;
        this.width = 240;
        this.height = 200;
        this.visibility = "hidden";
        this.slider = {
            value: 0,
            display: "none",
            visibilityState: "initiallyHidden"
        }  
    } 

    showChatBubble(event) {
        this.slider.visibilityState = "initiallyHidden";
        this.slider.display = "none";
        this.top = event.pageY - 307;
        this.left = event.pageX - document.body.clientWidth/2 - 35;
        this.height = 200;
        if (this.visibility == "hidden"){
            this.visibility = "visible";
        }
    }

    hideSlider() {
        this.slider.visibilityState = "hidden";
        this.slider.display = "none";
    }

    showSlider() {
        this.slider.visibilityState = "visible";
        this.slider.display = "block";
    }
}