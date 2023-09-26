export let planetData;    
    fetch('/data.json')
    .then(function(res){ return res.json();})
    .then(
        function(json){
          planetData = json;
        }
      )

export const currentPlanet = {
    planetName: 'earth',
      get name() {
          return this.planetName
        },
      set name(inputName) {
        this.planetName = inputName
        console.log('The current planet is ' + this.planetName)
        }
    }

export const previousPlanet = {
    planetName: '',
    get name() {
      return this.planetName
      },
    set name(inputName) {
      this.planetName = inputName
      console.log('The previous planet is ' + this.planetName)
      }
  }
  




