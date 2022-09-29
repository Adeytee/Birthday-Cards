import React from 'react'
import styled from 'styled-components'

const List = ({people})=> {
    const CardContainer = styled.div`
    display: inline-block
`
    const CardBox = styled.div`
        width: 200px;
        height: 280px;
        border: 5px solid palevioletred;
        margin: 1em;
        padding: 1em;
        background: #ef9c21;
        font-size: 0.6em;
    `
    
  return (      
    <fragment>
        {people.map((person)=>{
            const {id, age, image, firstName, maidenName,lastName, username, phone, email, birthDate, domain, password}=person;
             return (
                    <CardContainer>
                         <CardBox>
                            <article key={id} className="list"> 
                            <img src ={image} alt = {username} className="img"/>  
                                <div>
                                    <h1><span>FirstName</span>: {firstName}</h1>
                                    <h1><span>MiddleName</span>: {maidenName}</h1>
                                    <h1><span>LastName</span>: {lastName}</h1>
                                    <h1><span>Username</span>: {username}</h1>
                                    <h1><span>Password</span>: {password}</h1>
                                    <h1>Age: {age}   BirthDate: {birthDate}</h1>
                                    <h1>{phone}  {email}</h1>
                                    <h1><span>Domain</span>: {domain}</h1>
                                </div>
                            </article>
                        </CardBox>
                     </CardContainer>
             );
        })}
    </fragment>
  );
}

export default List