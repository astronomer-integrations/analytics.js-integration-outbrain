![alt text](img/logo.png "Analytics.js Integration for OutBrain")

#Analytics.js Integration for [OutBrain](http://www.outbrain.com/), by [Astronomer.io](http://www.astronomer.io/).
[Information on setting up OutBrain Tracking Pixel](http://help.outbrain.com/customer/en/portal/articles/2371408-how-can-i-install-outbrain-s-conversion-pixel)
##Configuration
OutBrain Pixel Tracking is easily setup on within your OutBrain account.  Once your account is setup, simply provide the following parameters to your [Astronomer dashboard](https://app.astronomer.io/):

###Parameters from your tracking pixel: OutBrain Adv Id(`OB_ADV_ID`)
This parameter can be extracted from the `<img>` tag (tracking pixel) created by OutBrain. 
```html
<img src="http://traffic.outbrain.com/network/trackpxl?advid={{ OB_ADV_ID }}&action=view" height="1" width="1" border="0" alt="" />
```

Last, you'll need to provide a tracking event id and map it to a key value. This will be used in your track calls to trigger the OutBrain tracking pixel.

###Toggle the OutBrain integration on.  You should see events being tracked in your OutBrain dashboard soon after they are triggered!

##License

Released under the [MIT license](License.md).
