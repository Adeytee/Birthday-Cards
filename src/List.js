import React from 'react'
import styled from 'styled-components';
const CardContainer = styled.div`
display: inline-block;
width: 441px;
height: 500px;
margin: 1em;
padding: 1em;
background: #ef9c21;
border: 5px solid rgb(215, 104, 141);
`

const List = ({people})=> {
  return (      
    <fragment>
        {people.map((person)=>{
            const {id, age, image, firstName, maidenName,lastName, username, phone, email, birthDate, domain, password}=person;
             return (
              <CardContainer>
                        <div>
                            <article key={id} className="list"> 
                            <img src ={image} alt = {username} className="img"/>  
                                        <h1><span>FirstName</span>: {firstName}</h1>
                                        <h1><span>MiddleName</span>: {maidenName}</h1>
                                        <h1><span>LastName</span>: {lastName}</h1>
                                        <h1><span>Username</span>: {username}</h1>
                                        <h1><span>Password</span>: {password}</h1>
                                        <h1>Age: {age}   BirthDate: {birthDate}</h1>
                                        <h1>{phone}  {email}</h1>
                                        <h1><span>Domain</span>: {domain}</h1>
                            </article>
                        </div>
                     </CardContainer>
             );
        })}
    </fragment>
  );
}

export default List