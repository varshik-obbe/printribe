import React from 'react'
import styles from  "../../styles/policy.module.css"

const one = "Before using certain parts of any theprintribe.com (“Printribe”) or ordering products, you must complete an online registration form. During registration, you will be prompted to provide to us certain personal information, including but not limited to user’s (your/company) name, shipping and billing address, phone number, email address, and credit card number. In addition, we may also ask you for your/customer’s country of residence and/or organization’s country of operation, so we can comply with applicable laws and regulations, and for your gender. These kinds of personal information are used for billing purposes, to fulfill orders, to communicate about order and Printribe, and for internal marketing purposes. If we encounter a problem when processing the order, your personal information may be used to contact you."
const two = "By registering at Printribe, you agree that all information provided in the registration data is true and accurate and that you will maintain and update this information as required in order to keep it current, complete, and accurate."
const three = "Printribe may collect statistics about the behavior of visitors to its site. Printribe may display this information publicly or provide it to others. However, Printribe does not disclose personal information other than as described here."
const four = "If you are a registered user of a Printribe site and have supplied your email address, Printribe may occasionally send you an email to tell you about new features, new Products, solicit your feedback. Printribe takes all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction personal information."
const five = "Printribe discloses personal information only to those of its employees, contractors and affiliated organizations that need to know that information in order to process it on Printribe’s behalf or to provide services available at Printribe site, and that have agreed not to disclose it to others. Some of those employees, contractors and affiliated organizations may be located outside of your home country."
const six = "Printribe will not rent or sell personal information to anyone. Other than to its employees, contractors and affiliated organizations, as described here, Printribe discloses personal information only in response to court order or other governmental request, or when Printribe believes in good faith that disclosure is reasonably necessary to protect the property or rights of Printribe, third parties or the public at large."
const seven = "Your account is protected by a password for your privacy and security. You need to prevent unauthorized access to your account and personal information by selecting and protecting your password appropriately and limiting access to your computer and browser by signing off after you have finished accessing your account."
const eight = "Printribe employs cookies. Cookies are alphanumeric identifiers that we transfer to your computer’s hard drive through your web browser to enable our systems to recognize your browser. Most internet browsers are initially set to accept cookies. You can set your browser to refuse cookies from web sites or to remove cookies from your hard drive, but if you do, you will not be able to access or use portions of Printribe service. We have to use cookies to enable you to select products, place them in an online shopping cart, and to purchase those products. If you do this, we keep a record of your browsing activity and purchase."
const nine = "If Printribe, or substantially all of its assets were acquired, or in the event that Printribe goes out of business or enters bankruptcy, your personal information would be one of the assets that is transferred or acquired by a third party. You acknowledge that such transfers may occur, and that any acquirer of Printribe and/or the site may continue to use your personal information as set forth in this policy."
const ten = "Although most changes are likely to be minor, Printribe may change its Privacy Policy from time to time, and in Printribe’s sole discretion. Printribe encourages you to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change."


function body(){
    return(<div className={styles.bodycontainer}>
        <Para data={one}/><br/>
        <Para data={two}/><br/>
        <Para data={three}/><br/>
        <Para data={four}/><br/>
        <Topic title={"DISCLOSURE OF INFORMATION"} className='mt-5'/>
        <Para data={five}/><br/>
        <Para data={six}/><br/>
        <Topic title={"SECURITY"} className='mt-2'/>
        <Para data={seven}/><br/>
        <Topic title={"COOKIES"}/>
        <Para data={eight}/><br/>
        <Topic title={"BUSINESS TRANSITIONS"}/>
        <Para data={nine}/><br/>
        <Topic title={"PRIVACY POLICY CHANGES"}/>
        <Para data={ten}/><br/>
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