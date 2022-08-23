
function UserCard(props){
   if(Object.keys(props.userData).length <1 ){
      return <h2> For user detail enter your user Name</h2>
   }
   // console.log(props.userData.name); for debug

   return(
    <div id="user-info">
      <h2>{props.userData.name}</h2>
     <img src={props.userData.avatar_url} alt="img" id="pic"/> 
     <h2>{props.userData.followers}</h2>
     <h2>{props.userData.public_repos}</h2>

    </div>
   );
}
export default UserCard;