import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChatBubbleAnimations } from './animations'
import { ApiService } from './service';
import { Polygons } from './models/polygons.model';
import { Circles } from './models/circles.model';
import { ChatBubble } from './models/chatbubble.model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    ChatBubbleAnimations.chatBubblehiddenVisible,
    ChatBubbleAnimations.hiddenVisible,
    ChatBubbleAnimations.sliderHiddenVisible
  ],
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Menadżer ogrodu';
  selectedFigure: string;
  gardenStatusList: {};
  workHours: number;
  singleEffort: number;
  objectName: string;
  isAnimationDisabled: boolean = true;
  isDataLoaded: boolean = false;
  polygons: Polygons;
  circles: Circles;
  chatBubble: ChatBubble;
  
  constructor(private apiService: ApiService) {
    this.polygons = new Polygons();
    this.circles = new Circles();
    this.chatBubble = new ChatBubble();
 
    this.gardenStatusList = {
      "status": []
    };
  }

  ngOnInit() {
    this.apiService.getGardenStatus().subscribe(
      (data) => { this.gardenStatusList["status"] = data },
      (error) => { console.log('Error!!', error); },
      () => { 
        this.polygons.initialize();
        this.circles.initialize();
        this.workHours = this.sumArrayElements(this.gardenStatusList["status"], "workHours");
        this.isDataLoaded = true;
    });
  }

  changeEstimatedWork(event, key) {
    this.selectedFigure = key;
    let obj = this.gardenStatusList["status"].find(obj => obj.object == key);
    this.objectName = obj.name;
    this.singleEffort = obj.workHours;
    this.showChatBubble(event);
  }

  showChatBubble(event) {
    this.isAnimationDisabled = true;
    this.chatBubble.showChatBubble(event);
  }

 resetObjectWorkHours() {
    let obj = this.gardenStatusList["status"].find(obj => obj.object == this.selectedFigure);
    obj.workHours = 0;
    this.apiService.updateGardenStatus(obj);
    this.singleEffort = 0;
    this.workHours = this.sumArrayElements(this.gardenStatusList["status"], "workHours");
    this.chatBubble.hideSlider();
  }

  toggleSlider() {
    let obj = this.gardenStatusList["status"].find(obj => obj.object == this.selectedFigure);
    if (this.chatBubble.slider.visibilityState == "visible") {
      obj.workHours = this.chatBubble.slider.value * 60;
      this.apiService.updateGardenStatus(obj);
      this.singleEffort = this.chatBubble.slider.value * 60;
      this.workHours = this.sumArrayElements(this.gardenStatusList["status"], "workHours");
      this.chatBubble.hideSlider();
      this.isAnimationDisabled = true;
    } else {
      this.chatBubble.slider.value = obj.workHours / 60;
      this.chatBubble.showSlider();
    }
  }

  getSliderValue(event) {
    this.chatBubble.slider.value = event.value;
    this.isAnimationDisabled = false;
  }

  isSelected(key: string) {
    return this.selectedFigure === key;
  }

  getClass(key: string) {
    if (this.isSelected(key)) {
      return 'active';
    }
    let obj = this.gardenStatusList["status"].find(obj => obj.object == key);
    let workHours = obj.workHours;
    if (workHours == 0)
      return 'darkGreen';
    else if (workHours <= 30)
      return 'green';
    else if (workHours <= 60)
      return 'lightGreen';    
    else if (workHours <= 120)
      return 'yellow';  
    else if (workHours <= 240)
      return 'orange';  
    else
      return 'red';
  }

  public sumArrayElements(list: [], column: string){
    return list.reduce((a, b) => a + (b[column] || 0), 0);
  }

  public returnZero() {
    return 0;
  }
}