import { decorate, observable } from 'mobx';

export class RootStore {
    counter = 0
};

decorate(RootStore, {
    counter: observable,
});