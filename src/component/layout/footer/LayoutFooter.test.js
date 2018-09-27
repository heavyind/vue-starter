import { mount } from "@vue/test-utils";
import LayoutFooter from "./LayoutFooter.vue";


describe("LayoutFooter", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(LayoutFooter, {
      stubs: ["router-link"]
    });
    expect(wrapper.vm.$options.name).toBe("component-layout-footer-layout-footer");
  });
});
