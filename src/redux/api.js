import axios from "axios";

// router.get('/', getProducts);
// router.get('/:id', getProduct);
// router.post('/', createProduct);
// router.patch('/:id', updateProduct);
// router.delete('/:id', deleteProduct);

const url = "http://localhost:5000/api/products";



export const fetchProducts = () => axios.get(url);
export const fetchSingleProduct = (id) => axios.get(`${url}/${id}`);
export const createProducts = (newProduct) => axios.post(url, newProduct);
export const deleteProducts = (id) => axios.delete(`${url}/${id}`);
export const updateProducts = (id) => axios.patch(`${url}/${id}`);


// const authUrl = "http://localhost:5000/api/user/";
// router.post("/signUp", register);
// router.post("/signIn", login);
// router.post("/userInfo", authenticatedUser);

// export const createUser = (newUser) => axios.post(authUrl+'signUp', newUser);
// export const createdUser = () => axios.get(authUrl+'userInfo');