function Profile(props) {
   return (
      <div>
         <h1>Profile</h1>
         <p>Name: {props.name}</p>
         <p>Age: {props.age}</p>
         <p>Address: {props.address}</p>
      </div>
   );
}

export default Profile;