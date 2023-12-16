import {action, computed, makeAutoObservable, makeObservable, observable} from "mobx";

class CounterStore {
    @observable
    count = 0

    @computed
    get total(){
        return this.count * 2
    }
    @action
    increment = (value: number) => {
        this.count += value

    }
    @action
     decrement = (value: number) => {
        this.count -= value
    }
}

export const mobxStore = new CounterStore()

