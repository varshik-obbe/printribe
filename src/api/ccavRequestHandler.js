
var ccav = require('./ccavutil.js'),
    crypto = require('crypto'),
    qs = require('querystring');

export const pay = (request)=>{
    var body = '',
	workingKey = 'D5093E020022C36B496B082F42B51DD6',		//Put in the 32-Bit key shared by CCAvenues.
	accessCode = 'AVYJ01KH46BS11JYSB',		//Put in the access code shared by CCAvenues.
	encRequest = '',
	formbody = '';

    //Generate Md5 hash for the key and then convert in base64 string
    var md5 = crypto.createHash('md5').update(workingKey).digest();
    var keyBase64 = Buffer.from(md5).toString('base64');

    //Initializing Vector and then convert in base64 string
    var ivBase64 = Buffer.from([0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d,0x0e, 0x0f]).toString('base64');


	body += request;
	encRequest = ccav.encrypt(body, keyBase64, ivBase64);
    console.log(encRequest,"encrytpssss",body, keyBase64, ivBase64) 
	const POST =  qs.parse(body);
	formbody = '<html><head><title>Sub-merchant checkout page</title><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script></head><body><center><!-- width required mininmum 482px --><iframe  width="482" height="500" scrolling="No" frameborder="0"  id="paymentFrame" src="https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction&merchant_id='+POST.merchant_id+'&encRequest='+encRequest+'&access_code='+accessCode+'"></iframe></center><script type="text/javascript">$(document).ready(function(){$("iframe#paymentFrame").load(function() {window.addEventListener("message", function(e) {$("#paymentFrame").css("height",e.data["newHeight"]+"px"); }, false);}); });</script></body></html>';
   return formbody
};
