// import React from "react";

// class Sort extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         let checkState = []
//         if(this.props.sort == false) {
//             checkState.push(
//                 <button className="btn btn-outline-primary" onClick={this.props.changeSortState}>Sort</button>,
//             )
//         }else{
//             checkState.push(
//                 <button className="btn btn-outline-primary mx-3" >Serial number</button>,
//                 <button className="btn btn-outline-primary mx-3" >According to the text</button>,
//                 <button className="btn btn-outline-primary mx-3" >Timing</button>
//             )
//         }   
//         return(
//             <div className=' w-100 mx-auto d d-flex justify-content-around'>
//                 {checkState}
//             </div>
//         )         
//     }     
// }

// export default Sort