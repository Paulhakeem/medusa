import { defineStore } from "pinia";
import { computed } from "vue";

export const usePriceStore = defineStore("usePrice", {
  state: () => ({
    products: [
      {
        id: 1,
        product_iamge_url:
          "https://img.freepik.com/free-psd/computer-screen-mockup_1022-191.jpg?w=740&t=st=1694618028~exp=1694618628~hmac=c38d189d7a5710f9db5281de16ebddc2a226c9ee962c7fc661bd72f773b689d5",
        product_name: "Table Desk",
        product_descrption: "Redox color table high quality",
        product_price: 900,
      },
      {
        id: 2,
        product_iamge_url:
          "https://img.freepik.com/free-psd/realistic-computer-design_1310-686.jpg?w=900&t=st=1694618140~exp=1694618740~hmac=7c0f0c49ba28e96648325ee6dfe9752ae5c02c7c0b21f945f3ff7b2f33c779e3",
        product_name: "HP Desktop",
        product_descrption: "8GB RAM 256 SSD",
        product_price: 3000,
      },
      {
        id: 3,
        product_iamge_url:
          "https://img.freepik.com/free-photo/laptop-nature-concept_23-2150246074.jpg?w=826&t=st=1694618275~exp=1694618875~hmac=832cb3a4aa6092c9e25ea19a295bf3eee361ce509bbe069da46796c9a40f2f07",
        product_name: "HP Laptop",
        product_descrption: "4GB RAM 256 SSD",
        product_price: 1000,
      },
      {
        id: 4,
        product_iamge_url:
          "https://img.freepik.com/free-psd/smartphone-mockup_1310-812.jpg?w=900&t=st=1694633688~exp=1694634288~hmac=6617c9d476336b05df25a4b04e2610e69235fa9027b00a7bc75c277148a31689",
        product_name: "IPHONE 15",
        product_descrption: "Powerful camera upgrades",
        product_price: 999,
      },
      {
        id: 5,
        product_iamge_url:
          "https://img.freepik.com/free-photo/shoes_1203-8153.jpg?size=626&ext=jpg&uid=R75402652&ga=GA1.2.28834319.1688862588&semt=ais",
        product_name: "FILA",
        product_descrption: "High quality ",
        product_price: 20,
      },
      {
        id: 6,
        product_iamge_url:
          "https://img.freepik.com/free-photo/leather-boots_1203-8146.jpg?w=900&t=st=1695236595~exp=1695237195~hmac=eef78092fff36ed0fd214e241fcf242ab64015455da6577cdb133ac49a1341b5",
        product_name: "Timberland",
        product_descrption: "New timber in town high quality",
        product_price: 40,
      },
      {
        id: 7,
        product_iamge_url:
          "https://img.freepik.com/premium-photo/pair-nike-shoes-are-top-each-other_771335-48561.jpg?size=626&ext=jpg&uid=R75402652&ga=GA1.2.28834319.1688862588&semt=ais",
        product_name: "JORDAN 4",
        product_descrption: "Original and high quality shoe",
        product_price: 100,
      },
      {
        id: 8,
        product_iamge_url:
          "https://img.freepik.com/free-photo/white-high-top-sneakers-unisex-footwear-fashion_53876-106036.jpg?w=900&t=st=1695236256~exp=1695236856~hmac=01cf2e8c721d654fa581cd46a019284ccadd8168f838a0a842fc213c75c7b910",
        product_name: "AIR FORCE",
        product_descrption: "High quality original air",
        product_price: 72,
      },
    ],

    cartItems: [],
  }),

  getters: {
    count(state) {
      return state.cartItems.length;
    },
    totalPrice() {
      return this.cartItems.reduce((sum, item) => sum + item.product_price, 0);
    },
  },
  actions: {
    addItems(id) {
      const currentObject = this.products.find((product) => product.id === id);
      const findItem = this.cartItems.find((items) => items.id === id);
      if (findItem === undefined) {
        this.cartItems.push(currentObject);
      } else {
        console.log("item exist");
      }
      console.log(this.cartItems);
    },
  },
});
