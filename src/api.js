
export function fetchPost(id) {

  function mockPost(id) {
    const clientPost = {
      id: id,
      title: "Post title of post number " + id + ".",
      body: "From the client!"
    };
    const serverPost = {
      id: id,
      title: "Post title of post number " + id + ".",
      body: "From the client!"
    };
    return serverPost;
  }

  return new Promise((res, rej) => {
    res(mockPost(id));
  });
};
