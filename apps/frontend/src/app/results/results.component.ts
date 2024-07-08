import { Component , Input } from '@angular/core';
import { NetflixDataModel } from '../../Models/NetflixData.model';
import axios from 'axios';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  data: NetflixDataModel[] = [];
  @Input("TypeOfSearch")
  TypeOfSearch!: string;
  @Input("Random")
  Random!: boolean;
  ngOnInit() {
    if(this.Random)
      this.loadRandom();
  }

  loadResults(Search: string | null | undefined, TypeofSearch: string) {

        this.data = [];
        if (TypeofSearch.toLowerCase() === "movie") {
          fetch(`http://localhost:3000/netflix/movie?title=${Search}`)
            .then(response => {
              return response.json();
            })
            .then(res => {
              for (let resultData of res)  this.data.push({ title: resultData.title, type: resultData.type, listed_in: resultData.listed_in, Image_URL: resultData.Image_URL });
              
            })
            .catch(error => {
              console.log(error);
            });
        } else if (TypeofSearch.toLowerCase() === "series") {
          axios.get(`http://localhost:3000/netflix/series?title=${Search}`)
            .then(response => {
              return response.data;
            })
            .then(res => {
              for (let resultData of res)  this.data.push({ title: resultData.title, type: resultData.type, listed_in: resultData.listed_in, Image_URL: resultData.Image_URL });
            
            })
            .catch(error => {
              console.log(error);
            });
        }

      
    }
  

  loadRandom() {

      axios.get("http://localhost:3000/netflix/random")
        .then(response => {
          return response.data;
        })
        .then(res => {
          for (let resultData of res) this.data.push({ title: resultData.title, type: resultData.type, listed_in: resultData.listed_in, Image_URL: resultData.Image_URL });

        })
        .catch(error => {
          console.log(error);
        });
    
  
}
}
