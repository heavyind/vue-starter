import { shallowMount } from "@vue/test-utils";
import About from "./About.vue";


describe("AboutPage", () => {
  test("has the proper name", () => {
    const wrapper = shallowMount(About, {
      stubs: ["router-link"]
    });
    expect(wrapper.vm.$options.name).toBe("page-about");
  });
});
