document.addEventListener("DOMContentLoaded", () => {
  const pc_article_handler = document.querySelector("#pc_article_content");
  const carousel = document.querySelector("#carouselExampleDark2");
  const discout_code_content = document.querySelector("#discount_code_content");
  const configurator_pc_content = document.querySelector(
    "#configurator_pc_content"
  );
  const outlet_content = document.querySelector("#outlet_content");
  const contentArray = [
    carousel,
    discout_code_content,
    configurator_pc_content,
    outlet_content,
  ];

  const calendar_handler = document.querySelector("#discount_calendar");
  const discout_code_handler = document.querySelector("#discount_code");
  const configurator_pc_handler = document.querySelector("#configurator_pc");
  const outlet_handler = document.querySelector("#outlet");

  calendar_handler.addEventListener("click", () => {
    reset(contentArray);

    carousel.classList.remove("d-none");
    carousel.classList.add("d-block");
  });

  discout_code_handler.addEventListener("click", () => {
    reset(contentArray);

    discout_code_content.classList.remove("d-none");
    discout_code_content.classList.add("d-block");
  });

  configurator_pc_handler.addEventListener("click", () => {
    reset(contentArray);

    configurator_pc_content.classList.remove("d-none");
    configurator_pc_content.classList.add("d-block");
  });

  outlet_handler.addEventListener("click", () => {
    reset(contentArray);

    outlet_content.classList.remove("d-none");
    outlet_content.classList.add("d-block");
  });

  function reset(myArray) {
    myArray.forEach((element) => {
      element.classList.remove("d-block");
      element.classList.add("d-none");
    });
  }
});
