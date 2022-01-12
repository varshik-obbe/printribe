import url from "./host";

const Api = {
	customers: {
		LOGIN: url.customer + 'login',
		SIGNUP: url.customer + 'addCustomer',
		GETBYID: url.customer + 'getCustomerbyid?id=',
		UPDATECUSTOMER: url.customer + 'updatecustomer?id='
	}
};

export default Api