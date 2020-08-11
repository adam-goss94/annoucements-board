export const initialState = {
  posts: {
    data: [{
      id: '1',
      author: 'the.admin@example.com',
      created: '2019-01-01',
      updated: '2019-01-01',
      status: 'published',
      title: 'Welcome to our bulletin board!',
      text: 'Email me to register and get an account!',
      photo: null,
      price: null,
      phone: null,
      location: null,
    },
    {
      id: '2',
      author: 'user123@example.com',
      created: '2019-01-05',
      updated: '2019-01-05',
      status: 'published',
      title: 'Room for rent',
      text: 'I have a spare room for rent. Low price!',
      photo: null,
      price: null,
      phone: null,
      location: null,
    }],
  },

  loading: {
    active: false,
    error: false,
  },

  userLogged: true,
};
