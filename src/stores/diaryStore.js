import { defineStore } from 'pinia'

export const useDiaryStore = defineStore("diaryStore", {
    state: () => ({
        diary: [
            {id: 1, diary: "Bugün erken kalktım...", date: "2.08.2023", isFav: false},
            {id: 2, diary: "Bugün  iş için Pinia tutorial izledim..", date: "3.08.2023", isFav: true},
        ]
    }),
    getters: { //getters objesi
        favs(){ //method
            return this.diary.filter(gunluk => gunluk.isFav) //sadece isFav ı true olanları aldık ve bunları gönderdik yani return ettik.
        },
        favCount(){ //beğenilen günlüklerin sayılarını aldı. 
            return this.diary.reduce((previous, current) => {
                return current.isFav ? previous + 1 : previous //Koşul olarak beğendiyse eğer previous değerini 1 arttır yazdık
            }, 0)
        },
        totalCount: (state) => { //total sayıyı aldık. burda parantez içerisinde state tanımlamamızın sebebi, arrow funct kullandığımız için this o funct içerisindekini tanıyabiliyor ondan dışarı çıkamıyor. o yüzden bizde state tanımlayığ this yerine state yazarak içerisinden diary'i aldık.
            return state.diary.length
        }
    }
})

//getters: state içerisinde bulunan değişkenin içerisindeki herhangi bir parametreyi veya bu parametrenin değerine göre bir filtreleme yaparak sonucu göstermemizi sağlayan öğeler 
//yukarıda getters kullanmamızın sebebi; getters, dizinin içerisindeki parametreyi hazır olarak çekip ve sadece o parametreyi dönebiliyor. Yani komple diziyi alıp içerisinden ayıklamak zaman alır ve gereksiz yer kaplar. Bizde diary içerisinde tek tek bulmak yerine parametre şeklinde alıp (isFav aldık yukarıda) onu kullancağız.