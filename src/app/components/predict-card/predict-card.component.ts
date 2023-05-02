import { Component } from '@angular/core';

@Component({
  selector: 'app-predict-card',
  templateUrl: './predict-card.component.html',
  styleUrls: ['./predict-card.component.css'],
})

export class PredictCardComponent {
  predictText: string = 'Fortuna cookie predicts...';
  predictionCounter: number = 0
  userPredictions : string[] = []
  userPredictionsTitleStyle: string = "userPredictions-title"
  fortunaCookieImg = "../../assets/fortune-cookie.svg"
  generatePrediction() {
    this.predictionCounter = this.predictionCounter + 1;

    const predictions = [
      'Some days you are pigeon, some days you are statue. Today, bring umbrella.',
      'Your reality check about to bounce.',
      'Wise person never try to get even. Wise person get odder.',
      'Two days from now, tomorrow will be yesterday.',
      'Your inferiority complex not good enough. Try harder.',
      "When chosen for jury duty, tell judge 'fortune cookie say guilty!'",
      'Stop eating now. Food poisoning no fun.',
      'You are cleverly disguised as responsible adult.',
      'Tomorrow at breakfast, listen carefully: do what rice krispies tell you to.',
      'Drive like hell, you will get there.',
      'Person who eat fortune cookie get lousy dessert.',
      'Okay to look at past and future. Just don’t stare.',
      'Wise person need either good manners or fast reflexes.',
      'Soup was secret family recipe made from toad. Hope you liked!',
      'You will soon have an out of money experience.',
      'Probability of being seen directly proportional to stupidity of act.',
      'He who dies with most toys, still dies.',
      'Person who rests on laurels gets thorn in backside.',
      'Practice safe eating. Always use condiments.',
      'Person who give self haircut after rice wine will be buzzed.',
      'Two can live as cheaply as one, for half as long.',
      'Hard work pay off in future. Laziness pay off now.',
      'Life is sexually transmitted condition.',
      'Give person fish, he eat for day. Teach person to fish, he always smell funny.',
      'Person who argue with idiot is taken for fool.',
      'Look before you leap. Or wear parachute.',
      'The end is near, might as well have dessert.',
      'This fortune no good. Try another.',
      'Of all 27 alternatives, running away is best.',
      'Closed mouth gathers no feet.',
    ];

    const random = Math.floor(Math.random() * 30);
    const currentPrediction = predictions[random];
    this.predictText = currentPrediction;
    if (this.userPredictions.length < 5) {
      this.userPredictions.push(currentPrediction);
    } else {
      this.userPredictionsTitleStyle = "shine";
      this.fortunaCookieImg = "../../assets/crumbs.png"
    }
  }
}
