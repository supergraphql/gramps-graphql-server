export default {
    Query: {
      getLatestComic: (_, __, context) => {console.log(context); return context.getLatestComic()},
      getComicById: (_, { id }, context) => context.getComicById(id),
    },
    XKCD_Comic: {
      // The link is often empty, so build one if it’s not returned.
      link: data => data.link || `https://xkcd.com/${data.num}/`,
    },
  };