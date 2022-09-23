var vueInstance = new Vue({
  // options
  el: "#app",
  data: {
    title: "Dien thoai SamSung!",
  },
  methods: {
    say: function (text) {
      return "Hello" + text;
    },
  },
});

// He thong phan ung. Reactivity
console.log(vueInstance);

setTimeout(() => {
  vueInstance.title = "Dien thoai Oppo!";
}, 3000);
