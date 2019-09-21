class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }


  addSeconds = () => this.currentTime++;

  startClick() {
    this.intervalId = setInterval(this.addSeconds,1000)
  }
  
  getMinutes() {
    let minutes = 0;

    if(this.currentTime >= 60){
      minutes = Math.floor(this.currentTime / 60);
    }

    return minutes;
  }

  getSeconds() {
    let seconds = 0;

     seconds = this.currentTime % 60;

     return seconds;
  }
  
  twoDigitsNumber(number) {

    if(number < 10){
      
      return '0' + number;
    } else {

      return `${number}`
    }

  }
  
  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {}
}