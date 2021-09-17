export const ENTRIES1 = [
    {
        title: 'Usia: delapan bulan',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i2.lensdump.com/i/ZPmRsM.jpg'
    },
    {
        title: 'Usia: 18 bulan',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i3.lensdump.com/i/ZPmJ5x.jpg'
    },
    {
        title: 'Usia: enam bulan',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.lensdump.com/i/ZPm9H1.jpg'
    },
    {
        title: 'Usia: 15 bulan',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i1.lensdump.com/i/ZPm4Wm.jpg'
    },
    {
        title: 'Usia: 10 bulan',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i2.lensdump.com/i/ZPmK9i.jpg'
    },
    {
        title: 'Usia: 1 tahun',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i3.lensdump.com/i/ZPmpvo.jpg'
    }
];

export const ENTRIES2 = [
    {
        title: 'Favourites landscapes 1',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/SsJmZ9jl.jpg'
    },
    {
        title: 'Favourites landscapes 2',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/5tj6S7Ol.jpg'
    },
    {
        title: 'Favourites landscapes 3',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat',
        illustration: 'https://i.imgur.com/pmSqIFZl.jpg'
    },
    {
        title: 'Favourites landscapes 4',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/cA8zoGel.jpg'
    },
    {
        title: 'Favourites landscapes 5',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/pewusMzl.jpg'
    },
    {
        title: 'Favourites landscapes 6',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat',
        illustration: 'https://i.imgur.com/l49aYS3l.jpg'
    }
];

export const MUSA = [
    {
        title: 'Hapal lagu gara-gara nonton youtube',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        image: 'https://i2.lensdump.com/i/ZPmRsM.jpg'
    },
    {
        title: 'Menangis terus-terusan',
        subtitle: 'Lorem ipsum dolor sit amet',
        image: 'https://i3.lensdump.com/i/ZPmJ5x.jpg'
    },
    {
        title: 'Makan lahap pake kentang dan ayam',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        image: 'https://i1.lensdump.com/i/ZPm4Wm.jpg'
    },
    {
        title: 'Jalan jalan depan rumah',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        image: 'https://i.lensdump.com/i/ZPm9H1.jpg'
    },
    {
        title: 'Petik daun kering',
        subtitle: 'Lorem ipsum dolor sit amet',
        image: 'https://i2.lensdump.com/i/ZPmK9i.jpg'
    },
    {
      title: 'Seharian di rumah nenek',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      image: 'https://i3.lensdump.com/i/ZPmpvo.jpg'
  },
];

export const PHOTOS = 
["https://i2.lensdump.com/i/ZPmRsM.jpg", "https://i.lensdump.com/i/ZPm9H1.jpg", 
"https://i3.lensdump.com/i/ZPmJ5x.jpg", "https://i1.lensdump.com/i/ZPm4Wm.jpg", 
"https://i.lensdump.com/i/ZPm9H1.jpg", "https://i2.lensdump.com/i/ZPmK9i.jpg", 
"https://i3.lensdump.com/i/ZPmpvo.jpg"];


export const GALLERYDATA = [
    {
        uri: "https://i2.lensdump.com/i/ZPmRsM.jpg",
        title: "www.luehangs.site",
        description: "Test 2",
        // dimensions: { width: 1080, height: 1920 }
    },
    {
        URI: "https://i.lensdump.com/i/ZPm9H1.jpg",
        id: "xbg72uclk",
        title: "www.luehangs.site",
        description: "Test 3",
        // dimensions: { width: 1080, height: 1920 }
    },
    {
        url: "https://i3.lensdump.com/i/ZPmJ5x.jpg",
        title: "www.luehangs.site",
        description: "Test 4",
        // dimensions: { width: 1080, height: 1920 }
    },
    {
        URL: "https://i1.lensdump.com/i/ZPm4Wm.jpg",
        id: idGenerator(),
        title: "www.luehangs.site",
        description: "Test 5",
        // dimensions: { width: 1080, height: 1920 }
    },
    {
        uri: "https://i.lensdump.com/i/ZPm9H1.jpg",
        title: "www.luehangs.site",
        description: "Test 6",
        // dimensions: { width: 1920, height: 1080 }
    },
    {
        uri: "https://i2.lensdump.com/i/ZPmK9i.jpg",
        title: "www.luehangs.site",
        description: "Test 7",
        // dimensions: { width: 1920, height: 1080 }
    },
    {
        uri: "https://i3.lensdump.com/i/ZPmpvo.jpg",
        title: "www.luehangs.site",
        description: "Test 8",
        // dimensions: { width: 1080, height: 1920 }
    }
];
function idGenerator() {
    return Math.random().toString(36).substr(2, 9);
}