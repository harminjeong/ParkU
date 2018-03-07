// var React = require('react');
// var Router = require('react-router');

// var SearchParking = React.createClass({
//   mixins: [Router.History],
//   getRef: function(ref){
//     this.usernameRef = ref;
//   },
//   handleSubmit: function(){
//     var username = this.usernameRef.value;
//     this.usernameRef.value = '';
//     this.history.pushState(null, "//profile/" + username)
//   },
//   render: function(){
//     return (
//       <div className="col-sm-12">
//         <form onSubmit={this.handleSubmit}>
//           <div className="form-group col-sm-7">
//             <input type="text" className="form-control" ref={this.getRef} />
//             <input type="text" className="form-control" ref={this.getRef} />
//             <input type="text" className="form-control" ref={this.getRef} />
//             <input type="text" className="form-control" ref={this.getRef} />
//           </div>
//           <div className="form-group col-sm-5">
//             <button type="submit" className="btn btn-block btn-primary">Search Github</button>
//           </div>
//         </form>
//       </div>
//     )
//   }
// });

// module.exports = SearchParking;
import React from "react";

import { Link } from "react-router-dom";

const Find = () =>

<div class="container">
<iframe id="pw-widget" src="//parkwhiz.com/developers/widget/?modules%5B%5D=map&modules%5B%5D=event_list&modules%5B%5D=time_picker&modules%5B%5D=parking_locations&location%5Bdestination%5D%5B%5D=&location%5Bevent%5D%5B%5D=http%3A%2F%2Fapi.parkwhiz.com%2Fparking%2Freservation%2F&location%5Bvenue%5D%5B%5D=&monthly=0&hideLocationMarker=0&hidePrice=0&parkwhizKey=95034fc2c4d87362521af11d983d6d620f7d6f37&mapHeight=200" scrolling="no" frameborder="0" style="border:none;overflow:hidden;height:609px;width:400px;" height="609px" width="400px" allowTransparency="true"></iframe>

<a href="http://www.parkwhiz.com/" target="_blank" style="font-size:12px; text-align: center; display: inline-block; width:400px;" title="ParkWhiz Parking">Parking powered by ParkWhiz</a>
</div>
export default Find;
