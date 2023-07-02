import axios from "axios"

// export const fetchRegister = async (input) => {
//     const { data } = await axios.post(`http://localhost:4000/auth/register`, input);

//     return data;
// };

axios.interceptors.request.use(
	function (config) {
		const { origin } = new URL(config.url);

		const allowedOrigins = [process.env.REACT_APP_BASE_ENDPOINT];
		const token = localStorage.getItem("access-token");

		if (allowedOrigins.includes(origin)) {
			config.headers.authorization = token;
		}

		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

export const fetchRegister = async (input) => {
	const { data } = await axios.post(
		`${process.env.REACT_APP_BASE_ENDPOINT}/auth/register`,
		input
	);

	return data;
};

//sayfa yenileme işlemi sonrası girilen bilgileri kalması localstorage
export const fetchMe = async () => {
	const { data } = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/auth/me`

	);
	return data;
};
//çıkış işlemi
export const fetchLogout = async () => {
	const { data } = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/auth/logout`,
		{
			refresh_token: localStorage.getItem("refresh-token"),
		});

	return data;
};

//login işlemi
export const fetchLogin = async (input) => {
    const { data } = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/auth/login`, input);

    return data;
};


