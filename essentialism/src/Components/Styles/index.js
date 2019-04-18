import styled from 'styled-components'

export const Nav = styled.div`
border: 1px solid red;
padding: 4px;
display: flex;
flex-wrap: wrap;
p {
    color: blue;
    padding: 5px;
}
`;

export let navLink = styled.a`
color: red;
padding: 5px;
`;

export const DashBoardComp = styled.div`
border: 1px solid blue;
padding: 4px;
`;

export const Button = styled.button`
border: 1px solid green;
padding: 4px;
`;

export const Form = styled.form`
width: 300px;
border: 1px solid grey;
padding: 4px;
h3 { 
 color:blue;
}
`;

export const FormGroup = styled.div`
border: 1px solid purple;
padding: 4px;
`;

export const Input = styled.input`
border: 1px solid orange;
padding: 4px;
`;