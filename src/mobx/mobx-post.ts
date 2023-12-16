import {makeAutoObservable, runInAction} from "mobx";
import {getPosts, Posts} from "./getPosts";
import {fromPromise, IPromiseBasedObservable} from "mobx-utils";

/*getPostsAction = async () => {
    try {
        const posts = await getPosts()

        runInAction(() => {
            this.posts = posts
            this.isLoading = false

        })

    }
    catch(e){
        console.log(e)
        this.isLoading = false

    }
}*/
class PostStore {
    posts?: IPromiseBasedObservable<Posts[]>
    isLoading: boolean = true
    constructor() {
        makeAutoObservable(this)
    }

    getPostsAction = () => {
        this.posts = fromPromise(getPosts())
    }
}

export const mobxPostStore = new PostStore()
