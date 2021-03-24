import { observable, decorate } from 'mobx';

export type Props = {
    titleOfPart: object;
};
class CarTramerStores {
    titleOfPart = {
        rightBackFender:"rightBackFender",
        backBonnet:"backBonnet",
        leftBackFender:"leftBackFender",
        rightBackDoor:"rightBackDoor",
        rightFrontDoor:"rightFrontDoor",
        ceiling:"ceiling",
        leftBackDoor:"leftBackDoor",
        leftFrontDoo:"leftFrontDoo",
        rightFrondFender:"rightFrondFender",
        engineBonnet:"engineBonnet",
        leftFrondFender:"leftFrondFender",
        frontBuffer:"frontBuffer",
        backBuffer:"backBuffer",
    };
}

decorate(CarTramerStores, {
    titleOfPart: observable,
});
export default new CarTramerStores();
