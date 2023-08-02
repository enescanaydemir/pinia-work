import { defineStore } from 'pinia'

export const useDiaryStore = defineStore("diaryStore", {
    state: () => ({
        diary: [
            {id: 1, diary: "Bugün erken kalktım...", date: "2.08.2023", isFav: false},
            {id: 2, diary: "Bugün  iş için Pinia tutorial izledim..", date: "3.08.2023", isFav: false},
        ]
    })
})