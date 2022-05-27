<template>
  <!--begin::Advance Table Widget 2-->
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Body-->
    <div class="card-body pt-3 pb-0">
      <!--begin::Table-->
      <div v-if="list.length > 0" class="table-responsive">
        <table class="table table-borderless table-vertical-center">
          <thead>
            <tr>
              <th class="p-0 h5" style="min-width: 100px; text-align: center">
                Order Id
              </th>
              <th class="p-0 h5" style="min-width: 200px; text-align: center">
                Total quantity
              </th>
              <th class="p-0 h5" style="min-width: 200px; text-align: center">
                Total price
              </th>
              <th class="p-0 h5" style="min-width: 200px; text-align: center">
                Shipping charges
              </th>
              <th class="p-0 h5" style="min-width: 200px; text-align: center">
                Tracking id
              </th>
              <th class="p-0 h5" style="min-width: 200px; text-align: center">
                Shipping details
              </th>
              <th class="p-0 h5" style="min-width: 200px; text-align: center">
                Products details
              </th>
              <th
                class="p-0 h5"
                style="min-width: 200px; text-align: center"
              ></th>
            </tr>
          </thead>
          <br /><br />
          <tbody>
            <template v-for="(item, i) in list">
              <tr
                v-bind:key="i"
                v-if="
                  item.partner_status !== 'approved' &&
                  item.partner_status !== 'rejected'
                "
              >
                <td class="pl-0 text-center">
                  <span
                    class="
                      text-dark-75
                      font-weight-bolder
                      text-hover-primary
                      mb-1
                      font-size-lg
                    "
                  >
                    {{ item._id }}
                  </span>
                </td>
                <td class="pl-0 text-center">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    {{ item.total_quantity }}
                  </span>
                </td>
                <td class="text-center">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    ₹{{ item.total_price }}
                  </span>
                </td>

                <td class="text-center">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    ₹{{ item.shipping_charges ? item.shipping_charges : "0" }}
                  </span>
                </td>
                <td class="text-center">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    {{ item._id }}
                  </span>
                </td>
                <td class="text-center">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    <div
                      class="btn btn-primary"
                      @click="openShippingDetails(item)"
                    >
                      Open
                    </div>
                  </span>
                </td>
                <td class="text-center">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    <div
                      class="btn btn-primary"
                      @click="openProductsDetails(item)"
                    >
                      Open
                    </div>
                  </span>
                </td>
                <td class="text-center pr-0">
                  <div class="btn btn-success mr-3" @click="approveOrder(item)">
                    Accept
                  </div>
                  <div class="btn btn-danger" @click="rejectOrder(item)">
                    Reject
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <div v-else class="my-5 text-center">No orders</div>

      <!--end::Table-->
    </div>
    <!--end::Body-->
    <!--end::Advance Table Widget 2-->

    <!-- shipping modal::begin -->
    <b-modal
      id="shipping-modal"
      centered
      hide-footer
      size="lg"
      title="Shipping Details"
    >
      <div>
        <!--begin::Group-->
        <div class="form-group row fv-plugins-icon-container">
          <label class="col-xl-3 col-lg-3 col-form-label">Full Name</label>
          <div class="col-lg-9 col-xl-9">
            <input
              class="form-control form-control-solid form-control-lg"
              name="Fullname"
              type="text"
              placeholder="Fullname"
              :value="shippingDetails.fullname"
              disabled
            />
          </div>
        </div>
        <!--end::Group-->
        <!--begin::Group-->
        <div class="form-group row fv-plugins-icon-container">
          <label class="col-xl-3 col-lg-3 col-form-label">Address 1</label>
          <div class="col-lg-9 col-xl-9">
            <div class="input-group input-group-solid input-group-lg">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="la la-phone"></i>
                </span>
              </div>
              <input
                type="text"
                class="form-control form-control-solid form-control-lg"
                name="address1"
                placeholder="address1"
                v-model="shippingDetails.address1"
                disabled
              />
            </div>
          </div>
        </div>
        <!--end::Group-->
        <!--begin::Group-->
        <div class="form-group row fv-plugins-icon-container">
          <label class="col-xl-3 col-lg-3 col-form-label">Address 2</label>
          <div class="col-lg-9 col-xl-9">
            <div class="input-group input-group-solid input-group-lg">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="la la-at"></i>
                </span>
              </div>
              <input
                type="text"
                class="form-control form-control-solid form-control-lg"
                name="address2"
                placeholder="address2"
                :value="shippingDetails.address2"
                disabled
              />
            </div>
          </div>
        </div>
        <!--end::Group-->
        <!--begin::Group-->
        <div class="form-group row fv-plugins-icon-container">
          <label class="col-xl-3 col-lg-3 col-form-label">Country</label>
          <div class="col-lg-9 col-xl-9">
            <div class="input-group input-group-solid input-group-lg">
              <input
                type="text"
                class="form-control form-control-solid form-control-lg"
                name="country"
                placeholder="country"
                :value="shippingDetails.country"
                disabled
              />
            </div>
          </div>
        </div>
        <!--end::Group-->
        <!--begin::Group-->
        <div class="form-group row fv-plugins-icon-container">
          <label class="col-xl-3 col-lg-3 col-form-label">Zip code</label>
          <div class="col-lg-9 col-xl-9">
            <div class="input-group input-group-solid input-group-lg">
              <input
                type="text"
                class="form-control form-control-solid form-control-lg"
                name="zip_code"
                placeholder="zip_code"
                :value="shippingDetails.zip_code"
                disabled
              />
            </div>
          </div>
        </div>
        <!--end::Group-->
        <!--begin::Group-->
        <div class="form-group row fv-plugins-icon-container">
          <label class="col-xl-3 col-lg-3 col-form-label">State</label>
          <div class="col-lg-9 col-xl-9">
            <div class="input-group input-group-solid input-group-lg">
              <input
                type="text"
                class="form-control form-control-solid form-control-lg"
                name="state"
                placeholder="state"
                :value="shippingDetails.state"
                disabled
              />
            </div>
          </div>
        </div>
        <!--end::Group-->
        <!--begin::Group-->
        <div class="form-group row fv-plugins-icon-container">
          <label class="col-xl-3 col-lg-3 col-form-label">Company</label>
          <div class="col-lg-9 col-xl-9">
            <div class="input-group input-group-solid input-group-lg">
              <input
                type="text"
                class="form-control form-control-solid form-control-lg"
                name="company"
                placeholder="company"
                :value="shippingDetails.company"
                disabled
              />
            </div>
          </div>
        </div>
        <!--end::Group-->
        <!--begin::Group-->
        <div class="form-group row fv-plugins-icon-container">
          <label class="col-xl-3 col-lg-3 col-form-label">Phone</label>
          <div class="col-lg-9 col-xl-9">
            <div class="input-group input-group-solid input-group-lg">
              <input
                type="text"
                class="form-control form-control-solid form-control-lg"
                name="phone"
                placeholder="phone"
                :value="shippingDetails.phone"
                disabled
              />
            </div>
          </div>
        </div>
        <!--end::Group-->
        <!--begin::Group-->
        <div class="form-group row fv-plugins-icon-container">
          <label class="col-xl-3 col-lg-3 col-form-label">City</label>
          <div class="col-lg-9 col-xl-9">
            <div class="input-group input-group-solid input-group-lg">
              <input
                type="text"
                class="form-control form-control-solid form-control-lg"
                name="city"
                placeholder="city"
                :value="shippingDetails.city"
                disabled
              />
            </div>
          </div>
        </div>
        <!--end::Group-->
      </div>
      <div class="w-100 mt-5 text-center">
        <div class="btn btn-primary" @click="$bvModal.hide('shipping-modal')">
          Close
        </div>
      </div>
    </b-modal>
    <!-- shipping modal::end -->

    <!-- Products details modal::begin -->
    <b-modal
      id="products-details-modal"
      centered
      hide-footer
      size="xl"
      title="Products Details"
    >
      <div>
        <div v-if="productDetails.length > 0" class="table-responsive">
          <table class="table table-borderless table-vertical-center">
            <thead>
              <tr>
                <th class="p-0 h5" style="min-width: 100px; text-align: center">
                  Title
                </th>
                <th class="p-0 h5" style="min-width: 200px; text-align: center">
                  Image
                </th>

                <th class="p-0 h5" style="min-width: 200px; text-align: center">
                  Description
                </th>
                <th class="p-0 h5" style="min-width: 200px; text-align: center">
                  Price
                </th>
                <th class="p-0 h5" style="min-width: 200px; text-align: center">
                  Product size
                </th>
                <th class="p-0 h5" style="min-width: 200px; text-align: center">
                  Product color
                </th>
                <th class="p-0 h5" style="min-width: 180px; text-align: center">
                  Quantity
                </th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(product, prodIndex) in productDetails">
                <tr v-bind:key="prodIndex">
                  <td class="pl-0 text-center">
                    <span
                      class="
                        text-dark-75
                        font-weight-bolder
                        text-hover-primary
                        mb-1
                        font-size-lg
                      "
                    >
                      {{ product.title }}
                    </span>
                  </td>
                  <td class="pl-0 text-center">
                    <img
                      :src="product.product_img"
                      alt=""
                      style="
                        height: 150px;
                        object-fit: contain;
                        max-width: 100%;
                      "
                    />
                  </td>
                  <td class="pl-0 text-center">
                    <span
                      class="
                        text-dark-75
                        font-weight-bolder
                        d-block
                        font-size-lg
                      "
                    >
                      {{ product.description }}
                    </span>
                  </td>
                  <td class="text-center">
                    <span
                      class="
                        text-dark-75
                        font-weight-bolder
                        d-block
                        font-size-lg
                      "
                    >
                      ₹{{ product.price }}
                    </span>
                  </td>

                  <td class="text-center">
                    <span
                      class="
                        text-dark-75
                        font-weight-bolder
                        d-block
                        font-size-lg
                      "
                    >
                      {{ product.productsize }}
                    </span>
                  </td>
                  <td class="text-center">
                    <span
                      class="
                        text-dark-75
                        font-weight-bolder
                        d-block
                        font-size-lg
                      "
                    >
                      {{ product.productcolor }}
                    </span>
                  </td>
                  <td class="text-center">
                    <span
                      class="
                        text-dark-75
                        font-weight-bolder
                        d-block
                        font-size-lg
                      "
                    >
                      {{ product.quantity }}
                    </span>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <div v-else class="my-5 text-center">No details available</div>
        <div class="w-100 mt-5 text-center">
          <div
            class="btn btn-primary"
            @click="$bvModal.hide('products-details-modal')"
          >
            Close
          </div>
        </div>
      </div>
    </b-modal>
    <!-- Products details modal::end -->

    <!-- approve modal::begin -->
    <b-modal
      id="approve-modal"
      centered
      hide-footer
      size="lg"
      title="Shipping Details"
      no-close-on-backdrop
    >
      <div>
        <!--begin::Group-->
        <div class="form-group row fv-plugins-icon-container">
          <label class="col-xl-3 col-lg-3 col-form-label">Zip code</label>
          <div class="col-lg-9 col-xl-9">
            <div class="input-group input-group-solid input-group-lg">
              <input
                type="text"
                class="form-control form-control-solid form-control-lg"
                name="zip_code"
                placeholder="zip_code"
                :value="selectedZipCode"
                disabled
              />
            </div>
          </div>
        </div>
        <!--end::Group-->

        <!--begin::Group-->
        <div class="form-group row fv-plugins-icon-container">
          <label class="col-xl-3 col-lg-3 col-form-label"
            >Shipping Company</label
          >
          <div class="col-lg-9 col-xl-9">
            <b-dropdown
              :text="
                shippingCompanies.length > 0
                  ? 'Select a shipping company'
                  : 'No shipping companies for this pincode'
              "
              variant="outline-primary"
              class="w-100"
              menu-class="w-100"
            >
              <b-dropdown-item
                v-for="(company, companyIndex) in shippingCompanies"
                :key="companyIndex"
                @click="selectShippingCompany(company)"
              >
                {{ company.courier_name }}
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
        <!--end::Group-->

        <!--begin::Group-->
        <div class="form-group row fv-plugins-icon-container">
          <label class="col-xl-3 col-lg-3 col-form-label"
            >Shipping Charges</label
          >
          <div class="col-lg-9 col-xl-9">
            <div class="input-group input-group-solid input-group-lg">
              <input
                type="text"
                class="form-control form-control-solid form-control-lg"
                name="shipping charges"
                placeholder="Shipping Charges"
                :value="shippingCharges"
                disabled
              />
            </div>
          </div>
        </div>
        <!--end::Group-->
      </div>
      <div class="w-100 mt-5 text-center">
        <div class="btn btn-danger" @click="$bvModal.hide('shipping-modal')">
          Close
        </div>
        <div class="btn btn-primary ml-5 px-15" @click="payAmount">Pay</div>
      </div>
    </b-modal>
    <!-- approve modal::end -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "widget-2",
  data() {
    return {
      list: [],
      shippingDetails: {},
      productDetails: [],
      shippingCharges: "",
      selectedZipCode: "",
      shippingCompanies: [],
      selectedShippingCompany: "",
      selectedItemId: "",
      selectedCourierId: "",
      walletAmount: "",
      razorPayInitData: {},
    };
  },
  created() {
    this.getWixOrders();
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  methods: {
    getWixOrders() {
      axios
        .get(`/wix/getWixOrders/${this.currentUser.id}`)
        .then(({ data }) => {
          // console.log(data);
          this.list = data.ordersData;
        })
        .catch((resp) => {
          console.log(resp);
        });
    },
    openShippingDetails(item) {
      console.log(item);
      this.shippingDetails = item.customerShipping_details[0];
      this.$bvModal.show("shipping-modal");
    },
    openProductsDetails(item) {
      this.productDetails = item.product_info;
      console.log(this.productDetails);
      this.$bvModal.show("products-details-modal");
    },
    rejectOrder(item) {
      console.log(item);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Reject",
      }).then((result) => {
        if (result.isConfirmed) {
          let postData = {
            approveData: {
              id: item._id,
              shipping_charges: item.shipping_charges,
              partner_status: "rejected",
              courier_id: item.courier_id,
            },
          };
          axios
            .post(`/wix/setOrderStatus`, postData)
            .then(({ data }) => {
              this.getWixOrders();
            })
            .catch((resp) => {
              console.error(resp);
              Swal.fire({
                title: "Error!",
                text: "Couldn't reject the order. Please try again later.",
                icon: "warning",
                confirmButtonText: "Close",
              });
            });
        }
      });
    },
    approveOrder(item) {
      this.selectedZipCode = item.customerShipping_details[0].zip_code;
      this.selectedItemId = item._id;
      axios
        .get(
          `/customerShipping/getShipRocketCharges/${item.customerShipping_details[0].zip_code}/${item.total_weight}`
        )
        .then(({ data }) => {
          this.shippingCompanies = data.data.available_courier_companies;
        })
        .catch((err) => {
          console.error(err);
        });
      this.$bvModal.show("approve-modal");
    },
    selectShippingCompany(company) {
      console.log(company);
      this.selectedShippingCompany = company;
      this.shippingCharges = company.rate;
      this.selectedCourierId = company.courier_company_id;
    },
    deductAmount() {
      let self = this;
      let postData = {
        approveData: {
          id: self.selectedItemId,
          shipping_charges: self.shippingCharges,
          partner_status: "approved",
          courier_id: self.selectedCourierId,
        },
      };
      axios
        .post(`/wix/setOrderStatus`, postData)
        .then(({ data }) => {
          self.getWixOrders();

          axios
            .post(`/customerWallet/debitWallet`, {
              customer_data: {
                customer_id: self.currentUser.id,
                amount: self.shippingCharges,
              },
            })
            .then(({ data }) => {
              Swal.fire(
                "Order Accepted",
                "Transaction complete!",
                "success"
              ).then(() => {
                window.location.reload();
              });
            })
            .catch((resp) => {
              console.error(resp);
            });
        })
        .catch((resp) => {
          console.error(resp);
          Swal.fire({
            title: "Error!",
            text: "Couldn't reject the order. Please try again later.",
            icon: "warning",
            confirmButtonText: "Close",
          });
        });
    },
    addAmount() {
      let amount = parseInt(this.walletAmount) * 100;

      let data = {
        insdata: {
          customer_id: this.currentUser.id,
          currency: "INR",
          amount: amount,
        },
      };
      axios
        .post(`/customerWallet/razorPayInstantiate`, data)
        .then(({ data }) => {
          console.log(data);
          this.razorPayInitData = data.savedhistoryData;
          this.razorPayCheckout();
        })
        .catch((resp) => {
          console.log(resp);
          Swal.fire({
            title: "Error!",
            text: "Some error occurred while adding amount. Please try again.",
            icon: "error",
            confirmButtonText: "Close",
          });
        });
    },
    razorPayCheckout() {
      let self = this;
      let amount = parseInt(self.walletAmount) * 100;
      // console.log(amount);
      var options = {
        key: "rzp_test_aAHglk8OS8HPRk", // Enter the Key ID generated from the Dashboard
        amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: self.currentUser.email,
        // image: "https://example.com/your_logo",
        order_id: self.razorPayInitData.payment_order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: function (response) {
          let addWalletData = {
            walletData: {
              customer_id: self.currentUser.id,
              currency: "INR",
              amount: self.walletAmount,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            },
          };
          axios
            .post("/customerWallet/addWalletAmount", addWalletData)
            .then(({ data }) => {
              self.walletAmount = "";
              self.deductAmount();
            })
            .catch((resp) => {
              Swal.fire({
                title: "Error!",
                text: "Error adding amount to wallet. Please contact support for help",
                icon: "error",
                confirmButtonText: "Close",
              }).then(() => {
                self.walletAmount = "";
              });
            });
        },
        theme: {
          color: "#3399cc",
        },
      };
      // console.log("razorpay", options);
      var rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        self.walletAmount = "";
        Swal.fire({
          title: "Error!",
          text: response.error.description,
          icon: "error",
          confirmButtonText: "Close",
        });
      });
      rzp1.open();
    },
    payAmount() {
      let self = this;
      axios
        .get(`/customerWallet/getWalletbyid/${self.currentUser.id}`)
        .then(({ data }) => {
          if (Number(data.wallet.amount) >= Number(self.shippingCharges)) {
            Swal.fire({
              title: "Pay from wallet",
              icon: "info",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Pay",
            }).then((result) => {
              if (result.isConfirmed) {
                self.deductAmount();
              }
            });
          } else {
            let remainingAmount =
              Number(self.shippingCharges) - Number(data.wallet.amount);
            self.walletAmount = remainingAmount;
            Swal.fire({
              title: "Add remaining amount to wallet and pay?",
              text: "Wallet amount insufficient",
              icon: "question",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Add amount and pay",
            }).then((result) => {
              if (result.isConfirmed) {
                self.addAmount();
              }
            });
          }
        });
    },
  },
};
</script>
