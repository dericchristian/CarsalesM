export class CarInfo {
  constructor(
    public carMake: string,
    public carModel: string,
    public carEngine: string
  ) {
    console.log(this.carMake, this, carModel, this.carEngine);
  }


}
