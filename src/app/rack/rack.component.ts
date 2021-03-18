import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rack',
  templateUrl: './rack.component.html',
  styleUrls: ['./rack.component.scss']
})
export class RackComponent implements OnInit {

  serverRack: {
    id: number,
    color: string,
    name: string
  }[] = [
      { "id": 1, "name": "Afghanistan", "color": "#0099ff" },
      { "id": 2, "name": "Albania", "color": "#0089e5" },
      { "id": 3, "name": "Algeria", "color": "#007acc" },
      { "id": 4, "name": "Andorra", "color": "#006bb2" },
      { "id": 5, "name": "Angola", "color": "#005b99" },
      { "id": 6, "name": "Argentina", "color": "#004c7f" },
      { "id": 7, "name": "Armenia", "color": "#003d66" },
      { "id": 8, "name": "Australia", "color": "#002d4c" },
      { "id": 9, "name": "Austria", "color": "#001e33" },
      { "id": 10, "name": "Azerbaijan", "color": "#000f19" },
      { "id": 11, "name": "The Bahamas", "color": "#0099ff" },
      { "id": 12, "name": "Bahrain", "color": "#19a3ff" },
      { "id": 13, "name": "Bangladesh", "color": "#32adff" },
      { "id": 14, "name": "Barbados", "color": "#4cb7ff" },
      { "id": 15, "name": "Belarus", "color": "#66c1ff" },
      { "id": 16, "name": "Belgium", "color": "#7fccff" },
      { "id": 17, "name": "Belize", "color": "#99d6ff" },
      { "id": 18, "name": "Benin", "color": "#b2e0ff" },
      { "id": 19, "name": "Bhutan", "color": "#cceaff" },
      { "id": 20, "name": "Bolivia", "color": "#e5f4ff" },
      { "id": 21, "name": "Botswana", "color": "#ff3030" },
      { "id": 22, "name": "Brazil", "color": "#e52b2b" },
      { "id": 23, "name": "Brunei", "color": "#cc2626" },
      { "id": 24, "name": "Bulgaria", "color": "#b22121" },
      { "id": 25, "name": "Burkina Faso", "color": "#991c1c" },
      { "id": 26, "name": "Burundi", "color": "#7f1818" },
      { "id": 27, "name": "Cabo Verde", "color": "#661313" },
      { "id": 28, "name": "Cambodia", "color": "#4c0e0e" },
      { "id": 29, "name": "Cameroon", "color": "#330909" },
      { "id": 30, "name": "Canada", "color": "#ff3030" },
      { "id": 31, "name": "Chad", "color": "#ff4444" },
      { "id": 32, "name": "Chile", "color": "#ff5959" },
      { "id": 33, "name": "China", "color": "#ff6e6e" },
      { "id": 34, "name": "Colombia", "color": "#ff8282" },
      { "id": 35, "name": "Comoros", "color": "#ff9797" },
      { "id": 36, "name": "Costa Rica", "color": "#ffacac" },
      { "id": 38, "name": "Croatia", "color": "#ffd5d5" },
      { "id": 39, "name": "Cuba", "color": "#ffc000" },
      { "id": 40, "name": "Cyprus", "color": "#e5ac00" },
      { "id": 41, "name": "Denmark", "color": "#cc9900" },
      { "id": 42, "name": "Djibouti", "color": "#b28600" },
      { "id": 43, "name": "Dominica", "color": "#997300" },
      { "id": 44, "name": "Ecuador", "color": "#7f6000" },
      { "id": 45, "name": "Egypt", "color": "#664c00" },
      { "id": 46, "name": "El Salvador", "color": "#4c3900" },
      { "id": 47, "name": "Eritrea", "color": "#ffc000" },
      { "id": 48, "name": "Estonia", "color": "#ffc619" },
      { "id": 49, "name": "Eswatini", "color": "#ffcc32" },
      { "id": 50, "name": "Ethiopia", "color": "#ffd24c" },
      { "id": 51, "name": "Fiji", "color": "#ffd966" },
      { "id": 52, "name": "Finland", "color": "#ffdf7f" },
      { "id": 53, "name": "France", "color": "#ffe599" },
      { "id": 55, "name": "The Gambia", "color": "#307e2d" },
      { "id": 56, "name": "Georgia", "color": "#2b7028" },
      { "id": 57, "name": "Germany", "color": "#256223" },
      { "id": 58, "name": "Ghana", "color": "#20541e" },
      { "id": 59, "name": "Greece", "color": "#1b4619" },
      { "id": 60, "name": "Grenada", "color": "#153814" },
      { "id": 61, "name": "Guatemala", "color": "#102a0f" },
      { "id": 62, "name": "Guinea", "color": "#0a1c0a" },
      { "id": 63, "name": "Guyana", "color": "#368d33" },
      { "id": 64, "name": "Honduras", "color": "#4a9847" },
      { "id": 65, "name": "Hungary", "color": "#5ea35b" },
      { "id": 66, "name": "Iceland", "color": "#72af70" },
      { "id": 67, "name": "India", "color": "#86ba84" },
      { "id": 68, "name": "Indonesia", "color": "#9ac699" },
      { "id": 69, "name": "Iran", "color": "#aed1ad" },
      { "id": 70, "name": "Iraq", "color": "#c2dcc1" }
    ]


  constructor() { }

  ngOnInit(): void {
  }

}
