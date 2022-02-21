import { createStore } from "vuex";
import axios from "axios";

export const store = createStore({
  state: {
    products: [
      {
        src: "https://demo.themexbd.com/html/wella/assets/images/s3.jpg",
        description: "Home Delivery",
      },
      {
        src: "https://demo.themexbd.com/html/wella/assets/images/s1.jpg",
        description: "House Building",
      },
      {
        src: "https://demo.themexbd.com/html/wella/assets/images/s2.jpg",
        description: "Hight quality",
      },
    ],
  },

  getters: {
    products: (state) => state.products,
  },
  mutations: {
    addProduct: (state) =>
      state.products.push(
        {
          src: "https://demo.themexbd.com/html/wella/assets/images/s2.jpg",
          description: "Hight quality",
        },
        {
          src: "https://demo.themexbd.com/html/wella/assets/images/s3.jpg",
          description: "Home Delivery",
        },
        {
          src: "https://demo.themexbd.com/html/wella/assets/images/s1.jpg",
          description: "House Building",
        }
      ),

    getProduct: (state) => {
      console.log("axios run");
      axios
        .get(`http://localhost:8080/be_aptitude/productRequest.php`, {
          headers: {
            accept: "application/json",
          },
        })
        .then((response) => {
          const data = response.data;
          data.forEach((item) => {
            delete item.id;
            state.products.push(item);
          });
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
});
