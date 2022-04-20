import { Component, OnInit } from '@angular/core';
import { Recommendation } from 'src/app/core/model/recommendation';
import { RecommendationsService } from 'src/app/core/services/recommendations.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
  recommendations: Recommendation[] = [];

  constructor(
    private recommendationService: RecommendationsService
    ) { }

  ngOnInit(): void {

  }

  getRecommendations(): void{
    this.recommendationService.getRecommendations()
   
    .subscribe(recommendations => this.recommendations = recommendations.sort((a, b) => (a.name > b.name) ?1:-1));
  }

}

/** 
bechdelTest,
COUNT(bechdelTest) AS `value_occurrence` 

FROM
movie 

WHERE EXISTS (SELECT 1 
    FROM   watched 
    WHERE  watched.ID = movie.ID

GROUP BY 
bechdelTest

ORDER BY 
`value_occurrence` DESC

LIMIT 1;
*/
