import {mobxPostStore} from "./mobx-post";

class RootStore {
    posts = mobxPostStore
}

export const rootStore = new RootStore()
