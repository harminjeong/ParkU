import React from "react";
import './Jumbotron.css';
import { Link } from "react-router-dom";

const Jumbo = () =>

<div className = "container">
  {/* <img className = "bg" alt = "" src = {require('/Users/harminjeong/Desktop/ParkU/parku/src/img/g37.jpg')}></img> */}
<div className = "jumbotron">
   <h1>Welcome to ParkU!</h1>
   <p>Find or post an available parking space.</p>
    
    <form>
    <div class="form-group">
      <input type="text" placeholder="Search.."></input>

    </div>
      <p>
          <Link className="btn btn-primary btn-lg" role="button" to="/find">Find</Link>
      </p>

    <div class="form-group">
      <h3>Already have a parking space? Post it here!</h3>
    </div>
      <p>
        <Link className="btn btn-primary btn-lg" to="/post">Post a parking spot.</Link>
      </p>
    </form>
</div>

</div>

// className Jumbo extends Component {
//   render() {
//     function myFunction() {
//       console.log('test');
//     }

//     return (
//       <Jumbotron style={styles.container}>
//         <h1>{this.props.title}</h1>
//         <p>Test</p>
//         <Button
//           bsStyle="primary"
//           onClick={myFunction}
//         >
//           Learn more
//         </Button>
//         <Button
//           bsStyle="primary"
//         >
//           <Link to='/contact'>Contact</Link>
//         </Button>
//       </Jumbotron>
//     );
//   }
// }

// const bgImage = '../img/g37.jpg';

// const styles = {
//     container: {
//     backgroundImage: `url(${bgImage})`
//   }
// };
export default Jumbo;
