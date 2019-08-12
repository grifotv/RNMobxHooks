import { decorate, observable, action } from 'mobx';

export class RootStore {
    counter = 0
    increment = () => {
        this.counter += 1;
    }
};

decorate(RootStore, {
    counter: observable,
    increment: action,
});