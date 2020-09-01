const getUSer = async () => ({
    name: 'nome do usuário',
    idade: 21
});

module.exports = {
    getUSer
}

const connectDatabase = async () => {
    return queryBuilder;
   }
   const getUSer = async () => {
    const queryBuilder = await connectDatabase();
    return queryBuilder;
   };
   const createUSer = async ({ name, lastname }) => {
    const queryBuilder = await connectDatabase();
    return queryBuilder;
   };
   const updateUser = async ({ id }, { name, lastname }) => {
    const queryBuilder = await connectDatabase();
    return queryBuilder;
   };
   const deleteUser = async ({ id }) => {
    const queryBuilder = await connectDatabase();
    return queryBuilder;
   };
   module.exports = {
    getUSer,
    createUSer,
    updateUser,
    deleteUser
   }