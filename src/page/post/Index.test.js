import { shallowMount } from "@vue/test-utils";
import Post from "./Post.vue";


describe("PostPage", () => {
  test("has the proper name", () => {
    const wrapper = shallowMount(Post, {
      stubs: ["router-link"],
      mocks: {
        $store: {
          state: {
            posts: [{ title: "foo", body: "bar" }]
          }
        },
        $route: {
          params: {
            id: 0
          }
        }
      }
    });
    expect(wrapper.vm.$options.name).toBe("page-post");
  });
});
