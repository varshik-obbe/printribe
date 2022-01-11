import React from 'react';
import styles from  "../../styles/policy.module.css"

const one = "Courier Returns occur when the order is undelivered and marked as ‘Returning to Origin’ (RTO). Please find below the potential reasons for the order being marked as RTO.";
const two = ["Customer not contactable","Incomplete address","COD amount not ready","Future delivery requested by the customer",
"Self-pickup requested by the customer","Customer refused delivery","Door/premises/office closed","Pin code not serviceable"]
const three = "In this case, the default return address is Printribe, No. 1, Mallayya Industrial Area, Kereguddadahalli, Chikkabanavara, Bangalore, Karnataka 560090. When we receive the returned shipment, it will be updated in your merchant account and an update will be sent to you by email registered with us. Using a custom return address is not possible currently since not all the courier companies allow it.";
const four = "When the order is returned, Printribe would store the returns for a period of 30 days from the date of the order being marked as RTO, without any warehousing fee."
const five = "You can choose to Reship the order to yourself or any other address within this period of 30 days, after which we would donate the order to charity. Kindly note that you will not be allowed to take any action on the returned orders after this period."
const six = "Please also note that if the pin code becomes unserviceable after the order is placed, Printribe shall not be responsible for the RTO and as a result, no refunds will be processed from our end."
const seven = "If the address provided by you for delivery is found to be incorrect by the courier personnel, and if an address correction is requested, you will be charged INR 65 + GST for correcting the address after the shipment has started travelling.";
const eight = "In the case of issues related to misprinting or damaged or defective items sent to the customer, it must be communicated to Printribe within 10 days upon the delivery of the product. For items lost in shipment, claims, if any, must be communicated not later than 10 days after the estimated delivery date."
const nine = "In the case of fragile products like Mugs and Framed posters, all issues have to be raised within 10 days from the date of delivery of the product. In order to raise a replacement request, send us pictures of the broken product along with the original packaging in which the product was received by the customer, showing the shipping label and the customer details on it clearly for verification."
const ten = "Since the product is customized to customer requirement, any such return or rejection must be channeled through you. We do not refund for any modification in order for size or color and hence such modifications are to be offered at your expense and discretion. A new order, at your expense, needs to be placed for an updated modification if you choose to accept or offer exchanges to your end customers."
const eleven = "Orders that are returned due to incorrect addresses or rejected by customers are marked as ‘Returned to origin’ (RTO) under the Manage Returns page in the merchant panel once it is received by Printribe. Printribe would store the returns for a period of 30 days from the date of the order being marked as RTO and the merchant can choose to Reship the order to himself or any other address within this period of 30 days, after which we would donate the order to charity. The merchant will not be allowed to take any action on the returned orders after this period."
const twelve = "In case we receive a cancellation notice and the order has not been processed by us, we shall cancel the order immediately and refund the entire amount back as credits into your Printribe Account. If we have already printed and shipped the product, we will not be able to approve the cancellation request. In such cases, the product follows the normal lifecycle process."
const thirteen = "Under certain circumstances it might not be possible for us to accept an order and we may be compelled to cancel the same. We reserve the right to refuse or cancel any order for any reason at our sole discretion. Some situations that may result in your order being cancelled include limitations on quantities available for purchase, inaccuracies or errors in product or pricing information, or problems identified by our credit and fraud avoidance department. We may also ask for additional verification or information before accepting any order. We will contact you if all or any portion of your order is cancelled or if additional information is required to accept your order. If your order is cancelled after you are charged, the said amount will be reversed back in your merchant account in the next ledger closing cycle, which is run every 15 days."
const fourteen = "​If the order is cancelled and refund is approved, for any reason the refund is awarded in the form of ‘Credits’. Such credit can be utilized for future orders from Printribe."
const fifteen = "The credit awarded can be passed and utilized by another customer only once, with prior intimation to Printribe."
const sixteen = "The customer agrees not to dispute the decision made by Printribe and accept Printribe’s decision regarding the cancellation."

function body(){
    return(
    <div className={styles.bodycontainer}>
    <Topic title={"COURIER RETURNS"}/>
    <Para data={one}/><br/>
    <div className={styles.bodySmallHeader}>Reasons for Undelivered Shipment</div>
    {two.map((item,index)=>(
        <div className={styles.bulletPoints}> &bull; {item}</div>
    ))}<br/>
    <Para data={three}/><br/>
    <div className={styles.bodySmallHeader}>Action Required on Courier Returned Orders</div>
    <Para data={four}/><br/>
    <Para data={five}/><br/>
    <Para data={six}/><br/>
    <div className={styles.bodySmallHeader}>Incorrect Address</div>
    <Para data={seven}/><br/>
    <Topic title={"CUSTOMER RETURNS"}/>
    <div className={styles.bodySmallHeader}>Product Quality Issues</div>
    <Para data={eight}/><br/>
    <div className={styles.bodySmallHeader}>Broken Products Received</div>
    <Para data={nine}/><br/>
    <div className={styles.bodySmallHeader}>Rejection by Customer</div>
    <Para data={ten}/><br/>
    <div className={styles.bodySmallHeader}>Action on Customer Returned Orders</div>
    <Para data={eleven}/><br/>
    <Topic title={"CANCELLATIONS"}/>
    <div className={styles.bodySmallHeader}>Cancellations by the Customer</div>
    <Para data={twelve}/><br/>
    <div className={styles.bodySmallHeader}>Cancellation by Printribe</div>
    <Para data={thirteen}/><br/>
    <Topic title={"REFUND"}/>
    <Para data={fourteen}/><br/>
    <div className={styles.bodySmallHeader}>Transfer of Credit</div>
    <Para data={fifteen}/><br/>
    <Para data={sixteen}/><br/>
    </div>)
}

function Topic(props){
    return(
        <div className={styles.bodytopic}>{props.title}</div>
    )
}

function Para(props){
    return(
        <div className={styles.bodydata}>{props.data}</div>
    )
}


export default body;