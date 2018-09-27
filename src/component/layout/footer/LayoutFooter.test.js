import { mount } from "@vue/test-utils";
import LayoutFooter from "./LayoutFooter";


describe("LayoutFooter", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(LayoutFooter, {
      stubs: ["router-link"]
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  })
});
