import { actions, mutations } from "./store";


describe("actions", () => {
  test("It does nothing", () => {

  });
});

describe("mutations", () => {
  test("it sets a post", () => {
    const { setPost } = mutations;
    const state = { posts: {} };
    const mockPost = { title: "A sample title", body: "A sample body" };
    const newEntry = { id: 0, post: mockPost };
    setPost(state, newEntry);
    expect(state.posts[0]).toBe(mockPost);
  });
});
