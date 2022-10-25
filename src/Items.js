class Items {
  #iceCreams = {
    withCup: [
      {
        name: "BluBerry",
        id: 1,
        price: 100,
        availableQuantity: 10,
        imageUrl:
          "https://hips.hearstapps.com/vidthumb/images/delish-blueberry-no-churn-ice-cream-still002-1530884427.jpg",
      },
      {
        name: "Berry",
        id: 2,
        price: 200,
        availableQuantity: 4,
        imageUrl:
          "https://www.cremedevape.com/WebRoot/Store/Shops/yxve46fvrnud/5B27/94F3/2DF6/5F46/8BF7/0A28/1056/9125/Mystic_Shortfill_Ice_Cream_berry_01.jpg",
      },
    ],
    withoutCup: [
      {
        name: "CrownBerry",
        id: 3,
        price: 600,
        availableQuantity: 5,
        imageUrl:
          "https://images.squarespace-cdn.com/content/v1/5bcccf8b9b7d15579477a125/1548827592648-8CFWZG33FNQU87034T8X/L.A.+Crownberry+Apple.jpg",
      },
      {
        name: "EsiminchBerry",
        id: 4,
        price: 900,
        availableQuantity: 1,
        imageUrl:
          "http://dailyappetite.com/wp-content/uploads/2019/10/Crown-Apple-and-Cranberry.jpg.webp",
      },
    ],
  };

  #categories = ["withCup", "withoutCup"];

  getIceCreams(category) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        const isAvailable = this.#iceCreams[category];
        if (isAvailable) {
          res({
            status: "success",
            data: isAvailable,
          });
        } else {
          rej({
            status: "error",
            data: {},
          });
        }
      }, 3000);
    });
  }

  getCategories() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({
          status: "success",
          data: this.#categories,
        });
      }, 3000);
    });
  }
}

export default new Items();
