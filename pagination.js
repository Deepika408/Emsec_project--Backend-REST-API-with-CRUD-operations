const users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
]
  
  // API endpoint for retrieving a list of users
  const pagination =  (req, res) => {
    const page = req.query.page || 1;
    const perPage = req.query.per_page || 10;
  
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
  
    const paginatedUsers = users.slice(startIndex, endIndex);
  
    res.json({
      users: paginatedUsers,
      total: users.length
    });
  };
  export default pagination;