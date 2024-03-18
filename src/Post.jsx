import React from 'react'

const Post = ({article}) => {

    const a = article
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={a.urlToImage ?? 'https//placeholder.com/150'} ClassName="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 ClassName="card-title" style={{display:'flex',justifyContent:'center'}}>{ a.title }</h5>
                    <p ClassName="card-text">{ a.description}</p>
                    <a href={ a.url} target='blank' className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )
}

export default Post