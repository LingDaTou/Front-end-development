import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    padding: 30px;
    overflow: hidden;
`;

export const HomeLeft = styled.div`
    float: left;
    width: 625px;
    .banner-img{
        width: 625px;
    }
`;

export const HomeRight = styled.div`
    float : right;
    width: 280px;
`;

export const TopicWrapper = styled.div`
    width:625px;
    overflow:hidden;
    margin-top:10px;
    border-bottom:1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    overflow:hidden;
    width: 100px;
    background: #eee;
    float:left;
    margin-right:20px;
    border-radius:3px;
    margin-bottom:10px;
    .topic-img{
        width:32px;
        height:32px;
        float:left;
    }
`;

export const TopicInfo = styled.div`
    line-height:32px;
    float: right;
    margin-right:5px;
    font-size:14px;
`;

export const ListWrapper = styled.div`
    margin-top:30px;
    width: 625px;
    overflow: hidden;
    box-sizing:border-box;
`;

export const ListItem = styled.div`
    overflow:hidden;
    margin-bottom:30px;
    border-bottom:1px solid #dcdcdc;
    padding-bottom:10px;
    color:#000;
    .list-img{
        float: right;
        width:150px;
        height:100px;
        border-radius:3px;
    }
`;

export const ListInfo =styled.div`
    margin-top: 10px;
    width:465px;
    float: left;
    .list-title{
        line-height: 28px;
    }
    .list-desc{
        color: #666;
        font-size:13px;
        line-height:20px;
    }
`

export const RecommendWrapper = styled.div`
    overflow:hidden;
    width: 280px;
`;

export const RecommendItem = styled.div`
    width: 220px;
    height:40px;
    background:url(${(props)=>props.imgUrl});
    background-size: cover;
    margin-top:5px;
    border-radius:5px;
`;

export const WriterWrapper = styled.div`
    margin-top:30px;
    width:220px;  
`;

export const WriterItem = styled.div`
    overflow:hidden;
    margin-bottom:10px; 
    .writer-img{
        float:left;
        width:48px;
        height:48px;
        margin-right:5px;
    }
`;

export const WriterInfo = styled.div`
    float:left;
    font-size:14px;
    position:relative;
    width:160px;
    .writer-title{
        line-height:30px;
        display: flex;
        justify-content:space-between;
        .writer-focus{
            color:green;
        }
    }
    .writer-desc{
        color:#ccc;
        font-size:12px;
        line-height:20px;
    }
`; 

export const LoadMoreList = styled.div`
    width: 100%;
    background: #999;
    border-radius:15px;
    margin:30 0;
    height:30px;
    line-height: 30px;
    text-align: center;
    color:#fff;
`;

export const BackTop = styled.div`
    position: fixed;
    right:100px;
    bottom: 20px;
    background: #666;
    width:100px;
    height:30px;
    line-height:30px;
    text-align: center;
    border:1px solid #ccc;
    color:#ccc;
    border-radius:10px;
    font-size:14px;
`
