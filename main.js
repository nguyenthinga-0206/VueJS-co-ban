var vueInstance = new Vue({
  // options
  el: "#app",
  data: {
    title: "Dien thoai OPPO A94 8GB-128GB",
    url: "https://fptshop.com.vn/dien-thoai/oppo-a94?utm_source=PMAX&utm_medium=CPC&utm_campaign=All%20-%20Brand%20PMAX%20-%20AllBrand%20Chung%20-%202022%20-%20ECM&gclid=CjwKCAjw-L-ZBhB4EiwA76YzObC3sormGhN-5iT5FE54onOcgpmTaTb-ifCcBQZ-lLAQ9TOxKWrGZBoCElAQAvD_BwE",
    price: 100000,
    target: "_blank",
  },
  methods: {
    // say: function (text) {
    //   return "Hello" + text;
    // },

    formatPrice() {
      var number = this.price;
      return Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND",
      }).format(number);
    },
  },
});

// He thong phan ung. Reactivity
console.log(vueInstance);

// setTimeout(() => {
//   vueInstance.title = "Dien thoai Oppo!";
// }, 3000);
Footer
© 2022 GitHub, Inc.