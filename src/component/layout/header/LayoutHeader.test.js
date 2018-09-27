import { mount } from "@vue/test-utils";
import LayoutHeader from "./LayoutHeader.vue";


describe("LayoutHeader", () => {
  test("has the proper name", () => {
    const wrapper = mount(LayoutHeader, {
      stubs: ["router-link"]
    });
    expect(wrapper.vm.$options.name).toBe("component-layout-header-layout-header");
  });
});
