import styled from 'styled-components'

export const LoginWrapper = styled.div`
    position: absolute;
    top:56px;
    right:0;
    bottom:0;
    left:0;
    background:#eee;

`;

export const LoginBox = styled.div`
    width: 400px;
    height:300px;
    margin: 100px auto;
    background:#fff;
    border-radius:3px;
    box-shadow: 0 0 8px #999;
    padding-top:20px;
`

export const LoginTitle = styled.div`
    color:#ea6f5a;
    font-weight:bold;
    text-align:center;
    margin-bottom:20px;
    font-size:24px;
`

export const LoginItem = styled.input`
    display:block;
    width: 240px;
    height:40px;
    margin:20px auto;
    outline:none;
    border-radius:3px;
    padding:0 10px;
    border:1px solid #c8c8c8;
    box-sizing:border-box;
    background:#eee;
    &::placeholder{
        color: #aaa;
    }
`;


export const LoginButton = styled.div`
    width:240px;
    height:40px;
    margin:40px auto;
    background: #3194d0;
    border-radius: 20px;
    line-height:40px;
    color:#fff;
    text-align:center;
    font-weight:bold;
    cursor:pointer;
`