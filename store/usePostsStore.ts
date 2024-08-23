import {create} from 'zustand';

import {pb} from '@/pb';
import {IPost} from "@/app/blog/page";


interface CardStore {
    posts: IPost[];
    fetchPosts: () => Promise<void>
}

export const usePostsStore = create<CardStore>((set) => ({
    posts: [],
    fetchPosts: async () => {
        try {
            const request = await pb.collection("posts").getFullList<IPost>({
                sort: "-created",
                expand: 'tag'
            });
            set({ posts: request });
        } catch (error) {
            console.error("Error fetching cards:", error);
        }
    }
}))