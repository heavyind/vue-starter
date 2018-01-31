
export function fetchPost(id) {

  function mockPost(id) {
    const post = {
      id: id,
      title: "Post title of post number " + id + ".",
      body: "This is the body of post number " + id + "."
    };
    return post;
  }

  return new Promise((res, rej) => {
    res(mockPost(id));
  });
};
