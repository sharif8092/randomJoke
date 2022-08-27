
function UserCard(props){
   if(Object.keys(props.userData).length <1 ){
      return <h2> For user detail enter your user Name</h2>
   }
   // console.log(props.userData.name); for debug

   //obeject DEstructuring
   let {name,avatar_url, followers, public_repos} = props.userData; //this is for take-out userData from props now you dont have to write props;
   
   
   
   return(
    <div id="user-info">
      <h2>{name}</h2>
     <img src={avatar_url} alt="img" id="pic"/> 
     <h2>{followers}</h2>
     <h2>{public_repos}</h2>

    </div>
   );
}
export default UserCard;