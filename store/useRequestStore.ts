import {create} from 'zustand';

import {pb} from '@/pb';

interface IFastRequest {
    id: string;
    title: string;
    contact: string;
    from: string;
    created: string;
    updated: string;
    column: string;
    direction?: string;
    tech?: string;
    phone?: string;
}

interface CardStore {
    cards: IFastRequest[];
    fetchCards: () => Promise<void>
}

export const useRequestStore = create<CardStore>((set) => ({
    cards: [],
    fetchCards: async () => {
        try {
            const requests = await pb.collection("fastRequest").getFullList<IFastRequest>({
                sort: "-created",
            });
            set({ cards: requests });
        } catch (error) {
            console.error("Error fetching cards:", error);
        }
    }
}))