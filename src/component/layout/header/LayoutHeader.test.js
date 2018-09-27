import { mount } from "@vue/test-utils";
import LayoutHeader from "./LayoutHeader";


describe("LayoutHeader", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(LayoutHeader, {
      stubs: ["router-link"]
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.vm.$options.name).toBe("component-layout-header-layout-header")
  });
});
