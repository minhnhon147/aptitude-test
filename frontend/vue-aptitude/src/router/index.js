import { createRouter, createWebHistory } from "vue-router";

// import Product from "../components/Product/Product.vue";

const routes = [{ path: "/products", component: "" }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
